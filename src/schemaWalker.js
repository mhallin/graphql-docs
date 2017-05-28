// @flow

import { Type, Schema, ObjectType, InterfaceType, UnionType, InputObjectType, Field, TypeRef, NonNullTypeRef, NamedTypeRef, ListTypeRef } from './model';
import type { TypeId } from './model';


type Bag = {[tid: TypeId]: number};


export function getReferencesInSchema(schema: Schema): [TypeId] {
    const visitQueue: Array<TypeId> = [];
    const visited: Array<TypeId> = [];

    visitQueue.push(schema.getQueryType().name);

    const mutationType = schema.getMutationType();
    if (mutationType) {
        visitQueue.push(mutationType.name);
    }

    while (visitQueue.length) {
        const typeId = visitQueue.shift();
        if (visited.indexOf(typeId) !== -1) {
            continue;
        }

        const type = schema.types[typeId];

        assert: type, `Type ${typeId} not found in schema`;

        const newRefs = getReferencesInType(type);

        visited.push(typeId);

        [].push.apply(visitQueue, Object.keys(newRefs));
    }

    return visited;
}

function getReferencesInType(type: Type): Bag {
    const refs = {};
    addTypeToBag(type, refs);

    if (type instanceof ObjectType) {
        type.fields.forEach(f => getReferencesInField(f, refs));
        type.interfaces.forEach(r => addTypeRefToBag(r, refs));
    }

    if (type instanceof InterfaceType) {
        type.fields.forEach(f => getReferencesInField(f, refs));
        type.possibleTypes.forEach(r => addTypeRefToBag(r, refs));
    }

    if (type instanceof UnionType) {
        type.possibleTypes.forEach(r => addTypeRefToBag(r, refs));
    }

    if (type instanceof InputObjectType) {
        type.inputFields.forEach(iv => addTypeRefToBag(iv.type, refs));
    }

    return refs;
}

function getReferencesInField(field: Field, refs: Bag) {
    addTypeRefToBag(field.type, refs);

    field.args.forEach(arg => addTypeRefToBag(arg.type, refs));
}

function addTypeRefToBag(typeRef: TypeRef, refs: Bag) {
    if (typeRef instanceof NonNullTypeRef) {
        addTypeRefToBag(typeRef.ofType, refs);
    } else if (typeRef instanceof ListTypeRef) {
        addTypeRefToBag(typeRef.ofType, refs);
    } else if (typeRef instanceof NamedTypeRef) {
        refs[typeRef.typeName] = (refs[typeRef.typeName] || 0) + 1;
    } else {
        throw new Error(`Unknown type ref: ${typeRef.toString()}`);
    }
}

function addTypeToBag(type: Type, refs: Bag) {
    refs[type.name] = (refs[type.name] || 0) + 1;
}

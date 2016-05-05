// @flow

export const TYPE_KINDS = [
    'SCALAR',
    'INTERFACE',
    'OBJECT',
    'ENUM',
];

export type TypeId = string;

export class Schema {
    types: {[TypeId: string]: Type};
    queryTypeId: TypeId;
    mutationTypeId: ?TypeId;

    constructor(introspectionResult: any) {
        pre: {
            introspectionResult.__schema;
            Array.isArray(introspectionResult.__schema.types);
            introspectionResult.__schema.queryType;
            introspectionResult.__schema.mutationType === null || typeof introspectionResult.__schema.mutationType.name === 'string';
        }

        this.types = {};
        introspectionResult.__schema.types.forEach(t => {
            pre: typeof t.name === 'string';

            this.types[t.name] = Type.fromIntrospectionType(t);
        });

        this.queryTypeId = introspectionResult.__schema.queryType.name;
        this.mutationTypeId = introspectionResult.__schema.mutationType.name;
    }

    getQueryType(): ObjectType {
        const queryType = this.types[this.queryTypeId];

        if (queryType instanceof ObjectType) {
            return queryType;
        } else {
            throw new Error('Query type must be an ObjectType');
        }
    }

    getMutationType(): ?ObjectType {
        if (!this.mutationTypeId) {
            return null;
        }

        const mutationType = this.types[this.mutationTypeId];

        if (mutationType instanceof ObjectType) {
            return mutationType;
        } else {
            throw new Error('Mutation type must be an ObjectType');
        }
    }
}

export class Type {
    name: TypeId;
    description: ?string;

    static fromIntrospectionType(introspectionType: any) {
        if (introspectionType.kind === 'OBJECT') {
            return new ObjectType(introspectionType);
        } else if (introspectionType.kind === 'SCALAR') {
            return new ScalarType(introspectionType);
        } else if (introspectionType.kind === 'INTERFACE') {
            return new InterfaceType(introspectionType);
        } else if (introspectionType.kind === 'ENUM') {
            return new EnumType(introspectionType);
        } else {
            throw new Error('Unsupported type kind: ' + introspectionType.kind);
        }
    }

    constructor(introspectionType: any) {
        pre: {
            this.constructor !== Type;
            typeof introspectionType.name === 'string';
            introspectionType.description === null || typeof introspectionType.description === 'string';
        }

        this.name = introspectionType.name;
        this.description = introspectionType.description;
    }
}

export class ObjectType extends Type {
    fields: Array<Field>;
    interfaces: Array<TypeRef>;

    constructor(introspectionType: any) {
        pre: {
            introspectionType.kind === 'OBJECT';
            Array.isArray(introspectionType.fields);
            introspectionType.interfaces === null || Array.isArray(introspectionType.interfaces);
        }

        super(introspectionType);

        this.fields = introspectionType.fields.map(f => new Field(f));

        if (introspectionType.interfaces) {
            this.interfaces = introspectionType.interfaces.map(r => TypeRef.fromIntrospectionRef(r));
        } else {
            this.interfaces = [];
        }
    }
}

export class ScalarType extends Type {
    constructor(introspectionType: any) {
        pre: {
            introspectionType.kind === 'SCALAR';
        }

        super(introspectionType);
    }
}

export class InterfaceType extends Type {
    fields: Array<Field>;
    possibleTypes: Array<TypeRef>;

    constructor(introspectionType: any) {
        pre: {
            introspectionType.kind === 'INTERFACE';
            Array.isArray(introspectionType.fields);
            Array.isArray(introspectionType.possibleTypes);
        }

        super(introspectionType);

        this.fields = introspectionType.fields.map(f => new Field(f));
        this.possibleTypes = introspectionType.possibleTypes.map(r => TypeRef.fromIntrospectionRef(r));
    }
}

export class EnumType extends Type {
    enumValues: Array<EnumValue>;

    constructor(introspectionType: any) {
        pre: {
            introspectionType.kind === 'ENUM';
            Array.isArray(introspectionType.enumValues);
        }

        super(introspectionType);

        this.enumValues = introspectionType.enumValues.map(v => new EnumValue(v));
    }
}

export class Field {
    name: string;
    description: ?string;
    args: Array<InputValue>;
    type: TypeRef;

    constructor(introspectionField: any) {
        pre: {
            typeof introspectionField.name === 'string';
            introspectionField.description === null || typeof introspectionField.description === 'string';
            introspectionField.type;
            Array.isArray(introspectionField.args);
        }

        this.name = introspectionField.name;
        this.description = introspectionField.description;
        this.args = introspectionField.args.map(a => new InputValue(a));
        this.type = TypeRef.fromIntrospectionRef(introspectionField.type);
    }
}

export class InputValue {
    name: string;
    description: ?string;
    type: TypeRef;
    defaultValue: any;

    constructor(introspectionValue: any) {
        pre: {
            typeof introspectionValue.name === 'string';
            introspectionValue.description === null || typeof introspectionValue.description === 'string';
            introspectionValue.type;
            introspectionValue.defaultValue !== undefined;
        }

        this.name = introspectionValue.name;
        this.type = TypeRef.fromIntrospectionRef(introspectionValue.type);
        this.description = introspectionValue.description;
        this.defaultValue = introspectionValue.defaultValue;
    }
}

export class TypeRef {
    constructor() {
        pre: {
            this.constructor !== TypeRef;
        }
    }

    static fromIntrospectionRef(introspectionRef: any): TypeRef {
        if (introspectionRef.kind === 'NON_NULL') {
            return new NonNullTypeRef(introspectionRef);
        } else if (introspectionRef.kind === 'LIST') {
            return new ListTypeRef(introspectionRef);
        } else if (TYPE_KINDS.indexOf(introspectionRef.kind) !== -1) {
            return new NamedTypeRef(introspectionRef);
        } else {
            throw new Error(`Unsupported type ref kind: ${introspectionRef.kind}`);
        }
    }
}

export class NonNullTypeRef extends TypeRef {
    ofType: TypeRef;

    constructor(introspectionRef: any) {
        pre: {
            introspectionRef.ofType;
        }

        super();

        this.ofType = TypeRef.fromIntrospectionRef(introspectionRef.ofType);
    }
}

export class NamedTypeRef extends TypeRef {
    typeName: TypeId;

    constructor(introspectionRef: any) {
        pre: {
            typeof introspectionRef.name === 'string';
        }

        super();

        this.typeName = introspectionRef.name;
    }
}

export class ListTypeRef extends TypeRef {
    ofType: TypeRef;

    constructor(introspectionRef: any) {
        pre: {
            introspectionRef.ofType;
        }

        super();

        this.ofType = TypeRef.fromIntrospectionRef(introspectionRef.ofType);
    }
}

export class EnumValue {
    name: string;
    description: ?string;
    isDeprecated: bool;
    deprecationReason: ?string;

    constructor(introspectionValue: any) {
        pre: {
            typeof introspectionValue.name === 'string';
            introspectionValue.description === null || typeof introspectionValue.description === 'string';
            typeof introspectionValue.isDeprecated === 'boolean';
            !introspectionValue.isDeprecated || typeof introspectionValue.deprecationReason === 'string';
            introspectionValue.isDeprecated || introspectionValue.deprecationReason === null;
        }

        this.name = introspectionValue.name;
        this.description = introspectionValue.description;
        this.isDeprecated = introspectionValue.isDeprecated;
        this.deprecationReason = introspectionValue.deprecationReason;
    }
}

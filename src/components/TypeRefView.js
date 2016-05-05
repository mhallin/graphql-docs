// @flow

import React from 'react';

import { TypeRef, NamedTypeRef, NonNullTypeRef, ListTypeRef } from '../model';

import * as StyleSheet from './TypeRefView.css';

export class TypeRefView extends React.Component {
    props: {
        typeRef: TypeRef,
    };

    render() {
        const ref = this.props.typeRef;

        if (ref instanceof NamedTypeRef) {
            return (
                <a
                    className={StyleSheet.typeRef}
                    href={`#${ref.typeName}`}
                >
                    {ref.typeName}
                </a>
            );
        } else if (ref instanceof NonNullTypeRef) {
            return (
                <span>
                    <TypeRefView typeRef={ref.ofType} />
                    !
                </span>
            );
        } else if (ref instanceof ListTypeRef) {
            return (
                <span>
                    [
                    <TypeRefView typeRef={ref.ofType} />
                    ]
                </span>
            );
        }

        throw new Error(`Unknown type ref: ${ref}`);
    }
}

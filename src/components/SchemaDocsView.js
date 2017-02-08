// @flow

import React from 'react';

import { Schema, Type, ObjectType, InterfaceType, UnionType, EnumType, ScalarType, InputObjectType } from '../model';
import { getReferencesInSchema } from '../schemaWalker';

import { ObjectDocsView, InterfaceDocsView, UnionDocsView, EnumDocsView, ScalarDocsView, InputObjectDocsView } from './TypeDocsViews';

import * as StyleSheet from  './SchemaDocsView.css';

export class SchemaDocsView extends React.Component {
    props: {
        schema: Schema,
    };

    render() {
        const types = getReferencesInSchema(this.props.schema).map(tn => this.props.schema.types[tn]);
        const components = [];

        types.forEach((t: Type) => {
            if (t instanceof ObjectType) {
                components.push(
                    <ObjectDocsView
                        key={t.name}
                        type={t}
                        titleOverride={this.titleOverrideFor(t)}
                    />);
            }
            if (t instanceof UnionType) {
                components.push(
                    <UnionDocsView
                        key={t.name}
                        type={t}
                    />);
            }
            if (t instanceof InterfaceType) {
                components.push(
                    <InterfaceDocsView
                        key={t.name}
                        type={t}
                    />);
            }
            if (t instanceof EnumType) {
                components.push(
                    <EnumDocsView
                        key={t.name}
                        type={t}
                    />);
            }
            if (t instanceof InputObjectType) {
                components.push(
                    <InputObjectDocsView
                        key={t.name}
                        type={t}
                    />);
            }
        });
        types.forEach((t: Type) => {
            if (t instanceof ScalarType) {
                components.push(
                    <ScalarDocsView
                        key={t.name}
                        type={t}
                    />);
            }
        });

        return (
            <div className={StyleSheet.wrapper}>
                <div className={StyleSheet.container}>
                    {components}
                </div>
            </div>
        );
    }

    titleOverrideFor(t: Type): ?string {
        if (t === this.props.schema.getQueryType()) {
            return 'Root query';
        }
        if (t === this.props.schema.getMutationType()) {
            return 'Mutations';
        }

        return null;
    }
}

// @flow

import React from 'react';

import { Schema, Type, ObjectType, InterfaceType, UnionType, EnumType, ScalarType, InputObjectType } from '../model';
import { getReferencesInSchema } from '../schemaWalker';

import { ObjectDocsView, InterfaceDocsView, UnionDocsView, EnumDocsView, ScalarDocsView, InputObjectDocsView } from './TypeDocsViews';
import SectionView from './SectionView';
import SideNavSectionView from './SideNavSectionView';

import * as StyleSheet from  './SchemaDocsView.css';

export class SchemaDocsView extends React.Component {
    props: {
        schema: Schema,
    };

    render() {
        const types = getReferencesInSchema(this.props.schema).map(tn => this.props.schema.types[tn]);
        const sections = {
            schema: {name: 'Schema', items: []},
            objects: {name: 'Objects', items: []},
            inputs: {name: 'Input Types', items: []},
            unions: {name: 'Unions', items: []},
            interfaces: {name: 'Interfaces', items: []},
            enums: {name: 'Enums', items: []},
            scalars: {name: 'Scalars', items: []},
        };

        types.forEach((t: Type) => {
            if (t instanceof ObjectType) {
                const component = (
                  <ObjectDocsView
                    key={t.name}
                    type={t}
                    titleOverride={this.titleOverrideFor(t)}
                  />);
                if (t === this.props.schema.getQueryType() ||
                  t === this.props.schema.getMutationType()) {
                    sections.schema.items.push({name: t.name, component: component});
                } else {
                    sections.objects.items.push({name: t.name, component: component});
                }
            }
            if (t instanceof UnionType) {
                sections.unions.items.push({name: t.name, component:
                    (<UnionDocsView
                        key={t.name}
                        type={t}
                    />)});
            }
            if (t instanceof InterfaceType) {
                sections.interfaces.items.push({name: t.name, component:
                    (<InterfaceDocsView
                        key={t.name}
                        type={t}
                    />)});
            }
            if (t instanceof EnumType) {
                sections.enums.items.push({name: t.name, component:
                    (<EnumDocsView
                        key={t.name}
                        type={t}
                    />)});
            }
            if (t instanceof InputObjectType) {
                sections.inputs.items.push({name: t.name, component:
                    (<InputObjectDocsView
                        key={t.name}
                        type={t}
                    />)});
            }
        });
        types.forEach((t: Type) => {
            if (t instanceof ScalarType) {
                sections.scalars.items.push({name: t.name, component:
                    (<ScalarDocsView
                        key={t.name}
                        type={t}
                    />)});
            }
        });

        Object.keys(sections).forEach((key) => {
            const section = sections[key];
            section.items.sort((itemA, itemB) => {
                if (itemA.name.toUpperCase() < itemB.name.toUpperCase()) {
                    return -1;
                }
                if (itemA.name.toUpperCase() > itemB.name.toUpperCase()) {
                    return 1;
                }
                return 0;
            });
        });

        return (
            <div className={StyleSheet.wrapper}>
                <div className={StyleSheet.sidenav}>
                    {Object.keys(sections).map( (key) => {
                        const section = sections[key];
                        return (section.items.length > 0) ? (
                            <SideNavSectionView name={section.name} items={section.items}/>
                        ) : '';
                    })}
                </div>
                <div className={StyleSheet.content}>
                    <div className={StyleSheet.container}>
                        {Object.keys(sections).map( (key) => {
                            const section = sections[key];
                            return (section.items.length > 0) ? (
                                <SectionView name={section.name} items={section.items}/>
                            ) : '';
                        })}
                    </div>
                </div>
            </div>
        );
    }

    titleOverrideFor(t: Type): ?string {
        if (t === this.props.schema.getQueryType()) {
            return 'Query';
        }
        if (t === this.props.schema.getMutationType()) {
            return 'Mutations';
        }

        return null;
    }
}

// @flow

import React from 'react';
import {Typeahead} from 'react-typeahead';

import { Schema, Type, ObjectType, InterfaceType, UnionType, EnumType, ScalarType, InputObjectType } from '../model';
import { getReferencesInSchema } from '../schemaWalker';

import { ObjectDocsView, InterfaceDocsView, UnionDocsView, EnumDocsView, ScalarDocsView, InputObjectDocsView } from './TypeDocsViews';
import SectionView from './SectionView';
import SideNavSectionView from './SideNavSectionView';

import * as StyleSheet from  './SchemaDocsView.css';

export class SchemaDocsView extends React.Component {
    constructor(props: any) {
        super(props);
        (this: any).handleSelect = this.handleSelect.bind(this);
    }

    props: {
        schema: Schema
    };

    handleSelect(name: string) {
        location.hash = `#${name}`;
    }

    render() {
        const types = getReferencesInSchema(this.props.schema).map(tn => this.props.schema.types[tn]);
        const sections = {
            schema: {name: 'Schema', items: []},
            objects: {name: 'Object Types', items: []},
            inputs: {name: 'Input Types', items: []},
            unions: {name: 'Unions', items: []},
            interfaces: {name: 'Interfaces', items: []},
            enums: {name: 'Enums', items: []},
            scalars: {name: 'Scalars', items: []},
        };
        const options = [];

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
                    options.push(t.name);
                } else {
                    sections.objects.items.push({name: t.name, component: component});
                    options.push(t.name);
                }
            }
            if (t instanceof UnionType) {
                options.push(t.name);
                sections.unions.items.push({name: t.name, component:
                    (<UnionDocsView
                        key={t.name}
                        type={t}
                    />)});
            }
            if (t instanceof InterfaceType) {
                options.push(t.name);
                sections.interfaces.items.push({name: t.name, component:
                    (<InterfaceDocsView
                        key={t.name}
                        type={t}
                    />)});
            }
            if (t instanceof EnumType) {
                options.push(t.name);
                sections.enums.items.push({name: t.name, component:
                    (<EnumDocsView
                        key={t.name}
                        type={t}
                    />)});
            }
            if (t instanceof InputObjectType) {
                options.push(t.name);
                sections.inputs.items.push({name: t.name, component:
                    (<InputObjectDocsView
                        key={t.name}
                        type={t}
                    />)});
            }
            if (t instanceof ScalarType) {
                options.push(t.name);
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

        const customClasses = {
            input: StyleSheet.selectInput,
            results: StyleSheet.selectList,
            listItem: StyleSheet.selectItem,
            hover: StyleSheet.selectHover,
        };

        return (
            <div className={StyleSheet.wrapper}>
                <div className={StyleSheet.sidenav}>
                    <Typeahead
                        options={options}
                        maxVisible={6}
                        placeholder="Search types"
                        customClasses={customClasses}
                        onOptionSelected={this.handleSelect}
                    />
                    <br />
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

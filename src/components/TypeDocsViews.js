// @flow

import React from 'react';

import { ObjectType, InterfaceType, UnionType, EnumType, ScalarType, InputObjectType, Field, TypeRef, EnumValue } from '../model';

import { DescriptionView } from './DescriptionView';
import { FieldView } from './FieldView';
import { TypeRefView } from './TypeRefView';
import { FieldArgumentsTableView } from './FieldArgumentsTableView';

import * as StyleSheet from './TypeDocsViews.css';

export class ObjectDocsView extends React.Component {
    props: {
        type: ObjectType,
        titleOverride: ?string,
    };

    static defaultProps = {
        titleOverride: (null: ?string),
    };

    render() {
        const type = this.props.type;
        return (
            <div className={StyleSheet.type}>
                {renderTitle(type.name, this.props.titleOverride)}
                {renderDescription(type.description)}
                {renderInterfaces(type.interfaces)}
                {renderFields(type.fields)}
            </div>
        );
    }
}

export class UnionDocsView extends React.Component {
    props: {
        type: UnionType,
    };

    render() {
        const type = this.props.type;
        return (
            <div className={StyleSheet.type}>
                {renderTitle(type.name)}
                {renderDescription(type.description)}
                {renderPossibleTypes(type.possibleTypes)}
            </div>
        );
    }
}

export class InterfaceDocsView extends React.Component {
    props: {
        type: InterfaceType,
    };

    render() {
        const type = this.props.type;
        return (
            <div className={StyleSheet.type}>
                {renderTitle(type.name)}
                {renderDescription(type.description)}
                {renderImplementors(type.possibleTypes)}
                {renderFields(type.fields)}
            </div>
        );
    }
}

export class EnumDocsView extends React.Component {
    props: {
        type: EnumType,
    };

    render() {
        const type = this.props.type;
        return (
            <div className={StyleSheet.type}>
                {renderTitle(type.name)}
                {renderDescription(type.description)}
                {renderEnumValues(type.enumValues)}
            </div>
        );
    }
}

export class ScalarDocsView extends React.Component {
    props: {
        type: ScalarType,
    };

    render() {
        const type = this.props.type;
        return (
            <div className={StyleSheet.type}>
                {renderTitle(type.name)}
                {renderDescription(type.description)}
            </div>
        );
    }
}

export class InputObjectDocsView extends React.Component {
    props: {
        type: InputObjectType,
    };

    render() {
        const type = this.props.type;

        return (
            <div className={StyleSheet.type}>
                {renderTitle(type.name)}
                {renderDescription(type.description)}
                <FieldArgumentsTableView
                    args={type.inputFields}
                />
            </div>
        );
    }
}

function renderTitle(typeName: string, titleOverride: ?string = null) {
    return (
        <h2 className={StyleSheet.heading}>
            <a name={typeName} />
            {titleOverride || typeName}
        </h2>
    );
}

function renderDescription(description: ?string) {
    if (!description) {
        return null;
    }

    return (
        <div>
            <DescriptionView description={description} />
        </div>
    );
}

function renderFields(fields: Array<Field>) {
    return (
        <div>
            <div className={StyleSheet.subHeading}>
                Fields
            </div>
            {fields.map(f =>
                <FieldView key={f.name} field={f} />)}
        </div>
    );
}

function renderInterfaces(interfaces: Array<TypeRef>) {
    if (!interfaces.length) {
        return null;
    }

    return (
        <div>
            <div className={StyleSheet.subHeading}>
                Implements
            </div>

            <ul className={StyleSheet.interfacesList}>
                {interfaces.map((r, i) =>
                    <li key={i}>
                        <TypeRefView key={i} typeRef={r} />
                    </li>)}
            </ul>
        </div>
    );
}

function renderPossibleTypes(possibleTypes: Array<TypeRef>) {
    if (!possibleTypes.length) {
        return null;
    }

    return (
        <div>
            <div className={StyleSheet.subHeading}>
                Possible Types
            </div>

            <ul className={StyleSheet.interfacesList}>
                {possibleTypes.map((r, i) =>
                    <li key={i}>
                        <TypeRefView key={i} typeRef={r} />
                    </li>)}
            </ul>
        </div>
    );
}

function renderImplementors(possibleTypes: Array<TypeRef>) {
    if (!possibleTypes.length) {
        return null;
    }

    return (
        <div>
            <div className={StyleSheet.subHeading}>
                Implemented by
            </div>

            <ul className={StyleSheet.interfacesList}>
                {possibleTypes.map((r, i) =>
                    <li key={i}>
                        <TypeRefView key={i} typeRef={r} />
                    </li>)}
            </ul>
        </div>
    );
}

function renderEnumValues(enumValues: Array<EnumValue>) {
    if (!enumValues.length) {
        return null;
    }

    return (
        <div>
            <div className={StyleSheet.subHeading}>
                Possible Enum Values
            </div>

            <table>
                <tbody>
                    {enumValues.map(v =>
                        <tr
                            key={v.name}
                            className={StyleSheet.enumRow}
                        >
                            <td
                                className={StyleSheet.enumName}
                            >
                                {v.name}
                            </td>
                            <td>
                                {v.description &&
                                    <DescriptionView description={v.description} />}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

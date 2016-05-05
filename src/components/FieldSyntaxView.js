// @flow

import React from 'react';

import { Field, InputValue } from '../model';

import { TypeRefView } from './TypeRefView';

import * as StyleSheet from './FieldSyntaxView.css';

export class FieldSyntaxView extends React.Component {
    props: {
        field: Field,
    };

    render() {
        const field = this.props.field;

        return (
            <div className={StyleSheet.container}>
                <span className={StyleSheet.name}>{field.name}</span>
                {this.renderFieldArgs(field.args)}
                {': '}
                <TypeRefView typeRef={field.type} />
            </div>
        );
    }

    renderFieldArgs(args: Array<InputValue>) {
        if (!args.length) {
            return null;
        }

        return (
            <span>
                (
                {args.map((arg, idx) => this.renderField(arg, idx))}
                )
            </span>
        );
    }

    renderField(arg: InputValue, index: number) {
        return (
            <span key={arg.name}>
                {(index > 0 ? <span>, </span> : null)}
                <span className={StyleSheet.argumentName}>{arg.name}</span>
                {': '}
                <TypeRefView typeRef={arg.type} />
                {this.renderDefaultValue(arg.defaultValue)}
            </span>
        );
    }

    renderDefaultValue(defaultValue: ?string) {
        if (!defaultValue) {
            return null;
        }

        return (
            <span className={StyleSheet.defaultValue}>
                {' = '}
                {defaultValue}
            </span>
        );
    }
}

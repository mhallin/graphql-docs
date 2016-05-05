// @flow

import React from 'react';

import { Field } from '../model';

import { DescriptionView } from './DescriptionView';
import { FieldSyntaxView } from './FieldSyntaxView';
import { FieldArgumentsTableView } from './FieldArgumentsTableView';

import * as StyleSheet from './FieldView.css';

export class FieldView extends React.Component {
    props: {
        field: Field,
    };

    render() {
        const field = this.props.field;

        return (
            <div
                key={field.name}
                className={StyleSheet.container}
            >
                <FieldSyntaxView field={field} />
                {this.renderDescription(field.description)}
                <FieldArgumentsTableView args={field.args} />
            </div>
        );
    }

    renderDescription(description: ?string) {
        if (!description) {
            return null;
        }

        return (
            <DescriptionView
                className={StyleSheet.description}
                description={description}
            />
        );
    }
}

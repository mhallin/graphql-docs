// @flow

import React from 'react';

import { InputValue } from '../model';

import { TypeRefView } from './TypeRefView';
import { DescriptionView } from './DescriptionView';

import * as StyleSheet from './FieldArgumentsTableView.css';

export class FieldArgumentsTableView extends React.Component {
    props: {
        args: Array<InputValue>,
    };

    render() {
        const withDescription = this.props.args.filter(a => a.description);

        if (!withDescription.length) {
            return null;
        }

        return (
            <table className={StyleSheet.table}>
                <thead>
                    <tr>
                        <th
                            colSpan="2"
                            className={StyleSheet.header}
                        >
                            Arguments
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {withDescription
                        .map(a => this.renderRow(a))}
                </tbody>
            </table>
        );
    }

    renderRow(arg: InputValue) {
        return (
            <tr key={arg.name} className={StyleSheet.row}>
                <td
                    className={StyleSheet.key}
                >
                    <span className={StyleSheet.argumentName}>{arg.name}</span>
                    {': '}
                    <TypeRefView typeRef={arg.type} />
                </td>
                <td
                    className={StyleSheet.value}
                >
                    {arg.description &&
                        <DescriptionView description={arg.description} />}
                </td>
            </tr>
        );
    }
}

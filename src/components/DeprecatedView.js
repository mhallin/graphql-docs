// @flow

import React from 'react';
import marked from 'marked';

import * as StyleSheet from './DeprecatedView.css';

export class DeprecatedView extends React.Component {
    props: {
        reason: string,
        className: string,
    };

    static defaultProps = {
        className: '',
    };

    render() {
        const html = marked(`[DEPRECATED] ${this.props.reason}`);

        return (
            <div
                className={[StyleSheet.container, this.props.className].join(' ')}
                dangerouslySetInnerHTML={{__html: html}}
            />
        );
    }
}

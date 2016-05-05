// @flow

import React from 'react';
import marked from 'marked';

import * as StyleSheet from './DescriptionView.css';

export class DescriptionView extends React.Component {
    props: {
        description: string,
        className: string,
    };

    static defaultProps = {
        className: '',
    };

    render() {
        const html = marked(this.props.description);

        return (
            <div
                className={[StyleSheet.container, this.props.className].join(' ')}
                dangerouslySetInnerHTML={{__html: html}}
            />
        );
    }
}

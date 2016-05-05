// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import { SchemaDocsView } from './components/SchemaDocsView';
import { Schema } from './model';

import introspectionQuery from './introspectionQuery.txt';

export type Fetcher = (query: string) => Promise<any>;

export class GraphQLDocs extends React.Component {
    props: {
        fetcher: Fetcher;
    };

    state: {
        schema: Schema;
    };

    componentWillMount() {
        const promise = this.props.fetcher(introspectionQuery);

        promise.then(json => {
            this.setState({
                schema: new Schema(json.data),
            });
        });
    }

    render() {
        if (this.state && this.state.schema) {
            return <SchemaDocsView schema={this.state.schema} />;
        } else {
            return <div />;
        }
    }
}

declare var EXPOSE: boolean;

if (typeof window.EXPOSE !== undefined && EXPOSE) {
    window.GraphQLDocs = GraphQLDocs;

    if (!window.React) {
        window.React = React;
    }

    if (!window.ReactDOM) {
        window.ReactDOM = ReactDOM;
    }
}

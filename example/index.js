import React from 'react';
import ReactDOM from 'react-dom';

import { GraphQLDocs } from 'graphql-docs';

import fetch from 'isomorphic-fetch';

function fetcher(query) {
    return fetch(window.location.origin + '/graphql', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
        }),
    }).then(function(r) {
        return r.json();
    });
}

const rootElem = document.getElementById('app');
ReactDOM.render(
    <GraphQLDocs fetcher={fetcher} />,
    rootElem
);

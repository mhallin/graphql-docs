const args = require('yargs')
    .usage('$0 <input> [output]')
    .demand(1, 2, 'You must provide at least an input filename or URL')
    .help('h')
    .alias('h', 'help')
    .strict()
    .argv;

import fs from 'fs';
import request from 'request';
import path from 'path';

const [input, output] = args._;

if (input === '-') {
    let receivedData = '';
    process.stdin.setEncoding('utf-8');
    process.stdin.on('readable', () => {
        const chunk = process.stdin.read();
        if (chunk) {
            receivedData += chunk;
        }
    });

    process.stdin.on('end', () => {
        writeToOutput(JSON.parse(receivedData));
    });
} else if (input.startsWith('http://') || input.startsWith('https://')) {
    const query = fs.readFileSync(
        require.resolve('./introspectionQuery.txt'),
        {encoding: 'utf-8'});

    request.post(
        input,
        { json: { query: query }},
        function(error, response, body) {
            if (error) {
                console.error('Could not query the GraphQL schema');
                console.error(error);
            } else if (response.statusCode !== 200) {
                console.error('Did not get HTTP 200 back from the endpoint');
                console.error(response.toJSON());
            } else {
                writeToOutput(body);
            }
        });
} else {
    writeToOutput(JSON.parse(fs.readFileSync(input, {encoding: 'utf-8'})));
}

function writeToOutput(result) {
    const outputStream = output
        ? fs.createWriteStream(output, {defaultEncoding: 'utf-8'})
        : process.stdout;

    let distScript;

    try {
        distScript = require.resolve('graphql-docs.min.js');
    } catch (e) {
        const distPath = path.join(__dirname, '../dist/graphql-docs.min.js');
        if (fs.existsSync(distPath)) {
            distScript = fs.readFileSync(
                distPath,
                {encoding: 'utf-8'});
        } else {
            throw e;
        }
    }

    outputStream.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>GraphQL Docs</title>
            </head>

            <body>
                <div id="app"></div>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-dom.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/1.0.0/fetch.min.js"></script>
                <script>
                    ${distScript}
                    function fetcher() {
                        return new Promise(function(resolve) {
                            resolve(${JSON.stringify(result)});
                        });
                    }

                    const rootElem = document.getElementById('app');
                    ReactDOM.render(
                        React.createElement(
                            GraphQLDocs.GraphQLDocs,
                            {
                                fetcher: fetcher,
                            }),
                        rootElem
                    );
                </script>
            </body>
        </html>
    `);
}

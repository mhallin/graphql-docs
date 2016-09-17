#!/bin/sh

set -eu

if [ ! -f package.json ]; then
    echo 'This must be run from the source root of the project'
    exit 1
fi

if [ ! -d node_modules ]; then
    echo 'The NPM package dependencies must have been installed'
    exit 1
fi

rm -rf ./dist ./lib

for env in development production; do
    echo "Compiling with environment '$env'"

    NODE_ENV=$env ./node_modules/.bin/webpack
done

./node_modules/.bin/babel -d lib src --ignore '*.flow.js'
cp src/introspectionQuery.txt lib/introspectionQuery.txt

const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');

const app = express();
app.use(express.static(__dirname));
app.use('/graphql', graphqlHTTP(() => ({
    schema: SampleSchema,
})));
app.listen(3000);
console.log('Started on http://localhost:3000/');

const SampleQueryType = new graphql.GraphQLObjectType({
    name: 'Sample',
    fields: () => ({
        test: {
            type: graphql.GraphQLInt,
            description: '`test` field on the root query.',
            resolve: () => 123,
        },
    }),
});

const SampleMutationType = new graphql.GraphQLObjectType({
    name: 'SampleMutation',
    fields: () => ({
        setFoo: {
            type: graphql.GraphQLString,
            description: 'Set `Foo`',
            args: {
                value: { type: graphql.GraphQLString }
            },
        },
    }),
});

const SampleSchema = new graphql.GraphQLSchema({
    query: SampleQueryType,
    mutation: SampleMutationType,
});

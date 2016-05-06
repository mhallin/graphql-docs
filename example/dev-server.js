const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');
const dedent = require('dedent-js');

const app = express();
app.use(express.static(__dirname));
app.use('/graphql', graphqlHTTP(() => ({
    schema: SampleSchema,
})));
app.listen(3000);

console.log('Started on http://localhost:3000/');

const SampleQueryType = new graphql.GraphQLObjectType({
    name: 'Sample',
    description: dedent`
        # Sample schema

        This is an example of a documented schema. All description fields are
        rendered using [Markdown](http://daringfireball.net/projects/markdown/).

        Only types that are reachable from the root query and mutation are
        rendered.
    `,
    fields: () => ({
        test: {
            type: graphql.GraphQLInt,
            description: dedent`
                \`test\` field on the root query.
                This field can have the following values:

                * 1
                * 2
                * 42`,
            resolve: () => 123,
        },
    }),
});

const SampleMutationType = new graphql.GraphQLObjectType({
    name: 'SampleMutation',
    fields: () => ({
        setFoo: {
            type: graphql.GraphQLString,
            description: 'Set the `foo` property',
            args: {
                value: {
                    type: graphql.GraphQLString,
                    description: 'The `foo` property itself. If this is null, all foos are removed.',
                },
            },
        },
    }),
});

const SampleSchema = new graphql.GraphQLSchema({
    query: SampleQueryType,
    mutation: SampleMutationType,
});

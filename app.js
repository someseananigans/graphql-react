const express = require('express')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express()

app.use(bodyParser.json())

app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`
        type RootQuery {
            events: [String!]
        }
        type RootMutation {

        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {}
}))

app.listen(process.env.PORT || 3000)


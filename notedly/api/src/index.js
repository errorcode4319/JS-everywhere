const depthLimit = require('graphql-depth-limit');
const {createComplexityLimitRule} = require('graphql-validation-complexity');

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const {ApolloServer} = require('apollo-server-express');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const getUser = token => {
    if (token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch(err) {
            throw new Error('Session invalid');
        }
    }
};

const db = require('./db');
const models = require('./models');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');


const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;

const app = express();
app.use(helmet());
app.use(cors());

db.connect(DB_HOST);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    validationRule: [depthLimit(5), createComplexityLimitRule(1000)],
    context: ({req}) => {
        const token = req.headers.authorization;
        const user = getUser(token);
        console.log(user);
        return {models, user};
    }
});

server.applyMiddleware({app, path: '/api'});

app.listen({port}, () =>
    console.log(
        `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
    )
);
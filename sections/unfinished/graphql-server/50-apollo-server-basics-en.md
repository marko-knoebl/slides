# Apollo server - basics

## Apollo server

npm package: `apollo-server`

## Apollo server

Essential parts:

- schema: describes which resources are available
- resolvers: implementation which provides the resources

## Apollo server

simple example:

```js
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    message: String!
    now: String!
  }
`;

const resolvers = {
  Query: {
    message: () => 'Hello world!',
    now: () => new Date().toISOString(),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen();
```

## Simple deployment

Simple way to deploy for 5 days: [glitch.com](https://glitch.com) - New Project - hello-express

- add `apollo-server` to the dependencies
- replace the contents of _server.js_

## Exercises: more simple resolvers

implement these resolvers on the server:

- random: random number from 1 - 100
- date: current date as a string
- coin: the string 'heads' or 'tails' (at random)

## Exercises: more simple resolvers

```js
const typeDefs = gql`
  type Query {
    hello: String!
    random: Int!
    date: String!
    coin: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'hello world',
    random: () => Math.ceil(Math.random() * 100),
    date: () => new Date().toISOString().slice(0, 10),
    coin: () => (Math.random() > 0.5 ? 'heads' : 'tails'),
  },
};
```

## Asynchronous resolvers

instead of a direct value we can also return a promise, like in this example:

```js
const typeDefs = gql`
  type Query {
    joke: String!
  }
`;

const resolvers = {
  Query: {
    joke: () =>
      fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(jokeData => jokeData.value),
  },
};
```

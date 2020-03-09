# GraphQL on the server

## GraphQL on the server: options

- **GraphQL.js** (reference implementation)
- **express-graphql** (reference implementation for express)
- **apollo-server**
- ... (see http://graphql.github.io/code/ for other options)

## GraphQL on the server: parts

- GraphQL schema
- implementation (resolvers)

## Example: schema

```graphql
type Query {
  hello: String!
}

type Mutation {
  setHelloMessage(String!): String!
}

type Subscription {
  messageChange: String!
}
```

## Example: implementation

(this depends on the library)

```js
const typeDefs = `
  type Query {
    message: String!
  }
  type Mutation {
    setMessage(message: String!): String!
  }
`;
```

## Example: implementation

```js
let message = 'hello';

const resolvers = {
  Query: {
    message: (root, args, context) => message,
  },
  Mutation: {
    setMessage: (root, args, context) => {
      message = args.message;
      return message;
    },
  },
};
```

# GraphQL schema definition

## GraphQL schema definition

GraphQL _always_ requires us to explicitly declare the query schema for our API.

This enables GraphQL to easily generate documentation for it (see the _schema_ sidebar in the browser interface)

The language to express the schema definition is called the _GraphQL Schema Definition Language (SDL)_.

## GraphQL types

GraphQL responses are composed of the following types:

- Boolean
- Int: signed 32-bit int
- Float: signed double-precision floating point number
- String: UTF-8 character sequence
- ID: unique id serialized as a string
- Object: object with predefined entries
- List: list composed of specific other types

## Schema definition examples

An API that returns a string under the keyword `hello`:

```graphql
type Query {
  "a hello message" # <- this is a description
  hello: String!
}
```

## Schema definition examples

An API that returns various object types - depending on the query:

```graphql
type Query {
  currentTime: String!
  currentDate: String!
  randomInt: Int!
  randomFloat: Float!
}
```

## Schema definition examples

An API that accepts parameters:

```graphql
type Query {
  currentTime(timezone: String): String!
  randomInt(min: Int, max: Int!): Int!
}
```

## Schema definition examples

queries, mutations and subscriptions

```graphql
type Query {
  currentTime(timezone: String): String!
  message: String!
}

type Mutation {
  newMessage(message: String!): String!
}

type Subscription {
  messageChange: String!
}
```

## Schema definition examples

queries, mutations and subscriptions

These three entries contain the endpoints that form the API

## Types

example schema definition:

```graphql
type query {
  active: Boolean!
  randInt: Int!
  randFloat: Float!
  message: String!
  someId: ID!
  lotteryNumbers: [Int!]!
}
```

## Types

schema that contains objects:

```graphql
type Query {
  todos: [Todo!]!
}

type Todo {
  id: ID!
  text: String!
  completed: Boolean!
}
```

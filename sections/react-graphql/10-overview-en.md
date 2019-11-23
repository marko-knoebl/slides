# GraphQL

## GraphQL

"A query language for your API"

## GraphQL

Can be used to talk to:

- APIs
- databases

Is often used as a common interface for multiple data sources

## GraphQL vs REST

GraphQL aims to be more _flexible_ and _efficient_ than REST.

GraphQL: one endpoint that can be used for any query  
REST: multiple endpoints that must be created for each type of query

GraphQL: the client can request exactly the objects and fields it needs

GraphQL: data is fetched within _one_ single HTTP request

[Video: GraphQL is the better REST](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)

## GraphQL vs SQL

SQL: relational database

GraphQL: graph database (makes "joins" easier)

OpenCRUD: GraphQL dialect that maps to standard SQL

## Use cases

- API service: e.g. get a random number between 1 and 100
- database query: e.g. get all login names of friends of a specific user

## Example: random number service

query (GraphQL):

```graphql
query {
  random(min: 1, max: 100)
}
```

answer (JSON):

```json
{
  "random": 23
}
```

## Example: get friends of a user

```graphql
query {
  user(login: "john") {
    friends {
      login
    }
  }
}
```

```json
{
  "user": {
    "friends": [
      { "login": "mike" },
      { "login": "stephanie" }
    ]
  }
}
```

## Definining and consuming a GraphQL API

consuming an API:

- query (expressed in the GraphQL language)
- query data (in JSON)

defining an API:

- schema
- resolver functions

## Example: random numbers

This example shows the implementation and use of a random number API which provides parameters to set the quantity and max value of the random numbers

## Example: random numbers

schema definition:

```graphql
type Query {
  rand(max: Int!, quantity: Int!): [Int]!
}
```

resolver function (this depends on the library):

```js
(root, args, context) =>
  Array.from({ length: args.quantity }, () =>
    Math.floor(Math.random() * args.max)
  );
```

## Example: random numbers: fixed query

```graphql
query random {
  rand(max: 10, quantity: 3)
}
```

## Example: random numbers: parametric query

query:

```graphql
query random($max: Int!, $quantity: Int!) {
  rand(max: $max, quantity: $quantity)
}
```

query data:

```json
{
  "max": 10,
  "quantity": 3
}
```

## Try it out

predefined API with posts and users:

https://api.graph.cool/simple/v1/cjmj9v4mk1zs00182rnrzdrai

<!--
source of the predefined API:

howtographql.com - Core Concepts - last "Play" button

try Subscriptions
-->

## Resources

- https://graphql.org/learn/
- https://www.howtographql.com/

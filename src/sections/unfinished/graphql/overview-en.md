# GraphQL

---

## GraphQL

"A query language for your API"

---

## GraphQL

"SQL over HTTP"

---

## GraphQL vs REST

GraphQL: one endpoint that can be used for any query  
REST: multiple endpoints that must be created for each type of query

GraphQL: the client can request exactly the objects and fields it needs

GraphQL: data is fetched within _one_ single HTTP request

---

## GraphQL vs SQL

SQL: relational database

GraphQL: graph database (makes "joins" easier)

OpenCRUD: GraphQL dialect that maps to standard SQL

---

## Use cases

- API service: e.g. get a random number between 1 and 100
- database query: e.g. get all login names of friends of a specific user

---

## Example: random number service

query:

```graphql
query {
  random(min: 1, max: 100)
}
```

---

## Example: random number service

answer:

```json
{
  "random": 23
}
```

---

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

---

## introductory videos

https://www.howtographql.com/basics/0-introduction/  
https://www.howtographql.com/basics/1-graphql-is-the-better-rest/

---

## definining and consuming a GraphQL API

consuming an API:

- query (expressed in the GraphQL language)
- query data (in JSON)

defining an API:

- schema
- resolver functions

---

## example: random numbers

This example shows the implementation and usage of a random number API which provides parameters to set the quantity and max value of the random numbers

---

## example: random numbers

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

---

## example: random numbers: fixed query

```graphql
query random {
  rand(max: 10, quantity: 3)
}
```

---

## example: random numbers: parametric query

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

---

## Try it out

simple:

https://launchpad.graphql.com

predefined API with posts and users:

https://api.graph.cool/simple/v1/cjmj9v4mk1zs00182rnrzdrai

???

source of the predefined API:

howtographql.com - Core Concepts - last "Play" button

try Subscriptions

---

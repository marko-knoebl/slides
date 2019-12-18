# GraphQL

## GraphQL

"A query language for your API"

## GraphQL

Can be used for an API that can in turn talk to:

- other APIs
- databases

## GraphQL vs REST

### Advantages of REST

- _widely used_
- _simpler_

### Advantages of GraphQL

- _more flexible_
- _more efficient_

## Advantages of GraphQL

_Flexibility_ of GraphQL:

can describe complex tasks - the server-side API does not have to be adjusted for new use cases

_Efficiency_ of GraphQL:

client can request exactly the data it needs in a single request

[Video: GraphQL is the better REST](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)

## Differences between GraphQL and REST

REST: endpoint (e.g. `/todos`) and method (e.g. `PUT`) are part of the API; a separate endpoint is needed for each type of query

GraphQL: single endpoint (e.g. `/api`), all requests are POST requests

## Differences between GraphQL and REST

REST: complex cases require multiple HTTP requests

GraphQL: data are fetched via a single HTTP request

## Differences between GraphQL and REST

REST: Each endpoint always returns the same set of object fields

GraphQL: the client can request exactly the objects and fields it needs

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

Query:

```graphql
query {
  user(login: "john") {
    login
    friends {
      login
    }
  }
}
```

## Example: get friends of a user

Response:

```json
{
  "user": {
    "login": "john",
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
- optional query data (in JSON)

defining an API:

- schema
- resolver functions

## Example: random numbers

Example shows use of a random number API which provides parameters to set the quantity and max value of the random numbers

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

query data (JSON):

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

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

query:

```graphql
query {
  random(min: 1, max: 100)
}
```

answer:

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

# GraphQL vs REST

## GraphQL vs REST

REST: The endpoint (e.g. `/todos`) and the method (e.g. `PUT`) are an essential part of the API and they indicate what will happen  
GraphQL: one endpoint that can be used for any operation - all requests are `POST` requests

GraphQL: the client can request exactly the objects and fields it needs

GraphQL: data is fetched within _one_ single HTTP request

## GraphQL vs REST

Scenario:

A social media app in which we can view a list of our friends. Clicking on a friend takes us to their most recent posts

## API in REST:

```http
GET /users/$myuserid/friends
```

```http
GET /users/$otheruserid/posts
```

## API in GraphQL

```graphql
{
  users(id: "myuserid") {
    friends {
      userid
      name
    }
  }
}
```

## API in GraphQL

```graphql
{
  users(id: "otheruserid") {
    posts {
      date
      title
      body
    }
  }
}
```

## Adding functionality: new post feed

Display new posts of all friends in a feed

## Adding functionality: new post feed

In REST we would either have to send multiple requests to retrieve all posts of friends - or we would have to implement a new endpoint in the API:

```http
GET /postsoffriends/$myuserid
```

## new functionality: new post feed

In GraphQL we can implement this with just one request and without creating new endpoints:

```graphql
{
  users(id: "$myuserid") {
    friends {
      posts {
        date
        title
        body
      }
    }
  }
}
```

# GraphQL vs SQL

## GraphQL vs SQL: examples

```graphql
query {
  user(login: "my-username") {
    login
    name
  }
}
```

```sql
SELECT login, name
  FROM user
  WHERE login="my-username"
```

## GraphQL vs SQL

In GraphQL parameters don't have a predefined meaning.

In SQL the clause `WHERE login="my-username` always has the same meaning

In GraphQL the meaning of `login: "my-username"` is up to the implementation on the server

## GraphQL vs SQL

SQL: relationships between tables (joins) are defined in the query

GraphQL: already knows about relationships when the query is issued → simpler queries

## GraphQL vs SQL

```graphql
query {
  user(id: "my-username") {
    posts {
      name
    }
  }
}
```

```sql
SELECT name
  FROM user
  INNER JOIN post ON user.id = post.userId
  WHERE user.id = "my-username"
```

(extra code: `INNER JOIN post ON user.id = post.userId`)

## GraphQL vs SQL

**OpenCRUD** is a more specifc standard that is based on GraphQL. It maps directly to SQL and can be used in place of it.

# GraphQL ecosystem

## GraphQL ecosystem

- _GraphQL_: standardized query language

clients:

- _graphql.js_: reference implementation
- _Apollo Client_: easy integration with React, Vue, Angular, ...
- _Relay_: advanced integration with React

servers (JS-based):

- _Apollo Server_
- _Yoga_: Easy setup of Apollo Server and related tools

# Querying

## GraphQL examples

from https://github.com/APIs-guru/graphql-apis

- GitHub (login required)
- Reddit (GraphQL Hub)
- GraphQL Pokémon (second entry!)
- Star Wars
- SpaceX Land

## GraphiQL explorer

Graph*i*QL: Browser-based explorer for GraphQL APIs

- see query structure / data structure (click "Docs" in the top right)
- send experimental queries

## Simple GraphQL exercises

- Get a list of titles of all Star Wars films in the database
- Get a list of planets and planet populations from Star Wars
- Get a list of starships grouped by films they appear in

## List of titles of Star Wars films

```graphql
query getTitles {
  allFilms {
    films {
      title
    }
  }
}
```

## List of planets and planet populations

```graphql
query getPlanetsWithPopulations {
  allPlanets {
    planets {
      name
      population
    }
  }
}
```

## List of starships grouped by film

```graphql
query getStarshipsByFilm {
  allFilms {
    films {
      title
      starshipConnection {
        starships {
          name
        }
      }
    }
  }
}
```

## Query parameters

Only query the pokémon with the specified name

```graphql
query getCharmander {
  pokemon(name: "Charmander") {
    name
    weight {
      minimum
      maximum
    }
  }
}
```

## Query parameters

Query the first three pokémon in the database

```graphql
query getFirstThree {
  pokemons(first: 3) {
    name
  }
}
```

Note: specifying a _first_ parameter is possible because it's implemented on the server-side. It's not part of the GraphQL standard. GraphQL _may_ also implement other arbitrary parameters like _orderBy_ or _matchRegex_, but this is all up to the server.

## Query parameters: exercises

- get the name, weight and classification of Pikachu
- get the name and weight of the first three pokémon

## Required and optional parameters

Required parameters are marked with a `!`. These must always be included. Similarly, returned attributes that will always be present (like `id`) will be marked in the same way.

## Variables

query:

```graphql
query getPokemonByName($name: String) {
  pokemon(name: $name) {
    name
    number
    image
  }
}
```

variables:

```json
{
  "name": "Pikachu"
}
```

## Default variable valuess

query:

```graphql
query getPokemonByName($name: String = "Pikachu") {
  pokemon(name: $name) {
    number
    image
  }
}
```

## Modifying data

https://todo-mongo-graphql-server.herokuapp.com/

(only one query at a time)

## Modifying data

Command that triggers the server's `add` action and returns the id of the new TODO

```graphql
mutation addTodo($title: String!) {
  add(title: $title) {
    id
  }
}
```

```json
{
  "title": "count to 42"
}
```

## Modifying data

```graphql
mutation toggleTodo($id: String!) {
  toggle(id: $id) {
    id
    completed
  }
}
```

## Modifying data

```graphql
mutation addOneAndClearCompleted($title: String!) {
  add(title: $title) {
    id
  }
  clearCompleted {
    id
  }
}
```

## Modifying data

Task: write a query that will delete all previous entries and add two new ones

## Modifying data

```graphql
mutation reset {
  toggleAll(checked: true) {
    id
  }
  clearCompleted {
    id
  }
  firstAddition: add(title: "Count to 34") {
    id
  }
  secondAddition: add(title: "Count to 45") {
    id
  }
}
```

## More exercises - optional

Get all "followers of followers" for a specific GitHub account

Get the name of a project and number of stars for all GitHub projects of a specific user

## More exercises - solutions

```
query {
  user (login: "marko-knoebl") {
    followers (first: 10) {
      nodes {
        login,
        followers (first: 10) {
          nodes {
            login
          }
        }
      }
    }
  }
}
```

## More exercises - solutions

```
query {
  user (login: "marko-knoebl") {
    id,
    email,
    repositories (first: 100, orderBy: {field: STARGAZERS, direction: DESC}) {
      nodes {
        name,
        stargazers {
          totalCount
        }
      }
    }
  }
}
```

## Task: loading Todos from a GraphQL API

Load todos from `https://5qn401kkl9.lp.gql.zone/graphql`

(admin: https://launchpad.graphql.com/5qn401kkl9)

# Querying - Advanced

## Aliases

Task: number of Pikachu and Raichu

## Aliases

This cannot be done the way we know:

```graphql
query getTwo {
  pokemon(name: "Pikachu") {
    number
  }
  pokemon(name: "Raichu") {
    number
  }
}
```

## Aliases

Why does this not work? The result would look like this:

```json
{
  "data": {
    "pokemon": {
      "number": "025"
    },
    "pokemon": {
      "number": "026"
    }
  }
}
```

Note the duplicate key: `pokemon`!

## Aliases

In order to avoid this problem we use aliases:

```graphql
query getTwo {
  pokemon1: pokemon(name: "Pikachu") {
    number
  }
  pokemon2: pokemon(name: "Raichu") {
    number
  }
}
```

```json
{
  "data": {
    "pokemon1": {
      "number": "025"
    },
    "pokemon2": {
      "number": "026"
    }
  }
}
```

## Fragments

Task: get the number, maxHP and image of Pikachu and Raichu

## Fragments - why?

```graphql
query getTwo {
  pokemon1: pokemon(name: "Pikachu") {
    number
    maxHP
    image
  }
  pokemon2: pokemon(name: "Raichu") {
    number
    maxHP
    image
  }
}
```

## Fragments: don't repeat yourself!

```graphql
query getTwo {
  pokemon1: pokemon(name: "Pikachu") {
    ...essentialData
  }
  pokemon2: pokemon(name: "Raichu") {
    ...essentialData
    id
  }
}

fragment essentialData on Pokemon {
  number
  maxHP
  image
}
```

# GraphQL from JavaScript

## Sending queries to the server

Queries are sent to the server via HTTP POST requests

The payload is a JSON object which has a `query` string property (this is also true when sending mutations)

## Sending queries to the server

We can try this out from the browser console via fetch (we have to be on the same website):

```js
const requestBody = {
  query:
    'mutation addTodo($title: String!) { add(title: $title) { id } }',
  variables: '{"title": "test"}',
};

const requestBodyStr = JSON.stringify(requestBody);

fetch('https://todo-mongo-graphql-server.herokuapp.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: requestBodyStr,
}).then(console.log);
```

## Sending queries to the server

Queries may optionally include variables in the `variables` property

```json
{
  "query": "mutation addTodo($title: String!) { add(title: $title) { id } }",
  "variables": "{\"title\": \"test\"}"
}
```

## Example: reddit API

```js
const queryTemplate = `
{
  reddit {
    subreddit(name: "javascript") {
      newListings(limit: 2) {
        title
      }
    }
  }
}`;
```

## Example: reddit API

```js
fetch('https://www.graphqlhub.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({ query: queryTemplate }),
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
```

# GraphQL on the server

## GraphQL on the server: options

- **GraphQL.js** (reference implementation)
- **express-graphql** (reference implementation for express)
- **apollo-server**
- **graphql-yoga**: based on _GraphQL.js_ and _apollo-server_
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

# Apollo client

## Apollo client

advantages over "plain" frontent code:

- automatic networking
- automatic caching

## Apollo client: installation

Inside an existing React project install these packages:

- `apollo-client`
- `apollo-cache-inmemory`
- `apollo-link-http`
- `graphl`
- `graphql-tag`
- `react-apollo` (for later use)

You can also install `apollo-boost` to install `apollo-client`, `apollo-cache-inmemory` and `apollo-link-http` (and more)

## Apollo client: setup

```js
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://api.spacex.land/graphql/',
});

const client = new ApolloClient({
  cache,
  link,
});
```

## Apollo client: example query

```js
// via a tagged template string
const LAUNCHES_QUERY = gql`
  query recentLaunches {
    launchesPast(limit: 10) {
      mission_name
    }
  }
`;

client
  .query({
    query: LAUNCHES_QUERY,
  })
  .then(result => console.log(result));
```

# Apollo client

## Writing the render function

The Query component's child element _is a function_. This function will receive the queried data and return a React component tree. In that way this function is similar to the _render_ method we're familiar with.

## Writing the render function

The render function receives an object that can have a number of properties, including:

- `data`: the response body
- `loading`: a boolean indicating whether the request is ongoing
- `error`: indicates network errors or GraphQL errors

full API: https://www.apollographql.com/docs/react/essentials/queries.html#render-prop

## Writing the render function

```jsx
({ data, loading, error }) => {
  if (loading) return <div>Fetching...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      {data.allPosts.map(post => (
        <div>{post.title}</div>
      ))}
    </div>
  );
};
```

## Mutations

Apollo Client also provides a `Mutation` component that works similar to the `Query` component.

```jsx
<Mutation
  mutation={gql`mutation createPost($authorId: ID! ...`}
  variables={{ authorId: '123' }}
  refetchQueries={['getPosts']}>
  {customRenderFunction}
</Mutation>
```

## Mutations

Inside a mutation the `customRenderFunction` will receive _two_ arguments:

- the _second_ argument (which is not always needed) is the same as the first argument for a query. So it contain properties like `data`, `loading`, ...
- the _first_ argument is a function that, when called, will send the specified mutation to the server

So one important distinction between queries and mutations in Apollo client is: Queries get sent to the server automatically when the component is mounted. Mutations must be sent manually (e.g. when the user clicks a button).

## Subscriptions

Subscriptions can be handled via websockets

```bash
npm install apollo-link-ws subscriptions-transport-ws
```

## Subscriptions

```js
// Create an http link:
const httpLink = new HttpLink({
  uri:
    'https://api.graph.cool/simple/v1/cjmj9v4mk1zs00182rnrzdrai',
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://subscriptions.graph.cool/v1/cjmj9v4mk1zs00182rnrzdrai`,
  options: {
    reconnect: true,
  },
});
```

## Subscriptions

```js
// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    console.log(kind, operation);
    return (
      kind === 'OperationDefinition' &&
      operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);
```

## Subscriptions

```jsx
<Subscription subscription={SUBSCRIBE_POSTS_TEMPLATE}>
  {this.subscriptionRenderer}
</Subscription>
```

## Subscriptions

```js
const SUBSCRIBE_POST_CHANGE_TEMPLATE = gql`
  subscription {
    Post {
      node {
        author {
          id
        }
        title
      }
    }
  }
`;
```

## Subscriptions

```js
subscriptionRenderer = ({ data }) => {
  return (
    <div>modified post: {data && data.Post.node.title}</div>
  );
};
```

## Exercise: Hackernews clone

Do the React-Apollo tutorial at https://howtographql.com

## Authentication, setting headers

Middleware allows us to modify requests before they are sent to the server, e.g. by adding authentication headers:

```js
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
```

# Apollo client with React

## Apollo client with React

## Connecting React to an Apollo client

```jsx
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
```

## The useQuery hook

```js
const LAUNCHES_QUERY = gql`
  query recentLaunches {
    launchesPast(limit: 10) {
      mission_name
    }
  }
`;
```

## The useQuery hook

```js
function RecentLaunches() {
  const { data, loading, error } = useQuery(LAUNCHES_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <h1>Launches</h1>
      {data.launchesPast.map(launch => (
        <div>{launch.mission_name}</div>
      ))}
    </div>
  );
}
```

# graphql-yoga

## graphql-yoga

package that includes _GraphQL.js_ and _apollo-server_ to quickly and easily set up a GraphQL server

## Tutorial

https://www.howtographql.com/graphql-js/0-introduction/

## Setting up graphql-yoga

Essential parts:

- schema: describes which resources are available
- resolvers: implementation which provides the resources

## Setting up graphql-yoga

create a new node project (inside an empty folder) and install graphql-yoga:

```bash
npm init -y
npm install graphql-yoga
```

## Setting up graphql-yoga

implementing a simple graphql-yoga server with a _schema_ and _resolvers_

## Setting up graphql-yoga

src/index.js

```js
const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
type Query {
  hello: String!
}`;

const resolvers = {
  Query: {
    hello: () => 'hello world',
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start();
```

## Running graphql-yoga

```bash
node src/index.js
```

open `http://localhost:4000` in the browser

## Exercises: more resolvers

implement these resolvers on the server:

- random: random number from 1 - 100
- date: current date as a string
- coin: the string 'heads' or 'tails'

use these resolvers in a single query to get:

- current date
- 3 random numbers
- coin toss

## Exercise: more resolvers

```js
const typeDefs = `
type Query {
  hello: String!
  random: Int!
  date: String!
  coin: String!
}`;

const resolvers = {
  Query: {
    hello: () => 'hello world',
    random: () => Math.ceil(Math.random() * 100),
    date: () => new Date().toISOString().slice(0, 10),
    coin: () =>
      ['heads', 'tails'][Math.round(Math.random())],
  },
};
```

## Exercise: more resolvers

```graphql
{
  hello
  r1: random
  r2: random
  r3: random
  date
  coin
}
```

## Example: chatroom

We want to create an API for a chatroom

## Example: chatroom

We'll create these interactions with the server:

- getMessages
- postMessage

## Example: reddit clone

```graphql
query {
  currentUser {
    id
  }
  subreddit(name="news") {
    lastPosts {
      title
      url
      id
    }
  }
  post(id="abc") {
    title
    url
    id
    subreddit
  }
}

mutation {
  newPost(title="my new post", authToken="xxx") {
    id
  }
  login(username="abc", password="xyz") {
    authToken
  }
}
```

## Example: message board

see example tutorial code

## Example: Todo list

We want to create an API for a todo list

For now we will keep our data in memory on the server

## Example: Todo list

We'll create these query types:

- `todo(id: ID!)`
- `todos()`
- `createTodo(...)`
- `modifyTodo(...)`
- `deleteTodo(...)`

<!--
see:
courses-tutorials/graphql-server-todo
-->

# Example: a chatroom API

### build a chatroom API with GraphQL and yoga, hosted on zeit.co

## start the project

create a new folder for the project and initialize an npm project:

```bash
npm init
```

## install & set up micro

```bash
npm install micro
```

edit package.json:

```json
{
  "scripts": {
    "start": "micro"
  }
}
```

# Exercise: adding a GraphQL API to our TODO app

We will use a shared GraphQL API at

https://5qn401kkl9.lp.gql.zone/graphql

(it should return "GET query missing." in the browser)

## Exercise: adding a GraphQL API to our TODO app

- query todos from the API when the page loads
- query again when the user clicks a refresh button
- send a mutation when the user adds a todo
- send a mutation when the user toggles a todo

## Exercise: adding a GraphQL API to our TODO app

```js
const graphqlQuery = `query getTodos { todos { id title completed } }`;
const requestBody = JSON.stringify({ query: graphqlQuery });
fetch('https://5qn401kkl9.lp.gql.zone/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: requestBody,
})
  .then(response => response.json())
  .then(responseData => {
    console.log(responseData);
    dispatch(receiveTodos(responseData.data.todos));
  });
```

# Database connection

## Database connection

- direct manual connection
- direct connection, e.g. via postgraphile
- connection via an intermediate GraphQL layer, e.g. via prisma

## Prisma and OpenCRUD

**OpenCRUD** is a more specific version of GraphQL which maps to SQL commands

examples:

```graphql
query getUser4 {
  user(where: { id: 4 }) {
    name
  }
}
```

```graphql
query getTopRatedMovies {
  movie(where: { rating_gte: 4 }, orderBy: ...) {
    name
  }
}
```

## Prisma and OpenCRUD

Prisma will automatically create an _OpenCRUD_ API for a database (MySQL, Postgres or MongoDB)

## database connection with Prisma

tutorial: https://www.howtographql.com/graphql-js/4-adding-a-database/


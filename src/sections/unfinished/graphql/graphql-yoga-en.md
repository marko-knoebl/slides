# graphql-yoga



## graphql-yoga

package that includes _GraphQL.js_ and _apollo-server_ to quickly and easily set up a GraphQL server



## Tutorial

https://www.howtographql.com/graphql-js/0-introduction/



## setting up graphql-yoga

Essential parts:

- schema: describes which resources are available
- resolvers: implementation which provides the resources



## setting up graphql-yoga

create a new node project (inside an empty folder) and install graphql-yoga:

```bash
npm init -y
npm install graphql-yoga
```



## setting up graphql-yoga

implementing a simple graphql-yoga server with a _schema_ and _resolvers_



## setting up graphql-yoga

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



## running graphql-yoga

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

---

see:
courses-tutorials/graphql-server-todo
or
https://launchpad.graphql.com/5qn401kkl9

---


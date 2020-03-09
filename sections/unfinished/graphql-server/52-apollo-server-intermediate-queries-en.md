# Apollo server - intermediate queries

## Apollo server - intermediate queries

- defining and resolving custom types
- resolvers with arguments
- mutations

## Defining and resolving custom types

example query that relies on a custom `Time` type:

```graphql
{
  now {
    hour
    minute
    second
  }
}
```

## Defining and resolving custom types

defining the `Time` type:

```js
const typeDefs = gql`
  type Query {
    now: Time!
  }
  type Time {
    hour: Int!
    minute: Int!
    second: Int!
  }
`;
```

## Defining and resolving custom types

option 1: directly return a matching object:

```js
const resolvers = {
  Query: {
    now: () => {
      const d = new Date();
      return {
        hour: d.getUTCHours(),
        minute: d.getUTCMinutes(),
        second: d.getUTCSeconds(),
      };
    },
  },
};
```

## Defining and resolving custom types

option 2: separate resolver for the `Time` type:

```js
const resolvers = {
  Query: {
    // now is of type Time (according to the schema)
    now: () => new Date(),
  },
  Time: {
    hour: parent => parent.getUTCHours(),
    minute: parent => parent.getUTCMinutes(),
    second: parent => parent.getUTCSeconds(),
  },
};
```

the `hour`, `minute` and `second` resolvers will receive the result of `now()` as their first argument

## Defining and resolving custom types

mix of option 1 and option 2:

```js
const typeDefs = gql`
  type Query {
    me: Person!
  }
  type Person {
    firstName: String!
    lastName: String!
    fullName: String!
  }
`;

const resolvers = {
  Query: {
    me: () => ({
      firstName: 'Marko',
      lastName: 'Knöbl',
    }),
  },
  Person: {
    fullName: parent =>
      parent.firstName + ' ' + parent.lastName,
  },
};
```

## Resolvers with arguments

extended `Time` type that can receive a timezone offset:

```js
const typeDefs = gql`
  type Query {
    now: Time(tzOffset: Int)!
  }
`;
```

## Resolvers with arguments

the resolver function receives a second parameter:

```js
const resolvers = {
  Query: {
    now: (parent, args) => {
      let timestamp = new Date().getTime();
      if (args.tzOffset) {
        timestamp += args.tzOffset * 1000 * 60 * 60;
      }
      return new Date(timestamp);
    },
  },
};
```

## Resolvers with arguments

task: write a `random` resolver that takes `min` and `max` arguments

## Exercises: more complex resolvers

task: write a GraphQL adaptation of the REST API at https://jsonplaceholder.typicode.com according to this schema:

```gql
type Query {
  todo(id: Int!): Todo
  todos(completed: Boolean): [Todo]!
  user(id: Int!): User!
  users: [User]!
}
type Todo {
  id: Int!
  title: String!
  completed: Boolean!
}
type User {
  id: Int!
  firstName: String!
  lastName: String!
  todos(completed: Boolean): [Todo]!
}
```

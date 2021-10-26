# React mit GraphQL und Apollo

## React mit GraphQL und Apollo

[https://www.apollographql.com/docs/react/data/queries/](https://www.apollographql.com/docs/react/data/queries/)

## Connecting React to an Apollo client

An application usually communicates with only one GraphQL API

```js
import { ApolloProvider } from 'react-apollo';
```

```jsx
<ApolloProvider client={client}>
  <App />
</ApolloProvider>
```

## Defining a Query

```js
const LAUNCHES_QUERY = gql`
  query recentLaunches {
    launchesPast(limit: 10) {
      mission_name
    }
  }
`;
```

## useQuery

```js
function RecentLaunches() {
  const { data, loading, error } = useQuery(LAUNCHES_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <h1>Launches</h1>
      {data.launchesPast.map((launch) => (
        <div>{launch.mission_name}</div>
      ))}
    </div>
  );
}
```

## useQuery: Parameters

```js
const LAUNCHES_QUERY = gql`
  query recentLaunches($numLaunches: Int!) {
    launchesPast(limit: $numLaunches) {
      mission_name
    }
  }
`;

function RecentLaunches({ numLaunches }) {
  const { data, loading, error } = useQuery(
    LAUNCHES_QUERY,
    { variables: { numLaunches } }
  );
  ...
}
```

## useQuery: polling & refetching

Updating every 5 seconds:

```js
const { data, loading, error } = useQuery(LAUNCHES_QUERY, {
  pollInterval: 5000,
});
```

Updating via `refetch()`:

```js
const { data, loading, error, refetch } = useQuery(
  LAUNCHES_QUERY
);
...
refetch()
```

## useMutation

Example for todos:

```js
const SET_COMPLETED = gql`
  mutation setCompleted($id: ID!, $completed: Boolean!) {
    updateTodo(id: $id, input: { completed: $completed }) {
      id
      completed
    }
  }
`;
```

## useMutation

basic usage:

```jsx
const [setCompleted] = useMutation(SET_COMPLETED);
```

extended version (cf. `useState`):

```jsx
const [
  setCompleted,
  { data, loading, error },
] = useMutation(SET_COMPLETED);
```

state is changed first on the server and then locally

## useMutation

update of the local cache:

- **automatic** if an existing object is updated
- **manual** if entries are added to / removed from an array

## useMutation: manual cache updates

accessing the cache and the reply inside the `update` function:

```js
const [addTodo] = useMutation(ADD_TODO, {
  update: (cache, reply) => {
    // cache: local cache
    // reply: reply from the API
    console.log(cache);
    console.log(reply);
    // TODO: update the local cache based on the reply
  },
});
```

## useMutation: manual cache updates

```js
const [addTodo] = useMutation(ADD_TODO, {
  update: (cache, reply) => {
    // get old todos from cache
    const oldTodos = cache.readQuery({ query: GET_TODOS })
      .todos;
    // build newTodos array based on the server response
    const newTodos = [...oldTodos, reply.data.createTodo];
    // TODO: update the local cache with the newTodos array
  },
});
```

## useMutation: manual cache updates

```js
const [addTodo] = useMutation(ADD_TODO, {
  update: (cache, reply) => {
    const oldTodos = cache.readQuery({ query: GET_TODOS })
      .todos;
    const newTodos = [...oldTodos, reply.data.createTodo];
    cache.writeQuery({
      query: GET_TODOS,
      data: { todos: newTodos },
    });
  },
});
```

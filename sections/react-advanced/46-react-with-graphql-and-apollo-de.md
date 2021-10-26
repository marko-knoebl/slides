# React with GraphQL and Apollo

## React with GraphQL and Apollo

[https://www.apollographql.com/docs/react/data/queries/](https://www.apollographql.com/docs/react/data/queries/)

## React mit einem Apollo Client verbinden

Eine Anwendung kommuniziert meist mit einem einzigen API

```js
import { ApolloProvider } from 'react-apollo';
```

```jsx
<ApolloProvider client={client}>
  <App />
</ApolloProvider>
```

## Definition einer Query

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

## useQuery: Parameter

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

## useQuery: Polling & Refetching

Daten alle 5 Sekunden aktualisieren:

```js
const { data, loading, error } = useQuery(LAUNCHES_QUERY, {
  pollInterval: 5000,
});
```

Funktion, deren Aufruf ein neues Laden der Daten bewirkt:

```js
const { data, loading, error, refetch } = useQuery(
  LAUNCHES_QUERY
);
...
refetch()
```

## useMutation

Beispielfall Todo:

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

Gundlegende Verwendung:

```jsx
const [setCompleted] = useMutation(SET_COMPLETED);
```

Ausführliche Form (vgl. `useState`):

```jsx
const [
  setCompleted,
  { data, loading, error },
] = useMutation(SET_COMPLETED);
```

Der State wird am Server und danach auch lokal entsprechend abgeändert

## useMutation

Update des lokalen Caches:

- **automatisch**, falls ein zuvor existierendes Objekt geändert wurde
- **manuell**, falls Objekte in einem Array hinzugefügt / entfernt wurden

## useMutation: manuelles Update des Caches

Zugriff auf cache und API-Antwort in der `update`-Funktion:

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

## useMutation: manuelles Update des Caches

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

## useMutation: manuelles Update des Caches

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

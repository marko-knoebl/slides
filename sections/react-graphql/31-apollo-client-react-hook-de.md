# Apollo client mit React

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
      {data.launchesPast.map(launch => (
        <div>{launch.mission_name}</div>
      ))}
    </div>
  );
}
```

## useQuery: Parameter

```js
const LAUNCHES_QUERY = gql`
  query recentLaunches($numLaunches: ) {
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

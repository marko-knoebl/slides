# Apollo client with React

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
      {data.launchesPast.map(launch => (
        <div>{launch.mission_name}</div>
      ))}
    </div>
  );
}
```

## useQuery: Parameters

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

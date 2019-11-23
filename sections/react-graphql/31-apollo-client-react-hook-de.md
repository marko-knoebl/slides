# Apollo client mit React

## React mit einem Apollo client verbinden

Eine Anwendung kommuniziert meist über ein einziges API

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

## Der useQuery Hook

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

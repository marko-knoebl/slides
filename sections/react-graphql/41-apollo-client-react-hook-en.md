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

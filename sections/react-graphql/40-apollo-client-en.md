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

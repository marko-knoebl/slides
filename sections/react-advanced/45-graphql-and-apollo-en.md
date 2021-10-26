# GraphQL and Apollo

## GraphQL and Apollo

https://www.apollographql.com/docs/react/

## GraphQL and Apollo

advantages over "plain" frontend code:

- automatic sending of queries over the network
- automatic caching
- automatic (re)rendering of React components

## Installation

required packages:

- `graphql`
- `graphql-tag`
- `apollo-client`
- `apollo-cache-inmemory`
- `apollo-link-http`
- `react-apollo` (for use with React)

## Setup

```js
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.spacex.land/graphql/',
  }),
});
```

## Example query

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
  .query({ query: LAUNCHES_QUERY })
  .then((result) => console.log(result));
```

## Local data

Apollo can also manage local data / local state

Setting local state:

- via `client.writeData` for simple cases
- via the `@client` directive in GraphQL mutations; and local resolvers

Querying local state:

- via the `@client` directive in GraphQL queries

## Local data

Simple version: setting local state directly (similar to React's `setState`):

```js
const client = useApolloClient();

client.writeData({ data: { inputText: '' } });
```

## Local data

local resolvers for mutations:

[https://www.apollographql.com/docs/react/data/local-state/#local-resolvers](https://www.apollographql.com/docs/react/data/local-state/#local-resolvers)

## Local data

Querying local state (via `@client`):

```js
const INPUT_TEXT_QUERY = gql`
  query {
    inputText @client
  }
`;

client
  .query({ query: INPUT_TEXT_QUERY })
  .then((result) => console.log(result));
```

## Apollo Client Developer Tools

extension for Chrome

unreliable according to reviews (3.2 / 5 stars)

functionality:

- view the current cache
- inspect the structure of queries / mutations
- execute queries (and mutations)

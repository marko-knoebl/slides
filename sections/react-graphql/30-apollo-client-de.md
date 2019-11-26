# Apollo Client

## Apollo Client

https://www.apollographql.com/docs/react/

## Apollo Client

Gründe für die Verwendung:

- Automatisches senden von Queries über das Netzwerk
- Automatisches caching
- Automatische Einbindung in das (Re)rendering von React

## Installation

Benötigte npm-Pakete:

- `graphl`
- `graphql-tag`
- `apollo-client`
- `apollo-cache-inmemory`
- `apollo-link-http`
- `react-apollo` (für Verwendung mit React)

Das Paket `apollo-boost` beinhaltet `apollo-client`, `apollo-cache-inmemory`, `apollo-link-http` (und mehr)

## Setup

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

## Beispiel für eine Abfrage

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

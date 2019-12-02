# Apollo Client

## Apollo Client

https://www.apollographql.com/docs/react/

## Apollo Client

Gründe für die Verwendung:

- Automatisches Senden von Queries über das Netzwerk
- Automatisches Caching
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
  .query({ query: LAUNCHES_QUERY })
  .then(result => console.log(result));
```

## Lokale Daten

Apollo kann auch lokale Daten / lokalen State verwalten

Auslesen von lokalem State:

- mittels `@client`-Direktive in Queries

Setzen von lokalem State:

- via `client.writeData` für einfache Fälle
- mittels `@client`-Direktive in Mutationen, und lokalen Resolvern

## Lokale Daten

Einfaches direktes Setzen von lokalem State (ähnlich wie Reacts `setState`):

```js
const client = useApolloClient();

client.writeData({ data: { inputText: '' } });
```

## Lokale Daten

lokale Resolver für Mutationen:

[https://www.apollographql.com/docs/react/data/local-state/#local-resolvers](https://www.apollographql.com/docs/react/data/local-state/#local-resolvers)

## Lokale Daten

Auslesen von lokalem State (via `@client`):

```js
const INPUT_TEXT_QUERY = gql`
  query {
    inputText @client
  }
`;

client
  .query({ query: INPUT_TEXT_QUERY })
  .then(result => console.log(result));
```

## Apollo Client Developer Tools

Erweiterung für Chrome

Laut Bewertungen unzuverlässig (3.2 / 5 Sternen)

Funktionen:

- Betrachten des aktuellen Caches
- Inspizieren der Struktur von Queries / Mutationen
- Ausführen von Queries (und Mutationen)

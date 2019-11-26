# React & GraphQL

## Präsentation und Code

Präsentationen verfügbar unter: https://karuga.eu/courses-presentations

Code verfügbar unter: https://github.com/marko-knoebl/courses-code

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

## Vorstellung der Teilnehmer

- Aktuelle Projekte
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

# GraphQL

## GraphQL

"A query language for your API"

## GraphQL

Verwendung für ein einzelnen APIs, das wiederum mit folgenden Datenquellen kommunizieren kann:

- andere APIs
- Datenbanken

## GraphQL vs REST

### Vorteile von REST

- _etabliert_
- _einfacher_

### Vorteile von GraphQL

- _flexibler_
- _effizienter_

## Vorteile von GraphQL

_Flexibilität_ von GraphQL:

kann komplexe Abfragen beschreiben - serverseitiges API muss für neue Anwendungsfälle nicht angepasst werden

_Effizienz_ von GraphQL:

der Client kann mittels eines Requests genau die benötigten Objekte und Felder anfordern

[Video: GraphQL is the better REST](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)

## Unterschiede zwischen GraphQL und REST

REST: Endpunkt (z.B. `/todos`) und Methode (z.B. `PUT`) sind Teil des APIs; für jede Art von Anfrage muss ein eigener Endpunkt erstellt werden

GraphQL: nur ein Endpunkt (z.B. `/api`), nur POST-Requests

## Unterschiede zwischen GraphQL und REST

REST: Für komplexere Fälle sind mehrere HTTP-Anfragen nötig

GraphQL: Daten werden mit einer einzigen HTTP-Anfrage abgefragt

## Unterschiede zwischen GraphQL und REST

REST: Für jeden Endpunkt werden immer die gleichen Felder zurückgegeben

GraphQL: Der Client kann genau die benötigten Objekte und Felder anfragen

## Anwendungsfälle

- API services: z.B. Generieren einer Zufallszahl zwischen 1 und 100
- Datenbankabfrage: z.B. Abfragen aller Login Namen von Freunden eines bestimmten Benutzers

## Beispiel: Service für Zufallszahlen

Anfrage (GraphQL):

```graphql
query {
  random(min: 1, max: 100)
}
```

Antwort (JSON):

```json
{
  "random": 23
}
```

## Beispiel: Freunde eines Benutzers

```graphql
query {
  user(login: "john") {
    friends {
      login
    }
  }
}
```

```json
{
  "user": {
    "friends": [
      { "login": "mike" },
      { "login": "stephanie" }
    ]
  }
}
```

## Definieren und Abfragen eines GraphQL APIs

Abfragen:

- Query (ausgedrückt in GraphQL)
- evtl Abfrageparameter (in JSON)

Definieren:

- GraphQL Schema
- Resolver-Funktionen

## Beispiel Zufallszahlen

Beispiel zeigt Implementierung und Verwendung eines API für Zufallszahlen - mit Parametern für die Anzahl und den Höchstwert

## Beispiel Zufallszahlen: Definition

Schemadefinition:

```graphql
type Query {
  rand(max: Int!, quantity: Int!): [Int]!
}
```

Resolver-Funktion (abhängig von der verwendeten Library):

```js
(root, args, context) =>
  Array.from({ length: args.quantity }, () =>
    Math.floor(Math.random() * args.max)
  );
```

## Beispiel Zufallszahlen: Feste Abfrage

```graphql
query random {
  rand(max: 10, quantity: 3)
}
```

## Beispiel Zufallszahlen: Parametrische Abfrage

Abfrage:

```graphql
query random($max: Int!, $quantity: Int!) {
  rand(max: $max, quantity: $quantity)
}
```

Abfrageparameter:

```json
{
  "max": 10,
  "quantity": 3
}
```

## Ausprobieren

Vordefiniertes API mit Posts und Benutzern:

https://api.graph.cool/simple/v1/cjmj9v4mk1zs00182rnrzdrai

<!--
source of the predefined API:

howtographql.com - Core Concepts - last "Play" button

try Subscriptions
-->

## Resourcen

- https://graphql.org/learn/
- https://www.howtographql.com/

# GraphQL vs REST: Beispiel

## GraphQL vs REST

Szenario:

Social media App, in der wir eine Liste von Freunden anzeigen können. Ein Klick auf einen Freund zeigt dessen letzte Posts.

## API in REST

```http
GET /users/$myuserid/friends
```

```http
GET /users/$otheruserid/posts
```

## API in GraphQL

```graphql
{
  users(id: "myuserid") {
    friends {
      userid
      name
    }
  }
}
```

## API in GraphQL

```graphql
{
  users(id: "otheruserid") {
    posts {
      date
      title
      body
    }
  }
}
```

## Funktionalität hinzufügen: Feed neuer Posts

Anzeigen neuer Posts aller Freunde

## Funktionalität hinzufügen: Feed neuer Posts

Umsetzung in REST:

- Möglichkeit 1: mehrere Requests senden
- Möglichkeit 2: neuer Endpunkt in der API, z.B. `/postsoffriends/$userid`

## Funktionalität hinzufügen: Feed neuer Posts

Umsetzung in GraphQL:

```graphql
{
  users(id: "$myuserid") {
    friends {
      posts {
        date
        title
        body
      }
    }
  }
}
```

# GraphQL verglichen mit SQL

## GraphQL verglichen mit SQL

```graphql
query {
  user(login: "my-username") {
    login
    name
  }
}
```

```sql
SELECT login, name
  FROM user
  WHERE login="my-username";
```

## GraphQL verglichen mit SQL

GraphQL: Parameter haben keine vordefinierte Bedeutung

In SQL: `WHERE login='my-username'` hat klare Bedeutung

GraphQL: Bedeutung von `login: "my-username"` ist der Implementierung überlassen

## GraphQL verglichen mit SQL

SQL: Beziehungen zwischen Tabellen (Joins) werden in der Query definiert

GraphQL: kennt die Beziehungen bereits → einfachere Queries

## GraphQL verglichen mit SQL

```graphql
query {
  user(id: "my-username") {
    posts {
      name
    }
  }
}
```

```sql
SELECT name
  FROM user
  INNER JOIN post ON user.id = post.userId
  WHERE user.id = "my-username"
```

(extra Code: `INNER JOIN post ON user.id = post.userId`)

## GraphQL verglichen mit SQL

**OpenCRUD**: spezifischerer Standard, der auf GraphQL basiert - er kann anstelle von SQL verwendet werden

# GraphQL Clients

## GraphQL Clients

- _graphql.js_: Referenzimplementierung
- _Apollo Client_: einfache Integration mit React sowie mit Vue, Angular, ...
- _Relay_: fortgeschrittene Integration mit React

# Queries

## Beispiele für GraphQL-APIs

from https://github.com/APIs-guru/graphql-apis:

- GitHub (login benötigt)
- Reddit (GraphQL Hub)
- GraphQL Pokémon (zweiter Eintrag!)
- Star Wars
- SpaceX Land
- FakeQL: Mock APIs

## GraphiQL Explorer

Graph*i*QL: browserbasierter Explorer für GraphQL APIs

- Abfragestruktur / Datenstruktur ansehen (_Docs_ oben rechts in der Ansicht)
- Abfragen senden

## Einfache Übungen

- Liste von Titeln aller Star Wars Filme
- Liste von Planeten und Einwohnerzahl aus Star Wars
- Liste von Schiffen, gruppiert nach Filmen, in denen sie vorkommen

## Übung: Liste von Titeln

```graphql
query getTitles {
  allFilms {
    films {
      title
    }
  }
}
```

## Übung: Liste von Planeten und Einwohnerzahlen

```graphql
query getPlanetsWithPopulations {
  allPlanets {
    planets {
      name
      population
    }
  }
}
```

## Übung: Liste von Schiffen gruppiert nach Filmen

```graphql
query getStarshipsByFilm {
  allFilms {
    films {
      title
      starshipConnection {
        starships {
          name
        }
      }
    }
  }
}
```

## Abfrageparameter

Abfrage eines Pokémons mit angegebenem Namen:

```graphql
query getCharmander {
  pokemon(name: "Charmander") {
    name
    weight {
      minimum
      maximum
    }
  }
}
```

## Abfrageparameter

Abfragen der ersten drei Pokémon in der Datenbank

```graphql
query getFirstThree {
  pokemons(first: 3) {
    name
  }
}
```

Anmerkung: Die server-seitige Implementierung entscheidet über die unterstützten Parameter (z.B. _first_, _orderBy_, ...)

## Abfrageparameter: Übungen

- Name, Gewicht und Klassifizierung von Pikachu
- Name und Gewicht der ersten drei Pokémon

## Verpflichtende und optionale Parameter

Verpflichtende Parameter sind mit `!` gekennzeichnet - ebenso wie zurückgegebene Attribute, die immer vorhanden sind.

## Variablen

Abfrage:

```graphql
query getPokemonByName($name: String) {
  pokemon(name: $name) {
    name
    number
    image
  }
}
```

Variablen:

```json
{
  "name": "Pikachu"
}
```

## Modifizieren von Daten

https://todo-mongo-graphql-server.herokuapp.com/

(nur Definition einer Query möglich)

## Modifizieren von Daten

Befehl, der die `add`-Aktion am Server triggert und die id des neuen Todos zurückliefert:

```graphql
mutation addTodo($title: String!) {
  add(title: $title) {
    id
  }
}
```

```json
{
  "title": "shopping"
}
```

## Modifizieren von Daten

```graphql
mutation toggleTodo($id: String!) {
  toggle(id: $id) {
    id
    completed
  }
}
```

## Modifizieren von Daten

```graphql
mutation addOneAndClearCompleted($title: String!) {
  add(title: $title) {
    id
  }
  clearCompleted {
    id
  }
}
```

## Modifizieren von Daten

Aufgabe: Schreibe eine Query, die alle bisherigen Einträge löscht und zwei neue erstellt

## Modifizieren von Daten

```graphql
mutation reset {
  toggleAll(checked: true) {
    id
  }
  clearCompleted {
    id
  }
  firstAddition: add(title: "Count to 34") {
    id
  }
  secondAddition: add(title: "Count to 45") {
    id
  }
}
```

## Mehr Übungen - optional

- Frage alle "follower von followern" für einen bestimmten GitHub-Account ab
- Frage für einen bestimmten GitHub-Account alle Projekte mit Namen und Sternenanzahl ab

## Mehr Übungen - Lösungen

```
query {
  user (login: "marko-knoebl") {
    followers (first: 10) {
      nodes {
        login,
        followers (first: 10) {
          nodes {
            login
          }
        }
      }
    }
  }
}
```

## Mehr Übungen - Lösungen

```
query {
  user (login: "marko-knoebl") {
    id,
    email,
    repositories (first: 100, orderBy: {field: STARGAZERS, direction: DESC}) {
      nodes {
        name,
        stargazers {
          totalCount
        }
      }
    }
  }
}
```

## Übung: Laden von Todos von einer GraphQL API

Lade Todos von [https://5qn401kkl9.lp.gql.zone/graphql](https://5qn401kkl9.lp.gql.zone/graphql)

(admin: https://launchpad.graphql.com/5qn401kkl9)

# Queries - Fortgeschritten

## Standardwerte für Variablen

```graphql
query getPokemonByName($name: String = "Pikachu") {
  pokemon(name: $name) {
    number
    image
  }
}
```

## Aliases

Aufgabe: Nummer von Pikachu und Raichu (Pokémon API)

## Aliases

Die bekannte Art klappt nicht:

```graphql
query getTwo {
  pokemon(name: "Pikachu") {
    number
  }
  pokemon(name: "Raichu") {
    number
  }
}
```

## Aliases

Die Antwort hätte die folgende Struktur:

```json
{
  "data": {
    "pokemon": {
      "number": "025"
    },
    "pokemon": {
      "number": "026"
    }
  }
}
```

Der Key `pokemon` wäre doppelt.

## Aliases

Ausweg aus dem Problem:

```graphql
query getTwo {
  pokemon1: pokemon(name: "Pikachu") {
    number
  }
  pokemon2: pokemon(name: "Raichu") {
    number
  }
}
```

## Aliases

Antwort:

```json
{
  "data": {
    "pokemon1": {
      "number": "025"
    },
    "pokemon2": {
      "number": "026"
    }
  }
}
```

## Fragmente

Fragmente bieten "Vorlagen" für Queries - weniger Wiederholung

## Fragmente

```graphql
query getTwo {
  pokemon1: pokemon(name: "Pikachu") {
    ...essentialData
  }
  pokemon2: pokemon(name: "Raichu") {
    ...essentialData
    id
  }
}

fragment essentialData on Pokemon {
  number
  maxHP
  image
}
```

# Datentypen

## Datentypen

Bei GraphQL sind die zurückgegebenen Datentypen immer bekannt.

## Datentypen

verfügbare Typen:

- Boolean
- Int: 32-bit int (signed)
- Float: 64-bit Gleitkommazahl
- String: UTF-8 Zeichenkette
- ID: Eindeutige ID als String
- Object: Objekt mit vordefinierten Einträgen
- List: Liste, die bestimmte andere Typen beinhaltet

# GraphQL mit reinem JavaScript

## Senden von Queries an den Server

Queries werden mittesl POST-Requests gesendet

Payload ist ein JSON-Objekt mit einer `query` string property (auch bei Mutationen) und optional einer `variables` property.

## Senden von Queries an den Server

Testen aus der Browserkonsole (wir müssen uns auf der gleichen Seite befinden):

```js
const requestBody = {
  query:
    'mutation addTodo($title: String!) { add(title: $title) { id } }',
  variables: '{"title": "test"}',
};

const requestBodyStr = JSON.stringify(requestBody);

fetch('https://todo-mongo-graphql-server.herokuapp.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: requestBodyStr,
}).then(console.log);
```

## Beispiel: reddit API

```js
const queryTemplate = `
{
  reddit {
    subreddit(name: "javascript") {
      newListings(limit: 2) {
        title
      }
    }
  }
}`;
```

## Beispiel: reddit API

```js
fetch('https://www.graphqlhub.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({ query: queryTemplate }),
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
```

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


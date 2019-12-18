# GraphQL

## GraphQL

"A query language for your API"

## GraphQL

Verwendung für ein einzelnes APIs, das wiederum mit folgenden Datenquellen kommunizieren kann:

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

Anfrage:

```graphql
query {
  user(login: "john") {
    login
    friends {
      login
    }
  }
}
```

## Beispiel: Feunde eines Benutzers

Antwort:

```json
{
  "user": {
    "login": "john",
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

Abfrageparameter (JSON):

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

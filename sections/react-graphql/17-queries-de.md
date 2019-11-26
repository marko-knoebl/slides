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

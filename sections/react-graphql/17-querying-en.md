# Querying

## GraphQL examples

from https://github.com/APIs-guru/graphql-apis:

- GitHub (login required)
- Reddit (GraphQL Hub)
- GraphQL Pokémon (second entry!)
- Star Wars
- SpaceX Land

## GraphiQL explorer

Graph*i*QL: Browser-based explorer for GraphQL APIs

- see query structure / data structure (click "Docs" in the top right)
- send experimental queries

## Simple GraphQL exercises

- Get a list of titles of all Star Wars films in the database
- Get a list of planets and planet populations from Star Wars
- Get a list of starships grouped by films they appear in

## List of titles of Star Wars films

```graphql
query getTitles {
  allFilms {
    films {
      title
    }
  }
}
```

## List of planets and planet populations

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

## List of starships grouped by film

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

## Query parameters

Only query the pokémon with the specified name

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

## Query parameters

Query the first three pokémon in the database

```graphql
query getFirstThree {
  pokemons(first: 3) {
    name
  }
}
```

Note: specifying a _first_ parameter is possible because it's implemented on the server-side. It's not part of the GraphQL standard. GraphQL _may_ also implement other arbitrary parameters like _orderBy_ or _matchRegex_, but this is all up to the server.

## Query parameters: exercises

- get the name, weight and classification of Pikachu
- get the name and weight of the first three pokémon

## Required and optional parameters

Required parameters are marked with a `!`. These must always be included. Similarly, returned attributes that will always be present (like `id`) will be marked in the same way.

## Variables

query:

```graphql
query getPokemonByName($name: String) {
  pokemon(name: $name) {
    name
    number
    image
  }
}
```

variables:

```json
{
  "name": "Pikachu"
}
```

## Modifying data

https://todo-mongo-graphql-server.herokuapp.com/

(only one query at a time)

## Modifying data

Command that triggers the server's `add` action and returns the id of the new TODO

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

## Modifying data

```graphql
mutation toggleTodo($id: String!) {
  toggle(id: $id) {
    id
    completed
  }
}
```

## Modifying data

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

## Modifying data

Task: write a query that will delete all previous entries and add two new ones

## Modifying data

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

## More exercises - optional

- Get all "followers of followers" for a specific GitHub account
- Get the name of a project and number of stars for all GitHub projects of a specific user

## More exercises - solutions

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

## More exercises - solutions

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

## Task: loading Todos from a GraphQL API

Load todos from `https://5qn401kkl9.lp.gql.zone/graphql`

(admin: https://launchpad.graphql.com/5qn401kkl9)

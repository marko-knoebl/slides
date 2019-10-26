# consuming GraphQL



## GraphQL examples

from https://github.com/APIs-guru/graphql-apis

- Location
- GitHub (login required)
- Reddit
- GraphQL Pokémon (second entry!)
- Star Wars



## GraphiQL explorer

Graph*i*QL: Browser-based explorer for GraphQL APIs

- see query structure / data structure (click "Docs" in the top right)
- send experimental queries



## simple GraphQL exercises

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

so far we've seen how we can define the structure of our query

next we want to specify parameters within our queries



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



## Aliases

Task: number of Pikachu and Raichu



## Aliases

This cannot be done the way we know:

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

Why does this not work? The result would look like this:

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

Note the duplicate key: `pokemon`!



## Aliases

In order to avoid this problem we use aliases:

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



## Fragments

Task: get the number, maxHP and image of Pikachu and Raichu



## Fragments - why?

```graphql
query getTwo {
  pokemon1: pokemon(name: "Pikachu") {
    number
    maxHP
    image
  }
  pokemon2: pokemon(name: "Raichu") {
    number
    maxHP
    image
  }
}
```



## Fragments: don't repeat yourself!



## Fragments: don't repeat yourself!

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



## Variables

query:

```graphql
query getEssentialData($name: String) {
  pokemon(name: $name) {
    ...essentialData
  }
}
```

variables:

```json
{
  "name": "Pikachu"
}
```



## Default variable valuess

query:

```graphql
query getEssentialData($name: String = "Pikachu") {
  pokemon(name: $name) {
    ...essentialData
  }
}
```

## Todo: Directives



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
  "title": "count to 42"
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



## Sending queries to the server

Queries are sent to the server via HTTP POST requests

The payload is a JSON object which has a `query` string property (this is also true when sending mutations)



## Sending queries to the server

We can try this out from the browser console via fetch (we have to be on the same website):

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



## Sending queries to the server

Queries may optionally include variables in the `variables` property

```json
{
  "query": "mutation addTodo($title: String!) { add(title: $title) { id } }",
  "variables": "{\"title\": \"test\"}"
}
```



## More exercises - optional

Get all "followers of followers" for a specific GitHub account

Get the name of a project and number of stars for all GitHub projects of a specific user

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

## task: loading Todos from a GraphQL API

create a thunk that will load example todos from `https://5qn401kkl9.lp.gql.zone/graphql`

(admin: https://launchpad.graphql.com/5qn401kkl9)

# Simple examples

## Simple examples

[Star Wars API](https://graphql.org/swapi-graphql/):

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

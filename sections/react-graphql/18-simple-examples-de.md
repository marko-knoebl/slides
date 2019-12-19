# Einfache Beispiele

## Einfache Beispiele

[Star Wars API](https://graphql.org/swapi-graphql/):

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

# Queries - Advanced

## Default variable valuess

```graphql
query getPokemonByName($name: String = "Pikachu") {
  pokemon(name: $name) {
    number
    image
  }
}
```

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

## Aliases

response:

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

## Fragments

Task: get the number, maxHP and image of Pikachu and Raichu

## Fragments

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

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

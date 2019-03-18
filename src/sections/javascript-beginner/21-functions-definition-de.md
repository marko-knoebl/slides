# Funktionsdefinition

## Funktionsdefinition

<!-- prettier-ignore -->
```js
// function statement
function double1(value) {
  return 2 * value;
}

// function expression
const double2 = function(value) {
  return 2 * value;
}

// arrow function
const double3 = (value) => {
  return 2 * value;
}
const double4 = (value) => 2 * value;
```

## Pfeilfunktionen

Seit ES2015 Teil des Standards

<!-- prettier-ignore -->
```js
const triple1 = (value) => {
  return value * 3;
};
// wenn der Funktionskörper nur aus einem einzelnen
// Return-Statement besteht: Kurzschreibweise:
const triple2 = (value) => value * 3;
// wenn es genau einen Parameter gibt, können die
// Parameterklammern weggelassen werden:
const triple3 = value => value * 3;
```

## Pfeilfunktionen

Achtung: `{` und `}` sind mehrdeutig

```js
// unzulässig:
const getPerson1 = () => {
  firstName: 'Thomas',
  lastName: 'Edison',
  birthYear: 1847,
};
// stattdessen:
const getPerson1 = () => ({
  firstName: 'Thomas',
  lastName: 'Edison',
  birthYear: 1847,
});
```

## Standardparameter in Funktionen

In Funktionen können Standardwerte für Parameter definiert werden:

```js
let join = (strings, separator='') => {
  ...
}
```

# Funktionsdefinition

## Funktionsdefinition

### Function Statement

<!-- prettier-ignore -->
```js
function double1(value) {
  return 2 * value;
}
```

### Function Expression

```js
const double2 = function(value) {
  return 2 * value;
};
```

## Funktionsdefinition

### Pfeilfunktion

Seit ES2015 Teil des Standards

<!-- prettier-ignore -->
```js
const double3 = (value) => {
  return 2 * value;
}
```

## Pfeilfunktionen

Wenn der Funktionskörper nur aus einem einzelnen Return-Statement besteht: Kurzschreibweise:

<!-- prettier-ignore -->
```js
const double4 = (value) => value * 2;
```

Wenn es genau einen Parameter gibt, können die Parameterklammern weggelassen werden:

```js
const double5 = value => value * 2;
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

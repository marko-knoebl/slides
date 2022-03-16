# Grundlegende (primitive) Datentypen

## Grundlegende (primitive) Datentypen

- `Number`
- `String`
- `Boolean`
- `null`: fehlender / unbekannter Wert
- `undefined`: (noch) nicht zugewiesen

## Zusammensetzen von Strings

Zusammensetzen von mehreren Strings:

```js
let name = 'Tom';
let message = 'Hello, ' + name + '!';
```

## Template Strings

weitere Möglichkeit, Strings zu erstellen - mit _Backticks_ begrenzt (`)

Erlauben das Einsetzen von Werten

```js
let name = 'Tom';
let message = `Hello, ${name}!`;
```

## Boolean

Boolescher Wert: Ja/Nein - Wert

In JavaScript: `true` oder `false`

## Null

Null repräsentiert einen unbekannten oder fehlenden Wert

```js
let firstName = 'Michael';
let middleName = null;
let lastName = 'Jones';
```

## Undefined

Undefined tritt z.B. bei Variablen auf, die noch nicht zugewiesen wurden

```js
let firstName;
```

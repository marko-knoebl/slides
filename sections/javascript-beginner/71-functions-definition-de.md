# Funktionsdefinition

## Funktionsdefinition

"traditionelle" Funktionsdefintion:

```js
function average(a, b) {
  let m = (a + b) / 2;
  return m;
}
```

## Standardwerte für Parameter

In Funktionen können Standardwerte für Parameter definiert werden:

```js
function join(strings, separator = '') {
  // ...
}
```

Aufruf:

```js
join(['foo', 'bar'], '-');
join(['foo', 'bar']);
```

## Scope

Eine Funktionsdefinition öffnet einen neuen _Scope_, einen Geltungsbereich für Variablen

Im folgenden Beispiel: zwei separate Variablen, die beide mit `m` benannt sind:

```js
let m = 'Hello, world';

function average(a, b) {
  let m = (a + b) / 2;
  return m;
}
x = average(1, 2);

console.log(m); // logs "Hello, world"
```

## Funktionsausdrücke

Alternative Möglichkeiten, Funktionen zu definieren:

Pfeilfunktion:

```js
let average = (a, b) => {
  let m = (a + b) / 2;
  return m;
};
```

Funktionsausdruck (heutzutage weniger verbreitet)

```js
let average = function (a, b) {
  let m = (a + b) / 2;
  return m;
};
```

## Pfeilfunktionen

Kurzschreibweise einer Pfeilfunktion, wenn der Rückgabewert ein einzelner Ausdruck ist:

```js
let average = (a, b) => (a + b) / 2;
```

Klammern für den Codeblock und `return` werden weggelassen

## Pfeilfunktionen

Achtung: `{` und `}` sind mehrdeutig (können sowohl Objekte als auch Codeblöcke begrenzen)

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

# JavaScript Grundlagen

## Ausgabe

In Popup-Fenster:

```js
alert('Hello');
```

In der Browser-Konsole:

```js
console.log('Hello');
```

## Variablen

Variablen werden mit `let` deklariert (altes Schlüsselwort: `var`)

Sie sind nur in den umgebenden geschweiften Klammern gültig

```js
// Kommentar
if (true) {
  let a = 3;
  console.log(a);
}
```

## Konstanten

Mit `const` werden Variablen deklariert, die nicht neu zugewiesen werden können.

```js
const a = 3;
// ungültig
a = 4;
```

## Das Semikolon in JavaScript

In JavaScript sind Semikolons in den meisten Fällen optional; sie werden bei der Ausführung automatisch nach bestimmten Regeln eingesetzt.

## JavaScript - das Simikolon

Die _automatic semicolon insertion_ kann zu Problemen führen:

<!-- prettier-ignore-start -->
```js
function foo() {
  return
    "hello";
}
```

wird interpretiert als:

```js
function foo() {
  return;
  "hello";
}
```
<!-- prettier-ignore-end -->

## Datentypen

<!-- prettier-ignore -->
```js
let a = 3; // number

let name = 'Alice'; // string
let name2 = "Bob"; // string

let active = true; // boolean
```

## Datentypen: Arrays

```js
let people = ['Alice', 'Bob', 'Charlie'];

people[2]; //Charlie
people[2] = 'Chris';

people.push('Dan');

people.splice(1, 1);
```

## Datentypen: Objekte

```js
let person = {
  firstName: 'Thomas',
  lastName: 'Edison',
  birthYear: 1847,
};

console.log(person.lastName);
```

## JavaScript - strikte Vergleiche

Die Operatoren `===` und `!==` dienen zum strikten Vergleichen von Objekten; viele Entwickler verwenden sie grundsätzlich anstatt `==` und `!=`.

Beispiele:

```js
3 === '3'; // false
3 == '3'; // true
0 == []; // true
[] == ''; // true
```

## if / else if / else

```js
if (input === 'yes' || input === 'y') {
  console.log('positive');
} else if (input === 'no' || input === 'n') {
  console.log('negative');
} else {
  console.log('unknown');
}
```

## Array-Iteration (for ... of)

Über die Einträge in einem Array iterieren:

```js
let names = ['Anna', 'Bernhard', 'Caro'];
for (let name of names) {
  console.log(name);
}
```

## Template-Strings

- Neue Syntax zum _Erstellen_ von Strings
- Werden mit Backticks begrenzt
- Erlauben mehrzeilige Strings und Interpolation:

```js
let name = 'Anton';
let greeting = `Hallo, ${name}!
                Das ist ES2015!`;
```

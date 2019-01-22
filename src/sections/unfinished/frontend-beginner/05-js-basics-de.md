# JavaScript - Grundlagen

---

## JavaScript - Variablen und Datentypen

```js
let a = 3; // number

let name = 'Alice'; // string
let name2 = 'Bob';

let active = true;
```

---

## JavaScript - Arrays

```js
let people = ['Alice', 'Bob', 'Charlie'];

console.log(people[2]);
people[2] = 'Chris';

people.push('Dan');

people.splice(1, 1);
```

---

## JavaScript - Objekte

```js
let person = {
  firstName: 'Thomas',
  lastName: 'Edison',
  birthYear: 1847,
};

console.log(person.lastName);
```

---

## JavaScript - Input / Output

```js
alert('You are the 1000.000th visitor on this site!');

var name = prompt("What's your name?");

console.log(name);
```

---

## JavaScript - das Semikolon

Semikolons sind in JavaScript meist optional; Sie werden durch einen Mechanismus namens _automatic semicolon insertion_ automatisch ergänzt.

---

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

---

## JavaScript - strikte Vergleiche

Die Operatoren `===` und `!==` dienen zum strikten Vergleichen von Objekten; viele Entwickler verwenden sie grundsätzlich anstatt `==` und `!=`.

Beispiele:

```js
3 === '3'; // false
3 == '3'; // true
0 == []; // true
[] == ""; // true
```

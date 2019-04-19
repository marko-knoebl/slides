# Kontrollstrukturen

## Kontrollstrukturen

Mit Kontrollstrukturen können wir bestimmten Code z.B. wiederholt ausführen lassen, oder Code nur in bestimmten Situationen ausführen lassen

## Kontrollstrukturen

Die zwei essenziellen Kontrollstrukturen in jeder Programmiersprache:

- if/else-Abfragen, um unter bestimmten Bedingungen die eine oder die andere Aktion zu setzen
- Schleifen, um unter bestimmten Bedingungen eine Aktion zu wiederholen

## Vergleiche

Für den Einsatz von grundlegenden Kontrollstrukturen müssen wir Werte vergleichen können:

```js
let a = 2;
let b = 3;
let c = '2';

console.log(a == b); // a gleich b
console.log(a == c); // a gleich c
console.log(a === c); // a gleich c (strikt)

console.log(a != c); // a ungleich b
console.log(a !== c); // a ungleich c (strikt)
```

## Vergleiche

Viele Entwickler verwenden nur die strikten Vergleichsoperatoren `===` und `!==`, um unterwartete Fehler zu vermeiden

weitere Beispiele:

```js
3 === '3'; // false
3 == '3'; // true
0 == []; // true
[] == ''; // true
```

## Vergleiche

```js
console.log(a < b); // a kleiner b
console.log(a > b);
console.log(a <= b); // a kleiner oder gleich b
console.log(a >= b);
```

## if / else

wenn, dann - sonst

## if / else

Beispiel:

```js
let age = 30;
let ageSeconds = age * 365 * 24 * 60 * 60;

if (ageSeconds <= 1000000000) {
  console.log('You are less than 1 billion seconds old.');
} else {
  console.log('You are older than 1 billion seconds.');
}
```

## if / else if ... / else

```js
if (ageSeconds <= 100000000) {
  console.log('You are less than 100 million seconds old.');
} else if (ageSeconds < 1000000000) {
  console.log('You are less than 1 billion seconds old');
} else if (ageSeconds < 1000000000) {
  console.log('You are less than 2 billion seconds old');
} else {
  console.log('You are older than 2 billion seconds');
}
```

## if / else if ... / else

Beispiel: Zahlenraten

## Codeblöcke

Codeblock = Zusammengehörige Codezeilen, die z.B. als Resultat einer if-Abfrage ausgeführt werden.

In den meisten Programmiersprachen werden Codeblöcke mit geschweiften Klammern begrenzt.

## Codeblöcke

```js
let a = 3;
if (a === 3) {
  let message = 'a equals 3'.
}
console.log(message); // ReferenceError!
```

## while-Schleife

Eine if-Abfrage führt einen Codeblock _einmal_ aus, wenn ein Kriterium zutrifft

Eine while-Schleife wiederholt einen Codeblock, solange ein Kriterium zutrifft

Beispiel:

```js
a = 1;

while (a < 2000) {
  console.log(a);
  a = a * 2;
}
```

## while-Schleife

Übungen:

- Zahlenraten mit mehreren Versuchen
- Schleife, die die Zahlen 1 bis 10 ausgibt
- Schleife, die die Zahlen der 7er-Reihe des Einmaleins ausgibt
- Zahlenraten mit echten Zufallszahlen
- Rechentrainer mit Zufallsaufgaben

## Verknüpfung von Vergleichen

einfach:

```js
if (a === 3) {
  console.log('a equals 3');
}
```

komplexer:

```js
if (a > 3 && a < 10) {
  console.log('a lies between 3 and 10');
}
```

## Verknüpfung von Vergleichen

Operationen:

- `&&` = und
- `||` = oder
- `!` = nicht

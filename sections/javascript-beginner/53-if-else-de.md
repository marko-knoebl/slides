# If / else

## If / else

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
} else if (ageSeconds < 2000000000) {
  console.log('You are less than 2 billion seconds old');
} else {
  console.log('You are older than 2 billion seconds');
}
```

## Codeblöcke

Codeblock = Zusammengehörige Codezeilen, die z.B. als Resultat einer if-Abfrage ausgeführt werden

in den meisten Programmiersprachen: mit geschweiften Klammern begrenzt

typischerweise eingerückt (z.B. mit 2 Leerzeichen)

## Codeblöcke

**Scope**: Variablen sind nur innerhalb von Codeblöcken verfügbar, in denen sie (z.B. mit `let`) deklariert wurden

```js
let a = 3;
if (a > 3) {
  let message = 'a is positive';
} else {
  let message = 'a is negative or 0';
}
console.log(message); // ReferenceError!
```

## Codeblöcke

korrigierter Code:

```js
let a = 3;
let message;
if (a > 3) {
  message = 'a is positive';
} else {
  message = 'a is negative or 0';
}
console.log(message);
```

## Beispiel und Übung: Münzwurf

```js
let coinSide;
// random number between 0 and 1
let number = Math.random();
if (number > 0.5) {
  coinSide = 'heads';
} else {
  coinSide = 'tails';
}
```

Weitere Übung: Lasse den Benutzer das Ergebnis raten und teile ihm mit, ob er richtig lag

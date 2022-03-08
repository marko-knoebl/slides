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

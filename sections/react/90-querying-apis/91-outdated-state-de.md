# Veralteter State

## Veralteter State

manchmals haben wir keinen direkten Zugriff auf den aktuellsten State, wenn wir einen neuen State festsetzen

spezielles Szenario: asynchrone Events in Funktionskomponenten (z.B. Netzwerkanfragen)

## Veralteter State

Beispiel:

```js
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}
function incrementTwice() {
  setCount(count + 1);
  setCount(count + 1);
}
function incrementWithDelay() {
  setTimeout(increment, 3000);
}
```

`incrementTwice` und `incrementWithDelay` können unerwartetes Verhalten haben

## Veralteter State

mögliche Lösung:

```js
setCount((c) => c + 1);
```

anstatt direkt den neuen State zu übergeben, übergeben wir eine "State-Transformations-Funktion"

## Veralteter State

"State-Transformations-Funktionen" werden üblicherweise mit asynchronem Code verwendet, um Probleme mit veraltetem State zu vermeiden:

```js
setUsdRates((usdRates) => ({
  ...usdRates,
  [currency]: rate,
}));
```

(dies behebt ein Problem, wenn zwei Wechselkurse gleichzeitig abgefragt werden)

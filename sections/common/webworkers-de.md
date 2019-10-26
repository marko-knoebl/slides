# Web worker

## Web worker

Möglichkeit, Scripts im Hintergrund (in einem eigenen Thread) laufen zu lassen

Können genutzt werden, um intensive Berechnungen durchzuführen - blockieren die User-Interaktion mit der Website nicht.

## Worker erstellen

```js
const worker = new Worker('worker.js');
```

## Auf Antwort des Workers lauschen

```js
worker.onmessage = function(message) {
  console.log(message.data);
};
```

## Dem Worker zu arbeiten geben

```js
worker.postMessage(42);
```

## Im Worker selbst

```js
onmessage = function(message) {
  const result = longComputation();
  postMessage(result);
};
```

## Daten übergeben

Beim hin-und-her-Übergeben von Daten: Daten werden kopiert und als 'plain' JS-Objekte verwertet

## Übung: Fibonacci

Im WebWorker laufen lassen:

```js
function fib(n) {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
```

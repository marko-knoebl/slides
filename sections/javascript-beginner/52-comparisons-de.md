# Vergleiche

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

Beispiele:

```js
3 === '3'; // false
3 == '3'; // true
0 == []; // true
[] == ''; // true
```

## Vergleiche

```js
console.log(a < b); // less than
console.log(a > b);
console.log(a <= b); // less than or equal to
console.log(a >= b);
```

## Vergleiche

Das Resultat eines Vergleichs ist ein _boolescher Wert_ (`True` / `False`)

Wir können das Resultat in einer Variablen speichern:

```js
let isAdult = age >= 18;
```

## Verknüpfung mit &&, ||, !

- `&&` bedeutet _und_
- `||` bedeutet _oder_
- `!` bedeutet _nicht_

## Verknüpfung mit &&, ||, !

Beispiele:

```js
let canBecomeUsPresident =
  person.age >= 35 && person.nationality === 'us';
```

```js
let isTemperatureExtreme =
  temperatureCelsius < -10 || temperatureCelsius > 40;
```

```js
let isTemperatureNormal = !isTemperatureExtreme;
```

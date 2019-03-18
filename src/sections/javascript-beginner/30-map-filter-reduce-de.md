# map, filter, reduce

### Array-Methoden für die funktionale Programmierung

## map

- Ändert jeden Eintrag eines Arrays mit Hilfe einer Funktion ab
- Rückgabewert: neues Array

```js
let myNumbers = [2, 10, 23];

let triple = n => 3 * n;

let newNumbers = myNumbers.map(triple);
// [6, 30, 69]
```

## filter

- Behält nur gewisse Einträge in einem Array
- Nutzt eine Funktion, um Einträge auf ein bestimmtes Kriterium zu testen
- Rückgabewert: neues Array

```js
let myNumbers = [2, 10, 23];

let isEven = n => n % 2 === 0;

let newNumbers = myNumbers.filter(isEven);
// [2, 10]
```

## reduce

- computes one value based on a start value and all entries in an array
- uses a function that computes a resulting value from two given values - this function will be called repeatedly

## reduce - example

```js
let transactions = [
  { amount: -56, title: 'groceries' },
  { amount: +1020, title: 'salary' },
  { amount: -13, title: 'dinner' },
  { amount: -96, title: 'electricity' },
];
let initialBalance = 317;

let currentBalance = transactions.reduce(
  (aggregator, transaction) =>
    aggregator + transaction.amount
);

// 317 -> 261 -> 1281 -> 1268 -> 1172
```

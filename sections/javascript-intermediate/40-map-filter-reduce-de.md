# map, filter, reduce

<!-- note: this is partially duplicated in javascript-basics-for-react -->

### Array-Methoden für die funktionale Programmierung

## map

- Ändert jeden Eintrag eines Arrays mit Hilfe einer Funktion ab
- Rückgabewert: neues Array

```js
const myNumbers = [1, 2, 3];

const newNumbers = myNumbers.map((n) => 3 * n);
// [3, 6, 9]
```

## filter

- Behält nur gewisse Einträge in einem Array
- Nutzt eine Funktion, um Einträge auf ein bestimmtes Kriterium zu testen
- Rückgabewert: neues Array

```js
const myNumbers = [1, 2, 3, 4];

const isEven = (n) => n % 2 === 0;

const evenNumbers = myNumbers.filter(isEven);
// [2, 4]
```

## reduce

- Verarbeitet die Einträge in einem Array zu einem einzelnen Wert
- Verwendet eine Funktion, die aus zwei bestehenden Werten einen resultierenden Wert erstellt - diese Funktion wird wiederholt aufgerufen

## reduce - Beispiel

```js
const initialBalance = 300;
const transactions = [
  { amount: -50, title: 'groceries' },
  { amount: +1000, title: 'salary' },
  { amount: -10, title: 'dinner' },
  { amount: -100, title: 'electricity' },
];

const reducer = (aggregator, transaction) =>
  aggregator + transaction.amount;

const currentBalance = transactions.reduce(
  reducer,
  initialBalance
);

// 300 -> 250 -> 1250 -> 1240 -> 1140
```

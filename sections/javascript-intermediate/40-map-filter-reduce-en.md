# map, filter, reduce

<!-- note: this is partially duplicated in javascript-basics-for-react -->

### Array methods for functional programming

## map

- modifies each entry in an array via a function
- returns a new array

```js
const myNumbers = [1, 2, 3];

const newNumbers = myNumbers.map((n) => 3 * n);
// [3, 6, 9]
```

## filter

- only keeps specific entries in an array
- uses a function to check entries for a specific condition
- returns a new array

```js
const myNumbers = [1, 2, 3, 4];

const isEven = (n) => n % 2 === 0;

const evenNumbers = myNumbers.filter(isEven);
// [2, 4]
```

## reduce

- computes one value based on a start value and all entries in an array
- uses a function that computes a resulting value from two given values - this function will be called repeatedly

## reduce - example

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

# Funktionale Programmierung

```js
// Funktionale Programmierung in JS (mit Arrays)

// map
var numbers = [2, 4, 5, 10, 24];

var doubleNumbers = numbers.map(function(n) {
  return 2 * n;
});

console.log(doubleNumbers);

// filter
function isEven(n) {
  return n % 2 ? false : true;
}

var filteredNumbers = numbers.filter(isEven);

console.log(filteredNumbers);

// reduce
var transactions = [+1234, -27, -13, -44];
var initialBalance = 317;

var currentBalance = transactions.reduce(function(
  aggregator,
  amount
) {
  return aggregator + amount;
},
initialBalance);

console.log(currentBalance);
```

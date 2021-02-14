# Prime number quiz

Create a quiz that shows an _odd_ number from 1-99. The user has to guess if it is a prime number or not.

Show statistics on correct / incorrect answers the user has given so far.

You can use these helper functions:

```js
// create a random odd number in the range 1-99
const randomOddNumber = () => Math.floor(Math.random() * 50) * 2 + 1;
```

```js
const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
```

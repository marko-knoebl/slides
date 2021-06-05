# Outdated state

## Outdated state

Sometimes, we may not have direct access to the most recent state entries when computing a new state

particular scenario: asynchronous events in function components (e.g. network requests)

## Outdated state

example:

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

`incrementTwice` and `incrementWithDelay` may have some unexpected behavior

## Outdated state

possible solution:

```js
setCount((c) => c + 1);
```

instead of directly passing the new state, we pass a "state transformer function" - it will be used to _queue_ state updates

## Outdated state

we will commonly use "state transformer functions" in asynchronous code to avoid issues with outdated state:

```js
setUsdRates((usdRates) => ({
  ...usdRates,
  [currency]: rate,
}));
```

(this fixes an issue when two rates are requested at the same time)

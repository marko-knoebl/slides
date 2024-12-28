# Promises

## Promises

Promise: JavaScript class that represents future results

Promises are used internally when `async` / `await` is used

## Promises

we can access promises if we "forget" to await an asynchronous result:

```js
// a will be a promise
const a = fetch('...');

// b will be the actual result
const b = await a;
```

## Promises

real-world example:

You place an order at a fast food restaurant. The cashier hands you this receipt:

```txt
order #42:

- cheeseburger
- small fries

The order will be served to you at your seat when ready.
```

the receipt is a "promise" - a representation of a future result

## Promises

waiting for a promise to _resolve_:

- `await`
- `.then()`

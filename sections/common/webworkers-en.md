# Web workers

## Web workers

- enable running a script in the background (in a separate thread)
- can be used to run expensive computations - don't block user interaction

## Web workers

creating a worker

```js
const worker = new Worker('worker.js');
```

## Web workers

listening for messages from the worker

```js
worker.onmessage = function(message) {
  console.log(message.data);
};
```

## Web workers

passing some task to a worker

```js
worker.postMessage(42);
```

## Web workers

inside the worker:

```js
onmessage = function(message) {
  const result = longComputation(message);
  postMessage(result);
};
```

## Web workers

When passing data to and from web workers: Data are copied and passed as "plain" JavaScript Objects

## Web workers

Exercise: Fibonacci

```js
function fib(n) {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
```

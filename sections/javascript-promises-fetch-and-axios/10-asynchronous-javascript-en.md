# Asynchronous JavaScript

## Asynchronous JavaScript

some tasks in JavaScript may be scheduled to run in parallel (in particular tasks related to input/output):

- network requests
- reading / writing files in node.js
- timers
- ...

## Tools for asynchronous JavaScript

- **callbacks, promises, async / await**: for parallelized input/output
- _(web) workers_: for parallelized CPU-intense tasks (JavaScript code actually runs in parallel)

## Asynchronous JavaScript

- _callbacks_: traditional way to handle asynchronous requests
- **promises and .then()**
- **promises and async / await**

## Asynchronous JavaScript

possibilities for making network requests:

- **fetch** (promises)
- **axios** (promises)
- jQuery
- XMLHttpRequest

## Asynchronous JavaScript

examples: requests with _axios (await)_, _axios (then)_ and _jQuery (callback)_:

```js
const res = await axios(url);
console.log(res.data);
```

```js
axios(url).then((res) => console.log(res.data));
```

```
jquery.getJSON(url, (data) => console.log(data));
```

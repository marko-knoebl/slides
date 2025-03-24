# Asynchronous JavaScript

## Asynchronous JavaScript

some tasks in JavaScript may be scheduled to run in parallel (in particular tasks related to input/output):

- network requests
- reading / writing files in node.js
- timers
- ...

## Asynchronous JavaScript

Examples of tasks and timings

| Task                                   | Approximate Time         |
| -------------------------------------- | ------------------------ |
| Single CPU cycle                       | **0.000000001 s** (1 ns) |
| Read from RAM (1 byte)                 | **0.0000001 s** (100 ns) |
| Read from an SSD (1 byte)              | **0.0001 s** (100 µs)    |
| Display one frame on a monitor         | **0.01 s** (10 ms)       |
| Request & receive 1 byte from a server | **0.1 s** (100 ms)       |

## Tools for asynchronous JavaScript

- **callbacks, promises, async / await**: for parallelized input/output
- _(web) workers_: for parallelized CPU-intense tasks (JavaScript code actually runs in parallel)

## Asynchronous JavaScript

- _callbacks_: traditional way to handle asynchronous requests
- promises and .then()
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

# State hook in detail

## State hook in detail

extra functionality of the state hook:

- passing an initialization function to the the hook to initialize state only once
- passing a state "transformer" function to the setter - which describes how state should be updated

## State initialization function

potential performance problem: the intial state is recreated on every render - and only used on the first render

```js
const [foo, setFoo] = useState(
  createObjectWithManyEntries('foo')
);
```

## State initialization function

solution: only do data initialization on the first call - by passing in a function which will only be used on the first render

```js
const [foo, setFoo] = useState(() =>
  createObjectWithManyEntries('foo')
);
```

## State transformer function

basic version for updating state:

```js
setCount(count + 1);
```

alternative version that may avoid outdated state:

```js
setCount((c) => c + 1);
```

(see next section)

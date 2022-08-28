# Outdated state

## Outdated state

Sometimes, we may not have direct access to the most recent state entries when computing a new state

particular scenario: asynchronous events in function components (e.g. network requests)

## Outdated state

scenarios:

if an event handler function triggers a state setter, the new state is only available _after_ the event handler has finished executing

when an asynchronous action is triggered in a _function component_, it may keep referencing old state during its execution

## Outdated state

example 1:

```js
const [count, setCount] = useState(0);

function incrementTwice() {
  setCount(count + 1);
  setCount(count + 1);
}
```

this code will set `count` to 1 twice in a row

## Outdated state

example 2:

```js
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}
function incrementWithDelay() {
  setTimeout(() => setCount(count + 1), 3000);
}
```

## Outdated state

scenario for example 2:

- `count` starts at 0
- `incrementWithDelay` is called
- after 1 second, `increment` is called
- after 2 seconds, `increment` is called again
- after 3 seconds, `incrementWithDelay` updates the value

values of `count`: 0 → 1 → 2 → 1

## Outdated state

explanation of example 2:

difference of function components and class components when props / state change:

- in class components, `this.props` and `this.state` will be replaced with new objects
- in function components, the component function is called again, and a new _closure_ is created that contains the new props / state values

note: in function components, old data may still live on inside older closures

## Outdated state

example: buggy code that will keep referencing outdated state in a closure

```js
function Counter() {
  const [count, setCount] = useState(0);
  function startCounting() {
    setInterval(() => {
      // This innermost function will only be created once.
      // The variable "count" will always refer to the
      //   state from the initial rendering (0)
      setCount(count + 1);
    }, 1000);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => startCounting()}>start</button>
    </div>
  );
}
```

## Identifying potentially obsolete data in an effect hook

ESLint rule that can help identifying obsolete data in an effect hook:

_react-hooks/exhaustive-deps_

(in VS Code, install the ESLint plugin)

## Fixing the problem of obsolete data

possible solutions depending on the scenario (see hints in the linter messages):

- pass a "transformer" function to a state setter (which can always access the most recent state)
- store the most recent version of a state entry in a ref as well (this will also be available in older closures)

## Outdated state

possible fix: use a "state transformer function"

change this:

```js
setCount(count + 1);
```

to this:

```js
setCount((c) => c + 1);
```

The inner function will always receive the most recent value

## Outdated state

possible fix: store data in a _ref_ as well (will be explained in more detail later)

```js
function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  function startCounting() {
    setInterval(() => {
      countRef.current++;
      setCount(countRef.current);
    }, 1000);
  }
  // ...
}
```

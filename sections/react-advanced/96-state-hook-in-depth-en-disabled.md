# State hook in depth

## State hook: repeated setter calls

Advice: In an event handler a state setter should only be called once

Example: if count was 0, the following code would set it to 1, then set it to -1:

```js
setCount(count + 1);
setCount(count - 1);
```

## State hook: repeated setter calls

If you do want to call the setter multiple times and one call depends on the modifications of the previous call: Pass in a _state update function_ which will be used to _queue_ state updates

Example: if count was 0, the following code would set it to 1, then set it to 0:

```js
setCount((count) => count + 1);
setCount((count) => count - 1);
```

## State hook: lazy initial state

For the initial state, we can pass in a value _or_ an initializer function - an initializer function is useful if the initial state is expensive to compute as the initial state will not be recomputed on every subsequent render

```js
const DataGrid = (props) => {
  const initializeState = () =>
    createGrid(props.rows, props.cols);
  const [grid, setGrid] = useState(initializeState);
};
```

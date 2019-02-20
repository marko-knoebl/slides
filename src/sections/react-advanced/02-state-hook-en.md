# state Hook

## state Hook

The `setState` function may be called (repeatedly) at the beginning of a functional component definition.

`setState` takes one parameter - the initial state

`setState` returns two values: the current state and a function which can be used to set the state

```js
const App = () => {
  const [count, setCount] = useState(0);

  return ...
};
```

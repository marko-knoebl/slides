# Preventing unneeded component rerenderings

## Preventing unneeded component rerenderings

Generally a component only needs to be rerendered when its props or state actually change

## Preventing unneeded component rerenderings

rules for rerendering in function components:

- setting a changed state will cause rerendering
- setting the same state as before will not cause rerendering
- the rerendering of a component will usually cause the rerendering of _all subcomponents_

## Preventing unneeded component rerenderings

demo: component only rerenders if its state changes

```jsx
function Coin() {
  const [coin, setCoin] = useState('heads');
  const throwCoin = () => {
    setCoin(Math.random() > 0.5 ? 'heads' : 'tails');
  };
  return (
    <div>
      {coin}
      <button onClick={throwCoin}>throw</button>
      <div>last rendering: {new Date().toISOString()}</div>
    </div>
  );
}
```

## Preventing unneeded component rerenderings

the rerendering of a component will usually cause the rerendering of _all subcomponents_

\- this can be optimized!

## Preventing unneeded component rerenderings

if only those subcomponents whose props have changed should rerender:

use React's `memo` function and the callback hook

## Preventing unneeded component rerenderings

using React's `memo` function:

```jsx
import React, { memo } from 'react';

function Rating(props) {
  // ...
}

export default memo(Rating);
```

## Preventing unneeded component rerenderings

the `Rating` component will not be rerendered if its props are the same as before:

```jsx
<Rating stars={4} />
<Rating stars={4} onChange={setRating1} />
```

## Preventing unneeded component rerenderings

what about this event listener?

```jsx
<Rating
  stars={4}
  onChange={newRating => setRating1(newRating)}
/>
```

the arrow function would be a different entity on every requested rendering

## Preventing unneeded component rerenderings

making memoization work for more complex event handlers / callback functions:

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = newTitle =>
    setTodos([
      ...todos,
      { title: newTitle, completed: false },
    ]);
  // useCallback will return the same reference
  // - unless an entry in the passed-in array changes
  const memoizedHandleAddTodo = useCallback(handleAddTodo, [
    todos,
  ]);
  return (
    <div>
      <TodoList todos={todos} />
      <AddTodo onAdd={memoizedHandleAddTodo} />
    </div>
  );
}
```

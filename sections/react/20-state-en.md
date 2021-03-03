# State

## State

Components may have an internal _state_

The state can be referenced in the template. The view will automatically update if parts of the state are changed.

## State hook

In function components we make use of the _state hook_:

```js
import { useState } from 'react';
```

## State hook

`useState` may be called (repeatedly) inside the component function

- `useState` takes one parameter - the initial state value
- on each call `useState` returns an array with two entries: the current state and a function to set the state to a new value

```js
const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('React app');

  return ...
};
```

## When are state changes applied?

State changes are applied _after_ the event handler function has finished executing

<!-- prettier-ignore -->
```js
  function changeSomeStateEntries() {
    console.log(count); // 0
    setCount(count + 1);
    console.log(count); // still 0
    setTitle('Demo');
  }
```

If multiple state changes are triggered by the same event, they will be applied at the same time - the component will only re-render once

## Exercise: Slideshow

Re-implement the slideshow demo we saw before; try not to look at the old code

- show images like `https://picsum.photos/300/200?image=0`
- buttons for _previous_ and _next_
- button for _back to start_

optional:

- prevent the index from becoming negative
- button for _random image_

# State

## State

Components may have an internal _state_

The state can be referenced in the template. The view will automatically update if parts of the state are changed.

## State hook

In function components we use the _state hook_:

```js
import { useState } from 'react';
```

## State hook

`useState` may be called (repeatedly) inside the component function

- `useState` takes one parameter: the initial state value
- on each call `useState` returns an array with two entries: the current state and a function that lets us set the state to a new value

```js
const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('React app');

  return ...
};
```

## Using the minimal state

We should always try to use the _minimal_ state possible (i.e. no redundant data)

Other data can be computed from the minimal state in the component function

Examples:

- For the slideshow, store the image ID - the image URL can be derived from it
- For a text input, store its content - the validity status can be derived from it

## When are state changes applied?

State changes are applied _after_ the event handler function has finished executing

<!-- prettier-ignore -->
```js
  function changeSomeStateEntries() {
    console.log(count); // 0
    setCount(count + 1);
    console.log(count); // still 0
  }
```

## Exercise: Slideshow

Re-implement the slideshow demo we saw before; try not to look at the old code

- show images like `https://picsum.photos/300/200?image=0`
- buttons for _previous_ and _next_
- button for _back to start_
- prevent the index from becoming negative

optional:

- button for _random image_
- buttons that let the user increase / decrease the image width

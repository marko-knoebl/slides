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

## Example: Slideshow with a random image sequence

slightly different example: slideshow with a random image sequence

```js
import { useState } from 'react';

const baseUrl = 'https://picsum.photos/300/200?image=';
function RandomSlideshowApp() {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([0, 10, 20, 30, 40]);
  const randomize = () => {
    const newImages = [];
    for (let i = 0; i < 5; i++) {
      newImages.push(Math.floor(Math.random() * 100));
    }
    setImages(newImages);
    setIndex(0);
  };
  const prevImg = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };
  const nextImg = () => {
    setIndex((index + 1) % images.length);
  };
  return (
    <div>
      <h1>Image {index}</h1>
      <button onClick={() => prevImg()}>prev</button>
      <img
        src={baseUrl + images[index].toString()}
        alt="slideshow"
      />
      <button onClick={() => nextImg()}>next</button>
      <br />
      <button onClick={() => randomize()}>randomize</button>
    </div>
  );
}
export default RandomSlideshowApp;
```

## Exercise: Prime number quiz

Create a quiz that shows an _odd_ number from 1-99. The user has to guess if it is a prime number or not.

Show statistics on correct / incorrect answers the user has given so far.

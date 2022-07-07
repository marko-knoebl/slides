# Basic example: slideshow

## Basic example: slideshow

example _slideshow_ component that demonstrates:

- component definition as a function
- component state (image id)
- JSX template language: mix of JavaScript and XML

online version on Codesandbox: https://codesandbox.io/s/slideshow-cn6m5

## Basic example: slideshow

in _App.js_ / _App.tsx_:

<!-- prettier-ignore -->
```jsx
import Slideshow from './Slideshow';

// ...

  return (
    // ...
      <Slideshow />;
  )
```

## Basic example: slideshow

```jsx
import { useState } from 'react';

const baseUrl = 'https://picsum.photos/300/200?image=';
function Slideshow() {
  const [img, setImg] = useState(0);
  const imgUrl = baseUrl + img.toString();
  function goToPrevImg() {
    setImg(img !== 0 ? img - 1 : 0);
  }
  return (
    <div>
      <h1>Image {img}</h1>
      <button onClick={() => setImg(0)}>start</button>
      <button onClick={() => goToPrevImg()}>prev</button>
      <img src={imgUrl} alt="slideshow" />
      <button onClick={() => setImg(img + 1)}>next</button>
    </div>
  );
}
export default Slideshow;
```

## Basic example: slideshow

```jsx
function Slideshow() {
  // ...
}
```

A component is defined as a function that returns an XML tree

The function is called every time the component needs to be (re-)rendered

Component names always start with capital letters

## Basic example: slideshow

<!-- prettier-ignore -->
```jsx
  const [img, setImg] = useState(0);
```

A component can have internal state entries

`useState` returns the current state entry and a corresponding setter on every render

## Basic example: slideshow

<!-- prettier-ignore -->
```jsx
  const imgUrl = baseUrl + img.toString();
```

We should usually store the _minimal_ state

Other values (like `imgUrl`) can be derived from the state values

## Basic example: slideshow

<!-- prettier-ignore -->
```js
  function goToPrevImg() {
    setImg(img !== 0 ? img - 1 : 0);
  }
```

functions that interact with state can be defined within the component function

## Basic example: slideshow

<!-- prettier-ignore -->
```jsx
  return (
    <div>
      ...
    </div>
  );
```

An XML tag switches from JavaScript to XML mode

## Basic example: slideshow

<!-- prettier-ignore -->
```jsx
      <h1>Image {img}</h1>
```

A curly brace switches back to JavaScript

## Basic example: slideshow

<!-- prettier-ignore -->
```jsx
      <button onClick={() => setImg(0)}>start</button>
      <button onClick={() => goToPrevImg()}>prev</button>
      <img src={imgUrl} alt="slideshow" />
      <button onClick={() => setImg(img + 1)}>next</button>
```

Event handlers can be defined as JavaScript functions

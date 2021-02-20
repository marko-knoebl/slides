# Basic example

## Basic example

example _slideshow_ app that demonstrates:

- component definition as a function
- component state (image id)
- JSX template language: mix of JavaScript and XML

## Basic example

```jsx
import React, { useState } from 'react';

const baseUrl = 'https://picsum.photos/300/200?image=';
function SlideshowApp() {
  const [img, setImg] = useState(0);
  return (
    <div>
      <h1>Image {img}</h1>
      <button onClick={() => setImg(0)}>start</button>
      <button onClick={() => setImg(img - 1)}>prev</button>
      <img src={baseUrl + img.toString()} />
      <button onClick={() => setImg(img + 1)}>next</button>
    </div>
  );
}
export default SlideshowApp;
```

can be tried on <https://codesandbox.io>

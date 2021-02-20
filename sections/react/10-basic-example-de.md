# Grundlegendes Beispiel

## Grundlegendes Beispiel

Beispiel: _slideshow_-App, die folgendes demonstriert:

- Komponentendefinition als Funktion
- Komponenten-State (Bild-id)
- JSX Templatesprache: Mischung aus JavaScript und XML

## Grundlegendes Beispiel

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

kann auf <https://codesandbox.io> ausprobiert werden

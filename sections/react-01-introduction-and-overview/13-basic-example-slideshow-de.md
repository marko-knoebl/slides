# Grundlegendes Beispiel: Slideshow

## Grundlegendes Beispiel: Slideshow

Beispiel: _slideshow_-Komponente, die folgendes demonstriert:

- Komponentendefinition als Funktion
- Komponenten-State (Bild-id)
- JSX Templatesprache: Mischung aus JavaScript und XML

Online-Version auf Codesandbox: https://codesandbox.io/s/slideshow-cn6m5

## Grundlegendes Beispiel: Slideshow

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

## Grundlegendes Beispiel: Slideshow

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

## Grundlegendes Beispiel: Slideshow

```jsx
function Slideshow() {
  // ...
}
```

Eine Komponente wird als Funktion definiert, die einen XML-Baum zurückgibt

Die Funktion wird jedes Mal aufgerufen, wenn die Komponente (neu) gerendert werden muss

Komponentennamen beginnen immer mit einem Großbuchstaben

## Grundlegendes Beispiel: Slideshow

<!-- prettier-ignore -->
```jsx
  const [img, setImg] = useState(0);
```

Eine Komponente kann interne State-Einträge haben

`useState` gibt bei jedem Rendering den aktuellen State-Eintrag und einen zugehörigen Setter zurück

## Grundlegendes Beispiel: Slideshow

<!-- prettier-ignore -->
```jsx
  const imgUrl = baseUrl + img.toString();
```

Üblicherweise wird der _minimale_ State gespeichert

Weitere Werte (z.B. `imgUrl`) können aus dem State abgeleitet werden

## Grundlegendes Beispiel: Slideshow

<!-- prettier-ignore -->
```js
  function goToPrevImg() {
    setImg(img !== 0 ? img - 1 : 0);
  }
```

Funktionen, die mit State interagieren, können innerhalb der Komponentenfunktion definiert werden

## Grundlegendes Beispiel: Slideshow

<!-- prettier-ignore -->
```jsx
  return (
    <div>
      ...
    </div>
  );
```

Ein XML-Tag wechselt von JavaScript zu XML

## Grundlegendes Beispiel: Slideshow

<!-- prettier-ignore -->
```jsx
      <h1>Image {img}</h1>
```

Eine geschweifte Klammer wechselt zurück zu JavaScript

## Grundlegendes Beispiel: Slideshow

<!-- prettier-ignore -->
```jsx
      <button onClick={() => setImg(0)}>start</button>
      <button onClick={() => goToPrevImg()}>prev</button>
      <img src={imgUrl} alt="slideshow" />
      <button onClick={() => setImg(img + 1)}>next</button>
```

Eventhandler können als JavaScript-Funktionen definiert werden

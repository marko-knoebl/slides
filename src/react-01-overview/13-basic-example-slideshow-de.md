# Grundlegendes Beispiel: Slideshow

## Grundlegendes Beispiel: Slideshow

Beispiel: _slideshow_-App, die folgendes demonstriert:

- Komponentendefinition als Funktion
- Komponenten-State (Bild-id)
- JSX Templatesprache: Mischung aus JavaScript und XML

## Grundlegendes Beispiel: Slideshow

```jsx
import { useState } from 'react';

const baseUrl = 'https://picsum.photos/300/200?image=';
function SlideshowApp() {
  const [img, setImg] = useState(0);
  const imgUrl = baseUrl + img.toString();
  return (
    <div>
      <h1>Image {img}</h1>
      <button onClick={() => setImg(0)}>start</button>
      <button onClick={() => setImg(img - 1)}>prev</button>
      <img src={imgUrl} />
      <button onClick={() => setImg(img + 1)}>next</button>
    </div>
  );
}
export default SlideshowApp;
```

kann auf <https://codesandbox.io> ausprobiert werden

## Grundlegendes Beispiel: Slideshow

```jsx
function SlideshowApp() {
  // ...
}
```

Eine Komponente wird als Funktion definiert, die einen XML-Baum zurückgibt

Die Funktion wird jedes Mal aufgerufen, wenn die Komponente (neu) gerendert werden muss

## Grundlegendes Beispiel: Slideshow

<!-- prettier-ignore -->
```jsx
  const [img, setImg] = useState(0);
  const imgUrl = baseUrl + img.toString();
```

Eine Komponente kann interne State-Einträge haben

`useState` gibt bei jedem Rendering den aktuellen State-Eintrag und einen zugehörigen Setter zurück

Weitere Werte (z.B. `imgUrl`) können aus dem State abgeleitet werden

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
      <button onClick={() => setImg(img - 1)}>prev</button>
      <img src={imgUrl} alt="slideshow" />
      <button onClick={() => setImg(img + 1)}>next</button>
```

Eventhandler können als JavaScript-Funktionen definiert werden

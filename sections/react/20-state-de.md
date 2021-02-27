# State (Komponentenzustand)

## State

React Komponenten können einen internen Zustand (_state_) haben

Auf den state kann im Template verwiesen werden. Damit ändert sich die Anzeige automatisch, wenn Teile des States neu gesetzt werden.

## State Hook

In Funktionskomponenten verwenden wir den _State Hook_:

```js
import { useState } from 'react';
```

## State Hook

`useState` kann in der Komponentenfunktion (wiederholt) aufgerufen werden; es hat die folgende Signatur:

- `useState` nimmt einen Parameter entgegen - den initialen Zustand
- `useState` gibt bei jedem Aufruf ein Array mit zwei Einträgen zurück: Den aktuellen Zustand sowie eine Funktion, mit der der Zustand neu gesetzt werden kann

```js
const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('React app');

  return ...
};
```

## Übung: Slideshow

Implementiere die zuvor gesehene Slideshow-Demo erneut; versuche, nicht auf den bisherigen Code zu blicken

- zeige Bilder wie z.B. `https://picsum.photos/300/200?image=0`
- Buttons für _vorwärts_ und _zurück_
- Button für _zurück zum Start_

Zusatz:

- verhindere, dass ins negative gezählt wird
- Button für zufälliges Bild

## Beispiel: Slideshow mit zufälliger Bildsequence

etwas abgeändertes Beispiel: Slideshow mit zufälliger Bildfolge

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

## Übung: Primzahl-Quiz

Erstelle ein Quiz, das zu einer _ungeraden_ Zahl im Bereich 1-99 abfragt, ob diese eine Primzahl ist.

Zeige eine Statistik zu den korrekten / inkorrekten bisherigen Antworten.

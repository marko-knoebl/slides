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

## Beispiel: Counter

Wir fügen unserer Anwendung einen Button hinzu. Zu Beginn zeigt dieser den Wert 0. Bei jedem Klick erhöht er sich um 1.

## Beispiel: Counter

```jsx
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
};
```

## Beispiel: Slideshow

Slideshow, die Bilder wie das folgende anzeigt:

`https://picsum.photos/200?image=10`

- Buttons für _vorwärts_ und _zurück_
- Button für _zurück zum Start_
- Verhindern, dass ins negative gezählt wird

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

## Verwenden des minimalen States

Wir sollten immer versuchen, den _minimalen_ State zu verwenden (also keine redundanten Daten speichern)

Weitere Daten können in der Komponentenfunktion aus dem State abgeleitet werden

Beispiel: Für die Slideshow ist es genug, die Bild-ID zu speichern - wir müssen nicht die ganze Bild-URL speichern

## Wann werden State-Änderungen angewendet?

State-Änderungen werden angewendet, _nachdem_ die Event-Handler-Funktion fertig ausgeführt wurde

<!-- prettier-ignore -->
```js
  function changeSomeStateEntries() {
    console.log(count); // 0
    setCount(count + 1);
    console.log(count); // still 0
    setTitle('Demo');
  }
```

Wenn mehrere State-Änderungen durch das gleiche Event ausgelöst werden, werden sie zugleich angewendet - die Komponente wird nur einmal neu gerendert

## Übung: Slideshow

Implementiere die zuvor gesehene Slideshow-Demo erneut; versuche, nicht auf den bisherigen Code zu blicken

- zeige Bilder wie z.B. `https://picsum.photos/300/200?image=0`
- Buttons für _vorwärts_ und _zurück_
- Button für _zurück zum Start_

Zusatz:

- verhindere, dass ins negative gezählt wird
- Button für zufälliges Bild

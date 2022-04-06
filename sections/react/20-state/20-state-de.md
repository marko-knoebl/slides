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
function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('React app');

  return ...
};
```

## Verwenden des minimalen States

Wir sollten immer versuchen, den _minimalen_ State zu verwenden (also keine redundanten Daten speichern)

Weitere Daten können in der Komponentenfunktion aus dem State abgeleitet werden

Beispiele:

- für die Slideshow speichern wir die Bild-ID - die Bild-URL kann daraus abgeleitet werden
- für ein Textfeld speichern wir den Textinhalt - der Gültigkeitsstatus kann daraus abgeleitet werden

## Übung: Slideshow

Implementiere die zuvor gesehene Slideshow-Demo erneut; versuche, nicht auf den bisherigen Code zu blicken

- zeige Bilder wie z.B. `https://picsum.photos/300/200?image=0`
- Buttons für _vorwärts_ und _zurück_
- Button für _zurück zum Start_
- verhindere, dass ins negative gezählt wird

Zusatz:

- Button für zufälliges Bild
- Buttons, die es ermöglichen, die Breite des Bildes zu erhöhen / verringern

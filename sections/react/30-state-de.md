# State (Komponentenzustand)

## State

React Komponenten können einen internen Zustand (_state_) haben

Auf den state kann im Template verwiesen werden. Damit ändert sich die Anzeige automatisch, wenn Teile des States neu gesetzt werden.

## State in Funktionskomponenten

In Funktionskomponenten verwenden wir den Hook `useState`:

```js
import { useState } from 'react';
```

## State in Funktionskomponenten

Die Funktion `useState` kann zu Beginn der Komponentenfunktion (wiederholt) aufgerufen werden. Sie hat die folgende Signatur:

- sie nimmt einen Parameter entgegen - den initialen Zustand
- sie gibt bei jedem Aufruf ein Array mit zwei Einträgen zurück: Den aktuellen Zustand sowie eine Funktion, mit der der Zustand neu gesetzt werden kann

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
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}>
      {count}
    </button>
  );
};
```

## Beispiel: Counter

Aufgabe: füge zur Anwendung von eben einen _Reset_-Knopf hinzu

## Beispiel: Slideshow

Slideshow, die Bilder wie das folgende anzeigt:

`https://picsum.photos/200?image=10`

- Buttons für _vorwärts_ und _zurück_
- Button für _zurück zum Start_
- Verhindern, dass ins negative gezählt wird

## State nicht direkt abändern

Wenn unser State Arrays oder Objekte enthält, _könnten_ wir versuchen, diese direkt abzuändern

Dies _darf nicht gemacht werden_ - React bemerkt üblicherweise die Änderungen nicht und aktualisiert die Ansicht nicht

## State nicht direkt abändern

Ausgangslage:

```js
const [todos, setTodos] = useState(['groceries', 'bills']);
```

**korrekte** Änderung am State:

```js
setTodos([...todos, 'learn React']);
```

**inkorrekter** Versuch, den State zu ändern:

```js
todos.push('learn React');
setTodos(todos);
```

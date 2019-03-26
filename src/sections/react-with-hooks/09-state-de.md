# State (Komponentenzustand)

## State

React Komponenten können einen internen Zustand (_state_) haben

Auf den state kann im Template verwiesen werden. Damit ändert sich die Anzeige automatisch, wenn Teile des States neu gesetzt werden.

## State in funktionalen Komponenten

In funktionalen Komponenten verwenden wir den Hook `useState`:

```js
import { useState } from 'react';
```

## State in funktionalen Komponenten

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

## Beispiel: Diashow

Diashow, die Bilder wie das folgende anzeigt:

`https://picsum.photos/200?image=10`

- Buttons für _vorwärts_ und _zurück_
- Button für _zurück zum Start_
- Verhindern, dass ins negative gezählt wird

## State in Klassenkomponenten

In Klassenkomponenten repräsentiert `this.state` den State.

`this.state` ist immer ein JavaScript-Objekt mit verschiedenen Einträgen (Properties)

Zustandsänderungen erfolgen über `this.setState()`

## Struktur von this.state

_this.state_ ist ein JavaScript-Objekt:

```js
constructor() {
  [...]
  this.state = {
    loggedIn: true,
    todos: ['laundry', 'groceries', 'taxes'],
  }
}
```

## Änderung von this.state

via `this.setState()`

```js
this.setState({ loggedIn: false });
```

setState überschreibt alle angegebenen Einträge im state-Objekt

## Wiederholtes Aufrufen von this.setState

Rat: in einem Event-Handler nur 1x `setState` aufrufen.

Wenn doch mehrere Aufrufe von `setState` erfolgen und ein Aufruf auf der vorhergehenden Zustandsänderung basiert:

```js
// löschen eines Todos
this.setState(oldState => ({
  todos: oldState.todos.slice(0, oldState.todos.length - 1),
}));
```

Wir übergeben setState eine Funktion, die den alten in den neuen Zustand überführt.

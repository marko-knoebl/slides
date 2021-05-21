# State

## State in Klassenkomponenten

In Klassenkomponenten repräsentiert `this.state` den aktuellen state

`this.state` ist immer ein JavaScript-Objekt mit verschiedenen Einträgen (Properties)

Zustandsänderungen erfolgen über `this.setState()`

## Struktur von this.state

_this.state_ ist ein JavaScript-Objekt:

```json
{
  "loggedIn": true,
  "todos": [
    { "id": 1, "title": "laundry", "completed": false },
    { "id": 2, "title": "groceries", "completed": true },
    { "id": 5, "title": "taxes", "completed": false }
  ]
}
```

## Initialisierung des States

Der State muss im Konstruktor initialisiert werden

Der Konstruktor erhält auch die Props der Komponente als Argument

## Initialisierung des States

```js
constructor(props) {
  super(props);
  this.state = {
    loggedIn: true,
    todos: ['laundry', 'groceries', 'taxes'],
  }
}
```

In JavaScript _muss_ der Konstruktor der Elternklasse (`Component`) im Konstruktor aufgerufen werden (geschieht via `super()`)

## Änderung von this.state

via `this.setState()`

```js
this.setState({ loggedIn: false });
```

setState überschreibt alle angegebenen Einträge im state-Objekt und lässt den Rest unverändert

## Wiederholtes Aufrufen von this.setState

Rat: in einem Event-Handler nur 1x `setState` aufrufen.

Wenn doch mehrere Aufrufe von `setState` erfolgen und ein Aufruf auf der vorhergehenden Zustandsänderung basiert:

```js
this.setState(oldState => ({ count: oldState.count + 1 }));
this.setState(oldState => ({ count: oldState.count + 1 }));
```

Wir übergeben setState eine Funktion, die den alten in den neuen Zustand überführt.

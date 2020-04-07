# React mit Klassenkomponenten

# Überblick

## Geschichte

Klassenkomponenten waren vor der Einführung von Hooks (mit React 16.8, Februar 2019) weit verbreitet

Heute verlagert sich der Fokus hin zu Hooks

## Klassenkomponenten vs Hooks

Gründe für die Verwendung von Hooks:

- verringern oft Komplexität
- einfachere Modularität
- vermeiden Probleme mit `this`

Gründe für die Verwendung von Klassenkomponenten:

- Konzepte sind zu Beginn wohl vertrauter
- Lifecycle Events können in Klassenkomponenten klarer sein

## Einfaches Beispiel

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() {
    return <div>Hello, World!</div>;
  }
}

export default App;
```

# this - quirks

## this - quirks

In Objektmethoden bezieht sich `this` üblicherweise auf das aktuelle Objekt

**allerdings**:

- jeder Funktionsaufruf setzt _this_ neu (nicht nur Methodenaufrufe)
- _this_ wird nur richtig gesetzt, wenn die Methode mit der Syntax `object.method()` aufgerufen wird

## Problem: _this_ in anonymen Funktionen

```js
class myComponent {
  constructor() {
    // this ist hier richtig gesetzt
    this.foo = true;
    setTimeout(function() {
      //this wird hier überschrieben (auf window)
      console.log(this.foo);
    }, 1000);
  }
}
```

## Lösung: _Pfeilfunktionen_

```js
class myComponent {
  constructor() {
    // this ist hier richtig gesetzt
    this.foo = true;
    setTimeout(() => {
      // this wird hier *nicht* überschrieben
      console.log(this.foo);
    }, 1000);
  }
}
```

## Problem: Methodenaufrufe ohne Methodensyntax

```js
class Foo {
  constructor() {
    this.message = 'hello';
  }
  greet() {
    console.log(this.message);
  }
}
let foo = new Foo();
foo.greet(); // klappt
let fg = foo.greet;
fg(); // klappt nicht (this ist undefined)
```

## Lösung: Pfeil-Methoden

Seit ES2018 einsetzbar:

```js
class Foo {
  constructor() {
    this.message = 'hello';
  }
  greet = () => {
    console.log(this.message);
  };
}
```

## Lösung: Binden von Methoden

```js
let f = new Foo();
f.greet(); // klappt
let fg = f.greet.bind(f);
fg(); // klappt jetzt auch
```

Üblicherweise Zuweisung im constructor:

```js
  constructor() {
    this.greet = this.greet.bind(this);
  }
```

# Props

## Props

Props können via `this.props` ausgelesen werden:

```jsx
class TodoItem extends Component {
  render() {
    return (
      <div>
        {this.props.completed ? 'DONE: ' : 'TODO: '}
        {this.props.title}
      </div>
    );
  }
}
```

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

# Klassenkomponenten mit TypeScript

## Klassenkomponenten mit TypeScript

```tsx
type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: int) => void;
};
type TodoItemState = {};
```

```tsx
class TodoItem extends React.PureComponent<
  TodoItemProps,
  TodoItemState
> {
  // ...
}
```

# Komponenten-Lebenszyklus

## Komponenten-Lebenszyklus

Drei wichtige Methoden zum Abfragen von Ereignissen im Lebenszyklus einer Komponente:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

## Beispiel: DocumentTitle-Komponente

Wir erstellen eine Komponente, die den Dokumenttitel dynamisch setzen kann:

```xml
<DocumentTitle value="my custom title" />
```

Diese Komponente kann irgendwo in der React-Anwendung vorkommen.

## Beispiel: DocumentTitle-Komponente

```jsx
class DocumentTitle extends Component {
  componentDidMount() {
    document.title = this.props.value;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = this.props.value;
  }

  render() {
    return null;
  }
}
```

## Beispiel: Clock-Komponente

```jsx
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  render() {
    return <div>{this.state.time}</div>;
  }
```

## Beispiel: Clock-Komponente

```jsx
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
```

# Memoisation

## Memoisation

Memoisierte Klassenkomponenten:

Durch Erben von `PureComponent` statt `Component` (memoisierte _props_ und _state_)

## Memoisation

```js
import { PureComponent } from 'react';

class Rating extends PureComponent {...}

export default Rating;
```

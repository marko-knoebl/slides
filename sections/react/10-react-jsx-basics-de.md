# React & JSX Grundlagen

## Online Editoren

Empfehlung: https://codesandbox.io/s

andere:

- Glitch: https://glitch.com/edit/#!/remix/starter-react-template
- CodePen: https://reactjs.org/redirect-to-codepen/hello-world

## Definieren einer Komponente als Funktion

```jsx
import React from 'react';

const App = () => {
  return <div>Hello, World!</div>;
};

export default App;
```

## Definieren einer Komponente als Klasse

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() {
    return <div>Hello, World!</div>;
  }
}

export default App;
```

## Komponentendefinition

Um sie von normalen Tags zu unterscheiden, beginnen Komponentennamen immer mit einem Großbuchstaben

## JSX: JS + XML

JSX = Templatesprache von React

- **<** wechselt von JS zu XML/HTML
- **{** wechselt zurück zu JS

## JSX: JS + XML

```jsx
<div>Ein Jahr hat {365 * 24} Stunden</div>
```

## JSX: Aufgaben

- Zeige das aktuelle Datum an
- Münzwurf: zeige zufällig entweder den Text "heads" oder "tails" in einem div an

## JSX: Aufgaben

Datum:

```jsx
const dateString = new Date().toLocaleDateString();
```

```jsx
<div>curent date: {dateString}</div>
```

Münzwurf:

```jsx
<div>{Math.random() > 0.5 ? 'heads' : 'tails'}</div>
```

## JSX: Properties

Der Wechsel von XML auf JS klappt auch bei Properties:

```jsx
<a href={'https://en.wikipedia.org/wiki/' + articleName}>
  some article
</a>
```

Beachte die fehlenden Anführungszeichen bei href

## JSX: Elemente wiederholen

Mehrere Elemente können via Arrays eingebunden werden:

```jsx
const elements = [
  <div>alpha</div>,
  <div>bravo</div>,
  <div>charlie</div>,
];
```

```xml
<h1>three elements</h1>
{ elements }
```

## JSX: Elemente wiederholen

Aufgabe: Anzeigen aller Methoden des _React_-Objekts in einem _ul_-Element

```jsx
const reactMethods = [];
for (let method in React) {
  reactMethods.push(<li>{method}</li>);
}
```

```jsx
<div>
  React Methods:
  <ul>{reactMethods}</ul>
</div>
```

## JSX: events

```jsx
const hello = () => {
  console.log('hello world');
  // ...
};
```

```jsx
<button onClick={hello}>Say Hello</button>
```

Liste von Browser-Events:  
https://www.w3schools.com/jsref/dom_obj_event.asp

## JSX: events

Achtung: Ein Event Handler muss eine **Funktion** sein, und nicht ein Funktionsaufruf

OK:

```js
<button onClick={alert}>Say Hello</button>
```

nicht OK:

```js
<button onClick={alert('hello')}>Say Hello</button>
```

OK:

```js
<button onClick={() => alert('hello')}>Say Hello</button>
```

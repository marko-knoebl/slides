# React & JSX Grundlagen

## Online Editoren

Empfehlung: https://codesandbox.io

andere:

- Glitch: https://glitch.com/edit/#!/remix/starter-react-template
- CodePen: https://reactjs.org/redirect-to-codepen/hello-world

## Komponentendefinition: Beispiel

```jsx
import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default CounterApp;
```

## Komponentendefinition: Beispiel

```jsx
import React, { useState } from 'react';

function SlideshowApp() {
  const [img, setImg] = useState(0);
  return (
    <div>
      <button onClick={() => setImg(0)}>start</button>
      <button onClick={() => setImg(img - 1)}>prev</button>
      <img
        src={`https://picsum.photos/200?image=${img}`}
        alt="slideshow"
      />
      <button onClick={() => setImg(img + 1)}>next</button>
    </div>
  );
}

export default SlideshowApp;
```

## Funktionskomponenten und Klassenkomponenten

Möglichkeiten:

- Definition einer Komponente als Funktion
- Definition einer Komponente als Klasse (war insbesondere vor der Einführung von Hooks verbreitet / notwendig)

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
<button onClick={alert}>Say something</button>
```

nicht OK:

```js
<button onClick={alert('hello')}>Say Hello</button>
```

OK:

```js
<button onClick={() => alert('hello')}>Say Hello</button>
```

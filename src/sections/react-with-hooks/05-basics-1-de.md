# React & JSX Grundlagen

## Definition einer Komponente als Funktion

```jsx
import React from 'react';

const App = () => {
  return <div>Hello, World!</div>;
};

export default App;
```

## JSX: JS + XML

JSX = Templatesprache von React

- **<** wechselt von JS zu XML/HTML
- **{** wechselt zurück zu JS

## JSX: JS + XML

```jsx
el = <div>Ein Jahr hat {365 * 24} Stunden</div>;
```

## JSX: Aufgaben

- Zeige das aktuelle Datum an
- Zeige zufällig entweder den Text "Kopf" oder "Zahl" in einem div an

## JSX: Properties

Der Wechsel von XML auf JS klappt auch bei Properties:

```jsx
<a href={'https://en.wikipedia.org/wiki/' + articleName}>
  some article
</a>
```

Beachte die fehlenden Anführungszeichen bei href

## JSX Properties: Aufgaben

- Zeige ein Bild basierend auf einer ID an. Verwende dazu:

```js
const getImgUrl = id =>
  `https://picsum.photos/200?image=${id}`;
```

## JSX: events

```jsx
function hello() {...}

<button onClick={hello}>Say Hello</button>
```

Liste von Browser-Events:  
https://www.w3schools.com/jsref/dom_obj_event.asp

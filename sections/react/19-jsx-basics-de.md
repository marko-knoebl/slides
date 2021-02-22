# JSX Grundlagen

## JSX

JSX = Templatesprache von React

- **<** wechselt von JS zu XML/HTML
- **{** wechselt zurück zu JS

## JSX verwenden

in React Versionen < 17 müssen wir das `React`-Objekt importieren, um _JSX_ schreiben zu können

```js
import React from 'react';
```

## Inhalte binden

```jsx
<div>Ein Jahr hat {365 * 24} Stunden</div>
```

## Inhalte binden

Aufgaben:

- Zeige das aktuelle Datum an
- Münzwurf: zeige zufällig entweder den Text "heads" oder "tails" in einem div an

## Inhalte binden

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

## Properties binden

Der Wechsel von XML auf JS klappt auch bei Properties:

```jsx
<a href={'https://en.wikipedia.org/wiki/' + articleName}>
  some article
</a>
```

Beachte die fehlenden Anführungszeichen bei href

## Events binden

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

## Events binden

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

## Elemente wiederholen

Mehrere Elemente können via Arrays eingebunden werden:

```jsx
const elements = [
  <li>alfa</li>,
  <li>bravo</li>,
  <li>charlie</li>,
];
```

```jsx
<h1>three elements</h1>
<ul>
  { elements }
</ul>
```

## Elemente wiederholen

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

## Elemente wiederholen

typischerweise werden wiederholte Elemente via `.map` erstellt:

```jsx
const elements = ['alfa', 'bravo', 'charlie'];
```

```jsx
<ul>
  {elements.map((el) => (
    <li>{el}</li>
  ))}
</ul>
```

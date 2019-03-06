# React.js - Grundlagen II

## JSX Kompilierung

<!-- prettier-ignore -->
```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

wird kompiliert zu:

```js
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
```

## JSX: Properties

Der Wechsel von XML auf JS klappt auch bei Properties:

```html
<a href={"https://en.wikipedia.org/wiki/" + articleName}>
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

## JSX: Methoden als Eventhandler

Achtung: Werden Klassenmethoden als Eventhandler verwendet, sollten sie entweder als Pfeilfunktionen definiert sein oder mit _.bind()_ korrekt zugewiesen werden.

## Browser-Events: Beispiel

- einfacher Button (Hello world)

## JSX: Elemente wiederholen

Grundsätzlich können wir über Arrays mehrere Elemente einbinden:

```xml
<ul>
  { [
    <li>1</li>,
    <li>2</li>
  ] }
</ul>
```

## JSX: Elemente wiederholen

Meist verwenden wir zum wiederholen die `.map()` - Methode

<!-- prettier-ignore-start -->

```jsx
let todos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'cooking', completed: true },
  { id: 3, title: 'gardening', completed: false },
];

<ul>
  {todos.map(todo => (
    <li>{todo.title}</li>
  ))}
</ul>
```

<!-- prettier-ignore-end -->

## JSX: Elemente wiederholen

Bei obigem Code: Warnung in der Browser-Konsole (Wegen Effizienz)  
Lösung: **key** (als string):

```jsx
<ul>
  {todos.map(todo => (
    <li key={todo.id.toString()}>{todo.title}</li>
  ))}
</ul>
```

## JSX: if / else

```jsx
<div>{Math.random() > 0.5 ? 'heads' : 'tails'}</div>
```

## JSX: if / else

```jsx
function cointoss() {
  if (Math.random() > 0.5) {return 'heads';}
  else {return 'tails';}
}
[...]
<div>
  {cointoss()}
</div>
```

## JSX: CSS-Klassen

```jsx
<div className={getClassName()}>[...]</div>
```

## JSX: Dynamische Stile

```jsx
<div
  style={{
    color: '#333',
    fontSize: getFontSize(),
  }}
/>
```

## State

- React-Komponenten können einen internen Zustand (_state_) haben

## State

- In jeder Komponente hat _this.state_ eine besondere Bedeutung
- Auf Daten in _this.state_ kann im Template verwiesen werden. Damit ändert sich die Anzeige automatisch, wenn die Daten neu gesetzt werden.

## Struktur von this.state

- _this.state_ ist ein JavaScript-Objekt:

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

Nur via setState()

```js
this.setState({ loggedIn: false });
this.setState({ todos: ['learn react'] });
```

setState überschreibt alle angegebenen Einträge im state-Objekt

## Änderung von this.state

Wenn der neue state vom alten abhängt:

```js
// löschen eines Todos
this.setState(oldState => {
  let newTodos = oldState.todos;
  newTodos.pop();
  return { todos: newTodos };
});
```

Wir übergeben setState eine callback-Funktion, die den alten in den neuen Zustand überführt.

## Beispiel: Counter

## Weitere Beispiele

Ideen:

- Uhr
- Countdown-Zähler
- Diashow

## Inputs

Besonderheit von input-Elementen:

- Ihre Properties (insbesondere `.value`) können durch User-Interaktionen direkt geändert werden
- Es gibt damit Aspekte des UI-Zustands, die nicht in _.state_ erfasst sind

## Inputs

So können wir `input.value` in `.state` erfassen:

```jsx
<input
  value={this.state.inputText}
  onChange={this.handleChange}
/>;

handleChange = event => {
  this.setState({ inputText: event.target.value });
};
```

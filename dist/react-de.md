# React

## Hauptthemen

- State (Deklaratives Rendering)
- JSX (Templatesprache)
- Komponenten (eigene HTML-Tags)

## Themen im Detail

- Überblick und einfaches Beispiel
- JavaScript-Grundlagen für React
- State
- JSX
- Inputs und Formulare
- VS Code und React-Projekte
- React Developer Tools
- React und TypeScript
- Komponenten
- Abfragen von APIs

# React Überblick

## Was ist React?

- Eines der 3 großen JavaScript UI Libraries / Frameworks (neben Angular, Vue.js)

## Grundlagen moderner JavaScript UI Libraries

- deklarativ
- Komponenten-Struktur

## Deklarativ

- Datenmodell, das den gesamten Anwendungszustand abbildet
- User-Interaktionen ändern das Modell, das View wird automatisch aktualisiert

## Komponenten-Struktur

- "eigene" HTML-Tags
- Datenfluss via Properties und Events
- Üblicherweise unidirektionaler Datenfluss (vom Eltern- zum Kindelement)

## Beispiel: Komponenten und State in einer Todo-App

<img src="assets/todo-components-state.svg" />

## Beispiel: Props und Events in einer Todo-App

<img src="assets/todo-components-state-props-events.svg" />

## Was macht React besonders?

- JavaScript-basierte Template-Syntax: JSX
- Explizite Änderung des Anwendungszustands mittels Settern
- State-Objekte sind unveränderlich (immutable)

## Geschichte von React

- 2013 von Facebook als open source veröffentlicht
- Februar 2019: React 16.8: Einführung von _Hooks_
- August 2020: React 17: keine großen Änderungen
- bevorstehende Ergänzungen: [suspense for data fetching](https://reactjs.org/docs/concurrent-mode-suspense.html) und [concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html)

# Online Editoren

## Online Editoren

Empfehlung:

<https://codesandbox.io>

- hat Templates für _React_ und _React TypeScript_
- basiert auf _VS Code_
- Prettier-basierte Formatierung mittels _Shift_ + _Alt_ + _F_
- Hosting unter z.B. _<https://abcde.csb.app>_

## Online Editoren

andere Optionen:

- Glitch: <https://glitch.com/edit/#!/remix/starter-react-template>
- CodePen: <https://reactjs.org/redirect-to-codepen/hello-world>

# Grundlegendes Beispiel: Slideshow

## Grundlegendes Beispiel: Slideshow

Beispiel: _slideshow_-App, die folgendes demonstriert:

- Komponentendefinition als Funktion
- Komponenten-State (Bild-id)
- JSX Templatesprache: Mischung aus JavaScript und XML

## Grundlegendes Beispiel: Slideshow

```jsx
import { useState } from 'react';

const baseUrl = 'https://picsum.photos/300/200?image=';
function SlideshowApp() {
  const [img, setImg] = useState(0);
  const imgUrl = baseUrl + img.toString();
  return (
    <div>
      <h1>Image {img}</h1>
      <button onClick={() => setImg(0)}>start</button>
      <button onClick={() => setImg(img - 1)}>prev</button>
      <img src={imgUrl} />
      <button onClick={() => setImg(img + 1)}>next</button>
    </div>
  );
}
export default SlideshowApp;
```

kann auf <https://codesandbox.io> ausprobiert werden

## Grundlegendes Beispiel: Slideshow

```jsx
function SlideshowApp() {
  // ...
}
```

Eine Komponente wird als Funktion definiert, die einen XML-Baum zurückgibt

Die Funktion wird jedes Mal aufgerufen, wenn die Komponente (neu) gerendert werden muss

## Grundlegendes Beispiel: Slideshow

<!-- prettier-ignore -->

```jsx
  const [img, setImg] = useState(0);
  const imgUrl = baseUrl + img.toString();
```

Eine Komponente kann interne State-Einträge haben

`useState` gibt bei jedem Rendering den aktuellen State-Eintrag und einen zugehörigen Setter zurück

Weitere Werte (z.B. `imgUrl`) können aus dem State abgeleitet werden

## Grundlegendes Beispiel: Slideshow

<!-- prettier-ignore -->

```jsx
  return (
    <div>
      ...
    </div>
  );
```

Ein XML-Tag wechselt von JavaScript zu XML

## Grundlegendes Beispiel: Slideshow

<!-- prettier-ignore -->

```jsx
      <h1>Image {img}</h1>
```

Eine geschweifte Klammer wechselt zurück zu JavaScript

## Grundlegendes Beispiel: Slideshow

<!-- prettier-ignore -->

```jsx
      <button onClick={() => setImg(0)}>start</button>
      <button onClick={() => setImg(img - 1)}>prev</button>
      <img src={imgUrl} alt="slideshow" />
      <button onClick={() => setImg(img + 1)}>next</button>
```

Eventhandler können als JavaScript-Funktionen definiert werden

# JavaScript-Grundlagen für React

## JavaScript-Grundlagen für React

- JavaScript-Standardisierung und Versionen
- Imports und Exports
- Pfeilfunktionen
- Template Literals und Tagged Template Literals
- Automatic Semicolon Insertion
- destrukturierende Zuweisung
- Spread-Syntax
- optional Chaining
- map und filter

## JavaScript Standardisierung

JavaScript wird unter dem Namen [_ECMAScript_ (ES)](https://www.ecma-international.org/ecma-262/) standardisiert

## JavaScript Versionen

_ES5_: Von allen Browsern, inklusive Internet Explorer, unterstützt (2009 standardisiert)

Seit 2015: jährliche Updates im Juni jeden Jahres (ES2015, ES2016, ...)

In der Praxis: Modernes JavaScript wird in ältere Versionen transpiliert (via Babel, webpack)

## Imports und Exports

benannte Imports und Exports:

```js
// mymodule.js
const foo = 1;
const bar = 2;
const baz = 3;

export { foo, bar, baz };
```

```js
// index.js
import { foo, bar } from 'mymodule.js';
```

## Imports und Exports

Es kann einen default Export geben:

```js
// mymodule.js
const foo = 1;
const bar = 2;
const baz = 3;

export { foo, bar, baz };

const main = 0;

export default main;
```

```js
// index.js
import main, { foo, bar } from 'mymodule.js';
```

## Imports in webpack

Bundler wie webpack können beim Importieren vom JavaScript Standard abweichen:

- Dateiendungen wie `.js` können optional sein
- wenn der Import auf einen Ordner verweist, sucht webpack nach einer `index.js` Datei in diesem Ordner

## Pfeilfunktionen

- Kurzschreibweise für anonyme Funktionen
- Lässt _this_ unverändert (überschreibt es nicht)

```js
const multiply = (a, b) => {
  return a * b;
};

const multiply = (a, b) => a * b;
```

## Pfeilfunktionen

wenn direkt ein Objekt zurückgegeben werden soll: mit runden Klammern umschießen

```js
const getState = () => ({
  loggedIn: true,
  userName: 'mike',
});
```

## Template Literals

- Syntax zum _Erstellen_ von Strings
- Werden mit Backticks begrenzt
- Erlauben mehrzeilige Strings und Interpolation:

```js
const name = 'Mike';
const greeting = `Hello, ${name}!
                  This is ES2015!`;
```

## Tagged Template Literals

**Tagged** Template Literals ermöglichen zusätzliche Verarbeitung, wenn Werte eingebunden werden

Beispiele für Verwendungszwecke:

- "Escaping" von Werten aus unsicheren Quellen
- Anpasen der Einrückung
- Einbinden von Stilen in React
- ...

## Tagged Template Literals

Beispiel: "Escaping" von HTML:

```js
import { safeHtml } from 'common-tags';

const message = 'I <3 U';

const post = safeHtml`
  <div>${message}</div>
`;
```

Ergebnis:

```html
<div>I &lt;3 U</div>
```

Bemerkung: In React geschieht "Escaping" von HTMl automatisch, wir müssen diese Funktion in React nicht verwenden

## Das Semikolon in JavaScript

Das Semikolon zum Abschluss von Statements ist größtenteils in JavaScript optional (_automatic semicolon insertion_)

<!-- prettier-ignore -->

```js
const a = 3
console.log(a)
```

wird behandelt wie:

```js
const a = 3;
console.log(a);
```

## Das Semikolon in JavaScript

Manchmals ist das Verhalten nicht wie gewünscht:

<!-- prettier-ignore -->

```jsx
const Foo = () => {
  return
    <div>
      <h1>some content</h1>
    </div>;
};
```

wird behandelt wie:

```jsx
const Foo = () => {
  return;
  <div>
    <h1>some content</h1>
  </div>;
};
```

## Destrukturierung

```js
const [result, errors] = someComputation();

// swapping values
let a = 1;
let b = 2;
[a, b] = [b, a];
```

## Destrukturierung

```js
const person = { name: 'John', age: 48 };
const { name, age } = person;

const TodoItem = ({ title, completed }) => (
  <div>
    {completed ? 'DONE: ' : 'TODO: '}
    {title}
  </div>
);
```

## Optional Chaining

Beispiel für _optional chaining_:

```js
const userNickname = user?.nickname;
```

wenn `user` definiert ist, lies dessen `.nickname` Property, andernfalls verwende `undefined`

"konventionelle" Langform:

```js
const userNickname = user ? user.nickname : undefined;
```

## Optional Chaining

_Optional chaining_ mit Funktionsaufrufen:

```js
props.onClick?.();
```

wenn `props.onClick` definiert ist, wird es aufgerufen, andernfalls wird der Ausdruck zu `undefined` ausgewertet

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
const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('React app');

  return ...
};
```

## Verwenden des minimalen States

Wir sollten immer versuchen, den _minimalen_ State zu verwenden (also keine redundanten Daten speichern)

Weitere Daten können in der Komponentenfunktion aus dem State abgeleitet werden

Beispiel: Für die Slideshow ist es genug, die Bild-ID zu speichern - wir müssen nicht die ganze Bild-URL speichern

## Wann werden State-Änderungen angewendet?

State-Änderungen werden angewendet, _nachdem_ die Event-Handler-Funktion fertig ausgeführt wurde

<!-- prettier-ignore -->

```js
  function changeSomeStateEntries() {
    console.log(count); // 0
    setCount(count + 1);
    console.log(count); // still 0
    setTitle('Demo');
  }
```

Wenn mehrere State-Änderungen durch das gleiche Event ausgelöst werden, werden sie zugleich angewendet - die Komponente wird nur einmal neu gerendert

## Übung: Slideshow

Implementiere die zuvor gesehene Slideshow-Demo erneut; versuche, nicht auf den bisherigen Code zu blicken

- zeige Bilder wie z.B. `https://picsum.photos/300/200?image=0`
- Buttons für _vorwärts_ und _zurück_
- Button für _zurück zum Start_

Zusatz:

- verhindere, dass ins negative gezählt wird
- Button für zufälliges Bild

# Input State

## Input State

In React-Anwendungen sollte alles, was sich im UI ändern kann, Teil des _States_ sein

Wenn wir ein einfaches Input-Element einbinden würden:

```jsx
<input />
```

dann würde es Aspekte des UI-States geben, die nicht im React State mitverfolgt werden

## Input State

So können wir den Wert eines Inputs im State erfassen:

```jsx
<input
  value={inputText}
  onChange={(event) => {
    setInputText(event.target.value);
  }}
/>
```

## Input State

Erklärung:

```txt
value={inputText}
```

bindet vom _State_ auf den Wert des Inputs

```txt
onChange={(event) => {
  setInputText(event.target.value);
}}
```

aktualisiert den State, wenn sich der Wert des Inputs ändert

## Input State

warum `event.target.value`?

- `event.target` repräsentiert das Input-Element
- `event.target.value` ist der neue Wert des Input-Elements

## Input State

Beispiel: Input, bei dem auch die Textlänge angezeigt wird:

```js
function App() {
  const [text, setText] = useState('');
  const len = text.length;

  return (
    <div>
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <p>This string has {len} characters.</p>
    </div>
  );
}
```

## Input State

Übung:

Zeige zwei Inputs, bei denen der Benutzer zusammenpassende Passwörter eingeben soll, die zumindest 4 Zeichen lang sind.

Wenn beide Passwörter übereinstimmen, zeige darunter den Text "valid" an, ansonsten zeige "invalid" an

Stelle dabei sicher, dass du den minimalen State verwendest

# Immutable State

## Immutable State

**Immutability**: Wichtiges Konzept in der funktionalen Programmierung und bei React / Redux

Daten werden nicht direkt abgeändert - stattdessen werden neue Daten auf Basis der alten generiert

## Immutable State

Wenn unser State Arrays oder Objekte enthält, _könnten_ wir versuchen, diese direkt abzuändern

Das sollten wir _nicht_ tun - React bemerkt üblicherweise diese Änderungen nicht und aktualisiert die Ansicht nicht

Objekte im State sollten als _unveränderlich_ erachtet werden

## Immutable State

Wenn `setState` aufgerufen wird, vergleicht React:

- das Objekt, das der alte State referenziert
- das Objekt, das der neue State referenzeirt

Wenn der alte und neue State das gleiche Objekt referenzieren (auch wenn dieses verändert wurde), wird die Komponente nicht neu gerendert

## Immutable State

Demo (siehe <https://codesandbox.io/s/immutable-state-demo-r2x1i>):

```js
function App() {
  const [numbers, setNumbers] = useState([0, 1, 2]);
  function addByMutating() {
    // changes (mutates) the old state entry
    numbers.push(numbers.length);
    setNumbers(numbers);
  }
  function addByReplacing() {
    // creates a new - derived - state object
    setNumbers([...numbers, numbers.length]);
  }
  return (
    <div>
      <div>{JSON.stringify(numbers)}</div>
      <button onClick={addByMutating}>add (mutate)</button>
      <button onClick={addByReplacing}>
        add (replace)
      </button>
    </div>
  );
}
```

# Datenverwaltung ohne Mutationen

## Datenverwaltung ohne Mutationen

Möglichkeiten, um aus bestehenden Daten aktualisierte Daten zu erhalten:

- abändern der ursprünglichen Daten
- erstellen neuer - abgeleiteter - Daten basieren auf den ursprünglichen Daten

## Datenverwaltung ohne Mutationen

Ausgangsdaten:

```js
const names = ['Alice', 'Bob', 'Charlie'];
```

**Mutation**: Abändern des ursprünglichen Arrays

```js
names.push('Dan');
```

**keine Mutation**: Erstellen eines neuen Arrays (spread Syntax)

```js
const newNames = [...names, 'Dan'];
```

## Datenverwaltung ohne Mutationen

Themen:

- Hinzufügen von Properties zu einem Objekt
- Ändern einzelner Properties in einem Objekt
- Hinzufügen von Elementen zu einem Array
- Ändern von Elementen in einem Array
- Entfernen von Elementen aus einem Array

## Datenverwaltung ohne Mutationen

Mechanismen:

- Spread-Syntax (`...`)
- besondere Array-Methoden (`.map`, `.filter`)

## Datenverwaltung ohne Mutationen

Spread Syntax für Arrays:

```js
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];
// moreNumbers: [1, 2, 3, 4, 5, 6]
```

## Datenverwaltung ohne Mutationen

Spread Syntax für Objekte:

```js
const person = {
  firstName: 'Joe',
  lastName: 'Doe',
  age: 31,
};
const newPerson = { ...person, email: 'j@d.com', age: 32 };
// {firstName: 'Joe', lastName: 'Doe', email: 'j@d.com', age: 32}
```

## Datenverwaltung ohne Mutationen

die `.map`-Methode:

- bestimmt für jeden Eintrag in einem Array einen neuen, abgeletiteten, Eintrag
- gibt ein neues Array mit diesen Einträgen zurück

```js
const myNumbers = [1, 2, 3, 4];

const tripledNumbers = myNumbers.map((n) => 3 * n);
// [3, 6, 9, 12]
```

## Datenverwaltung ohne Mutationen

die `.filter`-Methode:

- erstellt ein neues Array, in dem nur bestimmte Einträge im Array verbleiben
- verwendet eine Funktion, um Einträge auf ein bestimmtes Kriterium zu testen
- gibt ein neues Array zurück

```js
const myNumbers = [1, 2, 3, 4];

const isEven = (n) => n % 2 === 0;

const evenNumbers = myNumbers.filter(isEven);
// [2, 4]
```

## Datenverwaltung ohne Mutationen

Mechanismen:

- Hinzufügen von Properties zu einem Objekt: _Spread Syntax_
- Ändern einzelner Properties in einem Objekt: _Spread Syntax_
- Hinzufügen von Elementen zu einem Array: _Spread Syntax_
- Ändern von Elementen in einem Array: _map_
- Entfernen von Elementen aus einem Array: _filter_

## Übungen

Übung: Erstelle die folgenden _reinen_ Funktionen, die ein Todo-Element (Objekt) behandeln:

```js
const todo1 = { id: 1, title: 'foo', completed: false };

const todo2 = withCompletedToggled(todo1);
// { id: 1, title: 'foo', completed: true }

const todo3 = withTitleChanged(todo2, 'bar');
// { id: 1, title: 'bar', completed: true}
```

## Übungen

Lösungen:

```js
const withCompletedToggled = (todo) => ({
  ...todo,
  completed: !todo.completed,
});
```

```js
const withTitleChanged = (todo, newTitle) => ({
  ...todo,
  title: newTitle,
});
```

## Übungen

Übung: Erstelle die folgenden _reinen_ Funktionen, die ein Array von Todo-Objekten behandeln:

```js
const todos1 = [
  { id: 1, title: 'foo', completed: false },
  { id: 2, title: 'bar', completed: true },
];

const todos2 = withNewTodoAdded(todos1, 'baz');
const todos3 = withTodoToggled(todos2, 1);
const todos4 = withCompletedTodosRemoved(todos3);
console.log(todos4);

// [{ id: 3, title: 'baz', completed: false }]
```

## Übungen

Lösung 1:

```js
const withNewTodoAdded = (todos, newTitle) => {
  let maxId = 0;
  for (let todo of todos) {
    maxId = Math.max(maxId, todo.id);
  }
  return [
    ...todos,
    { id: maxId + 1, title: newTitle, completed: false },
  ];
};
```

## Übungen

Lösung 2:

```js
const withTodoToggled = (todos, id) =>
  todos.map((todo) =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  );
```

oder - mit Hilfe von `withCompletedToggled`:

```js
const withTodoToggled = (todos, id) =>
  todos.map((todo) =>
    todo.id === id ? withCompletedToggled(todo) : todo
  );
```

## Übungen

Lösung 3:

```js
const withCompletedTodosRemoved = (todos) =>
  todos.filter((todo) => !todo.completed);
```

# JSX

## JSX

JSX = Templatesprache von React

- **&lt;** wechselt von JS zu XML/HTML
- **{** wechselt zurück zu JS

## JSX verwenden

in React Versionen &lt; 17 müssen wir das `React`-Objekt importieren, um _JSX_ schreiben zu können

```js
import React from 'react';
```

## Gültige Elemente in JSX

- string
- number
- Komponenten (z.B. `<div>`, `<img>`, `<MyComponent>`)
- Arrays anderer Elemente
- null, undefined, true, false (werden nicht gerendert)

# JSX: Binden von Inhalten, Properties und Events

## Inhalte binden

wir können Zahlen und Strings als grundlegende Typen direkt einbinden:

```jsx
const dateString = new Date().toLocaleDateString();
```

```jsx
<div>curent date: {dateString}</div>
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
function sayHello() {
  alert('hello world');
}
```

```jsx
<button onClick={() => sayHello())}>Say Hello</button>
```

Liste von Browser-Events:  
<https://www.w3schools.com/jsref/dom_obj_event.asp>

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

## Property- und Event-Namen

Manche Properties von Elementen haben andere Namen als in standard HTML (spiegeln teilweise die standard DOM-Properties wider)

- `className` (anstatt `class`)
- `onClick` (anstatt `onclick`)
- `htmlFor` (anstatt `for`)

# JSX: Whitespace, Kommentare und Fragmente

## Whitespace

in HTML sind die folgenden Beispiele äquivalent (und enthalten je ein Leerzeichen zwischen den Bildern):

<!-- prettier-ignore-start -->

```html
<img src="foo.png" /> <img src="bar.png" />
```

```html
<img src="foo.png" />    <img src="bar.png" />
```

```html
<img src="foo.png" />
<img src="bar.png" />
```

<!-- prettier-ignore-end -->

## Whitespace

in JSX gilt:

- Whitespace zwischen Elementen innerhalb einer Zeile wird als einzelnes Leerzeichen interpretiert
- Whitespace zwischen Elementen, der über mehrere Zeilen geht, wird ignoriert

<!-- prettier-ignore-start -->

Einzelnes Leerzeichen:

```xml
<img src="foo.png" />     <img src="bar.png" />
```

Kein Leerzeichen:

```xml
<img src="foo.png" />
<img src="bar.png" />
```

<!-- prettier-ignore-end -->

## Whitespace

"Erzwungenes" Einfügen eines Leerzeichens in JSX:

```xml
<img src="foo.png" />{" "}
<img src="bar.png" />
```

## Kommentare

Kommentare können als JavaScript-Kommentare geschrieben werden:

```jsx
<div>Hello World!{/* this is a comment */}</div>
```

## Fragmente

Erlauben es einer Komponente, mehrere Elemente zurückzugeben (anstatt eines einzelnen Elements)

```jsx
return (
  <>
    <td>Hello</td>
    <td>World</td>
  </>
);
```

## Übung: Mathe-Trainer

Erstelle einen Mathe-Trainer wie auf <https://8h0os.csb.app/>

# JSX: if/else und Elemente wiederholen

## JSX: if/elese und Elemente wiederholen

- if / else
- if
- Elemente wiederholen

## if / else

inline-Bedingung:

```jsx
<div>
  {gameActive ? (
    <span>score: {score}</span>
  ) : (
    <span>Game over. Final score: {score}</span>
  )}
</div>
```

## if / else

if / else Statement:

```jsx
let statusMessage;
if (gameActive) {
  statusMessage = <span>score: {score}</span>;
} else {
  statusMessage = (
    <span>Game over. Final score: {score}</span>
  );
}

return <div>{statusMessage}</div>;
```

## if

```jsx
<div>{error ? <div>{error.message}</div> : null}</div>
```

## if

kürzere Version:

```jsx
<div>{error && <div>error.message</div>}</div>
```

Der Operator `&&` in JavaScript:

```js
true && 'my message'; // 'my message'

false && 'my message'; // false
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

Beispiel: Auflisten aller Methoden des _React_-Objekts

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

oft werden wiederholte Elemente via `.map` erstellt:

```js
const initialTodos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'cooking', completed: true },
  { id: 3, title: 'gardening', completed: false },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
};
```

## Elemente wiederholen

Bei obigem Code:  
Warnung in der Browser-Konsole (Wegen Effizienz)  
Lösung: **key**:

```jsx
<ul>
  {todos.map((todo) => (
    <li key={todo.id}>{todo.title}</li>
  ))}
</ul>
```

# JSX und Styling Grundlagen

## JSX und Styling Grundlagen

In React-Projekten sind Style-Definitionen üblicherweise nahe bei den betroffenen Komponenten-Definitionen zu finden

Möglichkeiten:

- CSS-Datei mit dem gleichen Namen wie die JSX-Datei
- Stil-Definition am Beginn einer Komponentendefinitions-Datei
- Inline Stil-Definition im Komponenten-Template

## JSX und Styling Grundlagen

```js
import './TodoItem.css';
```

```jsx
<li
  className={
    isCompleted ? 'todoitem completed' : 'todoitem'
  }
>
  [...]
</li>
```

es gibt Hilfslibraries, die die _className_-Property dynamisch generieren

## JSX und Styling Grundlagen

In JSX weisen wir der _style_-Property ein Objekt zu, z.B.:

```jsx
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const imageStyle = {
  display: 'block',
};
```

```jsx
<div style={containerStyle}>
  <h1>Slideshow image {img}</h1>
  <button>prev</button>
  <img style={imageStyle} src="..." alt="..." />
  <button>next</button>
</div>
```

## JSX und Styling Grundlagen

Bemerkung:

Das direkte binden an die _style_-Property ist ineffizient und wird meist vermieden; in der Praxis werden Libraries wie _styled-components_ oder _emotion_ verwendet, um Stildeklarationen in JavaScript zu schreiben.

## JSX und Styling Grundlagen

Grundlegendes Styling-Beispiel mittels der Library _emotion_:

```jsx
import { css } from '@emotion/css';
```

```jsx
<div
  className={css`
    display: flex;
    justify-content: center;
  `}
>
  ...
</div>
```

# JSX und Sicherheit

## JSX und Sicherheit

beim zuweisen von _Inhalten_ werden XML-Tags automatisch escaped

dies wird nur reinen Textinhalt darstellen:

```jsx
const userSuppliedValue = 'abc <script>alert()</script>';

element = <div>{userSuppliedValue}</div>;
```

## JSX und Sicherheit

manche Attribute - insbesondere _href_ - bieten Angriffziele

```jsx
<h1>profile</h1>
<p>name: {userName}</p>
<p><a href={userWebsite}>website</a></p>
```

Ein Angreifer könnte seine Website auf `javascript:alert("foo")` gesetzt haben

mögliche Lösung: stelle sicher, dass User-generierte externe URLs mit _http&#x3A;//_ oder _https&#x3A;//_ beginnen

<small>siehe auch: [Artikel auf pragmaticwebsecurity.com](https://pragmaticwebsecurity.com/articles/spasecurity/react-xss-part1.html), [Artikel von Ron Perris](https://medium.com/javascript-security/avoiding-xss-in-react-is-still-hard-d2b5c7ad9412), [React pull request mit mehr Details](https://github.com/facebook/react/pull/15047)</small>

# JSX: Kompilierung

## JSX: Kompilierung

XML-Elemente werden kompiliert zu Aufrufen von:

- `_jsx()` (React 17)
- `React.createElement()` (React 16 - `React` muss importiert sein, um JSX zu schreiben)

## JSX: Kompilierung

```jsx
const element = <a href="https://google.com">Google</a>;
```

wird kompiliert zu:

```js
const element = _jsx(
  'a',
  { href: 'https://google.com' },
  'Google'
);
```

## JSX: Kompilierung

```jsx
const element = (
  <MyComponent prop1={1} prop2={2}>
    <div>test 1</div>
    <div>test 2</div>
  </MyComponent>
);
```

wird kompiliert zu:

```js
const element = _jsx(
  MyComponent,
  { prop1: 1, prop2: 2 },
  _jsx('div', null, 'test 1'),
  _jsx('div', null, 'test 2')
);
```

# Formulare und Inputs

## Formular-Aktionen

Standardverhalten eines Formulars beim Submit: Direktes Senden der Daten an den Server

Ersetzen des Standardverhaltens:

```jsx
<form
  onSubmit={(event) => {
    event.preventDefault();
    // handle submit with custom logic
  }}
>
  ...
</form>
```

## Input Labels

Hinzufügen eines Labels für einen Input, ohne IDs zu verwenden:

```jsx
<label>
  first name:
  <input
  // ...
  />
</label>
```

# Input-Typen

## Input-Typen

- text
- textarea
- checkbox
- dropdown
- numerisch
- ...

## Input-Typen

Text und Textarea:

```jsx
<input
  value={title}
  onChange={(e) => {
    setTitle(e.target.value);
  }}
/>

<textarea
  value={message}
  onChange={(e) => {
    setMessage(e.target.value);
  }}
/>
```

## Input-Typen

Checkbox:

```jsx
<input
  type="checkbox"
  checked={accept}
  onChange={(e) => {
    setAccept(e.target.checked);
  }}
/>
```

## Input-Typen

Dropdown mit festen Optionen:

```jsx
<select
  value={unit}
  onChange={(e) => setUnit(e.target.value)}
>
  <option value="px">px</option>
  <option value="em">em</option>
  <option value="%">%</option>
</select>
```

## Input-Typen

Dropdown mit Optionen aus einem Array:

```jsx
const UnitDropdown = () => {
  const units = ['px', 'em', '%'];
  const [unit, setUnit] = useState(units[0]);
  return (
    <select
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
    >
      {units.map((u) => (
        <option value={u} key={u}>
          {u}
        </option>
      ))}
    </select>
  );
};
```

## Numerische Inputs

Der Wert eines numerischen Inputs sollte üblicherweise als string gespeichert werden (nicht als Zahl)

Grund: mögliche Inhalte eines Numerischen Inputs (während der Benutzer tippt):

```txt
""
"-"
"-3"
"-3."
"-3.0"
```

## Numerische Inputs mit direkten "Auswirkungen"

Beispiel: Speichern des numerischen Inhalts eines Inputs als ein String, aktualisieren eines zugehörigen numerischen Wertes, wenn dies möglich ist:

```jsx
const FontSizeDemo = () => {
  const [size, setSize] = useState(16);
  const [sizeStr, setSizeStr] = useState(size.toString());
  const updateSize = (s) => {
    setSizeStr(s);
    // source: https://stackoverflow.com/questions/18082
    if (!isNaN(parseFloat(s)) && isFinite(s)) {
      setSize(Number(s));
    }
  };
  return (
    <div>
      <input
        type="number"
        value={sizeStr}
        onChange={(event) => updateSize(event.target.value)}
      />
      <div style={{ fontSize: size }}>Sample text</div>
    </div>
  );
};
```

# Input-Validierung

## Input-Validierung

Wann kann ein Input validiert werden?

- wenn das Formular _submittet_ wird (_submit_)
- wenn ein Eingabefeld den Fokus verliert (_blur_)
- bei jeder Änderung eines Wertes (_change_)

Der beste Zugang hängt vom Anwendungsfall ab

## Validierung: Beispiele

Validierung bei jeder Änderung:

```js
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const emailValid = isEmail(email);

  // ...
  // display a form
  // and optionally a warning about an invalid email
};
```

## Validierung: Beispiele

Validierung bei _blur_ bzw _change_:

```js
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  // call from onBlur / onChange:
  const validateEmail = () => {
    setEmailValid(isEmail(email));
  };

  // ...
  // display a form
  // and optionally a warning about an invalid email
};
```

## Validierung: Beispiele

vollständiges Beispiel: Validierung bei _blur_ und _submit_

```js
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const validateEmail = () => {
    setEmailValid(isEmail(email));
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        validateEmail();
        if (isEmail(email)) {
          console.log(`Signed up: ${email}`);
        }
      }}
    >
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={() => validateEmail()}
      />
      <button>sign up</button>
      {!emailValid ? <div>invalid email</div> : null}
    </form>
  );
};

const isEmail = (email) =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

## Validierung

komplexere Schemata zur Validierung sind möglich

Beispiel: erste Validierung eines Feldes beim ersten _blur_, danach live-Validierung bei jedem _change_

# VS Code Grundlagen und Plugins

## VS Code Grundlagen und Plugins

siehe Präsentation [VS Code](./vs-code-de.html)

# Ein React-Projekt initialisieren

## Entwicklung mit node.js und npm

- node.js: JS-Runtime
  - Ausführen des lokalen Enwicklungsservers
  - Unit-Tests
- npm: Paketmanager
  - zum Verwalten von Abhängigkeiten
  - Pakete im _node_modules_-Ordner
  - Konfiguration in _package.json_

## Ein React-Projekt initialisieren

Möglichkeiten:

- **create-react-app** (meistverwendete Methode)
- gatsby (ermöglicht _Static Site Generation_)
- next.js (ermöglicht _Static Site Generation_ und serverseitiges Rendering)

## Ein React-Projekt initialisieren

Mögliche Befehle zum Initialisieren eines Projekts namens "todolist":

```bash
npx create-react-app todolist
npx create-react-app todolist --template typescript
npx create-react-app todolist --template cra-template-pwa-typescript
```

```bash
npx create-next-app todolist
npx create-next-app todolist --example with-typescript
```

```bash
npx gatsby new
```

siehe auch: <https://reactjs.org/docs/create-a-new-react-app.html>

## Ein React-Projekt initialisieren

Viele Aspekte können vorkonfiguriert sein:

- Webpack und Babel für den Build
- lokaler Entwicklungsserver
- Unittest-Framework jest
- SCSS und CSS Module
- ...

## Create-react-app: Standard Projektstruktur

- `public/index.html`, `src/index.js`: Einstiegspunkte
- `App.js`, `App.css`: Definieren App-Komponente
- `node_modules`: Abhängigkeiten

## Create-react-app: Entwicklungsserver und Build

Im Projektordner:

- `npm run start` (oder `npm start`): Startet den lokalen Entwicklungsserver
- `npm run build`: Erstellt einen Build (zum Deployen auf einem Webserver)

## Create-react-app: Entwicklungsserver

Bemerkung:

Manchmals zeigt der Entwicklungsserver weiter eine Fehlermeldung an, obwohl der Fehler im Code behoben wurde.

Um dies zu beheben: Stoppen (Ctrl-C) und neu Starten des Servers

# Build und Deployment

## Build und Deployment

Eine React-Anwendung kann bei beliebigen statischen Hosting-Services gehostet werden

## Build

Build mit create-react-app:

```bash
npm run build
```

Minifizierter und Optimierter Build wird im _build_-Ordner generiert

## Deployment

einfache Test-Deployments ohne Login:

- <https://netlify.com/drop> (Hosting für 24 Stunden)
- <https://tiiny.host/> (Upload via a zip-Ordner, Hosting für einige Tage)

# React Developer Tools

## React Developer Tools

- [Chrome Plugin](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox Plugin](https://addons.mozilla.org/de/firefox/addon/react-devtools/)
- [Edge Plugin](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

Features:

- Anzeige der Komponentenstruktur
- Anzeige von State und Props
- Ändern von State und Props
- Performanceanalyse des Renderings von Komponenten

## React Developer Tools

mögliche Zugänge beim Suchen nach Problemen:

- Überprüfen der State-Update-Logik: State wird basierend auf ausgelösten Events korrekt aktualisiert
- Überprüfen der Rendering-Logik: State wird wie erwartet gerendert

# React und TypeScript

## TypeScript Grundlagen

siehe Präsentation [TypeScript](./typescript-de.html)

## Eventtypen

Bei _inline_ Eventhandlern werden Eventtypen automatisch erkannt:

```jsx
<button
  onClick={(event) => {
    // automatic type: React.MouseEvent<HTMLButtonElement>
    event.stopPropagation();
    // ...
  }}
>
  test
</button>
```

## Eventtypen

explizite Typendeklaration für separat definierte Eventhandler:

```tsx
const handleClick = (
  event: React.MouseEvent<HTMLButtonElement>
) => {
  event.stopPropagation();
  // ...
};
```

```tsx
<button onClick={handleClick}>test</button>
```

## Eventtypen

häufig verwendete Eventtypen:

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLButtonElement>`

## useState mit TypeScript

oft keine Annotation notwendig:

```ts
const [filterText, setFilterText] = useState('');
```

mit Annotation:

```ts
const [todos, setTodos] = useState<Array<TodoType>>([]);
```

## Props und Events mit TypeScript

Props und Events in selbst definierten Komponenten

```tsx
type TodoListProps = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = (props: TodoListProps) => {
  // ...
};
```

## Ressource

React+TypeScript Cheatsheets: <https://github.com/typescript-cheatsheets/react>

# Übung: Todo-Liste

## Übung: Todo-Liste

Wir erstellen eine Todo-Anwendung mit der folgenden Funktionalität:

- Anzeigen erledigter und nicht-erledigter Todos
- Hinzufügen eines Todos mittels eines Formulars
- Umschalten des erledigt-Zustandes eines Todos
- Löschen eines Todos

# Komponenten

## Komponenten

React-Anwendungen können in einzelne Komponenten aufgeteilt werden

Motivation:

- Wiederverwendung von Code
- Organisation von Code

## State, Props und Events

Komponenten können Einträge ihres States an Unterkomponenten weitergeben (via _Props_)

Unterkomponenten können Events auslösen, die dazu führen, dass sich der State in der Elternkomponente ändert

## Wo sollte State gespeichert werden?

Wenn mehrere Komponenten auf den gleichen State zugreifen können sollen, wird dieser Üblicherweise in einer gemeinsamen übergeordneten Komponente gespeichert und wird via Props nach unten übergeben (siehe: [React docs: lifting state up](https://reactjs.org/docs/lifting-state-up.html))

Oft wird der Großteil des States in der obersten Komponente gespeichert (z.B. in `App`)

## Beispiel: Komponenten und State in einer Todo-Anwendung

<img src="assets/todo-components-state.svg" />

## Beispiel: Props und Events in einer Todo-Anwendung

<img src="assets/todo-components-state-props-events.svg" />

## Komponentendefinition

Möglichkeiten:

- Definition einer Komponente als Funktion
- Definition einer Komponente als Klasse (war insbesondere vor der Einführung von Hooks verbreitet / notwendig)

## Komponetendefinition

Um sie von normalen Tags zu unterscheiden, beginnen Komponentennamen mit einem Großbuchstaben

# Komponentenlibraries

## Komponentenlibraries

- Material UI: React-Komponenten im _Material Design_
- React Native & React Native Web: React Komponenten & Framework für mobile Apps & Web Apps
- React Bootstrap
- Blueprint
- Ant Design
- ...

## Material-UI

Vorgefertigte React-Komponenten im Material-Design-Stil (Stil von Google/Android)

npm-Paket: _@material-ui/core_

```jsx
import { Button } from '@material-ui/core';
```

```jsx
<Button color="primary">Hello World</Button>
```

Dokumentation: <https://material-ui.com>

## React-Bootstrap

npm-Pakete: _react-bootstrap_, _bootstrap_

```jsx
// index.js
import 'bootstrap/dist/css/bootstrap.min.css';
```

```jsx
import { Button } from 'react-bootstrap';
```

```jsx
<Button variant="primary">Hello World</Button>
```

Dokumentation: <https://react-bootstrap.github.io/>

# Komponenten-Props

## State und Props

- State = interner Zustand einer Komponente
- Props = vom Elternelement übergebene Parameter

## Komponenten-Props

Beispiel:

```jsx
<ProgressBar value={0.75} color="green" />
```

<img src="assets/progress-bar.png" style="width:16em" />

## Komponenten-Props

Beispiel für Komponentendefinition mit Props:

```tsx
type Props = { value: number; color?: string };

const ProgressBar = (props: Props) => {
  // ...
};
```

## Komponenten-Props

Komponentendefinition mit Objektdestrukturierung für Props:

```tsx
const ProgressBar = ({ value, color }: Props) => {
  // ...
};
```

# Komponenten-Events

## Datenfluss

- parent → child: props
- child → parent: events

## Eigene Events

Eventhandler werden als Funktionen definiert und via props übergeben / erhalten.

## Eigene Events

Example:

```jsx
<Rating value={prodRating} onChange={onProdRatingChange} />
```

<img src="assets/rating.png" style="width: 16em" />

## Eigene Events

Beispiel für Prop-Types einer Rating-Komponente:

```tsx
type Props = {
  value: number;
  onChange?: (value: number) => void;
};
```

## Eigene Events

```tsx
const Rating = (props: Props) => {
  const starIds = [1, 2, 3, 4, 5];
  return (
    <div>
      {starIds.map((id) => (
        <span
          onClick={() => {
            // call .onChange if it exists
            props.onChange?.(id);
          }}
          key={id}
        >
          {id <= props.value ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};
```

## Eigene Events

Verwendung einer Rating-Komponente:

```jsx
const [prodRating, setProdRating] = useState(3);
```

```jsx
<Rating
  value={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

kürzere Schreibweise:

```jsx
<Rating value={prodRating} onChange={setProdRating} />
```

# Inhalte an Komponenten übergeben

## Inhalte an Komponenten übergeben

Eine Komponente kann anzuzeigende Inhalte via `props.children` übergeben bekommen

mögliche Verwendung:

```jsx
<Notification type="error">
  <p>Changes could not be saved</p>
</Notification>
```

## Inhalte an Komponenten übergeben

Komponentendefinition:

```jsx
type Props = {
  type: string,
  children: React.ReactNode,
};

const Notification = (props: Props) => {
  let style = {
    backgroundColor:
      props.type === 'error' ? 'salmon' : 'lightblue',
  };
  return <div style={style}>{props.children}</div>;
};
```

# Übungen (Komponenten)

## Übungen (Komponenten)

Aufgabe: Entwerfen von Komponenteninterfaces (Props und Events) für verschiedene Komponenten (z.B. _Calendar_, _Color Picker_, _BarChart_, _Tabs_)

Aufgabe: "Nachbau" einer der Komponenten auf [awesome-react-components](https://github.com/brillout/awesome-react-components) (z.B. bar chart, color picker, table / data grid, tabs)

Aufgabe: Aufteilen der Todo-Anwendung in kleinere Komponenten (z.B. _TodoList_, _TodoItem_, _AddTodo_)

Aufgabe: Extrahieren wiederverwendbarer Komponenten, die insbesondere für Styling verwendet werden - z.B. eine `Button`-Komponente oder eine `TextInput`-Komponente

# Effect hook und API-Abfragen

## Themen

- Netzwerkanfragen in JavaScript
  - fetch mit `await`
  - fetch mit `.then`
- Side-Effects
  - Auslösen von API-Anfragen
  - Laden aus / Speichern in _localStorage_ / _indexeddb_
  - ...

# Netzwerkanfragen in JavaScript

## Netzwerkanfragen in JavaScript

Siehe auch: [Promises, fetch und axios](./javascript-promises-fetch-and-axios-de.html)

## Netzwerkanfragen in JavaScript

asynchrone Funktion, die Todos von einem API lädt:

```js
// todosApi.js
async function fetchTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await fetch(url);
  const todos = await res.json();
  return todos;
}
```

## Netzwerkanfragen in JavaScript

Laden von Todos in einer React-Komponente - mittels `await`:

```js
const [todos, setTodos] = useState([]);
async function loadTodosAsync() {
  const todos = await fetchTodos();
  setTodos(todos);
}
```

```jsx
<button onClick={loadTodosAsync}>
  load todos from API
</button>
```

## Netzwerkanfragen in JavaScript

Laden von Todos - mittels `.then`:

```js
const [todos, setTodos] = useState([]);
function loadTodos() {
  fetchTodos().then((todos) => {
    setTodos(todos);
  });
}
```

```jsx
<button onClick={loadTodos}>fetch todos from API</button>
```

## Rückgabewerte

Bemerkung:

- `loadTodos` gibt (implizit) `undefined` zurück
- `loadTodosAsync` gibt ein _promise_ zurück, das wiederum zu `undefined` aufgelöst wird

dieser Unterschied wird später wichtig sein

## Rückgabewerte

Wir können eine "normale" `loadTodos`-Funktion aus `loadTodosAsync` erstellen:

```js
function loadTodos() {
  loadTodosAsync();
}
```

## Ladeindikator

Code für das Hinzufügen eines Ladeindikators:

```js
const [todos, setTodos] = useState([]);
const [isLoading, setIsLoading] = useState(false);
async function loadTodosAsync() {
  setIsLoading(true);
  const todos = await fetchTodos();
  setTodos(todos);
  setIsLoading(false);
}
```

# Effect Hook Grundlagen

## Effect Hook

Der _Effect Hook_ kann verwendet werden, um Aktionen zu setzen, wenn eine Komponente zum ersten Mal eingebunden wird, oder wenn sich deren Props / State geändert haben

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

Die Effekt-Funktion nach dem (Re-)Rendering einer Komponente ausgeführt, falls sich eine der Abhängigkeiten geändert hat

## Effect Hook

kann verwendet werden, um _side effects_ auszulösen:

- Ausösen von API-Anfragen
- Laden von / Speichern in _localStorage_ / _indexeddb_
- explizite Änderungen am DOM (zusammen mit _refs_)
- Starten von Timern
- ...

## Effect Hook

Beispiel: Laden von Umrechnungskursen, wenn die Komponente zum ersten Mal eingebunden wird oder wenn sich eine Währung ändert:

```ts
const [from, setFrom] = useState('USD');
const [to, setTo] = useState('EUR');
const [rate, setRate] = useState<number | null>(null);
async function loadExchangeRate() {
  // ...
}
useEffect(() => {
  loadExchangeRate();
}, [from, to]);
```

## Effect Hook

Beispiel: Laden von Todos, wenn die Komponente zum ersten Mal eingebunden wird:

```js
const [todos, setTodos] = useState([]);
async function loadTodos() {
  // ...
}
useEffect(() => {
  loadTodos();
}, []);
```

# Effect Hook zum Abfragen von APIs

## Effect Hook zum Abfragen von APIs

Oft müssen API-Daten abgefragt werden, wenn eine Komponente zum ersten Mal eingebunden wurde, oder wenn sich props bzw state geändert haben

## Beispiel: Laden von Wechselkursen

Beispiel: Laden von Wechselkursen von einem API, wenn sich die ausgewählten Währungen ändern:

```js
function ExchangeRate() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [rate, setRate] = useState(null);
  async function loadExchangeRate() {
    setRate(null);
    const rate = await fetchExchangeRate(from, to);
    setRate(rate);
  }
  useEffect(() => {
    loadExchangeRate();
  }, [from, to]);
  // render two dropdowns for selecting currencies
  // and show the exchange rate
}
```

## Beispiel: Laden von Wechselkursen

Funktion, die Daten lädt:

```ts
async function fetchExchangeRate(
  from: string,
  to: string
): Promise<number> {
  const res = await fetch(
    'https://https://api.exchangerate.host/latest?base=' +
      from.toUpperCase() +
      '&symbols=' +
      to.toUpperCase()
  );
  const data = await res.json();
  return data.rates[to.toUpperCase()];
}
```

## Beispiel: Laden von Wechselkursen

vollständiger Code:

```tsx
// https://codesandbox.io/s/use-effect-exchange-rate-szje3
import { useState, useEffect } from 'react';

const currencies = ['USD', 'EUR', 'JPY', 'GBP'];
async function fetchExchangeRate(
  from: string,
  to: string
): Promise<number> {
  const res = await fetch(
    'https://api.exchangerate.host/latest?base=' +
      from.toUpperCase() +
      '&symbols=' +
      to.toUpperCase()
  );
  const data = await res.json();
  return data.rates[to.toUpperCase()];
}

function ExchangeRate() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [rate, setRate] = useState<number | null>(null);
  async function loadExchangeRate() {
    setRate(null);
    const rate = await fetchExchangeRate(from, to);
    setRate(rate);
  }
  useEffect(() => {
    loadExchangeRate();
  }, [from, to]);
  return (
    <div>
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      >
        {currencies.map((c) => (
          <option value={c}>{c}</option>
        ))}
      </select>
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
      >
        {currencies.map((c) => (
          <option value={c}>{c}</option>
        ))}
      </select>
      <div>{rate !== null ? rate : 'no data'}</div>
    </div>
  );
}

export default ExchangeRate;
```

## Effect Hook und async-Funktionen

Bemerkung: Die Effekt-Funktion darf **keine** async-Funktion sein

Die Effekt-Funktion sollte üblicherweise (implizit) _undefined_ zurückgeben; eine async-Funktion würde immer ein Promise zurückgeben

ungültig:

```js
useEffect(loadExchangeRate, [from, to]);
```

gültig:

```js
useEffect(() => {
  loadExchangeRate();
}, [from, to]);
```

## Übungen

Beispiele von abfragbaren APIs:

- Todos: <https://jsonplaceholder.typicode.com/todos>
- SpaceX Startdaten: <https://api.spacexdata.com/v3/launches/1>
- Pokemon-Daten: <https://pokeapi.co/api/v2/pokemon/1>
- hacker news Suchanfrage: <https://hn.algolia.com/api/v1/search?query=foo>

## Übungen

- Lade Todos, wenn der Benutzer die Todolist-Anwendung öffnet
- Zeige Daten zu einem bestimmten SpaceX-Start basierend auf der Startnummer
- Zeige Daten zu einem bestimmten Pokémon basierend auf der Nummer
- Zeige Hacker News Artikel basierend auf einem Suchbegriff

## Beispiel: SpaceX Startdaten

```js
function SpaceXLaunch() {
  const [launchNr, setLaunchNr] = useState(1);
  const [launchData, setLaunchData] = useState({});
  async function loadLaunch() {
    const data = await fetchLaunch(launchNr);
    setLaunchData(data);
  }
  useEffect(() => {
    loadLaunch();
  }, [launchNr]);
  return (
    <div>
      <h1>{launchData.mission_name}</h1>
      <div>date: {launchData.launch_date_utc}</div>
      <button onClick={() => setLaunchNr(launchNr + 1)}>
        next
      </button>
    </div>
  );
}

async function fetchLaunch(launchNr) {
  const url =
    'https://api.spacexdata.com/v3/launches/' +
    launchNr.toString();
  const res = await fetch(url);
  const launchData = await res.json();
  return launchData;
}
```

## Beispiel: Pokemon-Daten

```js
function Pokemon() {
  const [id, setId] = useState(1);
  const [data, setData] = useState({});
  async function loadPokemon() {
    const data = fetchPokemon(id);
    setData(data);
  }
  useEffect(() => {
    loadPokemon();
  }, [id]);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>id: {id}</p>
      <p>height: {data.height}</p>
      <button onClick={() => setId(id + 1)}>next</button>
    </div>
  );
}

async function fetchPokemon(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
```

# Andere Verwendungen des Effect-Hooks

## Andere Verwendungen des Effect-Hooks

- Laden von / Speichern in _localStorage_ / _indexeddb_
- explizite Änderungen am DOM (zusammen mit _refs_)
- Starten von Timern
- ...

## Beispiel: localStorage

Conter, der den eigenen Wert abspeichert, wenn dieser sich ändert:

```jsx
function PersistentCounter() {
  const [count, setCount] = useState(null);
  function loadCount() {
    setCount(Number(localStorage.getItem('count')));
  }
  function saveCount() {
    if (count !== null) {
      localStorage.setItem('count', count);
    }
  }
  useEffect(loadCount, []);
  useEffect(saveCount, [count]);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

## Übung: localStorage

Speichere den State einer der bisherigen Anwendungen (z.B. _tic-tac-toe_, _todo-list_) in _localStorage_

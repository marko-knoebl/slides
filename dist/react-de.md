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
  return (
    <div>
      <h1>Image {img}</h1>
      <button onClick={() => setImg(0)}>start</button>
      <button onClick={() => setImg(img - 1)}>prev</button>
      <img src={baseUrl + img.toString()} />
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
```

Eine Komponente kann interne State-Einträge haben

`useState` gibt bei jedem Rendering den aktuellen State-Eintrag und einen zugehörigen Setter zurück

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
      <img src={baseUrl + img.toString()} />
      <button onClick={() => setImg(img + 1)}>next</button>
```

Eventhandler können als JavaScript-Funktionen definiert werden

# JavaScript-Grundlagen für React

## JavaScript-Grundlagen für React

- JavaScript-Standardisierung und Versionen
- Imports und Exports
- Pfeilfunktionen
- Template-Strings
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

## Template-Strings

- Syntax zum _Erstellen_ von Strings
- Werden mit Backticks begrenzt
- Erlauben mehrzeilige Strings und Interpolation:

```js
const name = 'Mike';
const greeting = `Hello, ${name}!
                  This is ES2015!`;
```

## Das Semikolon in JavaScript

Das Semikolon zum Abschluss von Statements ist größtenteils in JavaScript optional ("Feature" von JavaScript: automatic semicolon insertion)

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

## Spread syntax (Arrays und Objekte)

```js
const squares = [1, 4, 9];
const moreSquares = [...squares, 16, 25];
// moreSquares: [1, 4, 9, 16, 25]
```

```js
const person = {
  firstName: 'Joe',
  lastName: 'Doe',
  age: 31,
};
const newPerson = { ...person, email: 'j@d.com', age: 32 };
// {firstName: 'Joe', lastName: 'Doe', email: 'j@d.com', age: 32}
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

## Map und filter

Array-Methoden für die funktionale Programmierung

## Map

- Ändert jeden Eintrag eines Arrays mit Hilfe einer Funktion ab
- Rückgabewert: neues Array

```js
const myNumbers = [1, 2, 3];

const newNumbers = myNumbers.map((n) => 3 * n);
// [3, 6, 9]
```

## filter

- Behält nur gewisse Einträge in einem Array
- Nutzt eine Funktion, um Einträge auf ein bestimmtes Kriterium zu testen
- Rückgabewert: neues Array

```js
const myNumbers = [1, 2, 3, 4];

const isEven = (n) => n % 2 === 0;

const evenNumbers = myNumbers.filter(isEven);
// [2, 4]
```

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

## Übung: Slideshow

Implementiere die zuvor gesehene Slideshow-Demo erneut; versuche, nicht auf den bisherigen Code zu blicken

- zeige Bilder wie z.B. `https://picsum.photos/300/200?image=0`
- Buttons für _vorwärts_ und _zurück_
- Button für _zurück zum Start_

Zusatz:

- verhindere, dass ins negative gezählt wird
- Button für zufälliges Bild

## Beispiel: Slideshow mit zufälliger Bildsequence

etwas abgeändertes Beispiel: Slideshow mit zufälliger Bildfolge

```js
import { useState } from 'react';

const baseUrl = 'https://picsum.photos/300/200?image=';
function RandomSlideshowApp() {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([0, 10, 20, 30, 40]);
  const randomize = () => {
    const newImages = [];
    for (let i = 0; i < 5; i++) {
      newImages.push(Math.floor(Math.random() * 100));
    }
    setImages(newImages);
    setIndex(0);
  };
  const prevImg = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };
  const nextImg = () => {
    setIndex((index + 1) % images.length);
  };
  return (
    <div>
      <h1>Image {index}</h1>
      <button onClick={() => prevImg()}>prev</button>
      <img
        src={baseUrl + images[index].toString()}
        alt="slideshow"
      />
      <button onClick={() => nextImg()}>next</button>
      <br />
      <button onClick={() => randomize()}>randomize</button>
    </div>
  );
}
export default RandomSlideshowApp;
```

## Übung: Primzahl-Quiz

Erstelle ein Quiz, das zu einer _ungeraden_ Zahl im Bereich 1-99 abfragt, ob diese eine Primzahl ist.

Zeige eine Statistik zu den korrekten / inkorrekten bisherigen Antworten.

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
  return (
    <div>
      <div>{JSON.stringify(numbers)}</div>
      <button
        onClick={() => {
          // invalid - modifies state
          numbers.push(numbers.length);
          setNumbers(numbers);
        }}
      >
        add (mutate)
      </button>
      <button
        onClick={() => {
          // valid - replaces state
          setNumbers([...numbers, numbers.length]);
        }}
      >
        add (replace)
      </button>
    </div>
  );
}
```

## Immutable State

richtig:

```js
const randomize = () => {
  const newImages = [];
  for (let i = 0; i < 5; i++) {
    newImages.push(Math.floor(Math.random() * 100));
  }
  setImages(newImages);
};
```

falsch:

```js
const randomize = () => {
  for (let i = 0; i < 5; i++) {
    images[i] = Math.floor(Math.random() * 100);
  }
  setImages(images);
};
```

## Datenverwaltung ohne Mutationen: Arrays

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

## Datenverwaltung ohne Mutationen: Objekte

Ausgangsdaten:

```js
const user = {
  name: 'john'
  email: 'john@doe.com'
}
```

**Mutation**: Abändern des ursprünglichen Objekts

```js
user.email = 'johndoe@gmail.com';
```

**keine Mutation**: Erstellen eines neuen Objekts (Spread Syntax)

```js
const newUser = { ...user, email: 'johndoe@gmail.com' };
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
const sayHello = () => {
  alert('hello world');
};
```

```jsx
<button onClick={sayHello}>Say Hello</button>
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

# JSX: whitespace, comments and fragments

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

# Text-Inputs und Formulare

## Text-Inputs

Besonderheit von input-Elementen:

Ihre Properties (insbesondere `.value`) können durch User-Interaktionen direkt geändert werden

Es gäbe damit Aspekte des UI-Zustands, die von Haus aus nicht im State erfasst wären

## Text-Inputs

So können wir den Wert eines Inputs im State erfassen:

```jsx
<input
  value={inputText}
  onChange={(event) => {
    setInputText(event.target.value);
  }}
/>
```

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

# Andere Inputs

## Andere Inputs

- textarea
- checkbox
- dropdown
- numeric input
- ...

## Beispiele: textarea und checkbox

textarea:

```jsx
<textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>
```

checkbox:

```jsx
<input
  type="checkbox"
  checked={accept}
  onChange={(e) => setAccept(e.target.checked)}
/>
```

## Beispiel: Dropdown

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

## Beispiel: Dropdown

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
  const updateSize = (newSizeStr) => {
    setSizeStr(newSizeStr);
    // source: https://stackoverflow.com/questions/18082
    if (!isNaN(parseFloat(n)) && isFinite(n)) {
      setSize(Number(newSizeStr));
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

<!-- closely realated content in presentations typescript and react-->

# TypeScript Grundlagen für React

## TypeScript

_TypeScript_: Obermenge von JavaScript mit Unterstützung für statische Typisierung

## Statische Typisierung

Datentypen können angegeben werden und unterstützen insbesondere die Entwicklungsumgebung:

- Autovervollständigung
- Fehlermeldungen bei nicht passenden Datentypen

## Statische Typisierung

Beim build: TypeScript wird in JavaScript übersetzt, alle Typeninformationen gehen dabei verloren

## Variablentypen

Variablentypen werden üblicherweise automatisch erkannt

_Explizites_ Angeben von Variablentypen:

```ts
const age: number = 32;
const name: string = 'Samuel';
const loggedIn: boolean = true;
```

## Funktionstypen

```ts
function shorten(text: string, maxLen: number): string {
  // ...
}
```

```ts
const shorten = (text: string, maxLen: number): string => {
  // ...
};
```

## Funktionstypen

Funktionen ohne Rückgabewert: `void`

```ts
const logMessage = (message: string): void => {
  console.log(message);
};
```

## Array-Typen

```js
let names: Array<string> = [];
names.push('Alice');
```

alternative Schreibweise:

```ts
let names: string[] = [];
names.push('Alice');
```

## Generics

_Generics_: allgemeine Typendeklaration, zu der bei der Anwendung nähere Informationen spezifiziert werden können (via `<...>`)

## Generics

Beispiel: `Array` ist ein Generic

```ts
const names: Array<string> = ['Alice', 'Bob', 'Charlie'];
```

Beispiel: Reacts `Component` ist ein Generic

```ts
class MyComp extends Component<MyProps, MyState> {
  // ...
}
```

## Type Assertions

ermöglichen das Behandeln eines vorhandenen Objekts als bestimmter Typ

dies schlägt fehl:

```ts
// type: HTMLElement or null
const nameInput = document.getElementById('name-input');
console.log(nameInput.value);
```

dies klappt:

```ts
const nameInput = document.getElementById(
  'name-input'
) as HTMLInputElement;
console.log(myInput.value);
```

## Any

Any: lässt alle Typen zu - erlaubt das Zugreifen auf beliebige Properties

```ts
const nameInput = document.getElementById(
  'name-input'
) as any;
console.log(nameInput.value);
```

## Type- und Interface-Deklarationen

**Interfaces**: beschreiben die Struktur eines Objektes / einer Klasse genauer (z.B. `Todo`, `Person`)

**Types**: ähnlich wie Interfaces; auch auf Strings, Arrays, ... anwendbar

## Type- und Interface-Deklarationen

Types bieten im wesentlichen mehr Funktionalität als Interfaces

<https://stackoverflow.com/a/52682220/>

## Types

```ts
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoCollection = Array<Todo>;
```

## Types bei Objekten

```ts
type Todo = {
  id: number;
  title: string;
  completed: boolean;
  // optional
  description?: string;
  // method
  toggle: (id: number) => void;
};
```

## Typendeklarationen für Libraries

Manche JavaScript Libraries beinhalten auch Typendeklarationen für TypeScript - z.B. _redux_.

Für andere Libraries gibt es meist externe Deklarationen mit dem Präfix _@types/_, z.B. für _react_ existiert das Paket _@types/react_.

# React und TypeScript

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
- Umschalten des erledigt-Zustandes eines Todos
- Löschen eines Todos
- Hinzufügen eines Todos mittels eines Formulars

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
- ...

## Material-UI

Vorgefertigte React-Komponenten im Material-Design-Stil (Stil von Google/Android)

## Material-UI: Installation und Verwendung

<https://material-ui.com>

siehe Info-Boxen zu _Installation_ und _Usage_

## Material-UI: Übungen

- Button
- Todo App im Material Style

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

## props.children

Über `props.children` können Inhalte an eine Komponente übergeben werden

Beispiel: `Bordered`-Komponente:

```jsx
<Bordered>lorem ipsum</Bordered>
```

Definition der Komponente:

```jsx
const Bordered = (props) => (
  <div className="bordered">{props.children}</div>
);
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

# Übungen (Komponenten)

## Übungen (Komponenten)

Aufgabe: Entwerfen von Komponenteninterfaces (Props und Events) für verschiedene Komponenten (z.B. _Calendar_, _Color Picker_, _BarChart_, _Tabs_)

Aufgabe: "Nachbau" einer der Komponenten auf [awesome-react-components](https://github.com/brillout/awesome-react-components) (z.B. bar chart, color picker, table / data grid, tabs)

Aufgabe: Aufteilen der Todo-Anwendung in kleinere Komponenten (z.B. _TodoList_, _TodoItem_, _AddTodo_)

# APIs abfragen (Effect Hook)

## APIs abfragen (Effect Hook)

Oft müssen API Daten abgefragt werden, wenn eine Komponente zum ersten Mal eingebunden wurde, oder wenn sich props bzw state geändert haben

## APIs abfragen (Effect Hook)

Der _Effect Hook_ kann verwendet werden, um bestimmte Aktionen zu setzen, wenn eine Komponente neu eingebunden wurde oder wenn ihre Props / State sich geändert haben

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

## APIs abfragen (Effect Hook)

Beispiel: Laden von Todos, wenn die Komponente eingebunden wurde

```js
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const loadTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((todos) => setTodos(todos));
  };
  useEffect(loadTodos, []);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

## APIs abfragen (Effect Hook)

Beispiel: Laden von SpaceX Startdaten, wenn die Komponente eingebunden wurde oder wenn sich `launchNr` geändert hat

```js
const SpaceXLaunch = () => {
  const [launchNr, setLaunchNr] = useState(1);
  const [launchData, setLaunchData] = useState({});
  const fetchLaunch = () => {
    fetch(
      `https://api.spacexdata.com/v3/launches/${launchNr}`
    )
      .then((res) => res.json())
      .then((data) => setLaunchData(data));
  };
  useEffect(fetchLaunch, [launchNr]);
  return (
    <div>
      <h1>{launchData.mission_name}</h1>
      <div>date: {launchData.launch_date_utc}</div>
      <button onClick={() => setLaunchNr(launchNr + 1)}>
        next
      </button>
    </div>
  );
};
```

## APIs abfragen (Effect Hook)

Beispiel: Pokémon-Daten laden, wenn die Komponente eingebunden wurde oder wenn sich `id` geändert hat

```js
const Pokemon = () => {
  const [id, setItd] = useState(1);
  const [data, setData] = useState({});
  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(fetchPokemon, [id]);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>id: {id}</p>
      <p>height: {data.height}</p>
      <button onClick={() => setItd(id + 1)}>next</button>
    </div>
  );
};
```

## APIs abfragen (Effect Hook)

Aufgaben:

- Laden und Anzeigen von mehr Daten
- Indikator, dass geladen wird
- Automatisches Aktualisieren alle 10 Sekunden

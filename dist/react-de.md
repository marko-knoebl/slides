# React

## Themen

- Kurzüberblick über React
- JS-Grundlagen für React
- Deklaratives Rendering / Arbeiten mit State
- JSX als Templatesprache
- Einbinden vordefinierter Komponenten
- Definieren eigener Komponenten
- Abfragen von Web-APIs aus Komponenten

# React.js Überblick

## Was ist React?

- Eines der 3 großen JavaScript UI Frameworks (neben Angular, Vue.js)

## Grundlagen moderner JavaScript UI Frameworks

- deklarativ
- Komponenten-Struktur

## Deklarativ

- Datenmodell, das den gesamten Anwendungszustand abbildet
- User-Interaktionen ändern das Modell, das View wird automatisch aktualisiert

## Komponenten-Struktur

- "eigene" HTML-Tags
- Datenfluss via Properties und Events
- Üblicherweise unidirektionaler Datenfluss (vom Eltern- zum Kindelement)

## Beispiel: Datenmodell und -fluss in einer Todo-App

<img src="assets/todo-components-datamodel.svg" />

## Was macht React besonders?

- JavaScript-basierte Template-Syntax
- Explizite Änderung des Anwendungszustands mittels Settern
- State-Objekte sind unveränderlich (immutable)

## Geschichte von React

- 2013 von Facebook als open source veröffentlicht
- Februar 2019: Einführung von Hooks
- bevorstehende Ergänzungen: [suspense for data fetching](https://reactjs.org/docs/concurrent-mode-suspense.html) und [concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html)

# React Grundlagen

## Online Editoren

Empfehlung: <https://codesandbox.io>

andere:

- Glitch: <https://glitch.com/edit/#!/remix/starter-react-template>
- CodePen: <https://reactjs.org/redirect-to-codepen/hello-world>

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

# JSX Grundlagen

## JSX: JS + XML

JSX = Templatesprache von React

- **&lt;** wechselt von JS zu XML/HTML
- **{** wechselt zurück zu JS

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

## Elemente wiederholen

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

## Beispiel: Counter

Wir fügen unserer Anwendung einen Button hinzu. Zu Beginn zeigt dieser den Wert 0. Bei jedem Klick erhöht er sich um 1.

## Beispiel: Counter

```jsx
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
};
```

## Beispiel: Slideshow

Slideshow, die Bilder wie das folgende anzeigt:

`https://picsum.photos/200?image=10`

- Buttons für _vorwärts_ und _zurück_
- Button für _zurück zum Start_
- Verhindern, dass ins negative gezählt wird

# JavaScript-Grundlagen für React

## JavaScript Standardisierung

JavaScript wird unter dem Namen [_ECMAScript_ (ES)](https://www.ecma-international.org/ecma-262/) standardisiert

## JavaScript Versionen

_ES5_: Von allen Browsern, inklusive Internet Explorer, unterstützt (2009 standardisiert)

Seit 2015: jährliche Updates im Juni jeden Jahres (ES2015, ES2016, ...)

In der Praxis: Modernes JavaScript wird in ES5 transpiliert (via Babel, webpack)

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

- Neue Syntax zum _Erstellen_ von Strings
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

Demo (siehe <https://codesandbox.io/s/exciting-dust-w7hni>):

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

Code wie der folgende ist **nicht** erlaubt, um State abzuändern, da React die Mutation nicht "sieht":

```js
todos[0].completed = true;
todos.push({ title: 'study', completed: false });
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

## immer.js

Library, die das Arbeiten ohne Mutationen erleichtert

wird insbesondere vom Redux-Team empfohlen

## immer.js

Code, der das todos-Array abändern würde:

```js
todos[0].completed = true;
todos.push({ title: 'study', completed: false });
```

Mutation durch die Verwendung von _immer.js_ vermeiden:

```js
import produce from 'immer';

const newTodos = produce(todos, (todosDraft) => {
  todosDraft[0].completed = true;
  todosDraft.push({ title: 'study', completed: false });
});
```

# Inputs & Formulare

## Inputs

Besonderheit von input-Elementen:

Ihre Properties (insbesondere `.value`) können durch User-Interaktionen direkt geändert werden

Es gäbe damit Aspekte des UI-Zustands, die von Haus aus nicht im state erfasst wären

## Inputs

So können wir den Value eines Inputs im State erfassen:

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
    // handle submit
  }}
>
  <input />
</form>
```

## Formular-Validierung

"manuelle" Validierung:

```js
const NewsletterRegistration = () => {
  const [email, setEmail] = useState('');
  const [emailEdited, setEmailEdited] = useState(false);
  const emailInvalid = !isEmail(email);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(email);
      }}
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={() => setEmailEdited(true)}
      />
      <button disabled={emailInvalid}>subscribe</button>
      {emailEdited && emailInvalid ? (
        <div>invalid email</div>
      ) : null}
    </form>
  );
};

const isEmail = (email) =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

# React Developer Tools

## React Developer Tools

- [Chrome Plugin](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox Plugin](https://addons.mozilla.org/de/firefox/addon/react-devtools/)

Features:

- Anzeige der Komponentenstruktur
- Anzeige von State und Props
- Ändern von State und Props
- Performanceanalyse des Renderings von Komponenten

# JSX im Detail

## JSX im Detail

Themen:

- Properties
- Elemente wiederholen
- if / elese
- if
- Whitespace
- Kommentare
- Fragmente
- gültige Elemente
- Kompilierung

## Property-Namen

Manche Properties von Eleenten haben andere Namen als in standard HTML (spiegeln teilweise die standard DOM-Properties wider)

- `className` (anstatt `class`)
- `onClick` (anstatt `onclick`)
- `htmlFor` (anstatt `for`)

## Property-Namen

Beispiel: CSS-Klassen

```jsx
<li
  className={
    isCompleted ? 'todoitem completed' : 'todoitem'
  }
>
  [...]
</li>
```

es gibt viele Hilfslibraries, die die _className_-Property dynamisch generieren

## Style Property

In JSX weisen wir der _style_-Property ein Objekt zu:

```jsx
<div
  style={{
    backgroundColor: '#333',
    fontSize: getFontSize(),
  }}
/>
```

## Elemente wiederholen

Aufgabe: Erstellen einer HTML-Liste (ul) aus diesen Daten:

```js
const initialTodos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'cooking', completed: true },
  { id: 3, title: 'gardening', completed: false },
];
```

## JSX: Elemente wiederholen

Erstellen eines Arrays von JSX-Elementen via `.map`:

```jsx
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

## if / else

```jsx
<div>{Math.random() > 0.5 ? 'heads' : 'tails'}</div>
```

## if / else

```jsx
let face;
if (Math.random() > 0.5) {
  face = 'heads';
} else {
  face = 'tails';
}

return <div>{face}</div>;
```

## if

```jsx
<div>{state.hasError && state.errorMessage}</div>
```

Der Operator `&&` in JavaScript:

```js
true && 'my message'; // 'my message'

false && 'my message'; // false
```

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
a = <div>Hello World!{/*this is a comment*/}</div>;
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

## gültige Elemente in JSX

- string
- number
- Komponenten (z.B. `<div>`, `<img>`, `<MyComponent>`)
- Arrays anderer Elemente
- null, undefined, true, false (werden nicht gerendert)

## JSX Kompilierung

```jsx
const element = <a href="https://google.com">Google</a>;
```

wird kompiliert zu:

```js
const element = React.createElement(
  'a',
  { href: 'https://google.com' },
  'Google'
);
```

## JSX Kompilierung

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
const element = React.createElement(
  MyComponent,
  { prop1: 1, prop2: 2 },
  React.createElement('div', null, 'test 1'),
  React.createElement('div', null, 'test 2')
);
```

# Übung: Todo-Liste

## Übung: Todo-Liste

Wir erstellen eine Todo-Anwendung mit der folgenden Funktionalität:

- Anzeigen erledigter und nicht-erledigter Todos
- Umschalten des erledigt-Zustandes eines Todos
- Löschen eines Todos
- Hinzufügen eines Todos mittels eines Formulars

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

## State & Props

- State = interner Zustand einer Komponente
- Props = vom Elternelement übergebene Parameter

## Props in eigenen Komponenten

Beispiel:

```jsx
<Rating stars={3} />
```

<img src="assets/rating.png" style="width: 16em" />

## Props in Funktionskomponenten

Beispiel (einfache Rating-Komponente):

```jsx
const Rating = (props) => (
  <div className="rating">
    {'★'.repeat(props.stars) + '☆'.repeat(5 - props.stars)}
  </div>
);
```

mit destrukturierender Zuweisung für Props:

```jsx
const Rating = ({ stars }) => (
  <div className="rating">
    {'★'.repeat(stars) + '☆'.repeat(5 - stars)}
  </div>
);
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

Beispiel: Event `onChange` der `Rating`-Komponente (jeder Stern ist ein `span`-Element)

## Eigene Events

```jsx
const Rating = (props) => {
  const starIds = [1, 2, 3, 4, 5];
  return (
    <div>
      {starIds.map((id) => (
        <span onClick={() => props.onChange(id)} key={id}>
          {id <= props.stars ? '★' : '☆'}
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
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

kürzere Schreibweise:

```jsx
<Rating stars={prodRating} onChange={setProdRating} />
```

## Eigene Events

Beispiel `ToggleButton`: Button, der entweder "off" oder "on" anzeigt:

Prop: `active` - kann auf `true` bzw `false` gesetzt sein  
Event: `onToggle` - Funktion, die mit dem neuen Zustand aufgerufen wird

```jsx
<button
  onClick={() => {
    props.onToggle(!props.active);
  }}
>
  {props.active ? 'on' : 'off'}
</button>
```

## Eigene Events

Beispiel `ToggleButton`: Der Button muss passend eingebunden werden

```jsx
const [myOption, setMyOption] = useState(true);

<ToggleButton
  active={myOption}
  onToggle={(newIsActive) => {
    setMyOption(newIsActive);
  }}
/>;
```

# Übungen

## Übungen

Aufgabe: Entwerfen von Komponenteninterfaces (Props und Events) für verschiedene Komponenten (z.B. _Calendar_, _Color Picker_, _BarChart_, _Tabs_)

Aufgabe: "Nachbau" einer der Komponenten auf [awesome-react-components](https://github.com/brillout/awesome-react-components) (z.B. bar chart, color picker, table / data grid, tabs)

Aufgabe: Aufteilen der Todo-Anwendung in kleinere Komponenten (z.B. _TodoList_, _TodoItem_, _AddTodo_)

# Typechecker für React

## Typechecker für React

Insbesondere was das Interface von Komponenten angeht, ist es sehr sinvoll, vorhandene Properties und Events anzugeben

Möglichkeiten:

- Verwendung von TypeScript als Sprache
- Library _prop-types_

## React mit TypeScript

Erstellen eines neuen Projekts:

```bash
npx create-react-app my-app --template typescript
```

## TypeScript

TypeScript Grundlagen: siehe Präsentation [TypeScript](./typescript-de.html)

## React mit TypeScript

ausführliche Resource: <https://github.com/typescript-cheatsheets/react-typescript-cheatsheet>

<!--

redux with typescript:

- https://github.com/piotrwitek/react-redux-typescript-guide
- https://medium.com/@resir014/a-type-safe-approach-to-redux-stores-in-typescript-6474e012b81e
- https://www.carlrippon.com/strongly-typed-react-redux-code-with-typescript/

-->

## Props mit TypeScript (Funktionskomponenten)

```tsx
type TodoListProps = {
  todos: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = (props: TodoListProps) => {
  // ...
};
```

## useState mit TypeScript

oft keine Annotation notwendig:

```ts
const [filterText, setFilterText] = useState('');
```

mit Annotation:

```ts
const [todos, setTodos] = useState<Array<TodoType>>([]);
```

## Eventtypen in TypeScript

Bei inline Eventhandlern muss kein Typ angegeben werden:

```jsx
<button
  onClick={(event) => {
    event.stopPropagation();
  }}
>
  test
</button>
```

## Eventtypen in TypeScript

Eventtypen für separat definierte Eventhandler:

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLDivElement>`

## prop-types

Library, um React Komponenten - Properties in JavaScript mit Typeninformationen zu versehen

## prop-types

Beispiel:

```js
import PropTypes from 'prop-types';

// definition of Rating component here

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
  onStarsChange: PropTypes.func,
};
```

## prop-types in VS Code

Plugin: _React PropTypes IntelliSense_

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

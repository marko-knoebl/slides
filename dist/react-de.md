# {{title}}

## Präsentation und Code

Präsentationen verfügbar unter: https://karuga.eu/courses-presentations

Code verfügbar unter: https://github.com/marko-knoebl/courses-code

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

## Vorstellung der Teilnehmer

- Name
- Firma
- Aktuelle Projekte
- Grund der Schulung
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

# Agenda

- Kurzüberblick über React
- Modernes JS / JS-Grundlagen für React
- Deklaratives Rendering / Arbeiten mit application-state
- Komponenten
- Einbinden vordefinierter Komponenten
- Redux
- Routing
- Testen von Komponenten
- Progressive Web Apps

# React.js

## Was ist React?

- Eine der 3 großen JavaScript-UI-Libraries (neben Angular, vue.js)

## Grundlagen moderner JavaScript-UI-Libraries

- Deklarativ
- Komponenten-Struktur

## Deklarativ

- Im Hintergrund steht ein Datenmodell, das den gesamten Anwendungszustand abbildet
- Man ändert das Modell, das View wird von alleine (möglichst effizient) aktualisiert

## Komponenten-Struktur

- "eigene" HTML-Tags
- Datenfluss via Properties und Events
- Üblicherweise unidirektionaler Datenfluss (vom Eltern- zum Kindelement)

## Was macht React besonders?

- JavaScript-basierte Template-Syntax
- Explizite Änderung des Anwendungszustands via _setState()_

## Geschichte von React

- Ab 2011 intern bei Facebook in Verwendung
- Open Source seit 2013
- Aktuelle Version: React 16 (September 2017): Komplette interne Neuentwicklung mit gleichem API

## Beispiel: Datenmodell und -fluss in einer Todo-App

![Bild: Datenmodell in einer Todo-App](./images/todo-components-datamodel.svg)

# React.js - Grundlagen

## Entwicklung mit node.js und npm

- node.js: JS-Runtime
  - Ausführen des Testservers
  - Unit-Tests
- npm: Paketmanager
  - zum Verwalten von Abhängigkeiten
  - Pakete im _node_modules_-Ordner
  - Konfiguration in _package.json_

## create-react-app

Meistgenutzte Methode zum Erstellen von React-Anwendungen: _create-react-app_

ausführen:

```bash
npx create-react-app playground
```

siehe auch: https://reactjs.org/docs/add-react-to-a-new-app.html

## Standard Projektstruktur

- `public/index.html`, `src/index.js`: Einstiegspunkte
- `App.js`, `App.css`: Definieren App-Komponente
- `node_modules`: Abhängigkeiten

## Testserver und Build

Im Projektordner:

- `npm start`: Startet den Testserver
- `npm run build`: Erstellt einen Build (zum Deployen auf einem Webserver)

## JSX: JS + XML

JSX = Templatesprache von React

- **<** wechselt von JS zu XML/HTML
- **{** wechselt zurück zu JS

## JSX: JS + XML

```jsx
el = <div>Hallo, ich bin {2018 - 1970} Jahre alt</div>;
```

## JSX: Einfache Aufgaben

- Zeige das aktuelle Datum an
- Zeige eine zufällige Roulettezahl an (0-36)

## Komponentenzustand (State)

Komponente, die jede Sekunde ihren Zustand aktualisiert:

```js
constructor () {
  super();
  this.state = { now: new Date() };
  setInterval(() => {
    this.setState({ now: new Date() });
  }, 1000);
};
```

```jsx
<div>{this.state.now.toLocaleTimeString()}</div>
```

# ES2015+

## Modernes JavaScript

## JavaScript-Standardisierung

JavaScript wird unter dem Namen _ECMAScript_ (kurz ES) standardisiert

## JavaScript: Versionen

- Von allen Browsern unterstützt: ES5 (2009 veröffentlicht)
- Nächste große Version: _ES2015_ (oder ES6)
- Seither: jährliche kleinere Änderungen (aktuell: ES2018)

## JavaScript: Versionsunterstützung

- Übersicht: siehe http://kangax.github.io/compat-table/es6/
- In der Praxis: Modernes JavaScript wird in ES5 transpiliert (mittels Babel, webpack)

## Wichtige Neuerungen in ES2015

## Module & Imports

- Möglichkeit, Funktionalität aus anderen js-Dateien zu importieren – kein globaler Namespace mehr
- Benötigt einen Bundler, z.B. webpack

```js
// user.js
export class User {
  ...
}
```

```js
// main.js
import { User } from 'user.js';
```

## Module & Imports

```js
// User.js
// es kann 1 default export geben
export default class User {
   ...
}
```

```js
// main.js
import User from 'User.js';
```

## let

- Neue Alternative zu var – mit leicht anderem Scoping
- Scope: umgebende geschweifte Klammern (statt umgebender Funktion)

```js
if (true) {
  let a = 3;
}
console.log(a); // ReferenceError
```

## const

Deklariert eine Variable, die nicht mehr neu zugewiesen werden kann.  
Das bezeichnete Objekt selbst kann allerdings modifiziert werden

```js
const names = ['Alice', 'Bob', 'Claire'];
names = ['Andrew', 'Bob', 'Claire']; // ungültig!
names[0] = 'Andrew'; // gültig
```

## Destrukturierende Zuweisung

```js
let a = 1;
let b = 2;
[a, b] = [b, a];

const [result, errors] = someComputation();
```

## Pfeilfunktionen

- Kurzschreibweise für anonyme Funktionen
- Lässt _this_ unverändert (überschreibt es nicht)

```js
let multiply = (a, b) => {
  return a * b;
};

let multiply = (a, b) => a * b;
```

## Pfeilfunktionen

wenn es genau einen Parameter gibt: Parameterklammern optional

```js
const square = a => a * a;
```

wenn direkt ein Objekt zurückgegeben werden soll: mit runden Klammern umschießen

```js
const getState = () => ({
  loggedIn: true,
  userName: 'mike',
});
```

## Klassen

Ersetzen die alten Konstruktorfunktionen und Prototypen

## Klassen

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  hello() {
    return `My name is ${this.firstName}`;
  }
}
```

## Klassen und Vererbung

```js
class User extends Person {
  constructor(firstName, lastName, userName) {
    // ruft Person.constructor auf
    super(firstName, lastName);
    this.userName = userName;
  }
}
```

## Array-Iteration (for ... of)

Über die Einträge in einem Array iterieren:

```js
let names = ['Anna', 'Bernhard', 'Caro'];
for (let name of names) {
  console.log(name);
}
```

## Spread Syntax (Arrays und Objekte)

```js
let squares = [1, 4, 9];
let moreSquares = [...squares, 16, 25];
// moreSquares: [1, 4, 9, 16, 25]
```

```js
let person = { firstName: 'Joe', lastName: 'Doe', age: 31 };
let newPerson = { ...person, email: 'j@d.com', age: 32 };
// {firstName: 'Joe', lastName: 'Doe', email: 'j@d.com', age: 32}
```

## Template-Strings

- Neue Syntax zum _Erstellen_ von Strings
- Werden mit Backticks begrenzt
- Erlauben mehrzeilige Strings und Interpolation:

```js
let name = 'Anton';
let greeting = `Hallo, ${name}!
                Das ist ES2015!`;
```

## Standardparameter in Funktionen

In Funktionen können nun Standardparameter definiert werden:

```js
let join = (strings, separator='') => {
  ...
}
```

# ESLint

## ESLint

JavaScript-Linter

- VS Code plugin

# Prettier

## Prettier

https://prettier.io/

- Code-Formatierung nach strikten Regeln
- VS-Code-Plugin (via Alt + Shift + F)

## Prettier-Konfiguration

in VS Code: über Datei - Einstellungen - Einstellungen

oder über `.prettierrc.json`:

```json
{
  "bracketSpacing": false,
  "singleQuote": true,
  "trailingComma": true,
  "jsxBracketSameLine": true
}
```

# JavaScript-Grundlagen für React

## map, filter, reduce

- Array-Methoden für die funktionale Programmierung

## map

- Ändert jeden Eintrag eines Arrays mit Hilfe einer Funktion ab
- Rückgabewert: neuer Array

```js
let myNumbers = [2, 10, 23];

function triple(n) {
  return 3 * n;
}

let newNumbers = myNumbers.map(triple);
// [6, 30, 69]
```

## filter

- Behält nur gewisse Einträge in einem Array
- Nutzt eine Funktion, um Einträge auf ein bestimmtes Kriterium zu testen
- Rückgabewert: neuer Array

```js
let myNumbers = [2, 10, 23];

function isEven(n) {
  return n % 2 === 0;
}

let newNumbers = myNumbers.filter(isEven);
// [2, 10]
```

## reduce

## this

- _this_ bezieht sich in Objektmethoden üblicherweise auf das aktuelle Objekt
- **allerdings**:
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

## Lösung: _that_ / _self_

```js
class myComponent {
  constructor() {
    // this ist hier richtig gesetzt
    this.foo = true;
    let that = this;
    setTimeout(function() {
      //this wird hier überschrieben (auf window)
      console.log(that.foo);
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
let f = new Foo();
f.greet(); // klappt
let fg = f.greet;
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

# Entwicklerwerkzeuge für React

## React Developer Tools

https://github.com/facebook/react-devtools

- Anzeige der Komponententags im Inspektor
- Anzeige von State und Props
- Hervorheben von Änderungen von State und Props
- Hervorheben des Rerenderings von Komponenten

## Debugging in VS Code

Extensions:

- **Debugger for Chrome**
- Debugger for Firefox

## Debugging in VS Code: Konfiguration

Konfigurationsdatei erstellen: In der Debugger-Sidebar auf das Zahnradsymbol (_Configure or fix 'launch.json'_)

in _launch.json_:

```json
{
  "type": "chrome",
  "request": "launch",
  "name": "Launch Chrome for React",
  "url": "http://localhost:3000"
}
```

## Debugging in VS Code: starten

Testserver muss im Hintergrund schon laufen

Debugging in VS Code starten: mittels _F5_

# Komponenten

## Komponenten

Möglichkeit, eigene Tags zu definieren, z.B.

```xml
<Rating stars={4}/>
```

<img src="assets/rating.png" style="height: 4em">

## Komponenten

Um sie von normalen Tags zu unterscheiden, beginnen Komponentennamen immer mit einem Großbuchstaben

## Komponenten: State & Props

- State = interner Zustand einer Komponente
  - `this.state`
  - `this.setState`
- Props = vom Elternelement übergebene Parameter
  - `this.props`

## Komponentendefinition

Beispiel:

```jsx
import React, { Component } from 'react';

export class Rating extends Component {
  render() {
    return (
      <div className="rating">
        {'*'.repeat(this.props.stars)}
      </div>
    );
  }
}
```

## Komponentendefinition: Beispiele

- `PlayingCard` - Komponente
- `RomanNumber` - Komponente

## Datenfluss

- parent → child: props
- child → parent: events

## Prop Types

Typechecker für Props

`npm install prop-types`

## Prop Types

```jsx
import PropTypes from 'prop-types';

class MyComponent extends Component {}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  onChange: PropTypes.func,
};
```

## Eigene Events

Eventhandler werden als Funktionen definiert und via props übergeben / erhalten.

## Eigene Events

Beispiel `ToggleButton`: Button der entweder "off" oder "on" anzeigt:

Prop: `on` - kann auf `true` bzw `false` gesetzt sein
Event: `onToggle` - Funktion, die mit dem neuen Zustand aufgerufen wird

```jsx
<button onClick={this.handleClick}>
  {this.props.on ? 'on' : 'off'}
</button>
```

```js
handleClick = () => {
  this.props.onToggle(!this.props.on);
};
```

## Eigene Events

Beispiel `ToggleButton`: Der Button muss passend eingebunden werden

```jsx
state: {
  ...
  someOptionActive: true
}

<ToggleButton
  on={this.state.someOptionActive}
  onToggle={this.handleToggle}
/>

handleToggle = (isToggled) => {
  this.setState({someOptionActive: isToggled});
}
```

## Eigene Events

Beispiele:

- Rating-Komponente mit anklickbaren Sternen
- NumberInput-Komponente zum Angeben einer Ganzzahl mit +/- buttons
  - Bonus: Umsetzung des APIs, sodass es kompatibel zu normalen input-Elementen ist und input-Elemente leicht durch NumberInput-Komponeneten ersetzt werden können
  - Bonus: zusätzliche min / max - Property bei der Komponente

## Lifecycle-Hooks

Bei Klassenkomponenten ist es möglich, Events in ihrem Lebenszyklus abzufragen:

- `componentDidMount()`
- `componentDidUpdate()`
- `componentWillUnmount()`

Diese werden als Methoden der Klasse implementiert

## Übung

Clock-Komponente (mit `componentDidMount` und `componentWillUnmount`)

# Übung: todo list

# React mit TypeScript

## Create-React-App

```bash
npx create-react-app my-app --typescript
```

## Komponenten (Funktionen)

```ts
type TodoListProps = {
  todos: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = (props: TodoListProps) => {
  const [filterText, setFilterText] = useState<string>('');

  return <div>...</div>;
};
```

## Komponenten (Klassen)

```tsx
// TodoList.tsx
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
> {}
```

# Material-UI

Vorgefertigte React-Komponenten im Material-Design-Stil (Stil von Google/Android)

## Material-UI: Installation und Verwendung

https://material-ui.com

siehe Info-Boxen zu _Installation_ und _Usage_

## Übungen

- Button
- Texteingabe mit Validierung: Mindesteingabelänge 3 Zeichen
- Texteingabe mit Validierung: 2 Passwörter müssen übereinstimmen
- Todo-App im Material-Stil


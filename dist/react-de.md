# React

## Präsentationen

https://marko-knoebl.github.io/slides/

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

## Vorstellung der Teilnehmer

- Aktuelle Projekte
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

## Code

Code verfügbar unter: https://github.com/marko-knoebl/courses-code

# Themen

## Themen

- Kurzüberblick über React
- Modernes JS / JS-Grundlagen für React
- Deklaratives Rendering / Arbeiten mit application-state
- JSX als Templatesprache
- Komponenten
- Einbinden vordefinierter Komponenten
- Abfragen von Web-APIs aus Komponenten

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

## Beispiel: Datenmodell und -fluss in einer Todo-App

<img src="assets/todo-components-datamodel.svg" type="text/svg" style="width: 300px">

## Was macht React besonders?

- JavaScript-basierte Template-Syntax
- Explizite Änderung des Anwendungszustands mittels Settern

## Geschichte von React

- Ab 2011 intern bei Facebook in Verwendung
- Open Source seit 2013
- Aktuelle Major Version: React 16 (September 2017)
- Februar 2019: Einführung von Hooks

# Create-React-App

## Entwicklung mit node.js und npm

- node.js: JS-Runtime
  - Ausführen des lokalen Enwicklungsservers
  - Unit-Tests
- npm: Paketmanager
  - zum Verwalten von Abhängigkeiten
  - Pakete im _node_modules_-Ordner
  - Konfiguration in _package.json_

## create-react-app

Meistgenutzte Methode zum Erstellen von React-Anwendungen

ausführen via:

```bash
npx create-react-app playground
```

siehe auch: https://reactjs.org/docs/add-react-to-a-new-app.html

## create-react-app

Erstellt eine einfache React-Anwendung, auf deren Basis weiter gearbeitet werden kann

Viele Aspekte sind vorkonfiguriert:

- lokaler Entwicklungsserver
- Unittest-Framework jest
- Webpack und Babel
- SCSS und CSS Module

## Standard Projektstruktur

- `public/index.html`, `src/index.js`: Einstiegspunkte
- `App.js`, `App.css`: Definieren App-Komponente
- `node_modules`: Abhängigkeiten

## Entwicklungsserver und Build

Im Projektordner:

- `npm start`: Startet den lokalen Entwicklungsserver
- `npm run build`: Erstellt einen Build (zum Deployen auf einem Webserver)

# React & JSX Grundlagen

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
- Zeige zufällig entweder den Text "Kopf" oder "Zahl" in einem div an

## JSX: Properties

Der Wechsel von XML auf JS klappt auch bei Properties:

```jsx
<a href={'https://en.wikipedia.org/wiki/' + articleName}>
  some article
</a>
```

Beachte die fehlenden Anführungszeichen bei href

## JSX Properties: Aufgabe

Zeige ein Bild basierend auf einer ID an. Verwende dazu:

```js
const getImgUrl = id =>
  'https://picsum.photos/200?image=' + id.toString();
```

## JSX: events

```jsx
const hello = () => {...}

<button onClick={hello}>Say Hello</button>
```

Liste von Browser-Events:  
https://www.w3schools.com/jsref/dom_obj_event.asp

## State Beispiel

(wir widmen uns dem Thema _State_ später im Detail)

```jsx
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}>
      {count}
    </button>
  );
};
```

# VS Code

## VS Code

https://code.visualstudio.com

Open-Source-Entwicklungsumgebung

Unabhängig vom eigentlichen Visual Studio

## VS Code: Ordner öffnen

ganzen Ordner öffnen mit _File_ - _Open Folder_

## VS Code: Datei-Explorer, Split Editor

## VS Code: Terminal

Öffnen und Schließen der Ansicht via _Strg_ + _Ö_

zusätzliches Terminal via Symbol _+_

übernimmt das aktuell geöffnete Verzeichnis

## VS Code - Konfiguration

Via _File - Preferences - Settings_

Eingeteilt in _User Settings_ und _Workspace Settings_

## VS Code - Konfigurationsmöglichkeiten

Empfehlungen:

- Accept Suggestion on Commit Character (Autovervollständigung ohne _Enter_): _deaktivieren_
- Tab Size: _2_ oder _4_

Weitere Möglichkeiten:

- Auto Save
- Format on Save
- Word Wrap
- EOL
- Workbench: Color Theme

## VS Code - Befehle

_F1_ oder _Ctrl_ + _Shift_ + _P_: Befehlspalette

- durchsuchbar
- zeigt Kurzbefehle an

Beispiele für Befehle:

- _Find_
- _Search: Find in Files_
- _Format Document_
- _Toggle line comment_ / _Toggle block comment_
- _Go to definition_ / _Peek definition_ (nur für bestimmte Dateitypen)
- _Rename symbol_ (nur für bestimmte Dateitypen)

## VS Code - Mehrere Textcursor

- _Ctrl_ + _F2_: Mehrere Textcursor setzen
- _Alt_ + Mausklick: Mehrere Textcursor setzen

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

# ESLint

## ESLint

Linter für JavaScript (und TypeScript)

VS Code Plugin verfügbar

# ES2015+

## Modernes JavaScript

## JavaScript-Standardisierung

JavaScript wird unter dem Namen _ECMAScript_ (kurz ES) standardisiert

## JavaScript: Versionen

- Von allen Browsern unterstützt: ES5 (2009 veröffentlicht)
- Nächste große Version: _ES2015_ (oder ES6)
- Seither: jährlich neue Versionen im Juni jeden Jahres (ES2016, ES2017, ...)

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

## Imports in webpack

Bundler wie webpack können beim Importieren vom JavaScript Standard abweichen:

- Dateiendungen wie `.js` können optional sein
- wenn der Import auf einen Ordner verweist, sucht webpack nach einer `index.js` Datei in diesem Ordner

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

## Destrukturierende Zuweisung

```js
const person = { name: 'John', age: 48 };

const { name, age } = person;
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

# State (Komponentenzustand)

## State

React Komponenten können einen internen Zustand (_state_) haben

Auf den state kann im Template verwiesen werden. Damit ändert sich die Anzeige automatisch, wenn Teile des States neu gesetzt werden.

## State in funktionalen Komponenten

In funktionalen Komponenten verwenden wir den Hook `useState`:

```js
import { useState } from 'react';
```

## State in funktionalen Komponenten

Die Funktion `useState` kann zu Beginn der Komponentenfunktion (wiederholt) aufgerufen werden. Sie hat die folgende Signatur:

- sie nimmt einen Parameter entgegen - den initialen Zustand
- sie gibt bei jedem Aufruf ein Array mit zwei Einträgen zurück: Den aktuellen Zustand sowie eine Funktion, mit der der Zustand neu gesetzt werden kann

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
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}>
      {count}
    </button>
  );
};
```

## Beispiel: Counter

Aufgabe: füge zur Anwendung von eben einen _Reset_-Knopf hinzu

## Beispiel: Slideshow

Slideshow, die Bilder wie das folgende anzeigt:

`https://picsum.photos/200?image=10`

- Buttons für _vorwärts_ und _zurück_
- Button für _zurück zum Start_
- Verhindern, dass ins negative gezählt wird

# Inputs

## Inputs

Besonderheit von input-Elementen:

Ihre Properties (insbesondere `.value`) können durch User-Interaktionen direkt geändert werden

Es gibt damit Aspekte des UI-Zustands, die nicht im state erfasst sind.

## Inputs

So können wir den Value eines Inputs im State erfassen:

```jsx
<input
  value={inputText}
  onChange={event => {
    setInputText(event.target.value);
  }}
/>
```

# Entwicklerwerkzeuge für React

## React Developer Tools

- [Chrome Plugin](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox Plugin](https://addons.mozilla.org/de/firefox/addon/react-devtools/)

Features:

- Anzeige der Komponentenstruktur
- Anzeige von State und Props
- Ändern von State und Props
- Performanceanalyse des Renderings von Komponenten

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

# map, filter, reduce

### Array-Methoden für die funktionale Programmierung

## map

- Ändert jeden Eintrag eines Arrays mit Hilfe einer Funktion ab
- Rückgabewert: neues Array

```js
let myNumbers = [2, 10, 23];

let triple = n => 3 * n;

let newNumbers = myNumbers.map(triple);
// [6, 30, 69]
```

## filter

- Behält nur gewisse Einträge in einem Array
- Nutzt eine Funktion, um Einträge auf ein bestimmtes Kriterium zu testen
- Rückgabewert: neues Array

```js
let myNumbers = [2, 10, 23];

let isEven = n => n % 2 === 0;

let newNumbers = myNumbers.filter(isEven);
// [2, 10]
```

## reduce

- Verarbeitet die Einträge in einem Array zu einem einzelnen Wert
- Verwendet eine Funktion, die aus zwei bestehenden Werten einen resultierenden Wert erstellt - diese Funktion wird wiederholt aufgerufen

## reduce - Beispiel

```js
let transactions = [
  { amount: -56, title: 'groceries' },
  { amount: +1020, title: 'salary' },
  { amount: -13, title: 'dinner' },
  { amount: -96, title: 'electricity' },
];
let initialBalance = 317;

let reducer = (aggregator, transaction) =>
  aggregator + transaction.amount;

let currentBalance = transactions.reduce(
  reducer,
  initialBalance
);

// 317 -> 261 -> 1281 -> 1268 -> 1172
```

# JSX im Detail

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

<!-- prettier-ignore -->
```jsx
const todos = [
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

## JSX: Elemente wiederholen

Bei obigem Code:  
Warnung in der Browser-Konsole (Wegen Effizienz)  
Lösung: **key**:

```jsx
<ul>
  {todos.map(todo => (
    <li key={todo.id}>{todo.title}</li>
  ))}
</ul>
```

## JSX: if / else

```jsx
<div>{Math.random() > 0.5 ? 'heads' : 'tails'}</div>
```

## JSX: if / else

```jsx
let face;
if (Math.random() > 0.5) {
  face = 'heads';
} else {
  face = 'tails';
}

return <div>{face}</div>;
```

## JSX: if

```jsx
<div>{state.hasError && state.errorMessage}</div>
```

## Whitespace

in HTML sind die folgenden Beispiele äquivalent (und enthalten je ein Leerzeichen zwischen den Bildern):

<!-- prettier-ignore-start -->

```html
<img src="foo.png"> <img src="bar.png">
```

```html
<img src="foo.png">    <img src="bar.png">
```

```html
<img src="foo.png">
<img src="bar.png">
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

# Styling in JSX

## JSX: CSS-Klassen

```jsx
<div className={getClassName()}>[...]</div>
```

## CSS-Module

Bei create-react-app sind CSS-Module vorkonfiguriert. Diese erlauben das Verwenden von CSS-Klassennamen, die garantiert über CSS-Dateien hinweg eindeutig sind.

```js
import styles from './TodoItem.module.css';

<div className={styles.todoItem}>...</div>;

<div className={`${styles.todoItem} ${styles.completed}`}>
  ...
</div>;
```

## SCSS einbinden

```bash
npm install node-sass
```

```js
import styles from './TodoItem.module.scss';
```

```scss
/* TodoItem.module.scss */
@import '../colors';
...
```

```scss
/* colors.scss */
$primary: lightblue;
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

https://material-ui.com

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

<img src="assets/rating.png" type="image/png" style="width: 16em">

## Props in Funktionskomponenten

Beispiel (einfach):

```jsx
const Rating = props => (
  <div className="rating">{'*'.repeat(props.stars)}</div>
);
```

oder

```jsx
const Rating = ({ stars }) => (
  <div className="rating">{'*'.repeat(stars)}</div>
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
const Bordered = props => (
  <div class="bordered">{props.children}</div>
);
```

# Komponenten-Events

## Datenfluss

- parent → child: props
- child → parent: events

## Eigene Events

Eventhandler werden als Funktionen definiert und via props übergeben / erhalten.

## Eigene Events

Beispiel `ToggleButton`: Button, der entweder "off" oder "on" anzeigt:

Prop: `active` - kann auf `true` bzw `false` gesetzt sein  
Event: `onToggle` - Funktion, die mit dem neuen Zustand aufgerufen wird

```jsx
<button
  onClick={() => {
    props.onToggle(!props.active);
  }}>
  {props.active ? 'on' : 'off'}
</button>
```

## Eigene Events

Beispiel `ToggleButton`: Der Button muss passend eingebunden werden

```jsx
const [myOption, setMyOption] = useState(true);

<ToggleButton
  active={myOption}
  onToggle={newIsActive => {
    setMyOption(newIsActive);
  }}
/>;
```

## Eigene Events

Beispiele:

- Rating-Komponente mit anklickbaren Sternen
- NumberInput-Komponente zum Angeben einer Ganzzahl mit +/- buttons
  - Bonus: Umsetzung des APIs, sodass es kompatibel zu normalen input-Elementen ist und input-Elemente leicht durch NumberInput-Komponeneten ersetzt werden können
  - Bonus: zusätzliche min / max - Property bei der Komponente

# Übungen

## Übungen

Liste an verfügbaren React-Komponenten: [awesome-react-components](https://github.com/brillout/awesome-react-components)

Aufgabe: "Nachbau" einer der Komponenten

Beispiele:

- bar chart
- color picker
- table / data grid
- tabs

# Typechecker für React

## Typechecker für React

Insbesondere was das Interface von Komponenten angeht, ist es sehr sinvoll, vorhandene Properties und Events anzugeben

Möglichkeiten:

- Library `prop-types`
- Verwendung von `TypeScript` als Sprache

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

## React mit TypeScript

neues Projekt:

```bash
npx create-react-app my-app --typescript
```

## TypeScript

TypeScript Basics: siehe Präsentation [TypeScript](./typescript-de.html)

## React mit TypeScript

ausführliche Resource: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet

<!--

redux with typescript:

- https://github.com/piotrwitek/react-redux-typescript-guide
- https://medium.com/@resir014/a-type-safe-approach-to-redux-stores-in-typescript-6474e012b81e
- https://www.carlrippon.com/strongly-typed-react-redux-code-with-typescript/

-->

## Props mit TypeScript (Funktionskomponenten)

```tsx
import React, { FC } from 'react';

type TodoListProps = {
  todos: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList: FC<TodoListProps> = props => {
  // ....
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
  onClick={event => {
    event.stopPropagation();
  }}>
  test
</button>
```

## Eventtypen in TypeScript

Eventtypen für separat definierte Eventhandler:

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLDivElement>`

# APIs abfragen (Effect Hook)

## APIs abfragen (Effect Hook)

Oft müssen API Daten abgefragt werden, wenn eine Komponente zum ersten Mal eingebunden wird, oder wenn sich props bzw state ändern

## APIs abfragen (Effect Hook)

Beispiele:

- `TodoApp`, die anfänglich Todos von einem API lädt
- `SpaceXLaunch`-Komponente, die Daten für einen SpaceX-Start von einem API anzeigt
- `Pokemon`-Komponente, die Daten für ein bestimmtes Pokémon anzeigt

## APIs abfragen (Effect Hook)

Der _Effect Hook_ kann verwendet werden, um bestimmte Aktionen zu setzen, wenn eine Komponente neu eingebunden wird oder wenn ihre Props / State sich ändern

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

## APIs abfragen (Effect Hook)

Beispiel: Laden von Todos, wenn die Komponente eingebunden wird

```js
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const loadTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(todos => setTodos(todos));
  };
  useEffect(loadTodos, []);
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

## APIs abfragen (Effect Hook)

Beispiel: Laden von SpaceX Startdaten, wenn sich `launchNr` ändert

```js
const SpaceXLaunch = () => {
  const [launchNr, setLaunchNr] = useState(1);
  const [launchData, setLaunchData] = useState({});
  const fetchLaunch = () => {
    fetch(
      `https://api.spacexdata.com/v3/launches/${launchNr}`
    )
      .then(res => res.json())
      .then(data => setLaunchData(data));
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

Beispiel: Pokémon-Daten laden, wenn sich `id` ändert

```js
const Pokemon = () => {
  const [id, setItd] = useState(1);
  const [data, setData] = useState({});
  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => setData(data));
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


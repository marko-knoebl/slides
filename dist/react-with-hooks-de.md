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

### Einstieg

- Kurzüberblick über React
- Modernes JS / JS-Grundlagen für React
- Deklaratives Rendering / Arbeiten mit application-state
- Komponenten
- Einbinden vordefinierter Komponenten

### Vertiefung

- Routing
- Testen von Komponenten
- Redux
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
- Explizite Änderung des Anwendungszustands mittels Settern

## Geschichte von React

- Ab 2011 intern bei Facebook in Verwendung
- Open Source seit 2013
- Februar 2019: Einführung von Hooks

## Beispiel: Datenmodell und -fluss in einer Todo-App

![Bild: Datenmodell in einer Todo-App](./images/todo-components-datamodel.svg)

# VS Code

## VS Code

https://code.visualstudio.com

- Open-Source-Entwicklungsumgebung
- Unabhängig vom eigentlichen Visual Studio

## VS Code: Ordner öffnen

ganzen Ordner öffnen mit _File_ - _Open Folder_

## VS Code: speichern

Nicht gespeicherte Dateien sind durch einen Kreis statt des "X" im Tab erkennbar

Speichern mit _Strg_ + _S_

oder: _File_ - _Auto Save_

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

- Auto Save: _aktivieren_
- Accept Suggestion on Commit Character (Autovervollständigung ohne _Enter_): _deaktivieren_
- Tab Size: _2_

Weitere Möglichkeiten:

- Format on Save
- Format on Paste
- EOL
- Workbench: Color Theme

## VS Code - Kurzbefehle

- _Strg_ + _F_: Suchen in Datei
- _Alt_ + _Shift_ + _F_: Formatieren der Datei
- _F2_: Umbenennen von Variablen
- _Alt_ + Mausklick: Mehrere Textcursor zum gleichzeitigen Schreiben setzen

## VS Code - Plugins

Empfohlene Plugins:

- Debugger for Chrome (Firefox / ...)
- ESLint  
  `npm install --save-dev eslint`  
  `./node_modules/.bin/eslint --init`

(siehe auch _Show Popular Extensions_ in VS Code)

<!--
http://www.snappyjs.com/2018/03/25/vscode-extensions-for-javascript-developers/
ESLint
JSRefactor
auto rename tag
auto close tag (in html in mordernem VS Code nicht mehr notwendig)
npm Intellisense
guides
rainbow brackets
wakatime
-->

# Create-React-App

eine neue React-Anwendung erstellen

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

ausführen via:

```bash
npx create-react-app playground
```

siehe auch: https://reactjs.org/docs/add-react-to-a-new-app.html

## create-react-app

Erstellt eine einfache React-Anwendung, auf deren Basis weiter gearbeitet werden kann

Viele Aspekte sind vorkonfiguriert:

- lokaler Testserver
- Unittest-Framework jest
- Webpack und Babel
- SCSS und CSS Module

## Standard Projektstruktur

- `public/index.html`, `src/index.js`: Einstiegspunkte
- `App.js`, `App.css`: Definieren App-Komponente
- `node_modules`: Abhängigkeiten

## Testserver und Build

Im Projektordner:

- `npm start`: Startet den Testserver
- `npm run build`: Erstellt einen Build (zum Deployen auf einem Webserver)

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
- sie gibt bei jedem Aufruf zwei Werte zurück: Den aktuellen Zustand sowie eine Funktion, mit der der Zustand neu gesetzt werden kann

```js
const App = () => {
  const [count, setCount] = useState(0);

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

## Beispiel: Diashow

Diashow, die Bilder wie das folgende Anzeigt:

`https://picsum.photos/200?image=10`

- Buttons für _vorwärts_ und _zurück_
- Button für _zurück zum Start_
- Verhindern, dass ins negative gezählt wird

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

Bei obigem Code: Warnung in der Browser-Konsole (Wegen Effizienz)  
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

## Fragmente

Erlauben es einer Komponente, mehrere Elemente zurückzugeben (anstatt eines einzenen Elements)

```ts
return (
  <>
    <td>Hello</td>
    <td>World</td>
  </>
);
```

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

https://github.com/facebook/react-devtools

- Anzeige der Komponententags im Inspektor
- Anzeige von State und Props
- Hervorhebung von Änderungen von State und Props

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
  "name": "Launch Chrome",
  "url": "http://localhost:3000",
  "webRoot": "${workspaceFolder}"
}
```

## Debugging in VS Code: starten

Mittels _F5_

## Prettier

https://prettier.io/

- Code-Formatierung nach strikten Regeln
- VS-Code-Plugin (via Alt + Shift + F)

## Prettier-Konfiguration in VS Code

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

# Komponenten

## Komponenten

Möglichkeit, eigene Tags zu definieren, z.B.

```jsx
<Rating stars={4} />
```

<img src="assets/rating.png" style="height: 4em">

## Komponenten

Um sie von normalen Tags zu unterscheiden, beginnen Komponentennamen immer mit einem Großbuchstaben

## Komponenten: State & Props

- State = interner Zustand einer Komponente
- Props = vom Elternelement übergebene Parameter

## Komponentendefinition

Beispiel:

```jsx
import React from 'react';

const Rating = props => (
  <div className="rating">{'*'.repeat(props.stars)}</div>
);

export default Rating;
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
<button
  onClick={() => {
    props.onToggle(!props.on);
  }}>
  {props.on ? 'on' : 'off'}
</button>
```

## Eigene Events

Beispiel `ToggleButton`: Der Button muss passend eingebunden werden

<!-- prettier-ignore -->
```jsx
const [myOption, setMyOption] = useState(true);

<ToggleButton
  on={myOption}
  onToggle={newIsActive => {
    setMyOption(newIsActive);
  }}
/>
```

## Eigene Events

Beispiele:

- Rating-Komponente mit anklickbaren Sternen
- NumberInput-Komponente zum Angeben einer Ganzzahl mit +/- buttons
  - Bonus: Umsetzung des APIs, sodass es kompatibel zu normalen input-Elementen ist und input-Elemente leicht durch NumberInput-Komponeneten ersetzt werden können
  - Bonus: zusätzliche min / max - Property bei der Komponente

# Übung: todo list

# TypeScript

## TypeScript

= Obermenge von JavaScript mit Erweiterungen:

- **Static Typing**
- Decorators
- Public / Private Properties

## Static Typing

Datentypen können angegeben werden und unterstützen insbesondere die Entwicklungsumgebung:

- Auto-Vervollständigung
- Fehlermeldungen bei nicht passenden Datentypen

## Static Typing

Beim build: TypeScript wird in JavaScript übersetzt, alle Typeninformationen gehen dabei verloren

## Typsystem: Variablen

```ts
let age: number = 32;
let name: string = 'Andreas';
```

## Typsystem: Funktionen

```ts
function repeatString(
    text: string,
    times: number): string {
  return ...;
}
```

## Typsystem: Pfeilfunktionen

```ts
const repeatString = (
  text: string,
  times: number
): string => (...);
```

## Typsystem: Arrays

```ts
let names: string[] = ['Anna', 'Bernhard', 'Caro'];

// Alternative Syntax

let names: Array<string> = ['Anna', 'Bernhard'];
```

## Typsystem: Tupel

Arrays mit vorgegebener Länge und Datentypen für jeden Eintrag

```ts
let todo: [string, boolean];
```

## Typsystem: Objekte & Properties

Objekt mit bestimmten Properties:

```ts
let p: { name: string; age: number } = getPerson();
```

## Typsystem: Objekte - Interfaces

```ts
interface IPerson {
  name: string;
  nickname?: string; // optional
  birthYear: number;
  // Methode, die eine Zahl als Parameter übernimmt
  // und eine Zahl zurückgibt
  getAge: (currentYear: number) => number;
}

let p: IPerson = getPerson();
```

## Typsystem: Klassen & Interfaces

```ts
class User implements IPerson {
  ...
}
```

## Typsystem: das Schlüsselwort _type_

```ts
type PersonCollection = Array<IPerson>;
type TodoAction = 'ADD_TODO' | 'DELETE_TODO';
```

## Typsystem: void

Void: umfasst _undefined_ und _null_

```ts
function warnUser(): void {
  alert('warning!');
}
```

## Typsystem: any

Any: lässt alle Typen zu

```ts
let ib: any = document.getElementById('myinput');
console.log(ib.value);
```

## Typsystem: Type assertions

```ts
let someValue: any = 'this is a string';

let strLength: number = (someValue as string).length;
```

## Typsystem: Union Types

```ts
function foo(arg: string | number) {...}

function foo(arg: string | undefined) {...}
```

## Typsystem: Generics

Allgemeine Klassen- oder Funktionsdefinition, die während deren Aufruf genauere Typinformationen übergeben bekommen.

```ts
function reducer<MyState, MyAction>(
  state: MyState,
  action: MyAction
): MyState {
  ...
}
```

Verwendung:

```ts
// newState hat automatisch den richtigen Typ
const newState = reducer<TodoState, TodoAction>(
  myTodoState,
  myTodoAction
);
```

## Typsystem: Generics

```ts
class Component<Props, State> {
  props: Props;
  state: State;

  setState: (newState: Partial<State>) => void;
}
```

Verwendung:

```ts
class MyComp extends Component<MyProps, MyState> {
  ...
}
```

## Private & Public Properties

```ts
class Clock {
  private formatTime(time) {
    return ...
  }
  public start() {
    ...
  }
}
```

# React mit TypeScript

```bash
npx create-react-app my-app --typescript
```

# Material-UI

Vorgefertigte React-Komponenten im Material-Design-Stil (Stil von Google/Android)

## Material-UI: Installation und Verwendung

https://material-ui.com

siehe Info-Boxen zu _Installation_ und _Usage_

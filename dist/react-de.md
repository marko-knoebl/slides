# React

## Präsentationen

<https://marko-knoebl.github.io/slides/>

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

Code verfügbar unter: <https://github.com/marko-knoebl/courses-code>

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
- State-Objekte sind unveränderlich (immutable)

## Geschichte von React

- 2013 von Facebook als open source veröffentlicht
- Aktuelle Major Version: React 16 (September 2017)
- Februar 2019: Einführung von Hooks

# React & JSX Grundlagen

## Online Editoren

Empfehlung: <https://codesandbox.io/s>

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

Optionen:

- Komponentendefinition als Funktion
- Komponentendefinition als Klasse (war insbesondere vor der Einführung von Hooks verbreitet / notwendig)

## Komponentendefinition

Um sie von normalen Tags zu unterscheiden, beginnen Komponentennamen immer mit einem Großbuchstaben

## JSX: JS + XML

JSX = Templatesprache von React

- **&lt;** wechselt von JS zu XML/HTML
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
<https://www.w3schools.com/jsref/dom_obj_event.asp>

## JSX: events

Achtung: Ein Event Handler muss eine **Funktion** sein, und nicht ein Funktionsaufruf

OK:

```js
<button onClick={alert}>Say Hello</button>
```

nicht OK:

```js
<button onClick={alert('hello')}>Say Hello</button>
```

OK:

```js
<button onClick={() => alert('hello')}>Say Hello</button>
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

`useState` kann zu Beginn der Komponentenfunktion (wiederholt) aufgerufen werden; es hat die folgende Signatur:

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

# Grundlagen für die Schulung

## Grundlagen für die Schulung

- [VS Code Grundlagen und Plugins](./vs-code-de.html)
- [Modernes JavaScript (ES2015+)](./javascript-es-2015-de.html)

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

oder

```bash
npx create-react-app playground --template typescript
```

siehe auch: <https://reactjs.org/docs/add-react-to-a-new-app.html>

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

- `npm run start` (oder `npm start`): Startet den lokalen Entwicklungsserver
- `npm run build`: Erstellt einen Build (zum Deployen auf einem Webserver)

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

Code wie der folgende ist **nicht** erlaubt, um State abzuändern, da React die Mutation nicht "sieht":

```js
todos[0].completed = true;
todos.push({ title: 'study', completed: false });
```

## Datenverwaltung ohne Mutationen: Arrays

Ausgangsdaten:

```js
let names = ['Alice', 'Bob', 'Charlie'];
```

**Mutation**: Abändern des ursprünglichen Arrays

```js
names.push('Dan');
```

**keine Mutation**: Erstellen eines neuen Arrays

```js
let newNames = [...names, 'Dan'];
```

## Datenverwaltung ohne Mutationen: Objekte

Ausgangsdaten:

```js
let user = {
  name: 'john'
  email: 'john@doe.com'
}
```

**Mutation**: Abändern des ursprünglichen Objekts

```js
user.email = 'johndoe@gmail.com';
```

**keine Mutation**: Erstellen eines neuen Objekts

```js
let newUser = { ...user, email: 'johndoe@gmail.com' };
```

## immer.js

Library, die das Arbeiten ohne Mutationen erleichtert

wird insbesondere vom Redux-Team empfohlen

## immer.js

this code would mutate the todos array:

```js
todos[0].completed = true;
todos.push({ title: 'study', completed: false });
```

avoiding mutations by using immer:

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
      <button disabled={!emailValid}>subscribe</button>
      {emailEdited && !isEmail ? (
        <div>invalid email</div>
      ) : null}
    </form>
  );
};

const isEmail = (email) =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

## Formulare mit "Formik"

npm-Paket: _formik_

stellt Komponenten (_Form_, _Field_, ...) bereit, die Code verinfachen können

kann besonders für komplexere Formulare nützlich sein

## Formulare mit "Formik"

```js
import { Formik, Form, Field, ErrorMessage } from 'formik';

const NewsletterRegistration = () => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={(values) => console.log(values)}
    validate={(values) => {
      const errors = {};
      if (!isEmail(values.email)) {
        errors.email = 'invalid email';
      }
      return errors;
    }}
  >
    {(props) => (
      <Form>
        <Field type="email" name="email" />
        <button disabled={!props.isValid}>subscribe</button>
        <ErrorMessage name="email" component="div" />
      </Form>
    )}
  </Formik>
);

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

- Attribute
- Elemente wiederholen
- if / elese
- if
- Whitespace
- Kommentare
- Fragmente
- gültige Elemente
- Kompilierung

## Attribute

Manche Attribute von Eleenten haben andere Namen als in standard HTML (spiegeln die standard DOM-Attribute wider)

- `className` (anstatt `class`)
- `onClick` (anstatt `onclick`)
- `htmlFor` (anstatt `for`)

## Attribute

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

## JSX: Elemente wiederholen

Aufgabe: Erstellen einer HTML-Liste (ul) aus diesen Daten:

```js
const initialTodos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'cooking', completed: true },
  { id: 3, title: 'gardening', completed: false },
];
```

## JSX: Elemente wiederholen

Mehrere Elemente können als Arrays eingebunden werden:

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  const todoElements = [];
  for (let todo of todos) {
    todoElements.push(<li>{todo.title}</li>);
  }
  return <ul>{todoElements}</ul>;
};
```

## JSX: Elemente wiederholen

Elemente werden meist mittels `.map()` wiederholt

## JSX: Elemente wiederholen

Die `.map()` Methode erstellt ein neues Array, indem jedes Element eines bestehenden Arrays transformiert wird

Beispiel:

```js
const originalNumbers = [2, 3, 4];

const triple = (n) => 3 * n;

const newNumbers = originalNumbers.map(triple);
// [6, 9, 12]
```

## JSX: Elemente wiederholen

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

## JSX: Elemente wiederholen

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

# Styling in JSX

## Tools

- externe Stylesheets
  - Paket _classnames_
  - CSS-Module
  - SCSS
- _style_-Property
- Libraries
  - styled-components
  - radium
  - JSS

## CSS-Klassen

Hilfs-Utility: npm-Paket _classnames_:

```jsx
import classNames from 'classnames';

<div
  className={classNames({
    todoitem: true,
    completed: isCompleted,
  })}
>
  [...]
</div>;
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

## React Styling Libraries

Beispiele:

- styled-components
- jss
- emotion
- radium
- ...

## styled-components

Library, die es ermöglicht, bestehende HTML-Elemente mit eigenen Stilen zu versehen

npm-Paket: `styled-components`

## styled-components

```jsx
import styled from 'styled-components';

const BlockImg = styled.img`
  display: block;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Slideshow = (props) => (
  <Container>
    <button>prev</button>
    <BlockImg src="..." alt="..." />
    <button>next</button>
  </Container>
);
```

## styled-components

dynamic styles via props:

```jsx
import styled from 'styled-components';

const Button = styled.button`
  color: ${(props) => (props.primary ? 'black' : 'white')};
  background-color: ${(props) =>
    props.primary ? 'white' : 'navy'};
`;

const Slideshow = (props) => (
  <Container>
    <Button primary={true}>prev</Button>
    <BlockImg src="..." alt="..." />
    <Button primary={true}>next</Button>
  </Container>
);
```

## radium

Library, die die Syntax der `style`-Property von HTML-Elementen in Komponenten erweitert

npm-Paket: `radium`

## radium

```jsx
const styles = {
  base: {
    padding: '8px',
  },
  primary: {
    color: 'white',
    backgroundColor: 'navy',
  },
};

const TestButton = (props) => (
  <button
    style={[styles.base, props.primary && styles.primary]}
  >
    test
  </button>
);

export default radium(TestButton);
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

<img src="assets/rating.png" type="image/png" style="width: 16em">

## Props in Funktionskomponenten

Einfaches Beispiel:

```jsx
const Rating = (props) => (
  <div className="rating">
    {'★'.repeat(props.stars) + '☆'.repeat(5 - props.stars)}
  </div>
);
```

Aufgabe: `Rating`-Komponente, deren Sterne in eigenen `span`-Elementen stehen und einen eigenen Stil haben

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

## Eigene Events

Beispiele:

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
npx create-react-app my-app --template typescript
```

## TypeScript

TypeScript Basics: siehe Präsentation [TypeScript](./typescript-de.html)

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
import React, { FC } from 'react';

type TodoListProps = {
  todos: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList: FC<TodoListProps> = (props) => {
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

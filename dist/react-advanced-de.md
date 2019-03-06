# Hooks

## Hooks

Hooks: Erweiterung von funktionalen Komponenten; erlauben die Verwendung von state und anderen Features ohne Klassen

## Hooks

> "In the longer term, we expect Hooks to be the primary way people write React components."

## Hooks: derzeitiger Stand

- Dokumentation für Einsteiger noch sehr Klassen-orientiert
- Eingeschränkte Unterstützung der React developer tools (Browser Plugins)

## wichtige Hooks

- state Hook
- effect Hook
- context Hook
- reducer Hook

# state Hook

## state Hook

Die Funktion `useState` kann zu Beginn der Komponentenfunktion (wiederholt) aufgerufen werden. Sie hat die folgende Signatur:

- sie nimmt einen Parameter entgegen - den initialen Zustand
- sie gibt bei jedem Aufruf zwei Werte zurück: Den aktuellen Zustand sowie eine Funktion, mit der der Zustand neu gesetzt werden kann

```js
const App = () => {
  const [count, setCount] = useState(0);

  return ...
};
```

# Effect Hook

## Effect Hook

Der effect Hook kann dienen, um zu bestimmten Zeitpunkten im Lebenszyklus einer Komponente Aktionen zu setzen - insbesondere, wenn sich deren _props_ oder _state_ geändert haben - oder, wenn sie neu eingebunden wurde

Beispiele für Einsatzgebiete: Anfragen von APIs, manuelle Änderungen am DOM

## useEffect

`useEffect` bekommt zwei Parameter übergeben: Eine Funktion und ein Array von Werten.

Die Funktion nach dem Rendering einer Komponente ausgeführt, wenn sich einer der Werte geändert hat.

Die Funktion wird auch ausgeführt, wenn die Komponente neu eingebunden und zum ersten Mal gerendert wurde.

## useEffect

Wenn kein zweiter Parameter übergeben wird, wird die Funktion nach jedem Rendering ausgeführt.

Wenn ein leeres Array als zweiter Parameter übergeben wird, wird die Funktion nur nach dem ersten Rendering ausgeführt.

Es gibt auch die Möglichkeit, eine Funktion zu definieren, die vor dem _Entfernen_ einer Komponente aufgerufen wird (mehr dazu später).

## useEffect: Beispiel: Weather

```js
const [weatherData, setWeatherData] = useState(null);
const [stale, setStale] = useState(true);

// fetch data whenever data is stale
useEffect(
  () => {
    if (stale) {
      refetch();
    }
  },
  [stale]
);
```

## useEffect: Beispiel: Weather

```js
const refetch = () => {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather' +
      `?q=${city}&appid=${API_KEY}`
  )
    .then(response => response.json())
    .then(data => {
      setWeatherData({ temperature: data.main.temp });
      setStale(false);
    });
};
```

## Beispiel: Weather

Zustand 1a (Ausgangszustand):

keine Wetterdaten vorhanden (null)
es wird gerade geladen (true)
es gibt keine Fehlermeldung
-> 2a, 2b

Zustand 1b:

es sind aktuelle Wetterdaten vorhanden ({...})
es wird geladen (true)
es gibt keine Fehlermeldung
-> 2a, 2b

## Beispiel: Weather

Zustand 2a:

es sind aktuelle Wetterdaten vorhanden ({...})
es wird nicht geladen (false)
-> 1b

Zustand 2b:

es sind keine aktuellen Wetterdaten vorhanden (null)
es wird nicht geladen (false)
es gibt eine Fehlermeldung (404 oder 400)
-> 1a

## Entfernen einer Komponente

```js
const [time, setTime] = useState(0);

// diese Funktion wird aufgerufen,
// wenn die Komponente eingebunden wird
useEffect(() => {
  const intervalId = setInterval(() => {
    setTime(time + 1);
  });
  // diese Funktion wird aufgerufen,
  // wenn die Komponente entfernt wird
  return () => {
    clearInterval(intervalId);
  };
}, []);
```

# reducer Hook

## reducer Hook

In komplexeren Anwendungen macht es Sinn, den Anwendungszustand (model) von der Ansicht (view) zu trennen.

Oft wird der gesamte Anwendungszustand durch ein Datenmodell repräsentiert. Jede Änderung am Anwendungszustand läuft über das Datenmodell.

## reducer Hook

Grundprinzipien von state management:

- Anwendungszustand (state) wird in einem globalen Objekt gespeichert
- _Jede_ Zustandsänderung wird durch eine _Action_ ausgelöst, die die Zustandsänderung genau beschreibt

## reducer Hook

Actions werden durch JavaScript Objekte repräsentiert:

```json
{ "type": "INCREMENT" }
```

```json
{ "type": "DECREMENT" }
```

## reducer Hook

State management mit reducern:

Beim _reducer Hook_ bzw _Redux_:

Der Übergang von einem State auf den nächsten geschieht mittels einer Reducer-Funktion:

Die Reducer-Funktion erhält als Funktionsparameter den alten Zustand (State) und eine Action, die eine Zustandsänderung beschreibt.

Die Reducer-Funktion gibt den neuen Zustand zurück.

## reducer Hook

Der reducer Hook wird ähnlich eingebunden wie der state hook:

Allgemein:

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

Konkretes Beispiel count:

```js
const [count, countDispatch] = useReducer(countReducer, 0);
```

## reducer Hook

```js
const countReducer = (count, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1;
    case 'DECREMENT':
      return count - 1;
    default:
      throw new Error('unknown action');
  }
};
```

## reducer Hook

Auslösen von Actions: wir rufen die `dispatch`-Funktion des Reducers mit der gewünschten Action als Parameter auf

# Automatisiertes Testen

## Automatisiertes Testen

Programme / Funktionen / Klassen können automatisiert getestet werden um sicherzustellen, dass sie wie erwartet funktionieren.

## Tools für das Testen

- _node_ wird als Runtime benötigt
- _assert_: einfache assertions, in node beinhaltet
- _Jest_: test runner & assertion library
- _Jasmine_: test runner & assertion library
- _Mocha_: test runner
- _Chai_: assertion library
- _Karma_: test runner
- _Enzyme_: test utilities & assertions für React

https://2018.stateofjs.com/testing/overview/

## Beispiel: shorten

Wir werden eine Funktion schreiben und testen, die einen String auf eine vorgegebene Länge verkürzt

```js
shorten('loremipsum', 6);
// should return 'lor...'
```

Mögliche Zugänge

- mit Implementierung beginnen
- mit Tests beginnen (test-driven development)

## Einrichten des Test Runners

in einem vorhandenen npm Projekt:

```bash
npm install --save-dev mocha
```

in _package.json_:

```json
"scripts": {
  "test": "mocha"
}
```

Tests ausführen:

```bash
npm test
```

## Finden von Tests

Im allgemeinen suchen Test Libraries nach Dateien mit der Endung `.test.js` oder `.spec.js`

## Beispiel: shorten

```js
// shorten.js
const shorten = (s, maxlength) => {
  if (s.length > maxlength) {
    s = s.slice(0, maxlength - 3) + '...';
  }
  return s;
};

module.exports.shorten = shorten;
```

## Beispiel: shorten

```js
// shorten.test.js
const shorten = require('./shorten.js').shorten;
// use node's built-in assert module
const assert = require('assert');

it('shortens "loremipsum" to "lor..."', () => {
  const expected = 'lor...';
  const actual = shorten('loremipsum', 6);
  assert.equal(actual, expected);
});
```

# Testen: assertions

## Testen: assertions

Assertions können auf zwei Arten geschrieben werden:

assert:

```js
assert.equal(a, b);
```

expect (behaviour-driven):

```js
expect(a).toEqual(b);
```

## Testen: assertions

assert:

- assert-modul in node
- chai

expect (behaviour-driven)

- jest
- jasmine
- chai
- enzyme

## Testen: assertions

assert: Beispiele

node:

```js
assert.equal(a, b);
assert.deepEqual(a, b);
// ...
```

chai:

```js
assert.equal(a, b);
assert.typeOf(foo, 'string');
assert.lengthOf(foo, 3);
assert.throws(() => {
  1 / 0;
});
```

## Testen: assertions

expect: Beispiele

jest:

```js
expect(4).toBeGreaterThan(3);
expect(() => {
  1 / 0;
}).toThrow();
expect(3).not.toEqual(4);
```

chai:

```js
expect(foo).to.be.a('string');
expect(() => {
  1 / 0;
}).to.throw();
expect(foo).to.equal('bar');
```

# Strukturierung von Tests

## Gruppieren

mit `describe()`:

```js
// jest
describe('strings that are short enough', () => {
  it('leaves "abc" unchanged with limit 5', () => {
    expect(shorten('abc', 5)).toEqual('abc');
  });
  it('leaves "loremipsum" unchanged with limit 10', () => {
    expect(shorten('loremipsum', 10)).toEqual('loremipsum');
  });
});
```

## Setup und teardown

Für Code, der vor und jedem Test in einer Gruppe ausgeführt werden soll:

```js
// jest or mocha
beforeEach(() => {
  createTestDB();
});

afterEach(() => {
  clearTestDB();
});
```

# Testen von React-Anwendungen

## Test Renderer für React

- `react-test-renderer` (vom React Team entwickelt)
- `Enzyme` (von Airbnb entwickelt)

## Enzyme - Einrichtung

```
npm install --save-dev enzyme enzyme-adapter-react-16
```

neue Datei `src/setupTests.js`:

```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

## Enzyme - Beispiele

Tests mit Jest

```jsx
it('renders three <Foo /> components', () => {
  // Alternative zu shallow: mount()
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find(Foo)).toHaveLength(3);
});

it('renders an `.icon-star`', () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find('.icon-star')).toHaveLength(1);
});
```

## Enzyme - Beispiele

```jsx
it('reacts to click events', () => {
  const onButtonClick = sinon.spy();
  const wrapper = shallow(
    <Foo onButtonClick={onButtonClick} />
  );
  wrapper.find('button').simulate('click');
  expect(onButtonClick).to.have.property('callCount', 1);
});
```

## Enzyme - Beispiele

<!-- prettier-ignore -->
```jsx
it('reacts to click events', () => {
  const mockFunction = jest.fn();

  const wrapper = mount(<Rating stars={3} onStarsChange={mockFunction} />);
  expect(wrapper.childAt(0).childAt(2).text()).toBe('*');
  wrapper.childAt(0).childAt(1).simulate('click');
  expect(mockFunction).toBeCalledWith(2);
});
```

## Snapshot Tests

Komponenten werden gerendert und mit früheren Versionen (Snapshots) verglichen

Snapshot Tests fallen unter Regressionstests.

## Snapshot Tests - setup

```bash
npm install --save-dev react-test-renderer
```

für TypeScript:

```bash
npm install --save-dev @types/react-test-renderer
```

## Snapshot Tests in React - Tests erstellen

```jsx
// Rating.test.js
import React from 'react';
import Rating from './Rating.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Rating stars={2} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
```

## Snapshot Tests aktualisieren

Haben wir das Verhalten einer Komponente geändert und danach ihr Verhalten überprüft,
können wir Snapshot-Tests entsprechend aktualisieren:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```

# Beispiel: Testen einer Rating-Komponente

Mit Jest, Enzyme, Chai und Sinon

## Beispiel: Testen einer Rating-Komponente

```tsx
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Rating from './Rating';
```

## Beispiel: Testen einer Rating-Komponente

```tsx
describe('rendering', () => {
  it('renders 5 Star components', () => {
    const wrapper = shallow(<Rating stars={5} />);
    expect(wrapper.find('Star')).to.have.length(5);
  });

  it('renders 5 active stars', () => {
    const wrapper = mount(<Rating stars={5} />);
    expect(wrapper.find('.star')).to.have.length(5);
  });
});
```

## Beispiel: Testen einer Rating-Komponente

```tsx
describe('rendering', () => {
  it('renders 3 active stars', () => {
    const wrapper = mount(<Rating stars={3} />);
    expect(wrapper.find('.star')).to.have.length(5);
    expect(
      wrapper.find('.star').get(2).props.className
    ).to.equal('star active');
    expect(
      wrapper.find('.star').get(3).props.className
    ).to.equal('star');
  });
});
```

## Beispiel: Testen einer Rating-Komponente

```tsx
describe('events', () => {
  it('reacts to click on first star', () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <Rating stars={3} onStarsChange={spy} />
    );
    wrapper
      .find('span')
      .at(0)
      .simulate('click');
    expect(spy.getCall(0).args[0]).to.equal(1);
  });
});
```

## Beispiel: Testen einer Rating-Komponente

```tsx
describe('errors', () => {
  it('throws an error if the number of stars is 0', () => {
    const testFn = () => {
      const wrapper = shallow(<Rating stars={0} />);
    };
    expect(testFn).to.throw(
      'number of stars must be positive'
    );
  });
});
```

# React Router

## React Router

https://reacttraining.com/react-router/

## React Router - Setup

```bash
npm install react-router-dom
```

```bash
// TypeScript:
npm install react-router-dom @types/react-router-dom
```

## React Router - BrowserRouter

Um React Router verwenden zu können:  
Ganze Anwendung wird mit einem < BrowserRouter > - Tag umschlossen

```js
import { BrowserRouter } from 'react-router-dom';
[...]

<BrowserRouter>
  <App/>
</BrowserRouter>
```

## React Router - Routen definieren

```js
import { Route } from 'react-router-dom';

<Route path="/about" component={About} />
<Route path="/" exact component={List} />
<Route path="/add" component={AddTodo} />
```

## React Router - Routen definieren

Wenn props übergeben werden müssen:

```jsx
import { Route } from 'react-router-dom';

<Route
  path="/add"
  exact
  render={props => (
    <AddTodo onSubmit={this.handleAddTodo} />
  )}
/>;
```

## React Router - Router-Links

```jsx
import { Link } from 'react-router-dom';

<Link to="/">Home</Link>
<Link to="/add">Add</Link>
```

## React Router - Redirects

```jsx
import { Redirect } from 'react-router';

<Route
  path="/home"
  render={props => <Redirect to="/" />}
/>;
```

## React Router - Routenparameter

```jsx
<Route
  path="/todos/:todoId"
  render={props => (
    <div>Current todo: {props.match.params.todoId}</div>
  )}
/>
```

Routenparameter sind unter _props.match.params_ abzurufen

## React Router - Switch

Nur die erste zutreffende Route wird angezeigt

```jsx
import { Switch } from 'react-router-dom';

<Switch>
  <Route path="/todos/:todoId" component={Todo} />
  <Route path="/" component={NotFound} />
</Switch>;
```

# PWAs

Progressive Web Apps mit React

## PWAs

Progressive Web Apps: Möglichkeit, Anwendungen für Mobilgeräte und PCs mit HTML, CSS und JavaScript zu schreiben

Mit `create-react-app` erstellte Anwendungen bieten dafür schon die Grundvoraussetzungen:

- Konfiguration in `public/manifest.json`
- PWA-Boilerplate in `src/serviceWorker.js`

## PWAs: Aktivierung

in `index.js` / `index.tsx`:

```js
serviceWorker.register();
```

## PWAs: Konfiguration

Via `public/manifest.json`:

name, short_name

## PWAs: Logos konfigurieren

Hinzufügen von Logos in den Formaten `144x144px`, `192x192px` und `512x512px` (in manifest.json)

## PWA: add to homescreen

https://developers.google.com/web/fundamentals/app-install-banners/

## PWA: add to homescreen

```js
let deferredPrompt;

componentDidMount() {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    this.setState({ showInstallBtn: true });
  });
}
```

## PWA: add to homescreen

```js
handleInstallBtnClicked = () => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === 'accepted') {
      console.log('user accepted');
    } else {
      console.log('user dismissed');
    }
    deferredPrompt = null;
    this.setState({ showInstallBtn: false });
  });
};
```

## PWA: Deployment auf Bitballoon

- `npm run build`
- dist-Ornder via drag&drop auf bitballoon.com (app.netlify.com/drop)
- edit name auswählen und kürzeren Namen wählen
- Manuell auf https wechseln - in Chrome am Desktop und Mobilgerät ausprobieren

# Context

## Context

Möglichkeit, Werte aus einer Komponente direkt allen weiter unten im Dokumentenbaum liegenden Komponenten zur Verfügung zu stellen - ohne den state über jede Ebene übergeben zu müssen

## Context

zwei Elemente:

- `Provider`: stellt Werte zur Verfügung
- `Consumer`: verwendet diese Werte (kann weit unten in der Komponentenhierarchie liegen)

## Context

Das Interface von Context kann sowohl Daten (aus dem State) als auch Eventhandler übergeben.

## Context - Beispiel

```js
// TodosContext.js

const TodosContext = React.createContext();
```

## Context - Beispiel: TypeScript

```ts
// TodosContext.ts

type TodosContext = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
  onClear: () => void;
};

const TodosContext = React.createContext(
  {} as TodosContext
);
```

## Context - Beispiel: Provider

```jsx
const App = () => {
  return (
    <MyContext.Provider
      value={{
        todos: this.state.todos,
        onToggle: this.handleToggle,
        onClear: this.handleClear,
      }}>
      <TodoStats />
    </MyContext.Provider>
  );
};
```

## Context - Beispiel: Consumer

funktionale Komponente:

```jsx
const TodoStats = () => {
  const context = useContext(TodosContext);
  return <div>There are {context.todos.length} todos</div>;
};
```

## Context - Beispiel: Consumer

Klassenkomponente

```jsx
class TodoStats extends React.Component {
  render() {
    return (
      <TodosContext.Consumer>
        {context => (
          <div>
            There are {context.todos.length} todos
          </div>
        )}
      </Todos.Consumer>
    );
  }
}
```

# Dateistruktur

https://reactjs.org/docs/faq-structure.html

Verbreitete Zugänge:

- Gruppieren nach Feature / Route
- Gruppieren nach Typ (Komponente / Reducer / API interface)

zu beachten:

- Zu viel Verschachtelung vermeiden
- Zu Beginn nicht zu viel Gedanken daran verschwenden

# Serverseitiges Rendering mit next.js

## Serverseitiges Rendering mit next.js

[github.com/zeit/next.js](https://github.com/zeit/next.js/)

## Serverseitiges rendering

- Ermöglicht Verwendung von JSX als Templatesprache am Server
- Anwendungsgebiete:
  - Erstellen von statischen Websites
  - Anwendung kann am Server vorgerendert werden
    - Schnelleres erstes Rendering
    - Einfacheres indexieren durch Suchmaschinen

## Setup

Siehe https://github.com/zeit/next.js/#setup

<!--
```bash
npm init
npm install --save next react react-dom
```
package.json:
```json
  [...]
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
```
-->

## Build & Test

Testserver starten:

```bash
npm run dev
```

Build:

```bash
npm build
```

## Grundlagen

- Seiten definiert unter _./pages_
- Statische Assets unter _./static_
- verwendete Komponenten unter _./components_

## Beispiel: Hello world

index.js:

```js
export default () => <div>Welcome to next.js!</div>;
```

## Daten einbinden: getInitialProps()

```jsx
import React from 'react';
import fetch from 'isomorphic-fetch';

export default class Page extends React.Component {
  // am Server ausgeführt (node.js)
  static async getInitialProps() {
    const res = await fetch(
      'https://api.github.com/repos/zeit/next.js'
    );
    const json = await res.json();
    return { stars: json.stargazers_count };
  }

  render() {
    return <div> Next stars: {this.props.stars} </div>;
  }
}
```


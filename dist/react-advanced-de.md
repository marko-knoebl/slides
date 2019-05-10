# Hooks

## Hooks

Hooks: Erweiterung von funktionalen Komponenten; erlauben die Verwendung von state und anderen Features ohne Klassen

## Hooks

> "In the longer term, we expect Hooks to be the primary way people write React components."

\- [React FAQ](https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both)

## Hooks: derzeitiger Stand

- Dokumentation für Einsteiger noch sehr Klassen-orientiert
- Eingeschränkte Unterstützung der React developer tools ([GitHub issue](https://github.com/facebook/react-devtools/issues/1215))
- Keine Unterstützung durch die Test Library _enzyme_

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

# Reducer Hook

## State Managment & Reducer Hook

In komplexeren Anwendungen macht es Sinn, den Anwendungszustand (model) von der Ansicht (view) zu trennen. Dies kann durch externe State Managment Libreries, wie _redux_, oder auch durch den sogenannten _reducer Hook_ erfolgen

Oft wird der gesamte Anwendungszustand durch ein Datenmodell repräsentiert. Jede Änderung am Anwendungszustand läuft über das Datenmodell.

## Reducer Hook

Bei State Managment Tools geschieht jede Änderung am Anwendungszustand üblicherweise durch ein _Event_ / eine _Action_. Bei Verwendung des Reducer Hooks oder von Redux hat eine action üblicherweise einen _type_ und (optional) eine _payload_:

```json
{
  "type": "ADD_TODO",
  "payload": {
    "title": "learn react"
  }
}
```

## reducer Hook

State management mit Reducern:

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

# Komponenten-Lebenszyklus

## Komponenten-Lebenszyklus

In React können bestimmte Ereignisse im Lebenszyklus einer Komponente abgefragt werden. Insbesondere sind folgende Ereignisse oft von Interesse:

- die Komponente wurde neu eingebunden
- state oder props der Komponente haben sich geändert
- die Komponente wird entfernt

## Komponenten-Lebenszyklus

Einsatzgebiete der genannten Ereignisse:

- Abfragen von APIs
- manuelle Änderungen am DOM
- Aufräumen vor dem Entfernen einer Komponente

## Komponenten-Lebenszyklus

Die Ereignisse können wie folgt abgefragt werden:

In Klassenkomponenten mittels Lebenszyklus-Methoden:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

In funktionalen Komponenten mittels `useEffect`

## Beispiel: DocumentTitle-Komponente

Wir erstellen eine Komponente, die den Dokumenttitel dynamisch setzen kann:

```xml
<DocumentTitle>my custom title</DocumentTitle>
```

Diese Komponente kann irgendwo in der React-Anwendung vorkommen.

## Beispiel: DocumentTitle-Komponente

Als Klassenkomponente

```jsx
class DocumentTitle extends Component {
  componentDidMount() {
    document.title = this.props.children;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = this.props.children;
  }

  render() {
    return null;
  }
}
```

## Beispiel: DocumentTitle-Komponente

mit useEffect

```jsx
const DocumentTitle = props => {
  useEffect(() => {
    document.title = props.children;
  });

  return null;
};
```

## Beispiel: Clock-Komponente

## Beispiel: Clock-Komponente

Als Klassenkomponente:

```jsx
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  render() {
    return <div>{this.state.time}</div>;
  }
```

## Beispiel: Clock-Komponente

```jsx
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
```

## useEffect im Detail

`useEffect` bekommt zwei Parameter übergeben: Eine Funktion und ein Array von Werten.

Die Funktion nach dem Rendering einer Komponente ausgeführt, wenn sich einer der Werte geändert hat.

Die Funktion wird auch ausgeführt, wenn die Komponente neu eingebunden und zum ersten Mal gerendert wurde.

## useEffect im Detail

Wenn kein zweiter Parameter übergeben wird, wird die Funktion nach jedem Rendering ausgeführt.

Wenn ein leeres Array als zweiter Parameter übergeben wird, wird die Funktion nur nach dem ersten Rendering ausgeführt.

Es gibt auch die Möglichkeit, eine Funktion zu definieren, die vor dem _Entfernen_ einer Komponente aufgerufen wird (mehr dazu später).

## useEffect: Beispiel: Weather

```js
const [weatherData, setWeatherData] = useState(null);
const [stale, setStale] = useState(true);

// fetch data whenever data is stale
useEffect(() => {
  if (stale) {
    refetch();
  }
}, [stale]);
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

## useEffect: Entfernen einer Komponente

```jsx
const Clock = () => {
  ...
  // wird aufgerufen, wenn die Komponente eingebunden wird
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    // wird aufgerufen, wenn die Komponente entfernt wird
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  ...
};
```

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
npm install --save-dev jest
```

in _package.json_:

```json
"scripts": {
  "test": "jest"
}
```

## Tests ausführen

```bash
npm test
```

Achtung: laufende Tests sollten immer abgebrochen werden, bevor `npm install ...` ausgeführt wird - sonst kann die Installation fehlschlagen

## Finden von Tests

Im allgemeinen suchen Test Libraries nach Dateien mit der Endung `.test.js` oder `.spec.js` in dem Ordner `test`.

Wir können auch ein eigenes Muster übergeben, z.B.:

```bash
mocha "src/**/*.{test,spec}.{js,jsx}"
```

## test coverage

Manche Testlibraries können berichten, wie viel des Codes von Tests abgedeckt ist:

Beispiel - in einem create-react-app Projekt:

```bash
npm test -- --coverage
```

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

assert (node):

```js
assert.equal(a, b);
assert.deepEqual(a, b);
assert.throws(() => 1 / 0);
// ...
```

assert (chai):

```js
assert.equal(a, b);
assert.deepEqual(a, b);
assert.typeOf(foo, 'string');
assert.lengthOf(foo, 3);
assert.throws(() => 1 / 0);
```

## Testen: assertions

jest:

```js
expect(a).toEqual(4);
expect(a).not.toEqual(2);
expect(a).toBeGreaterThan(3);
expect(a).toBeInstanceOf(Number);
expect(() => 1 / 0).toThrow();
```

chai:

```js
expect(a).to.equal(4);
expect(a).not.to.equal(2);
expect(a).to.be.greaterThan(3);
expect(a).to.be.a('number');
expect(() => 1 / 0).to.throw();
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

Enzyme bietet noch keine Unterstützung für Hooks

## React-Test-Renderer - Installation

```bash
npm install --save-dev react-test-renderer
```

## React-Test-Renderer - Beispiel

```js
import TestRenderer from 'react-test-renderer';

it('renders a component without crashing', () => {
  const instance = TestRenderer.create(<MyComponent />)
    .root;
});
```

## Enzyme - Installation & Einrichtung

```bash
npm install --save-dev enzyme enzyme-adapter-react-16
```

neue Datei `src/setupTests.js`:

```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

## Enzyme - Beispiele

```jsx
import { shallow, mount } from 'enzyme';

it('renders a component without crashing', () => {
  const wrapper = shallow(<MyComponent />);
});

it('renders a component tree without crashing', () => {
  const wrapper = mount(<MyComponent />);
});
```

## Enzyme - Cheatsheet

https://devhints.io/enzyme

# Beispiel: Testen mit Jest und Enzyme

Testen einer Rating-Komponente

## Beispiel: Testen einer Rating-Komponente

```tsx
import React from 'react';
import { shallow, mount } from 'enzyme';

import Rating from './Rating';
```

## Beispiel: Testen einer Rating-Komponente

```tsx
describe('rendering', () => {
  it('renders 5 Star components', () => {
    const wrapper = shallow(<Rating stars={5} />);
    expect(wrapper.find('Star')).toHaveLength(5);
  });

  it('renders 5 stars', () => {
    const wrapper = mount(<Rating stars={5} />);
    expect(wrapper.find('.star')).toHaveLength(5);
  });
});
```

## Beispiel: Testen einer Rating-Komponente

```tsx
describe('rendering', () => {
  it('renders 3 active stars', () => {
    const wrapper = mount(<Rating stars={3} />);
    expect(wrapper.find('.star')).toHaveLength(5);
    expect(
      wrapper.find('.star').get(2).props.className
    ).toEqual('star active');
    expect(
      wrapper.find('.star').get(3).props.className
    ).toEqual('star');
  });
});
```

## Beispiel: Testen einer Rating-Komponente

```tsx
describe('events', () => {
  it('reacts to click on first star', () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <Rating stars={3} onStarsChange={mockFn} />
    );
    wrapper
      .find('span')
      .at(0)
      .simulate('click');
    expect(mockFn.mock.calls[0][0]).toEqual(1);
  });
});
```

## Beispiel: Testen einer Rating-Komponente

Testen einer (hypothetischen) Rating-Komponente, die ihren eigenen internen State hat:

```tsx
describe('events', () => {
  it('reacts to click on first star', () => {
    const wrapper = mount(<Rating />);
    wrapper
      .find('span')
      .at(0)
      .simulate('click');
    expect(wrapper.instance.state.count).toEqual(1);
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
    expect(testFn).toThrow(
      'number of stars must be positive'
    );
  });
});
```

# Beispiel: Testen mit Jest und React Test Renderer

Testen einer Rating Komponente

## Test-Setup

```tsx
import React from 'react';
import TestRenderer from 'react-test-renderer';

import Rating from './Rating';
```

## Testen des Renderings

```tsx
describe('rendering', () => {
  it('renders 5 divs', () => {
    const instance = TestRenderer.create(
      <Rating stars={3} />
    ).root;
    expect(instance.findAllByType('span')).toHaveLength(5);
  });

  it('renders 3 active stars', () => {
    const instance = TestRenderer.create(
      <Rating stars={3} />
    ).root;
    expect(
      instance.findAllByProps({ className: 'star active' })
    ).toHaveLength(3);
  });
});
```

## Testen von Events

```jsx
describe('events', () => {
  it('reacts to click on the first star', () => {
    const mockFn = jest.fn();
    const instance = TestRenderer.create(
      <Rating stars={3} onStarsChange={mockFn} />
    ).root;
    const fourthStar = instance.findAllByType('span')[3];
    fourthStar.props.onClick();
    expect(mockFn).toBeCalledWith(4);
  });
});
```

## Testen von Fehlern

```jsx
describe('errors', () => {
  it('throws an error if the number of stars is 0', () => {
    const testFn = () => {
      TestRenderer.create(<Rating stars={0} />);
    };
    expect(testFn).toThrow(
      'number of stars must be positive'
    );
  });
});
```

# Snapshot Tests

## Snapshot Tests

Komponenten werden gerendert und mit früheren Versionen (Snapshots) verglichen

Snapshot Tests fallen unter Regressionstests.

## Snapshot Tests - Setup

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

Haben wir das Verhalten einer Komponente geändert und danach ihr Verhalten überprüft, können wir Snapshot-Tests entsprechend aktualisieren:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```

# Storybook

## Storybook

Ermöglicht das Erstellen isolierter Komponentendemos

Beispiel:

https://airbnb.io/react-dates/

## Storybook - Setup

```bash
npx -p @storybook/cli sb init --type react
```

Erstellt einen Konfigurationsordner unter `.storybook` und Beispielstories unter `stories`.

## Storybook

```bash
npm run storybook
```

## Storybook

Konfiguration via `.storybook/config.js`

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
Ganze Anwendung von einem `BrowserRouter` - Tag umschlossen

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

<Route path="/" exact component={TodoList} />
<Route path="/about" exact component={About} />
<Route path="/add" exact component={AddTodo} />
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
import { NavLink } from 'react-router-dom';

<NavLink to="/" activeClassName="active-link">Home</NavLink>
<NavLink to="/add" activeClassName="active-link">Add</NavLink>
```

## React Router - Switch

Nur die erste zutreffende Route wird angezeigt

```jsx
import { Switch } from 'react-router-dom';

<Switch>
  <Route path="/todos/:todoId" component={Todo} />
  <Route path="/" component={NotFound} />
</Switch>;
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

# PWAs

Progressive Web Apps mit React

## PWAs

**Progressive Web Apps**: Möglichkeit, Anwendungen für Mobilgeräte und PCs mit HTML, CSS und JavaScript zu schreiben

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

## PWA: Deployment auf netlify

- `npm run build`
- dist-Ornder via drag&drop auf app.netlify.com/drop
- Manuell auf HTTPS wechseln - in Chrome am Desktop und Mobilgerät ausprobieren

# React Native

## React Native

Mit React Native können React Anwendungen für iOS- und Android-Geräte erstellt werden

## Online Editor

Siehe https://snack.expo.io/

## React Native Komponenten

- View (=div)
- Text (=span)
- Image
- Button
- TextInput (=input)
- ScrollView

[ausführlichere Liste](https://facebook.github.io/react-native/docs/components-and-apis#basic-components)

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

type TodosContextType = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
  onClear: () => void;
};

const TodosContext = React.createContext(
  {} as TodosContextType
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


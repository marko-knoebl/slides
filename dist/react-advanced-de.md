# React Fortgeschritten

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

## Themen (1/2)

- Hooks
- State Management mit Reducern
- Context
- Externe Hooks & eigene Hooks
- Routing & Prerendering

## Themen (2/2)

- Testen von React-Komponenten
- App-Entwicklung mit React
- Memoisation, Refs, HOCs
- Manuelles Setup

# Hooks

## Hooks

Hooks: Erweiterung von Funktionskomponenten

Eine _einfache_ Funktionskomponente kann Inhalte basierend auf ihren Props rendern und Events auslösen.

Hooks erlauben erweiterte Funktionalität, z.B. internen State in einer Komponente oder das "Lauschen" auf Events aus dem Komponentenlebenszyklus

## Hooks

Hooks sind spezielle Funktionen, die am Beginn einer Komponentendefinition aufgerufen werden können

Beispiele:

- `useState(...)`
- `useEffect(...)`
- `useContext(...)`
- `useReducer(...)`

## Hooks

> "In the longer term, we expect Hooks to be the primary way people write React components."

\- [React FAQ](https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both)

# State Management mit Reducern

## State Management

In komplexeren Anwendungen oder Komponenten macht es Sinn, den Anwendungszustand (model) von der Ansicht (view) zu trennen.

Oft wird der gesamte Anwendungszustand durch ein Datenmodell repräsentiert. Jede Änderung am Anwendungszustand läuft über das Datenmodell.

## State Management Tools

- reducer Hook (in React beinhaltet, sehr ähnlich zu Redux)
- Redux (basiert auf Reducern, oft mit React verwendet)
- MobX (oft mit React verwendet, einfacher als Reducer)
- ngrx (mit Angular verwendet)
- vuex (mit Vue.js verwendet)

## State Management mit Actions und Reducern

Konzept von _Redux_ und Reacts _Reducer Hook_:

Ein Ereignis in der Anwendung löst eine sogenannte _Action_ aus.

Basierend auf dieser Action wird ein aktueller _State_ mittels einer _Reducer_-Funktion in einen geänderten neuen _State_ übergeführt.

## Reducer Diagramm

<img src="assets/redux-flow.svg" type="text/svg" style="width: 100%">

## Beispiel: Todos State Management

Wir verwalten ein Array von Todos mit Hilfe eines Reducers. Zu Beginn setzen wir zwei mögliche Actions um:

- Hinzufügen eines Todos
- Entfernen eines Todos

## Beispiel: Todos State Management

Der State könnte folgendermaßen aussehen:

```json
[
  {
    "id": 1,
    "title": "groceries",
    "completed": false
  },
  {
    "id": 2,
    "title": "gardening",
    "completed": false
  }
]
```

## Beispiel: Todos State Management

_Actions_ werden von JavaScript Objekten repräsentiert; Actions haben immer eine _type_ Property

```json
{
  "type": "ADD_TODO",
  "title": "learn React"
}
```

```json
{
  "type": "DELETE_TODO",
  "id": 1
}
```

## Beispiel: Todos State Management

Ein _Reducer_ ist eine Funktion.

Der Reducer erhält den alten State und eine Action, die eine Änderung am State beschreibt.

Der Reducer gibt den neuen Zustand zurück. Wichtig: Ein Reducer ändert das alte state-Objekt nicht ab, sondern erstellt ein neues (Reducer sind reine Funktionen)

## Beispiel: Todos State Management

```js
const todosReducer = (oldState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...oldState,
        {
          title: action.title,
          completed: false,
          id: generateId(), // dummy function
        },
      ];
    case 'DELETE_TODO':
      return oldState.filter(todo => todo.id !== action.id);
    default:
      throw new Error('unknown action type');
  }
};
```

## Beispiel: Todos State Management

Verwendung des Reducers (Wir erinnern uns: Der Reducer bekommt den alten State und eine Action übergeben; er gibt den neuen State zurück)

```js
const state1 = [
  { id: 1, title: 'groceries', completed: false },
];
const state2 = todosReducer(state1, {
  type: 'ADD_TODO',
  title: 'gardening',
});
const state3 = todosReducer(state2, {
  type: 'DELETE_TODO',
  id: 1,
});
console.log(state3);
// [{id: 2, title: "gardening", completed: false}]
```

# Reducer Hook

## Reducer Hook

Zum State Management mit Hooks können wir das bekannte `useState` oder nun auch `useReducer` verwenden:

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

Konkretes Beispiel count:

```js
const [count, countDispatch] = useReducer(countReducer, 0);
```

## Reducer Hook

Aufruf von `useReducer` gibt ein Array mit zwei Einträgen zurück:

- aktueller State
- eine dispatch-Funktion, mit der Actions ausgelöst werden können

## Reducer Hook

```js
const TodoApp = () => {
  const [todos, dispatch] = useReducer(
    todosReducer,
    initialTodos
  );

  return (
    <div>
      ...
      <button
        onClick={() => dispatch({ type: 'DELETE_ALL' })}>
        delete all todos
      </button>
    </div>
  );
};
```

# Context

## Context

Möglichkeit, Werte aus einer Komponente direkt allen weiter unten im Dokumentenbaum liegenden Komponenten zur Verfügung zu stellen - ohne diese über jede Ebene übergeben zu müssen

## Context

zwei Elemente:

- `Provider`: stellt Werte zur Verfügung
- `Consumer`: verwendet diese Werte (kann weit unten in der Komponentenhierarchie liegen)

## Context

Das Interface von Context kann sowohl Daten (aus dem State) als auch Eventhandler übergeben.

## Context - Beispiel

mit JavaScript (_TodosContext.js_):

```js
const TodosContext = React.createContext();
```

mit TypeScript (_TodosContext.ts_):

```ts
type TodosContextType = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
};

const TodosContext = React.createContext(
  {} as TodosContextType
);
```

## Context - Beispiel: Provider

```jsx
const App = () => {
  return (
    <TodosContext.Provider
      value={{
        todos: todos,
        onToggle: () => {
          // ...
        },
      }}>
      <TodoList />
      <AddTodo />
      <TodoStats />
    </TodosContext.Provider>
  );
};
```

## Context - Beispiel: Consumer

```jsx
const TodoStats = () => {
  const context = useContext(TodosContext);
  return <div>There are {context.todos.length} todos</div>;
};
```

# Externe Hooks

## Externe Hooks

Viele zusätzliche Hooks werden von der React-Community entwickelt

Einsatzgebiete z.B.:

- Abfragen von APIs
- Verwenden von globalem State
- Verwenden von _localStorage_ für den state
- Media Queries
- Abfrage der Scrollposition
- ... (siehe [awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks))

## Beispiel: react-query

[https://github.com/tannerlinsley/react-query](https://github.com/tannerlinsley/react-query)

Viel genutzter Hook, der beim Abfragen von APIs hilfreich sein kann

## Beispiel: react-query

Einfache Verwendung:

```js
const TodoDisplay = () => {
  const { data, isLoading } = useQuery(
    'todo_1',
    fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    ).then(response => response.json())
  );
  if (isLoading) {
    return 'Loading...';
  }
  return <div>{data.title}</div>;
};
```

# Eigene Hooks

## Eigene Hooks

Eigene hooks können als Funktionen definiert werden; sie nutzen intern oft vorhandene Hooks, z.B. `useState` oder `useEffect`

## Eigene Hooks - useDate

Beispiel: `useDate` - stellt hier die aktuelle Uhrzeit bereit und aktualisiert die Komponente alle 1000 Millisekunden

```js
const Clock = () => {
  const time = useDate(1000);
  return (
    <div>The time is: {time.toLocaleTimeString()}</div>
  );
};
```

## Eigene Hooks - useDate

Einfache Implementierung von `useDate`:

```js
const useDate = interval => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, interval);
  }, []);
  return date;
};
```

## Eigene Hooks - useTodos

Beispiel: `useTodos` - kann verwendet werden, um die Datenverwaltung von der Komponentendefinition loszulösen

```js
const TodoApp = () => {
  const {
    todos,
    reload,
    isLoading,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos();
  return (
    <div>
      <h1>Todo</h1>
      <TodoList
        todos={todos}
        isLoading={isLoading}
        onReload={reload}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <AddTodo onAdd={addTodo} />
    </div>
  );
};
```

## Eigene Hooks - useTodos

Implementierung von `useTodos`:

```js
const useTodos = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(apiTodos => {
          dispatch({ type: 'setTodos', payload: apiTodos });
          setIsLoading(false);
        });
    }
  }, [isLoading]);
  return {
    todos: todos,
    isLoading: isLoading,
    reload: () => setIsLoading(true),
    addTodo: title =>
      dispatch({ type: 'addTodo', payload: title }),
    deleteTodo: id =>
      dispatch({ type: 'deleteTodo', payload: id }),
    toggleTodo: id =>
      dispatch({ type: 'toggleTodo', payload: id }),
  };
};
```

## Eigene Hooks - useJsonQuery

Beispiel: `useJsonQuery` - ermöglicht das Abrufen von JSON-Daten

```js
const TodoDemo = () => {
  const { data, error, isFetching } = useJsonQuery(
    'https://jsonplaceholder.typicode.com/todos'
  );
  if (error) return <div>Could not fetch data</div>;
  if (isFetching) return <div>Fetching...</div>;
  return (
    <div>
      {data.map(todo => (
        <div>{todo.title}</div>
      ))}
    </div>
  );
};
```

## Eigene Hooks - useJsonQuery

einfache Implementierung:

```js
const useJsonQuery = url => {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    setError(false);
    fetch(url)
      .then(response => response.text())
      .then(responseText => {
        setData(responseText);
        setIsFetching(false);
      })
      .catch(() => setError(true));
  }, [url]);
  return { data, error, isFetching };
};
```

# Routing und Pre-Rendering

## Routing und Pre-Rendering

- **client-seitiges Routing**: Navigieren zwischen verschiedenen Ansichten, ohne die React-Anwendung zu verlassen
- **Pre-Rendering**: beim ersten Laden der Seite erhält der Browser vorgerendertes HTML, um das Laden / Anzeigen zu beschleunigen

## Routing

Beispiel: gehe zu [reactjs.org](https://reactjs.org) und navigiere zwischen Seiten

Die Navigation zwischen den Seiten läuft flüssig - ohne dass die ganze Seite neu geladen werden muss

## Pre-Rendering

Beispiel 1:

Gehe zu [reactjs.org](https://reactjs.org) und warte, bis sich das React Devtools Icon des Browsers aktiviert - Es werden schon Inhalte angezeigt, bevor React bereit ist

Beispiel 2:

Deaktiviere JavaScript in den Einstellungen der Browser-Entwicklertools und besuche [reactjs.org](https://reactjs.org) - es werden Inhalte angezeigt, auch wenn Teile der Interaktivität nicht funktionieren (z.B. Dropdowns)

## Routing und Pre-Rendering

Tools:

- _react-router_: _Routing_
- _gatsby_: routing, _Pre-Rendering statischer Inhalte_
- _next.js_: routing, Pre-Rendering statischer und _dynamischer_ Inhalte

# React Router

## React Router

https://reacttraining.com/react-router/

## React Router - Setup

npm Pakete:

- `react-router-dom`
- (`@types/react-router-dom`)

## React Router - BrowserRouter

Um React Router verwenden zu können:  
Ganze Anwendung wird in ein `BrowserRouter` - Element eingebettet

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

<Route path="/" exact={true} component={TodoList} />
<Route path="/about" exact={true} component={About} />
<Route path="/add" exact={true} component={AddTodo} />
```

## React Router - Routen definieren

Wenn props übergeben werden müssen:

```jsx
import { Route } from 'react-router-dom';

<Route
  path="/add"
  exact={true}
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
import { Redirect } from 'react-router-dom';

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

# Pre-Rendering

## Pre-Rendering

Tools wie **next.js** oder **gatsby.js** können React-Seiten vorrendern, bevor sie zum Client gesendet werden

Vorteile:

- schnellere erste Darstellung
- reduziert zusätzliche API-Aufrufe am Client
- einfachere Indexierung durch Suchmaschinen

## Pre-Rendering

Zugänge:

- Static Site Generation
- Server-side Rendering

## Pre-Rendering

**Static Site Generation**

- sinnvoll, wenn Daten sich nicht oft ändern (z.B. Blog Posts)
- bei Änderung von Daten muss die Website statisch neu generiert und deployed werden
- Daten, die sich oft ändern (z.B. Kommentare zu einem Blog Post) wären nicht Teil des Pre-Renderings

unterstützt von **next.js** und **gatsby.js**

## Pre-Rendering

**Server-side Rendering**

- beim Öffnen einer React-Seite wird diese am Server vorgerendert und zum Client gesendet
- benötigt _node.js_ am Server

unterstützt von **next.js**

# Next.js

## create-next-app

Erstellen einer neuen next-Anwendung mittels:

```bash
npx create-next-app my-app
```

## Ordnerstruktur

- Seiten unter _pages_
- statische Assets unter _assets_
- verwendete React-Komponenten üblicherweise unter _components_

## npm Scripts

- `npm run dev`: ausführen des Entwicklungsservers
- `npm (run) start`: ausführen des Produktionsservers
- `npm run build`: erstellen einer statischen Version für das Deployment

## Entwicklungsserver

```bash
npm run dev
```

Ein automatisch neu ladender Server startet unter _localhost:3000_

## Erstellen von Seiten

Beispiel einer Seitendefinition:

```js
// pages/index.js
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
```

## Erstellen von Seiten

Aufgabe: Erstelle weitere Seiten

## Routenparameter

Wir können aus URLs wie den folgenden Parameter auslesen:

- `/posts/?postid=3`
- `/posts/3`

## Routenparameter

Routenparameter werden in eckigen Klammern im Dateipfad angegeben, z.B.: `pages/posts/[id].js`

## Routenparameter

Abfragen von Routenparametern:

```js
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  return (
    <div>
      <h1>detail view for post {router.query.id}</h1>
    </div>
  );
};

export default Post;
```

## API-Abfragen mit next.js

In next.js kann der rendernde Server bereits APIs abfragen und die Daten zum Rendering verwenden und an den Client weitergeben

## API-Abfragen mit next.js

Wenn wir am Server API-Daten abfragen möchten, bevor die Komponente gerendert wird, implementieren wir die next-spezifische Methode `getInitialProps`

Um `fetch` in node.js zu verwenden, können wir das npm-Paket `isomorphic-fetch` verwenden.

## API-Abfragen mit next.js

```js
const Post = ({ url, title, body }) => (
  <div>
    <h2>
      Post {url.query.id}: {title}
    </h2>
    <p>{body}</p>
  </div>
);

Post.getInitialProps = context =>
  fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.query.id}`
  )
    .then(response => response.json())
    .then(post => ({ title: post.title, body: post.body }));
```

## Static Site Generator

Standardmäßig läuft _next.js_ auf einem node Server und rendert Inhalte dynamisch

Für das statische Rendern siehe:

https://nextjs.org/learn/excel/static-html-export

## Resourcen

Die next.js website hat sehr gute Materialien: https://nextjs.org

# Testen

## Automatisiertes Testen in JavaScript

Manche Funktionen in React - z.B. Reducer - sind ganz "normale" JavaScript-Funktionen und können mit standard-Testwerkzeugen getestet werden

Siehe die Präsentation [JavaScript Testing](./javascript-testing-de.html) für einen Einstieg

## Testen von React-Komponenten

was kann getestet werden:

- Rendering
- Auslösen von Events
- Änderungen am State

## Test Renderer für React

- `react-test-renderer` (vom React Team entwickelt)
- `react-testing-library` (Unterprojekt von _Testing Library_, Erstveröffentlichung Mitte 2019)
- `Enzyme`

## Snapshot Tests

Komponenten werden gerendert und mit früheren Versionen (Snapshots) verglichen

# React-Test-Renderer

## React-Test-Renderer - Installation

```bash
npm install --save-dev react-test-renderer
```

für TypeScript:

```bash
npm install --save-dev react-test-renderer @types/react-test-renderer
```

## React-Test-Renderer - Beispiel

```js
import TestRenderer from 'react-test-renderer';

it('renders a component without crashing', () => {
  const instance = TestRenderer.create(<MyComponent />)
    .root;
});
```

## React-Test-Renderer - mit Instanzen arbeiten

- `instance.find(All)` (erhält eine Testfunktion als Argument)
- `instance.find(All)ByType`
- `instance.find(All)ByProps`
- `instance.props`
- `instance.children`
- `instance.type`

## React-Test-Renderer - API

[https://reactjs.org/docs/test-renderer.html](https://reactjs.org/docs/test-renderer.html)

## Beispiel: Testen mit Jest und React-Test-Renderer

Testen einer Rating Komponente

## Test-Setup

```jsx
import React from 'react';
import TestRenderer from 'react-test-renderer';

import Rating from './Rating';
```

## Testen des Renderings

```jsx
describe('rendering', () => {
  it('renders 5 spans', () => {
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
  it('reacts to click on the fourth star', () => {
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
    expect(testFn).toThrow('number of stars must be 1-5');
  });
});
```

# React-Testing-Library

## Testing-Library

**Testing-Library**: Projekt zum Testen von UI Komponenten (u.a. React)

Fokus der Tests liegt auf Aspekten, die für den Endnutzer relevant sind (nicht so sehr auf der genauen DOM-Struktur)

## React-Testing-Library - Beispiel

```js
import { render } from '@testing-library/react';

it('renders a component without crashing', () => {
  const instance = render(<MyComponent />);
});
```

## React-Testing-Library - Elemente abfragen

- `.getByText` (wirft Exception, wenn es keinen eindeutigen Match gibt)
- `.getAllByText` (wirft Exception, wenn es keine Matches gibt)
- `.queryByText`
- `.queryAllByText`
- ... (siehe [https://testing-library.com/docs/dom-testing-library/api-queries](https://testing-library.com/docs/dom-testing-library/api-queries))

## React-Testing-Library

erweiterte Assertions einsetzbar mittels:

```js
import '@testing-library/jest-dom/extend-expect';
```

Beispiele:

- `.toContainHTML()`
- `.toHaveClass()`
- `.toBeInTheDocument()`
- ...

siehe [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)

## Test-Setup

```js
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';

afterEach(() => {
  cleanup();
});
```

## Testen des Renderings

Rating-Komponente:

```jsx
it('renders three full stars', () => {
  const instance = render(<Rating stars={3} />);
  const fullStars = instance.getAllByText('★');
  expect(fullStars).toHaveLength(3);
  for (let fullStar of fullStars) {
    expect(fullStar).toHaveClass('active');
  }
});
```

## Testen des Renderings

Slideshow-Komponente:

```jsx
it('renders a slideshow starting at image 0', () => {
  const instance = render(<Slideshow />);
  const slide = instance.getByAltText('slide');
  expect(slide).toHaveAttribute(
    'src',
    'https://picsum.photos/200?image=0'
  );
});
```

## Testen von State-Änderungen

Slideshow-Komponente:

```jsx
it('switches to the next slide', () => {
  const instance = render(<Slideshow />);
  const slide = instance.getByAltText('slide');
  fireEvent.click(instance.getByText('next'));
  expect(slide).toHaveAttribute(
    'src',
    'https://picsum.photos/200?image=1'
  );
});
```

## Testen von Events

Rating-Komponente:

```jsx
it('triggers an event when the fourth star is clicked', () => {
  const mockFn = jest.fn();
  const instance = render(
    <Rating stars={3} onStarsChange={mockFn} />
  );
  const firstEmptyStar = instance.getAllByText('☆')[0];
  fireEvent.click(firstEmptyStar);
  expect(mockFn).toHaveBeenCalledWith(4);
});
```

## Testen von Fehlern

Rating-Komponente:

```jsx
it('throws an error if the number of stars is 0', () => {
  const testFn = () => {
    render(<Rating stars={0} />);
  };
  expect(testFn).toThrow('number of stars must be 1-5');
});
```

# Enzyme

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

## Beispiel: Testen mit Jest und Enzyme

Testen einer Rating-Komponente

## Beispiel: Testen einer Rating-Komponente

```jsx
import React from 'react';
import { shallow, mount } from 'enzyme';

import Rating from './Rating';
```

## Beispiel: Testen einer Rating-Komponente

```jsx
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

```jsx
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

```jsx
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

```jsx
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

```jsx
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

# Snapshot Tests

## Snapshot Tests

Komponenten werden gerendert und mit früheren Versionen (Snapshots) verglichen

Snapshot Tests fallen unter Regressionstests.

## Snapshot Tests - Tests erstellen

mit react-testing-library

```jsx
it('matches the snapshot', () => {
  const instance = render(<Slideshow />);
  expect(instance).toMatchSnapshot();
  const slide = instance.getByAltText('slide');
  expect(slide).toMatchSnapshot();
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

Via `public/manifest.json`

## PWA: add to homescreen

https://developers.google.com/web/fundamentals/app-install-banners/

## PWA: add to homescreen

Prozess in Chrome:

- warten, bis eine Installationsdialog angezeigt werden darf
- anzeigen eines Buttons o.ä., der die Installation anbietet
- beim Anklicken des Buttons via Chrome den Installationsdialog anzeigen

## PWA: add to homescreen

TypeScript Implementierung

```ts
const [canInstall, setCanInstall] = useState(false);
const installPromptEventRef = useRef<Event>();

const getInstallPermission = () => {
  window.addEventListener(
    'beforeinstallprompt',
    ipEvent => {
      ipEvent.preventDefault();
      installPromptEventRef.current = ipEvent;
      setCanInstall(true);
    }
  );
};
useEffect(getInstallPermission, []);
```

## PWA: add to homescreen

TypeScript Impementierung:

```tsx
<button
  disabled={!canInstall}
  onClick={() => {
    (installPromptEventRef.current as any).prompt();
  }}>
  install
</button>
```

## PWA: Deployment auf netlify

- `npm run build`
- build-Ornder via drag&drop auf netlify.com/drop
- bei der URL von _http://_ auf _https://_ wechseln
- in Chrome am Desktop und Mobilgerät ausprobieren

# React Native

## React Native

Mit React Native können React Anwendungen für iOS- und Android-Geräte erstellt werden

## Möglichkeiten zur Entwicklung

- **Expo Snack**: online Editor
- **Expo CLI**: lokale Entwicklung mit wenig Setup
- **React Native CLI**: Entwicklung mit Xcode oder Android Studio - wird zum Veröffentlichen von Apps benötigt

## Expo: online Editor

[snack.expo.io](https://snack.expo.io)

## Expo: lokale Entwicklung

Installation von expo:

```bash
npm install -g expo-cli
```

Erstellen eines neuen Projekts:

```bash
expo init myproject
```

## Expo App

**Expo App**: zum Testen von Anwendungen während der Entwicklung, verfügbar in den Android und iOS app stores

## React Native Komponenten

- View (=div)
- Text
- Image
- Button
- TextInput
- ScrollView

[ausführlichere Liste](https://facebook.github.io/react-native/docs/components-and-apis#basic-components)

## React Native Komponenten

Beispiele:

```js
<Button title="press me" onPress={handlePress} />
```

```js
<TextInput value={myText} onChangeText={setMyText} />
```

## Styling

In React Native geschieht Styling über die _style_-Property:

```js
const todoItemStyle = {
  margin: 5,
  padding: 5,
};

const TodoItem = ({ title, completed }) => (
  <View style={todoItemStyle}>{title}</View>
);
```

## Styling

Die style-Property kann auch ein Array von Objekten erhalten.

Einträge, die _falsy_ sind, werden ignoriert - damit können bedingte Stile umgesetzt werden

```js
const TodoItem = ({ title, completed }) => (
  <View
    style={[todoItemStyle, completed && completedStyle]}>
    {title}
  </View>
);
```

## Styling

Erstellen von _stylesheets_, die mehrere gruppierte Stile definieren:

```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: 'salmon',
  },
  completedView: {
    backgroundColor: 'lightgrey',
  },
  completedText: {
    textDecoration: 'line-through',
  },
});
```

## Styling

Verwendung von Stylesheets:

```js
const TodoItem = ({ title, completed, onToggle }) => (
  <View
    style={[
      styles.todoItem,
      completed && styles.completedView,
    ]}>
    <Text style={[completed && styles.completedText]}>
      {completed ? 'DONE: ' : 'TODO: '}
      {title}
    </Text>
  </View>
);
```

# Memoisation

## Memoisation

Memoisation = Technik, um z.B. Funktionsaufrufe zu beschleunigen: frühere Resultate werden gespeichert und müssen nicht neu berechnet werden

## Memoisation in React

Verwendung von Memoisation in React:

Wenn sich bei einer Komponente props bzw state nicht ändern, kann das alte Rendering oft beibehalten werden

## Memoisation in React

in Funktionskomponenten gilt:

- Ein Setzen eines geänderten States bewirkt ein neues Rendering
- Ein erneutes Setzen des gleichen States bewirkt kein neues Rendering
- Ein neues Rendering einer Komponente bewirkt üblicherweise das neue Rendering _aller Unterkomponenten_
- Durch den Einsatz von `React.memo` kann erreich werden, dass sich nur jene Unterkomponenten neu rendern, deren props sich geändert haben

## Memoisation in React

Anmerkung: Auch Hooks wie `useContext`, `useReducer`, ... können ähnlich wie `useState` ein Rerendering anstoßen

## Memoisation in React

Visualisierung des Renderings in den React Devtools: _Settings_ - _General_ - _Highlight updates when components render._

## Memoisation in React

Memoisation von Funktionskomponenten:

```js
import React, { memo } from 'react';

const Rating = props => {
  /*...*/
};
const RatingMemoized = memo(Rating);
```

## Verwaltung von Daten ohne Mutationen

In React werden (nicht-primitive) Einträge in State und Props dann als geändert angesehen, wenn sie sich auf ein anderes Objekt als zuvor beziehen.

## Verwaltung von Daten ohne Mutationen

Bei Memoisation in React: Daten werden mit `===` auf Gleichheit überprüft

Was gibt das folgende Programm aus?

```js
const state1 = [1, 2, 3];
const state2 = state1;
state2.push(4);

console.log(state1 === state2);
```

## Verwaltung von Daten ohne Mutationen

```js
const state1 = [1, 2, 3];
const state2 = state1;
state2.push(4);

console.log(state1 === state2);
```

Obiges Programm gibt `true` aus. `state1` und `state2` beziehen sich auf das selbe Objekt. Die Änderung würde bei memoisierten Komponenten kein neues Rendering auslösen.

## Verwalten von Daten ohne Mutationen

Korrekte Verwendung:

```js
const state1 = [1, 2, 3];
const state2 = [...state1, 4];
```

# Effect Hook

## Effect Hook

kann verwendet werden, um Aktionen zu setzen, wenn eine Komponente zum ersten mal eingebunden wird oder wenn ihre Props / State sich ändern

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

## Effect Hook

Kann verwendet werden, um Nebeneffekte (side effects) auszulösen:

- Abfragen von APIs
- manuelle Änderungen am DOM
- Timer starten
- ...

## Beispiel: DocumentTitle-Komponente

Wir erstellen eine Komponente, die den Dokumenttitel dynamisch setzen kann:

```xml
<DocumentTitle value="my custom title" />
```

Diese Komponente kann irgendwo in der React-Anwendung vorkommen.

## Beispiel: DocumentTitle-Komponente

```jsx
const DocumentTitle = props => {
  const updateTitle = () => {
    document.title = props.value;
  };
  useEffect(updateTitle, [props.value]);
  return null;
};
```

## Effect Hook: Cleanup

Ein Effect kann eine "Aufräumfunktion" zurückgeben

Diese Funktion wird aufgerufen, wenn z.B. die Komponente entfernt wird

## Effect Hook: Cleanup

```jsx
const Clock = () => {
  const [time, setTime] = useState('');
  // will be called when the component was mounted
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    // will be called when the component will be removed
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <div>{time}</div>;
};
```

## Effect hook: nach jedem Rendering

Wenn kein zweiter Parameter übergeben wird, wird die Funktion nach jedem Rendering ausgeführt.

```jsx
const RenderLogger = () => {
  useEffect(() => {
    console.log('logger was rendered');
  });
  return <div>Render logger</div>;
};
```

# Refs

### Zugriff auf DOM-Elemente

## Refs

Mittels Refs kann direkt auf DOM-Elemente zugegriffen werden

Anwendungsgebiete:

- Verwalten von Fokus, Textauswahl oder Medienwiedergabe
- Alternative Möglichkeit zum Verwalten von Inputs
- Integration von anderen DOM-Libraries

## Refs

**Verwalten von Fokus, Textauswahl oder Medienwiedergabe**

manche Änderungen können nicht deklarativ (via State) ausgedrückt werden - sie benötigen Zugriff zu einem bestimmten DOM-Element

Beispiel: es gibt Properties wie `.value` zum Ändern des Werts eines Inputs oder `.className` zum Ändern von Klassennamen, aber keine Property zum Verwalten des Fokus

## Refs

**Alternative Möglichkeit zum Verwalten von Inputs**

Verwendung von `ref` Anstelle von `value` und `onChange` kann zu etwas kürzerem Code führen (wird aber in der Dokumentation nicht empfohlen)

## Refs

**Integration von anderen DOM-Libraries**

Andere Libraries können expliziten Zugriff auf DOM-Elemente benötigen

Beispiel: Die Google Maps Library nimmt ein DOM-Element entgegen, in dem die Karte gezeichnet wird

Für viele Libraries (so auch Google Maps) existieren Wrapper für React, sodass refs nicht benötigt werden

## Refs

Verwalten des Fokus mittels einer Ref:

```js
const App = () => {
  const inputEl = useRef(null);
  return (
    <div>
      <input ref={inputEl} />
      <button onClick={() => inputEl.current.focus()}>
        focus
      </button>
    </div>
  );
};
```

## Refs

Verwalten von Inputs: Vergleich von `useState` und `useRef`:

```js
const App = () => {
  const [firstName, setFirstName] = useState('');
  const lastNameInput = useRef(null);

  return (
    <div>
      <input
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
      />
      <input ref={lastNameInput} />

      <button
        onClick={() => {
          console.log(firstName);
          console.log(lastNameInput.current.value);
        }}>
        log values
      </button>
    </div>
  );
};
```

# Higher-order components

### Funktionen, die eine Komponentendefinition verändern

## Higher-order components

verwirrende Terminologie:

Eine _higher-order component_ (HOC) ist **keine** Komponente 😲

HOCs sind Funktionen, die eine Komponentendefinition verändern / erweitern

## Higher-order components

Beispiel:

_React_'s `memo` ist eine HOC

Es rehält eine Komponente und gibt eine memoisierte Komponente zurück:

```js
const MemoizedRating = memo(Rating);
```

## Higher-order components

Beispiel:

`connect` aus _react-redux_ gibt eine HOC zurück:

```js
// connector is a HOC
const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);
```

Die entstehende HOC rehält eine normale Komponente und gibt eine Komponente zurück, die mit dem Redux Store verbunden ist:

```js
const RatingContainer = connector(Rating);
```

# Dateistruktur

## Dateistruktur

https://reactjs.org/docs/faq-structure.html

Verbreitete Zugänge:

- Gruppieren nach Feature / Route
- Gruppieren nach Typ (Komponente / Reducer / API interface)

# Manuelles Setup und Konfiguration von React

## Manuelles Setup und Konfiguration

Setup von React ohne _create-react-app_

Hier verwenden wir den _parcel_ bundler - eine Alternative zu webpack

## package.json und Abhängigkeiten

Wir beginnen mit einer `package.json`-Datei, die ein leeres Objekt enthält: `{}`

Installation der benötigten Pakete:

```bash
npm install react react-dom
```

```bash
npm install --save-dev parcel-bundler babel-preset-react babel-preset-env
```

## Konfiguration von Babel

via `.babelrc`-Datei:

```json
{
  "presets": ["env", "react"]
}
```

## npm Scripts

Hinzufügen zweier Scripts zu `package.json`:

```json
"scripts": {
  "build": "parcel build src/index.html",
  "start": "parcel src/index.html"
},
```

## HTML-Einstiegspunkt

Wir erstellen `src/index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React starter app</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="index.js"></script>
  </body>
</html>
```

## Rendern einer App-Komponente

Wir erstelen `src/index.js`:

```js
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <div>Hello World!</div>;
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
```

## Ausführen

Wir führen `npm start` für einen Entwicklungsserver oder `npm run build` für einen Build aus.


# React Fortgeschritten

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

- weitere Hooks
  - context Hook
  - reducer Hook und State Management mit Reducern
  - effect Hook im Detail
  - externe Hooks und eigene Hooks
- Styling-Libraries
- Formular-Libraries
- Routing und Prerendering
- Performanceoptimierung
- Testen von React-Komponenten
- App-Entwicklung mit React
- Refs, HOCs
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

# Context

## Context

Möglichkeit, Werte aus einer Komponente direkt allen weiter unten im Dokumentenbaum liegenden Komponenten zur Verfügung zu stellen - ohne diese über jede Ebene übergeben zu müssen

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

## Context - Beispiel

Der _Provider_ stellt Werte allen Unterkomponenten zur Verfügung

```jsx
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
```

## Context - Beispiel

Verwendung des _Context Hooks_, um Werte eines bestimmten Contexts abzufragen:

```jsx
const TodoStats = () => {
  const context = useContext(TodosContext);
  return <div>There are {context.todos.length} todos</div>;
};
```

# State Management mit Reducern

<!-- NOTE: other sections link to this section - take care when reordering -->

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

Basierend auf dieser Action wird ein aktueller _State_ mittels einer _Reducer_-Funktion in einen abgeleiteten neuen _State_ übergeführt.

## State Management mit Actions und Reducern

Ein _Reducer_ ist eine Funktion.

Der Reducer erhält den alten State und eine Action, die eine Änderung am State beschreibt.

Der Reducer gibt den neuen State zurück. Ein Reducer **ändert das alte State-Objekt nicht ab**, sondern erstellt ein neues (Reducer sind reine Funktionen)

## Reducer Diagramm

<img src="assets/redux-flow.svg" type="text/svg" style="width: 100%">

## Beispiel: Todos State Management

Manuelle Verwendung eines Reducers:

```js
const state1 = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'taxes', completed: true },
];
const actionA = { type: 'addTodo', payload: 'gardening' };
const state2 = todosReducer(state1, actionA);
const actionB = { type: 'deleteTodo', payload: 1 };
const state3 = todosReducer(state2, actionB);
console.log(state3);
/* [{ id: 2, title: 'taxes', completed: true },
    { id: 3, title: 'gardening', completed: false },] */
```

## Beispiel: Todos State Management

- Actions werden von JavaScript Objekten repräsentiert
- Actions haben immer eine _type_-Property
- Actions haben oft auch eine _payload_-Property

```json
{
  "type": "addTodo",
  "payload": "learn React"
}
```

```json
{
  "type": "deleteTodo",
  "payload": 1
}
```

## Beispiel: Todos State Management

```js
const todosReducer = (oldState, action) => {
  switch (action.type) {
    case 'addTodo':
      return [
        ...oldState,
        {
          title: action.title,
          completed: false,
          id: generateId(), // dummy function
        },
      ];
    case 'deleteTodo':
      return oldState.filter(todo => todo.id !== action.id);
    default:
      throw new Error('unknown action type');
  }
};
```

## Beispiel: Todos State Management

Verwendung mit TypeScript:

```ts
type TodosState = Array<Todo>;

type TodosAction =
  | { type: 'addTodo'; payload: string }
  | { type: 'deleteTodo'; payload: number };

const todosReducer = (
  state: TodosState,
  action: TodosAction
): TodosState => {
  // ...
};
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
        onClick={() => dispatch({ type: 'deleteAll' })}>
        delete all todos
      </button>
    </div>
  );
};
```

# Effect Hook

## Effect Hook

kann verwendet werden, um bestimmte Aktionen zu setzen, wenn eine Komponente neu eingebunden wurde oder wenn ihre Props / State sich geändert haben

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

<https://github.com/tannerlinsley/react-query>

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
  const todoCtrl = useTodos();
  return (
    <div>
      <h1>Todo</h1>
      <TodoList
        todos={todoCtrl.todos}
        isLoading={todoCtrl.isLoading}
        onReload={todoCtrl.reload}
        onToggle={todoCtrl.toggleTodo}
        onDelete={todoCtrl.deleteTodo}
      />
      <AddTodo onAdd={todoCtrl.addTodo} />
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

## Eigene Hooks - useAuth

Beispiele für Hooks, die Authentifizierung behandeln:

- <https://usehooks.com/useAuth/>
- <https://medium.com/hackernoon/learn-react-hooks-by-building-an-auth-based-to-do-app-c2d143928b0b>

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

# Styling Tools

## Styling Tools

Tools für externe Stylesheets:

- Paket _classnames_
- CSS-Module
- SCSS

CSS-in-JS libraries:

- styled-components
- JSS
- radium

## classnames

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

Bei create-react-app sind CSS-Module vorkonfiguriert; Diese erlauben das Verwenden von CSS-Klassennamen, die garantiert über CSS-Dateien hinweg eindeutig sind.

```js
import styles from './TodoItem.module.css';

<div className={styles.todoItem}>...</div>;

<div className={`${styles.todoItem} ${styles.completed}`}>
  ...
</div>;
```

## SCSS

SCSS in einem create-react-app Projekt einbinden:

```bash
npm install node-sass
```

Verwendung:

```js
import './TodoItem.scss';
```

## CSS-in-JS

**CSS-in-JS**: JavaScript wird verwendet, um Stylesheets zu erzeugen und anzufügen

Libraries:

- styled-components
- JSS
- radium
- emotion

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

dynamische Stile via props:

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

# Formular-Libraries

## Formular-Libraries

Beispiele:

- formik (basiert auf React-Komponenten)
- react-hook-form (basiert auf einem React Hook)

Funktionalität:

- **Validierung**
- Vereinfachung des Submit-Handlers
- Verwalten von Formulardaten

## react-hook-form

_react-hook-form_ behält Inputdaten nicht im React State

Vorteile: schneller, einfacher

Nachteile: weicht von üblichen React-Konzepten ab

## react-hook-form

```js
import { useForm } from 'react-hook-form';

const NewsletterRegistration = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form
      onSubmit={handleSubmit((values) => {
        console.log(values);
      })}
    >
      <input
        type="email"
        name="email"
        ref={register({
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email',
          },
        })}
      />
      <button disabled={errors}>subscribe</button>
      {errors.email && errors.email.message}
    </form>
  );
};
```

## formik

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

## Setup

npm-Pakete:

- `react-router-dom`
- (`@types/react-router-dom`)

## Setup

Die ganze Anwendung wird in ein `BrowserRouter`-Element eingebettet:

```js
// index.js

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
```

## Grundlegende Router-Komponenten

- `<Route>` - rendert ihre Inhalte, wenn sie aktiv ist
- `<Switch>` - Container für `<Route>`-Elemente
- `<Link>` / `<NavLink>` - werden anstatt von `<a>`-Elementen verwendet

## Einfaches Beispiel

```js
const App = () => {
  return (
    <div>
      <NavLink to="/slideshow">slideshow</NavLink>|
      <NavLink to="/counter">counter</NavLink>
      <Switch>
        <Route path="/slideshow">
          <Slideshow />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
      </Switch>
    </div>
  );
};
```

(Syntax von React Router 5.1)

## Routenparameter

```jsx
<Route path="/todos/:todoId">
  <TodoDetailView />
</Route>
```

```jsx
import { useParams } from 'react-router-dom';

const TodoDetailView = () => {
  const routeParams = useParams();
  return (
    <div>
      Details of todo: {routeParams.todoId}
      <div>...</div>
    </div>
  );
};
```

## Styling von Links

Übergeben eines Klassennamens, der auf aktive Links angewendet wird:

```xml
<NavLink to="/" activeClassName="active-link">Home</NavLink>
<NavLink to="/add" activeClassName="active-link">Add</NavLink>
```

## Navigation aus React

Möglichkeiten:

- Rendern einer `<Redirect>`-Komponente
- Verwendung des history Hooks

## Navigation aus React

```jsx
<Route path="/member-area">
  {username ? <MemberArea /> : <Redirect to="/login" />}
</Route>
```

## Navigation aus React

```jsx
import { useHistory } from 'react-router-dom';

const AddTodoView = () => {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    // ...
    // go back to home view
    history.push('/');
  };
  return <form onSubmit={handleSubmit}>...</form>;
};
```

# Lazy-Loading von Komponenten

## Lazy-Loading von Komponenten

um Bundle-Größen von React-Apps zu reduzieren: Komponenten erst importieren, wenn sie benötigt werden

häufige Verwendung: importieren von einer Route erst, wenn sie aufgerufen wird

## Lazy-Loading von Komponenten

Imports in JavaScript:

- `import` als Statement: synchroner Import bevor der Rest der Datei ausgeführt wird (in webpack: automatisches Integrieren in das Bundle)
- `import` als Funktion: asynchroner Import, wenn benötigt

## Lazy-Loading von Komponenten

React-Imports für das Lazy-Loading:

- `lazy`-Funktion
- `Suspense`-Komponente

## Lazy-Loading von Komponenten

```jsx
import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </Suspense>
);
```

<small>
  Quelle: <a
    href="https://reactjs.org/docs/code-splitting.html#route-based-code-splitting"
  >
    Route-based code splitting on reactjs.org
  </a>
</small>

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
- `npm run start` (oder `npm start`): ausführen des Produktionsservers
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

Üblicher Prozess zum Laden von Daten in einer React-Anwendung:

- React-Anwendung wird zum Client gesendet
- React-Anwendung wird zunächst ohne Daten gerendert
- Client fragt vom Server Daten an
- Daten werden zum Client gesendet

Prozess mit next.js:

- Daten werden am Server geladen
- Anwendung wird am Server gerendert
- Vorgerenderte Anwendung und zugehörige Daten um sie dynamisch zu machen werden zum Client gesendet

## Anbindung von Datenquellen

Abfragen von Daten zum Rendern einer Seite:

- Abfrage für statische Daten (während des Builds) mittels `getStaticProps`
- Abfrage zum server-seitigen Rendering mittels `getServerSideProps`

Um `fetch` in node.js zu verwenden, können wir das npm-Paket `isomorphic-fetch` verwenden.

## Anbindung von Datenquellen

```js
// pages/pokemon.js
export default ({ pokemon }) => {
  return (
    <ul>
      {pokemon.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const pokemon = (await res.json()).results;
  return { props: { pokemon: pokemon } };
};
```

## Static Site Generator

Standardmäßig läuft _next.js_ auf einem node Server und rendert Inhalte dynamisch

Für das statische Rendern siehe:

<https://nextjs.org/learn/excel/static-html-export>

## Resourcen

Die next.js website hat sehr gute Materialien: <https://nextjs.org>

# Performance<wbr/>optimierung

## Performanceoptimierung

Themen:

- Visualisierung von Updates in den React Devtools
- Messen von Render-Zeiten in den React Devtools
- Memoisation von Komponenten basierend auf Props
- Memoisation aufwändiger Berechnungen für das Rendering
- _Virtual DOM_ und die _key_-Property

## Memoisation

Memoisation = Technik, um Funktionsaufrufe zu optimieren: Bisherige Resultate werden gecached und müssen nicht neu berechnet werden

## Performanceoptimierung

was React schon für uns erledigt:

- Hooks (state, reducer, context) lösen _kein_ Re-Rendering aus, wenn sich deren Wert nicht geändert hat

was wir beitragen können:

- Memoisation von Komponentenrenderings basierend auf deren Props
- Memoisation aufwändiger Berechnungen
- Bereitstellen eines _key_-Props für wiederholte Elemente

# React Devtools und Performance

## React Devtools und Performance

Funktionalität der Devtools:

- hervorheben von Komponenten, wenn diese neu gerendert werden
- Profiler, der das Aufzeichnen und Analysieren einer Session erlaubt

## React Devtools und Performance

Hervorheben von Komponenten, wenn diese neu gerendert werden:

In den Einstellungen der React Devtools: wähle _Highlight updates when components render._

Komponenten erhalten beim Rendering einen färbigen Rahmen (Farbe ändert sich abhängig von der Reder-Frequenz)

## React Devtools und Performance

Auzeichnen und Analysieren einer Session:

In dem "Profiler"-Tab der Browser Tools:

- Klicke auf den Aufnahmebutton
- Interagiere mit der React-Anwendung (jede User-Aktion wird als ein "_Commit_" aufgezeichnet)
- Klicke auf den Aufnahmebutton zum Stoppen

## React Devtools und Performance

Begutachten der Profiling-Daten:

Jede User-Aktion (z.B. Klick, Texteingabe) wird als ein sogenannter _Commit_ aufgezeichnet

Commits werden im rechten oberen Eck angezeigt

Details werden durch Anklicken sichtbar

## React Devtools und Performance

Zahlen in einem Commit-Detail:

```
TodoApp (3ms of 109ms)
```

bedeutet:

- Das Rendering der ganzen Anwendung dauerte 109 Millisekunden (Bemerkung: läuft bei einem Production-Build und ohne Devtools schneller)
- Die meiste Zeit (106 Millisekunden) wurde mit dem Rendering von Unterkomponenten verbracht
- Die Inhalte, die nur zu _TodoApp_ gehören, dauerten 3 ms

## React Devtools und Performance

Farben in einem Commit-Detail:

Farbskala von _grün_ bis _gelb_ zeigt an, wie viel Zeit für einzelne Komponenten aufgewendet wurde - verglichen mit Geschwisterkomponenten

Grau gestreifte Komponenten wurden nicht neu gerendert

# Vermeiden unnötiger Rerenderings

## Vermeiden unnötiger Rerenderings

Im Allgemeinen muss eine Komponente nur neu gerendert werden, wenn sich entweder props oder state tatsächlich ändern

## Vermeiden unnötiger Rerenderings

in Funktionskomponenten gilt:

- Ein Setzen eines geänderten States bewirkt ein neues Rendering
- Ein erneutes Setzen des gleichen States bewirkt kein neues Rendering
- Ein neues Rendering einer Komponente bewirkt üblicherweise das neue Rendering _aller Unterkomponenten_

## Vermeiden unnötiger Rerenderings

Demo: Komponente rendert sich nur, wenn ihr State sich ändert

```jsx
function Coin() {
  const [coin, setCoin] = useState('heads');
  const throwCoin = () => {
    setCoin(Math.random() > 0.5 ? 'heads' : 'tails');
  };
  return (
    <div>
      {coin}
      <button onClick={throwCoin}>throw</button>
      <div>last rendering: {new Date().toISOString()}</div>
    </div>
  );
}
```

## Vermeiden unnötiger Rerenderings

Das Rerendering einer Komponente löst üblicherweise das Rerendering _aller Unterkomponenten_ aus

\- dies kann optimiert werden!

## Vermeiden unnötiger Rerenderings

Wenn nur jene Unterkomponenten neu gerendert werden sollen, deren props sich geändert haben:

Verwenden von Reacts `memo`-Funktion und des callback Hooks

## Vermeiden unnötiger Rerenderings

Die `memo`-Funktion aus React:

```jsx
import React, { memo } from 'react';

function Rating(props) {
  // ...
}

export default memo(Rating);
```

## Vermeiden unnötiger Rerenderings

Die `Rating`-Komponente wird nicht neu gerendert, wenn ihre Props die gleichen sind wie zuvor:

```jsx
<Rating stars={4} />
<Rating stars={4} onChange={setRating1} />
```

## Vermeiden unnötiger Rerenderings

Wie ist es mit diesem Event-Listener?

```jsx
<Rating
  stars={4}
  onChange={newRating => setRating1(newRating)}
/>
```

Die Pfeilfunktion wäre bei jedem angeforderten Rendering ein anderes Objekt

## Vermeiden unnötiger Rerenderings

Ermöglichen von Memoisation in komplexeren Event Handlern / Callbacks:

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = newTitle =>
    setTodos([
      ...todos,
      { title: newTitle, completed: false },
    ]);
  // useCallback will return the same reference
  // - unless an entry in the passed-in array changes
  const memoizedHandleAddTodo = useCallback(handleAddTodo, [
    todos,
  ]);
  return (
    <div>
      <TodoList todos={todos} />
      <AddTodo onAdd={memoizedHandleAddTodo} />
    </div>
  );
}
```

# Memoisation aufwändiger Berechnungen

## Memoisation aufwändiger Berechnungen

Manche Renderings beruhen auf aufwändigen Berechnungen, die durch Memoisation optimiert werden können

## Memoisation aufwändiger Berechnungen

Beispiel ohne Memoisation:

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewtitle] = useState('');
  const numActiveTodos = todos.filter(
    todo => !todo.completed
  ).length;

  return (
    <div>
      ...
      <div>there are {numActiveTodos} active todos</div>
    </div>
  );
};
```

## Memoisation aufwändiger Berechnungen

mit Memoisation:

```js
const numActiveTodos = useMemo(
  // function to recompute value
  () => todos.filter(todo => !todo.completed).length,
  // array of dependencies
  [todos]
);
```

Die Berechnung wird nur dann erneut ausgeführt, wenn sich eine Abhängigkeit in dem Array ändert

# Virtuelles DOM

## Virtuelles DOM

Beim erneuten Rendern einer React-Komponente: Resultate werden nicht direkt and den Browser übergeben.

Stattdessen: Ein _virtuelles DOM_ wird erstellt und mit dem vorherigen virtuellen DOM verglichen. Nur die Unterschiede werden zur Verarbeitung an den Browser übergeben.

## Virtuelles DOM und Wiederholen von Elementen

Üblicherweise ist React sehr effizient dabei, Änderungen herauszufinden - doch es benötigt Hilfe, wenn Elemente in einem Array Wiederholt werden

Faustregel: Wenn wir in unserem JSX-Template `.map` verwenden, sollten innere Elemente eine eindeutige key-Property haben, um React zu unterstützen

## Virtuelles DOM

siehe auch: <https://reactjs.org/docs/reconciliation.html>

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

- `react-testing-library` (Unterprojekt von _Testing Library_)
- `react-test-renderer` (vom React Team entwickelt)
- `Enzyme`

## Snapshot Tests

Komponenten werden gerendert und mit früheren Versionen (Snapshots) verglichen

# React-Testing-Library

## Testing-Library

**Testing-Library**: Projekt zum Testen von UI Komponenten (u.a. React)

Fokus der Tests liegt auf Aspekten, die für den Endnutzer relevant sind (nicht so sehr auf der genauen DOM-Struktur)

## React-Testing-Library - Beispiel

```js
import { render } from '@testing-library/react';

it('renders learn react link', () => {
  const instance = render(<App />);
  const linkElement = instance.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

## Elemente abfragen

- `.getByText` (wirft Exception, wenn es keinen eindeutigen Match gibt)
- `.getAllByText` (wirft Exception, wenn es keine Matches gibt)
- `.getByTitle`
- `.getByLabelText`
- ... (siehe <https://testing-library.com/docs/dom-testing-library/api-queries>)

## Assertions

extra Assertions:

- `.toHaveTextContent()`
- `.toBeInTheDocument()`
- ... siehe <https://github.com/testing-library/jest-dom>

## Testen des Renderings

Rating-Komponente:

```jsx
import { render } from '@testing-library/react';

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
import { fireEvent } from 'react-testing-library';

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

## Testen von asynchronem Code

`ChuckNorrisJoke`-Komponente, die ein API abfragt:

```js
const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then(res => setJoke(res.data.value));
  }, []);
  if (!joke) {
    return <div>loading...</div>;
  }
  return <h1 title="joke">{joke}</h1>;
};
```

## Testen von asynchronem Code

Testen mit echtem API:

```js
import { waitForElement } from '@testing-library/react';

it('loads Chuck Norris joke from API', async () => {
  const instance = render(<ChuckNorrisJoke />);
  const jokeElement = await waitForElement(() =>
    instance.getByTitle('joke')
  );
  // joke should have at least 3 characters
  expect(jokeElement).toHaveTextContent(/.../);
});
```

`waitForElement` versucht wiederholt, ein Element abzufragen, bis es existiert

## Mocking von Objekten

Mocking von API-Abrufen:

ersetzen von `axios` durch einen Mock:

```js
import axios from 'axios';
jest.mock('axios');
```

Mocking von `axios.get` als erfolgreiche Promise:

```js
axios.get.mockResolvedValueOnce({
  data: {
    value: 'Chuck Norris counted to infinity. Twice.',
  },
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

## Manuelle Einrichtung

diese Schritte sind bei der Verwendung von `create-react-app` schon eingerichtet

Aktivieren erweiterter Assertions (siehe <https://github.com/testing-library/jest-dom>):

```js
import '@testing-library/jest-dom/extend-expect';
```

Aufräumen nach einem Test (Unmounting):

```js
import { cleanup } from '@testing-library/react';

afterEach(cleanup);
```

## Ressource

<https://react-testing-examples.com/>

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

<https://reactjs.org/docs/test-renderer.html>

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

<https://devhints.io/enzyme>

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
  expect(instance.baseElement).toMatchSnapshot();
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

<https://airbnb.io/react-dates/>

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

<https://developers.google.com/web/fundamentals/app-install-banners/>

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
- bei der URL von _http&#x3A;//_ auf _https&#x3A;//_ wechseln
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

## Plattformspezifischer Code

Möglichkeit 1 (einfache Fälle):

```js
import { Platform } from 'react-native';
if (Platform.OS === 'web') {
  // 'web' / 'ios' / 'android'
}
```

Möglichkeit 2 (Plattform-spezifische Komponenten):

- `AddTodo.web.js`
- `AddTodo.ios.js`
- `AddTodo.android.js`

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

Reacts `memo` ist eine HOC

Es erhält eine Komponente und gibt eine memoisierte Komponente zurück:

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

Die entstehende HOC erhält eine normale Komponente und gibt eine Komponente zurück, die mit dem Redux Store verbunden ist:

```js
const RatingContainer = connector(Rating);
```

# Dateistruktur

## Dateistruktur

<https://reactjs.org/docs/faq-structure.html>

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
npm install --save-dev parcel-bundler @babel/preset-react @babel/preset-env
```

## Konfiguration von Babel

via `babel.config.json`:

```json
{
  "presets": ["@babel/preset-env", "@babel/react"]
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

Wir erstellen `src/index.js`:

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

Wir führen `npm run start` für einen Entwicklungsserver oder `npm run build` für einen Build aus.

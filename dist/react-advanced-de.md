# React Fortgeschritten

## Themen

- Routing
- Context
- effect Hook im Detail
- externe Hooks und eigene Hooks
- reducer Hook und State Management mit Reducern
- Styling-Libraries
- Formular-Libraries
- App-Entwicklung mit React
- Refs
- HOCs
- Manuelles Setup

# React Router

## Client-seitiges Routing

**client-seitiges Routing**: Navigieren zwischen verschiedenen Ansichten, ohne die React-Anwendung zu verlassen

## Client-seitiges Routing

Optionen:

hash-basiertes Client-seitiges Routing, z.B.:

- `example.com/#/home`
- `example.com/#/shop/cart`

Client-seitiges Routing basierend auf dem _History API_, z.B.:

- `example.com/home`
- `example.com/shop/cart`

Für die zweite Option muss der Server zusätzlich konfiguriert werden

## Versionen und Installation

React Router 6 Beta ist seit Juni 2020 verfügbar, aber die Entwicklung läuft seither langsam

Pakete für React Router 6 (beinhalten Unterstützung für TypeScript):

- _react-router-dom@next_
- _history_

Pakete für React Router 5:

- _react-router-dom_
- _@types/react-router-dom_

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

## Grundlegende Router-Komponenten (v6)

- `<Route>` - rendert ihre Inhalte, wenn sie aktiv ist
- `<Routes>` - Container für `<Route>`-Elemente
- `<Link>` / `<NavLink>` - werden anstatt von `<a>`-Elementen verwendet

## Einfaches Beispiel (v6)

```js
const App = () => {
  return (
    <div>
      <NavLink to="/slideshow">slideshow</NavLink>{' '}
      <NavLink to="/counter">counter</NavLink>
      <Routes>
        <Route path="/slideshow" element={<Slideshow />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
};
```

## Fortgeschrittenes Routing (v6)

```jsx
const App = () => {
  return (
    <Routes>
      <Route path="/posts" element={<PostPage />}>
        <Route path="/:postId" element={<Post />} />
      </Route>
      <Route path="/shop" element={<ShopPage />}>
        <Route path="/" element={<ShopIndex />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};
```

## Einfaches Beispiel (v5)

in v5 verwendet man anstatt von `<Routes>` die `<Switch>`-Komponente

```js
const App = () => {
  return (
    <div>
      <NavLink to="/slideshow">slideshow</NavLink>{' '}
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

in v6:

```jsx
const navigate = useNavigate();
// ...
navigate('/');
```

in v5:

```js
const history = useHistory();
// ...
history.push('/');
```

## Navigation aus React

Beispiel:

```jsx
const AddTodoView = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // ...
    navigate('/');
  };
  // ...
};
```

# Context

## Context

Möglichkeit, Werte aus einer Komponente direkt allen weiter unten im Dokumentenbaum liegenden Komponenten zur Verfügung zu stellen - ohne diese über jede Ebene übergeben zu müssen

Das Interface von Context kann sowohl Daten (aus dem State) als auch Eventhandler übergeben.

## Context - Beispiel

```js
// TodosContext.js
import { createContext } from 'react';

const TodosContext = createContext();

export default TodosContext;
```

## Context - Beispiel

mit TypeScript:

```ts
// TodosContext.ts
import { createContext } from 'react';

type TodosContextType = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
};

const TodosContext = createContext({} as TodosContextType);

export default TodosContext;
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
  }}
>
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

# Effect Hook im Detail

## Verwendung des Effect Hooks

- Ausösen von API-Anfragen
- Laden von / Speichern in _localStorage_ / _indexeddb_
- explizite Änderungen am DOM (zusammen mit _refs_)
- Starten von Timern
- ...

## Beispiel: DocumentTitle-Komponente

Wir erstellen eine Komponente, die den Dokumenttitel dynamisch setzen kann:

```xml
<DocumentTitle value="my custom title" />
```

Diese Komponente kann irgendwo in der React-Anwendung vorkommen.

## Beispiel: DocumentTitle-Komponente

```jsx
const DocumentTitle = (props) => {
  const updateTitle = () => {
    document.title = props.value;
  };
  useEffect(updateTitle, [props.value]);
  return null;
};
```

## Cleanup-Funktion

Ein Effect kann eine "Aufräumfunktion" zurückgeben

Diese Funktion wird vor der nächsten Ausführung des Effekts bzw vor dem Unmounting der Komponente ausgeführt

Beispiel für Verwendung: Abbrechen einer alten API-Suchanfrage, wenn sich der Suchbegriff geändert hat

## Cleanup-Funktion

Beispiel: Hook, der eine hackernews-API-Abfrage durchführt

```jsx
const useHackernewsQuery = (query) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let isLatestRequest = true;
    fetch(
      'https://hn.algolia.com/api/v1/search?query=' + query
    )
      .then((res) => res.json())
      .then((data) => {
        if (isLatestRequest) {
          setData(data);
        }
      });
    return () => {
      isLatestRequest = false;
    };
  }, [query]);
  return articles;
};
```

## Cleanup-Funktion

Beispiel: Benutzer wird nach 10 Sekunden Inaktivität automatisch ausgeloggt

```jsx
const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(
    new Date()
  );
  // restart the logout timer on user interaction
  useEffect(() => {
    const logout = () => setLoggedIn(false);
    const timeoutId = setTimeout(logout, 10000);
    return () => clearTimeout(timeoutId);
  }, [lastInteraction]);
  return (
    <button onClick={() => setLastInteraction(new Date())}>
      {loggedIn
        ? 'click to stay logged in'
        : 'logged out automatically'}
    </button>
  );
};
```

## Cleanup-Funktion

Wenn eine Effect-Funktion etwas anderes als `undefined` zurückgibt, wird sie als Cleanup-Funktion behandelt

Deshalb können Async-Funktionen nicht direkt als Effect-Funktionen verwendet werden (sie geben Promises zurück)

## Effect nach jedem Rendering

Wenn kein zweiter Parameter übergeben wird, wird die Funktion nach jedem Rendering ausgeführt.

```jsx
const RenderLogger = () => {
  useEffect(() => {
    console.log('logger was rendered');
  });
  return <div>Render logger</div>;
};
```

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

## Regeln für Hooks

Hooks in einer Komponentendefinition müssen bei jedem Rendering in der gleichen Reihenfolge aufgerufen werden - React unterscheidet z.B. mehrere `useState`-Aufrufe anhand ihrer Reihenfolge

Die gleichen Regeln wie in einer Komponente gelten auch für Hook-Aufrufe in einem selbst definierten Hook

[Rules of Hooks auf reactjs.org](https://reactjs.org/docs/hooks-rules.html)

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
  const [id, setId] = useState(0);
  const { status, data } = useQuery(`todo_${id}`, () =>
    fetchTodo(id)
  );
  return (
    <div>
      {status === 'success' ? data.title : status}
      <button onClick={() => setId(id + 1)}>next</button>
    </div>
  );
};

const fetchTodo = (id) =>
  fetch(
    `https://jsonplaceholder.typicode.com/${id}`
  ).then((response) => response.json());
```

# Eigene Hooks

## Eigene Hooks

können verwendet werden, um bestimmte Aspekte aus der Komponentendefinition zu extrahieren

werden als Funktionen definiert, die wiederum auf bestehende Hooks, wie `useState` oder `useEffect` zurückgreifen

## Eigene Hooks - useExchangeRate

Hook, der den Wechselkurs zwischen ausgewählten Währungen bereitstellt (siehe früheres Beispiel):

```js
function useExchangeRate(from, to) {
  const [rate, setRate] = useState(null);
  const [status, setStatus] = useState('loading');
  async function loadExchangeRateAsync() {
    try {
      const newRate = await fetchExchangeRate();
      setRate(newRate);
      setStatus('success');
    } catch {
      setRate(null);
      setStatus('error');
    }
  }
  useEffect(() => {
    loadExchangeRateAsync();
  }, [from, to]);
  return { status, rate };
}
```

## Eigene Hooks - useTodos

Beispiel: `useTodos` - kann verwendet werden, um die Datenverwaltung von der Komponentendefinition loszulösen (Trennung von _model_ und _view_)

```jsx
function TodoApp() {
  const {
    todos,
    toggleTodo,
    deleteTodo,
    addTodo,
  } = useTodos();
  return (
    <div>
      <h1>Todos</h1>
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <AddTodo onAdd={addTodo} />
    </div>
  );
}
```

## Eigene Hooks - useTodos

Definition von `useTodos`:

```jsx
function useTodos() {
  const [todos, setTodos] = useState([]);
  function addTodo(title) {
    const id = Math.max(0, ...todos.map((t) => t.id + 1));
    setTodos([
      ...todos,
      { id: id, title: title, completed: false },
    ]);
  }
  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }
  function toggleTodo(id) {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }
  return { todos, addTodo, deleteTodo, toggleTodo };
}
```

## Eigene Hooks - useTodos

`useTodos` mit API-Abfrage:

```js
function useTodos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function reload() {
    setIsLoading(true);
    fetchTodos().then((todos) => {
      setTodos(todos);
      setIsLoading(false);
    });
  }
  useEffect(reload, []);
  // ... (addTodo, deleteTodo, toggleTodo)
  return {
    todos,
    isLoading,
    reload,
    // ... (addTodo, deleteTodo, toggleTodo)
  };
}
```

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
const useDate = (interval) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, interval);
  }, []);
  return date;
};
```

## Eigene Hooks - Übung

Erstellen eines `useWeather`-Hooks zum Abfragen von Wetterdaten - zusammen mit einem zugehörigen Context, der die Daten Anwendungsweit cached

```js
const { weather, status, reload } = useWeather('vienna', {
  autoReloadInterval: 60,
});
```

Für die Datenquelle siehe nächste Slide

## Eigene Hooks - Übung

OpenWeatherMap-API

Beispiel-URL: <http://api.openweathermap.org/data/2.5/weather?appid=66445a4269dd911a5bbe214fadb768d6&units=metric&q=vienna>

(bitte diese appid / API-Key nur für einfache Übungen verwenden)

Einträge in den API-Daten:

- `.weather[0].main` (z.B. _Rain_)
- `.main.temp` (z.B. 24.5)
- `.wind.speed` (z.B. 2.5)
- `.name` (z.B. _Vienna_)

# State Management mit Reducern

<!-- NOTE: other sections link to this section - take care when reordering -->

## State Management

In komplexeren Anwendungen oder Komponenten macht es Sinn, den Anwendungszustand (model) von der Ansicht (view) zu trennen.

Oft wird der gesamte Anwendungszustand durch ein Datenmodell repräsentiert. Jede Änderung am Anwendungszustand läuft über das Datenmodell.

## State Management Tools

- reducer Hook (in React beinhaltet, sehr ähnlich zu Redux)
- Redux (basiert auf Reducern, oft mit React verwendet)
- MobX (oft mit React verwendet, einfacher als Reducer)
- recoil (basiert auf React Hooks, 2020 von facebook veröffentlicht)
- ngrx (mit Angular verwendet)
- vuex (mit Vue.js verwendet)

## State Management Tools

<figure>
  <img src="assets/redux-devtools-airbnb.png" style="width: 100%" alt="Redux devtools showing the state of the airbnb website">
  <figcaption>Redux Devtools, die den komplexen State der airbnb-Website anzeigen</figcaption>
</figure>

## State Management mit Actions

Beim Reducer Hook, Redux, ngrx und vuex wird jede State-Änderung durch eine _Action_ ausgelöst, die durch ein JavaScript-Objekt repräsentiert wird

<small>Anmerkung: vuex verwendet den Begriff _Mutation_</small>

## State Management mit Actions

In Redux / Reducer Hook:

- Actions werden durch JavaScript-Objekte repräsentiert
- Actions haben immer eine _type_-Property
- Actions haben meist auch eine _payload_-Property

## State Management mit Actions

Beispiele für Actions:

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

```json
{
  "type": "deleteCompletedTodos"
}
```

## State Management mit Reducern

Konzept von _Redux_ und Reacts _Reducer Hook_:

- eine Stateänderung erfolgt über eine Reducer-Funktion
- die Reducer-Funktion erhält den aktuellen State und eine Action
- die Reducer-Funktion gibt den neuen State zurück (ohne den alten State zu verändern)

## Reducer Diagramm

<img src="assets/redux-flow.svg" />

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

Implementierung eines Reducers:

```js
const todosReducer = (oldState, action) => {
  switch (action.type) {
    case 'addTodo':
      return [
        ...oldState,
        {
          title: action.payload,
          completed: false,
          id: Math.max(0, ...oldState.map((t) => t.id)) + 1,
        },
      ];
    case 'deleteTodo':
      return oldState.filter(
        (todo) => todo.id !== action.payload
      );
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

## Reducer kombinieren

Reducer können einfach kombiniert / aufgesplittet werden um komplexen / verschachtelten State zu verwalten

Beispiel für State:

```json
{
  "todoData": {
    "status": "loading",
    "todos": []
  },
  "uiData": {
    "newTitle": "re",
    "filterText": ""
  }
}
```

## Reducer kombinieren

Reducer-Implementierung:

```js
const rootReducer = (rootState, action) => ({
  todoData: todoDataReducer(rootState.todoData, action),
  uiData: uiDataReducer(rootState.uiData, action),
});

const uiDataReducer = (uiData, action) => ({
  newTitle: newTitleReducer(uiData.newTitle, action),
  filterText: filterTextReducer(uiData.filterText, action),
});

const newTitleReducer = (newTitle, action) => {
  if (action.type === 'setNewTitle') {
    return action.payload;
  } else if (action.type === 'addTodo') {
    return '';
  } else {
    return newTitle;
  }
};
```

## Reducer kombinieren

Bei kombinierten Reducern verwaltet ein einzelner Reducer nur einen Teil des States; aber jeder Reducer erhält jede Action und kann darauf reagieren

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
        onClick={() => dispatch({ type: 'deleteAll' })}
      >
        delete all todos
      </button>
    </div>
  );
};
```

## Reducer Hook

Die mächtigen _Redux devtools_ können mit dem Reducer Hook verwendet werden: <https://github.com/troch/reinspect> (benötigt etwas Konfiguration, manuelles Dispatchen von Actions ist nicht möglich)

# Immutability-Hilfslibraries

## Immutability-Hilfslibraries

direktes Arbeiten mit unveränderlichem State kann kompliziert sein

Hilfslibraries:

- _immer.js_ (commonly used with _Redux_)
- _immutable.js_

## immer.js

```js
import produce from 'immer';

const todos = [
  // ...
];
const newTodos = produce(todos, (todosDraft) => {
  todosDraft[0].completed = true;
  todosDraft.push({ title: 'study', completed: false });
});
```

# Styling Tools

## Styling Tools

Tools für externe Stylesheets:

- Paket _classnames_
- CSS-Module
- SCSS

CSS-in-JS libraries:

- emotion
- styled-components
- ...

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

Heutzutage wird es als _ok_ angesehen, Styling-Informationen in der gleichen Datei abzulegen, wie JavaScript / HTML

## CSS-in-JS

Zugänge:

- Erweiterung von Elementen-Properties (z.B. `css=...` in _Emotion_)
- Erstellen von React-Komponenten, die nur für das Styling zuständig sind (z.B. `PrimaryButton`)

## CSS-in-JS

Libraries:

- styled-components
- emotion
- ...

## styled-components

Library, die es ermöglicht, bestehende HTML-Elemente mit eigenen Stilen zu versehen

npm-Pakete: `styled-components`, `@types/styled-components`

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

dynamische Stile via props (TypeScript):

```tsx
import styled from 'styled-components';

const Button = styled.button<{ primary: boolean }>`
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

## Emotion

Emotion erweitert die jsx-Notation durch eine zusätzliche _css_-Property

Installation:

```bash
npm install @emotion/core
```

## Emotion

```jsx
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const Slideshow = (props) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
    `}
  >
    <button>prev</button>
    <img
      css={css`
        display: block;
      `}
      src="..."
      alt="..."
    />
    <button>next</button>
  </div>
);
```

# Formular-Libraries

## Formular-Libraries

Beispiele:

- react-hook-form (basiert auf einem React Hook)
- formik (basiert auf React-Komponenten)

Funktionalität:

- **Validierung**
- Verwalten von Formulardaten
- Vereinfachung des Submit-Handlers

## react-hook-form

_react-hook-form_ behält Inputdaten nicht im React State

Vorteile: schneller, einfacher

Nachteile: weicht von üblichen React-Konzepten ab (benutzt _refs_ anstatt _state_)

## react-hook-form

```js
import { useForm } from 'react-hook-form';

const NewsletterSignup = () => {
  const { register, errors, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input
        name="email"
        ref={register({
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      <button>sign up for newsletter</button>
      {errors.email ? <div>invalid email</div> : null}
    </form>
  );
};
```

Bemerkung: `register()` verwendet eine [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs), um auf das input-Element zuzugreifen

## react-hook-form: register

Die `register`-Funktion kann Parameter für die Validierung erhalten:

- `required`
- `min`, `max`
- `minLength`, `maxLength`
- `pattern`
- `validate`

## react-hook-form: errors

Das Objekt `errors` gibt Fehler für registrierte Inputs mit einer _name_-Property aus

```jsx
<input name="email" ref={register(/*...*/)}>
```

```jsx
errors.email ? <div>invalid email</div> : null;
```

## react-hook-form: handleSubmit

`handleSubmit` validiert Formulardaten und gibt diese an eine Funktion weiter, wenn sie gültig sind

```jsx
<form
  onSubmit={handleSubmit((data) => {
    console.log(data.email);
  })}
>
  ...
</form>
```

## react-hook-form: mode

```js
useForm({ mode: 'onSubmit' });
```

`mode`: wann soll ein Wert zum ersten Mal validiert werden?

- `onSubmit` (Standard)
- `onBlur` - wenn der Input den Fokus verliert oder bei Submit
- `onTouched` - wenn der Input den Fokus verliert (wechselt nicht zu `reValidateMode`) oder bei Submit
- `onChange` - wenn sich der Input ändert oder bei Submit
- `all` - wenn der Input sich ändert oder wenn er den Fokus verliert, ohne sich geändert zu haben

## react-hook-form: mode

`reValidateMode`: wenn das Form submittet wurde und ein Fehler auftrat, wann sollte der Wert erneut validiert werden?

- `onSubmit`
- `onBlur`
- `onChange` (Standard)

## react-hook-form: reset

```js
const { register, errors, handleSubmit, reset } = useForm();
// ...
reset();
```

## react-hook-form: Tests

Beim Testen im Zusammenhang mit _react-hook-form_ muss ein entsprechendes Setup erfolgen:

```bash
npm install mutationobserver-shim
```

```js
// setupTests.js
import 'mutationobserver-shim';
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

<!--
related sections in:
- react-advanced
- node-and-express-intermediate
-->

# Benutzer-Authentifizierung mit einem Identity Provider

## Identity Provider

Ein _Identity Provider_ kann die Identität eines Benutzers überprüfen (kann den Benutzer authentifizieren)

Beispiele:

> der aktuelle Endnutzer ist auf dieser Domain als Benutzer "foo" eingeloggt

> der aktuelle Endnutzer ist al Benutzer "x" bei Google / als Benutzer "y" bei Facebook authentifiziert

## Identity Provider

Mechanismus für den Benutzer:

Benutzer klickt auf _login_, wird zu einer Login-Seite weitergeleitet und nach erfolgreichem Login zur ursprünglichen Seite zurückgeleitet

im Hintergrund erhält der Benutzer ein _Identity Token_, einen kleinen Datensatz, der die Identität des Benutzers im Zusammenspiel mit dem Identity Provider belegen kann

## Identity Provider

Standards:

- Authentifizierung via _OpenID Connect_
- Authorisierung via _OAuth2_

## Auth0

**Auth0** (_auth-zero_) ist ein weit verbreiteter Identity Provider

unterstützt Authentifizierung mittels "interner" Acccounts oder externer Identity Provider (z.B. _Google_, _Facebook_, _Apple_, ...)

## Auth0: Registrierung und Einrichtung

- registriere dich für einen Auth0-Account unter <https://auth0.com>
- in der Sidebar, wähle "Applications"
- wähle die "default application" oder erstelle eine neue "Single Page Web Application"; der gewählte Name wird Benutzern bei der Authentifizierung angezeigt

<!--
registration details:
select region: EU / US / AU
select account type: personal / company
-->

## Auth0: Registrierung und Einrichtung

_Application Settings_:

- erlaubte Redirect-Ziele nach dem Login: _Allowed Callback URLs_
- erlaubte Redirect-Ziele nach dem Logout: _Allowed Logout URLs_
- um Authentifizierungstokens zu erneuern: _Allowed Web Origins_

für die lokale Entwicklung, setze alle drei Werte auf _http&#x3A;//localhost:3000_

## Auth0: Registrierung und Einrichtung

unter _Settings_:

jeder Auth0-Klient hat zumindest eine **domain** (z.B. _dev-xxxxxxxx.eu.auth0.com_)

jede App hat eine bestimmte **client ID** (z.B. _jA0EAwMCxamDRMfOGV5gyZPnyX1BBPOQ_)

## auth0-react

Library: [auth0-react](https://github.com/auth0/auth0-react/)

npm-Paket: _@auth0/auth0-react_

Einbinden eines Providers, der einen Context verwaltet:

```jsx
<Auth0Provider
  domain="YOUR_AUTH0_DOMAIN"
  clientId="YOUR_AUTH0_CLIENT_ID"
  redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>
```

(siehe nächste Slide für Implementierung in _next.js_)

## auth0-react

bei Verwendung von _next.js_:

```jsx
// pages/_app.js
export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="YOUR_AUTH0_DOMAIN"
      clientId="YOUR_AUTH0_CLIENT_ID"
      redirectUri="YOUR_URL"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
```

## auth0-react

```jsx
const auth = useAuth0();

if (auth.isLoading) {
  return <div>...</div>;
} else if (auth.error) {
  return <div>...</div>;
} else if (!auth.isAuthenticated) {
  return (
    <button onClick={auth.loginWithRedirect}>Log in</button>
  );
} else {
  return (
    <div>
      main content
      <button onClick={auth.logout}>log out</button>
    </div>
  );
}
```

## auth0-react

Einträge im Rückgabewert von `useAuth0`:

- `isLoading`
- `error`
- `isAuthenticated`
- `loginWithRedirect`
- `logout`
- `user` (`user.sub`, `user.email`, `user.username`, `user.name`, ...)

## auth0-react

Aufgabe: Erstelle eine React-Anwendung, bei nur authentifizierte Benutzer auf den Inhalt zugreifen können; Name / e-mail des Benutzers sollen wenn vorhanden angezeigt werden

## auth0-react

Authentifizierung kann mithilfe von _Access Tokens_ verifiziert werden (in diesem Fall sind dies keine _JWT_ Tokens)

weitere Funktionalität von `useAuth0`:

- `getAccessTokenSilently`
- `getAccessTokenWithPopup`

## auth0-react

Ausführen eines Requests mit dem Access Token:

```js
const makeRequestSilently = () => {
  auth.getAccessTokenSilently().then((token) => {
    console.log(`make API request with token ${token}`);
  });
};
```

## auth0-react

Verifizieren des Auth0-Tokens auf Seite des APIs:

```js
const auth0Domain = 'dev-xxxxxxxx.eu.auth0.com';

fetch(`https://${auth0Domain}/userinfo`, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => res.json())
  .then((userInfo) => {
    console.log(`authenticated as ${userInfo.sub}`);
  })
  .catch((error) => console.log('error'));
```

Bemerkung: das reine Senden der Information (z.B. Benutzer-ID) vom Client ist nicht sicher, da dies vom API nicht verifiziert werden kann

## Ressourcen

- <https://auth0.com/docs/quickstart/spa/react>
- <https://auth0.com/blog/complete-guide-to-react-user-authentication/>
- <https://auth0.com/docs/libraries/auth0-react>
- [API reference](https://auth0.github.io/auth0-react/)

<!--
examples of hooks that handle authentication:

- https://usehooks.com/useAuth/
- https://medium.com/hackernoon/learn-react-hooks-by-building-an-auth-based-to-do-app-c2d143928b0b
-->

# PWAs

Progressive Web Apps mit React

## PWAs

_Progressive Web Apps_: Möglichkeit, Anwendungen für Mobilgeräte und PCs mit HTML, CSS und JavaScript zu schreiben

## PWAs

_create-react-app_ kann Projekte mit PWA-Unterstützung erstellen:

```bash
npx create-react-app myapp --template cra-template-pwa
npx create-react-app myapp --template cra-template-pwa-typescript
```

_Codesandbox_ beinhaltet grundlegende Unterstützung für PWAs

## PWAs

PWA-Grundlagen in _create-react-app_-Projekten:

- Konfiguration in `public/manifest.json`
- PWA-Boilerplate in `src/serviceWorker.js`

## PWAs: Aktivierung

in `index.js` / `index.tsx`:

```js
serviceWorker.register();
```

## PWAs: Konfiguration

Via `public/manifest.json`

## PWAs: add to homescreen

## PWA: add to homescreen

Prozess in Chrome:

- warten, bis eine Installationsdialog angezeigt werden darf
- anzeigen eines Buttons o.ä., der die Installation anbietet
- beim Anklicken des Buttons via Chrome den Installationsdialog anzeigen

siehe auch: <https://developers.google.com/web/fundamentals/app-install-banners/>

## PWA: add to homescreen

TypeScript Implementierung:

```ts
const [canInstall, setCanInstall] = useState(false);
const installPromptEventRef = useRef<Event>();

const getInstallPermission = () => {
  window.addEventListener(
    'beforeinstallprompt',
    (ipEvent) => {
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
  }}
>
  install
</button>
```

## PWA: Deployment

- `npm run build`
- Hochladen des _build_-Ordners zu einem statischen Hosting-Service (z.B. <https://netlify.com/drop> oder <https://tiiny.host/>)

# React Native

## React Native

Mit React Native können React Anwendungen für iOS- und Android-Geräte erstellt werden

## Möglichkeiten zur Entwicklung

- **Expo**: einfache Option, schneller Einstieg
- **React Native CLI**: ermöglicht Integration nativer Module (Java / Objective-C)

## Expo Tools

- **Expo Snack**: online Editor
- **Expo CLI**: lokale Entwicklung
- **Expo App**: Emulator für live-Testen auf Android / iOS (erhältlich in App Stores)

## Expo Snack

<https://snack.expo.io>

Optionen:

- Web-Version ausführen
- Android / iOS online emulieren (begrenzte Kapazität)
- am lokalen Gerät ausführen (via Expo App)

## Expo CLI

Installation:

```bash
npm install -g expo-cli
```

Erstellen eines neuen Projekts:

```bash
expo init myproject
```

Ausführen eines Projektes (öffnet Dashboard auf _localhost:19002_):

```bash
npm run start
```

## Expo CLI

Ausfürhen auf einem Gerät:

- Auswählen von _tunnel_
- warten
- Scannen des QR Codes mit der Expo App

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
const TodoItem = ({ title, completed }) => (
  <View style={{ margin: 5, padding: 8 }}>
    <Text>{title}</Text>
  </View>
);
```

## Styling

Die style-Property kann auch ein Array von Objekten erhalten (Einträge, die _falsy_ sind, werden ignoriert)

```js
const TodoItem = ({ title, completed }) => (
  <View
    style={[
      { padding: 8, backgroundColor: 'lightcoral' },
      completed && { backgroundColor: 'lightgrey' },
    ]}
  >
    <Text>{title}</Text>
  </View>
);
```

## Styling

Erstellen von _stylesheets_, die mehrere gruppierte Stile definieren:

```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  todoItem: {
    padding: 8,
    backgroundColor: 'lightcoral',
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
    ]}
  >
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

# Refs zum Ablegen von Objektreferenzen

## Refs zum Ablegen von Objektreferenzen

In Funktionskomponenten können _Refs_ verwendet werden, um Werte / Objektreferenzen abzulegen, die sich mit der Zeit ändern, aber das Rendering einer Komponente nicht beeinflussen (sie gehören nicht in den State)

Beispiele dafür, was in Refs abgelegt wird:

- Timer IDs
- Request IDs
- WebSocket-Verbindungen
- ein PWA-Installationsdialog (siehe Abschnitt PWA)
- DOM-Elemente (siehe nächster Abschnitt "Ref Property zum Zugriff auf DOM-Elemente")

## Refs zum Ablegen von Objektreferenzen

Auf eine Ref kann mittels `useRef` zugegriffen werden

Objekte werden in der `.current`-Property der Ref abgelegt

## Refs zum Ablegen von Objektreferenzen

```js
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef();
  const start = () => {
    setTime(0);
    intervalRef.current = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
  };
  const stop = () => {
    clearInterval(intervalRef.current);
  };
  return <div>...</div>;
};
```

Bemerkung: dieses einfache Beispiel könnte auch ohne Refs mittels des Effect-Hooks umgesetzt werden

# Ref-Property zum Zugriff auf DOM-Elemente

## Ref-Property zum Zugriff auf DOM-Elemente

Ähnlich wie _key_ hat auch die _ref_-Property eine besondere Bedeutung in JSX - sie ermöglicht den Zugriff auf gerenderte DOM-Elemente

Anwendungsgebiete:

- Verwalten von Fokus, Textauswahl oder Medienwiedergabe
- Alternative Möglichkeit zum Verwalten von Inputs
- Integration von anderen DOM-Libraries

## Ref-Property zum Zugriff auf DOM-Elemente

Verwendung der _ref_-Property zusammen mit dem _useRef_-Hook:

```jsx
function RefDemo() {
  const myRef = useRef();
  return (
    <input
      ref={myRef}
      onChange={() => {
        console.log(myRef.current.value);
      }}
    />
  );
}
```

## Ref-Property zum Zugriff auf DOM-Elemente

**Verwalten von Fokus, Textauswahl oder Medienwiedergabe**

manche Änderungen können nicht deklarativ (via State) ausgedrückt werden - sie benötigen Zugriff zu einem bestimmten DOM-Element

Beispiel: es gibt Properties wie `.value` zum Ändern des Werts eines Inputs oder `.className` zum Ändern von Klassennamen, aber keine Property zum Verwalten des Fokus

## Ref-Property zum Zugriff auf DOM-Elemente

**Alternative Möglichkeit zum Verwalten von Inputs**

Verwendung von `ref` Anstelle von `value` und `onChange` kann zu etwas kürzerem Code führen (wird aber in der Dokumentation nicht empfohlen)

Refs werden von _react-hook-form_ verwendet, um Formularverwaltung einfacher und schneller zu machen

## Ref-Property zum Zugriff auf DOM-Elemente

**Integration von anderen DOM-Libraries**

Andere Libraries können expliziten Zugriff auf DOM-Elemente benötigen

Beispiel: Die Google Maps Library nimmt ein DOM-Element entgegen, in dem die Karte gezeichnet wird

Für viele Libraries (so auch Google Maps) existieren Wrapper für React, sodass refs nicht benötigt werden

## Ref-Property zum Verwalten des Fokus

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

## Ref-Property und Effect Hook zum Verwalten von Medienwiedergabe

```tsx
// https://codesandbox.io/s/media-playback-x3ci4
function Video() {
  const [playing, setPlaying] = useState(false);
  const videoEl = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (playing) {
      videoEl.current?.play();
    } else {
      videoEl.current?.pause();
    }
  }, [playing]);
  return (
    <div>
      <video
        ref={videoEl}
        width="250"
        src={
          'https://interactive-examples.mdn.mozilla.net/' +
          'media/cc0-videos/flower.mp4'
        }
      />
      <button onClick={() => setPlaying(!playing)}>
        {playing ? 'pause' : 'play'}
      </button>
    </div>
  );
}
```

## Ref-Property zum Verwalten von Inputs

Verwalten von Inputs: Vergleich von `useState` und `useRef`:

```js
const App = () => {
  const [firstName, setFirstName] = useState('');
  const lastNameInput = useRef(null);

  return (
    <div>
      <input
        value={firstName}
        onChange={(event) =>
          setFirstName(event.target.value)
        }
      />
      <input ref={lastNameInput} />

      <button
        onClick={() => {
          console.log(firstName);
          console.log(lastNameInput.current.value);
        }}
      >
        log values
      </button>
    </div>
  );
};
```

## Callback Refs

Wie bisher gesehen: Wir können ein Ref-Objekt an die _ref_-Property übergeben

Wir können auch eine _Callbackfunktion_ übergeben, die nach dem Rendering mit dem Element als Parameter aufgerufen wird (_react-hook-form_ verwendet dies)

```jsx
<input
  ref={(element) => {
    console.log(element);
    console.log(element.value);
    element.focus();
  }}
  type="text"
/>
```

# Higher-order components

### Funktionen, die eine Komponentendefinition verändern

## Higher-order components

verwirrende Terminologie:

Eine _higher-order component_ (HOC) ist **keine** Komponente 😲

Eine HOC ist eine Funktion, die eine Komponentendefinition verändert / erweitert (ein "Komponenten-Decorator")

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

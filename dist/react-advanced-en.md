# React Advanced

## Slides

<https://marko-knoebl.github.io/slides/>

## Your Trainer

Marko Knöbl

- Frontend Web-Development
  - JavaScript
  - React, Angular
- Programming
  - Python, JavaScript

## Introduction of Participants

- current projects
- prior knowledge
- expectations

## Organizational

- duration
- breaks
- lunch
- materials
- questions, feedback?

## Code

Code available at: <https://github.com/marko-knoebl/courses-code>

# Topics

## Topics

- more hooks
  - context hook
  - reducer hook and state management with reducers
  - effect hook in detail
  - external and custom hooks
- styling libraries
- routing and pre-rendering
- optimizing performance
- testing React components
- app development
- refs, HOCs
- manual setup

# Hooks

## Hooks

Hooks = extension of function components

A _basic_ function component can render contents based on props and it can trigger events.

Hooks allow for advanced functionality, e.g. having internal component state or listening for lifecycle events.

## Hooks

Hooks are special functions that can be called at the start of a component definition.

Examples:

- `useState(...)`
- `useEffect(...)`
- `useContext(...)`
- `useReducer(...)`

## Hooks

> "In the longer term, we expect Hooks to be the primary way people write React components."

\- [React FAQ](https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both)

# Context

## Context

Context is a means to provide values from a component to all components that are contained within it - without explicitly passing it through all intermediate levels.

The interface of context can pass both data and event handlers

## Context - example

with JavaScript (_TodosContext.js_):

```js
const TodosContext = React.createContext();
```

with TypeScript (_TodosContext.ts_):

```ts
type TodosContextType = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
};

const TodosContext = React.createContext(
  {} as TodosContextType
);
```

## Context - example

The _provider_ makes values available to all its subcomponents

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

## Context - example

using the _context hook_ to query values of a specific context:

```jsx
const TodoStats = () => {
  const context = useContext(TodosContext);
  return <div>There are {context.todos.length} todos</div>;
};
```

# State management with reducers

<!-- NOTE: other sections link to this section - take care when reordering -->

## State management

In more complex applications or components it makes sense to manage the state (model) separately from the view.

Often the entire application state is represented by a data model and every change to the state will be done by triggering a change to the data model.

## State management tools

- reducer hook (included in React, conceptually similar to Redux)
- Redux (based on reducers, commonly used with React)
- MobX (commonly used with React)
- ngrx (used with Angular)
- vuex (used with vue)

## State management with actions and reducers

Technique that is used in _Redux_ and in React's _reducer hook_:

An event inside an application triggers a so-called _action_.

Based on that _action_ the current _state_ will be transformed into a new _state_ via a _reducer_ function.

## State management with actions and reducers

A _reducer_ is a function that acts as the central element in Redux

The reducer receives the old state and an action describing a state change

The reducer function returns the new state. The reducer function **does not mutate the old state object** (it is a pure function)

## Reducer diagram

<img src="assets/redux-flow.svg" type="text/svg" style="width: 100%">

## Example: todos state management

Manual usage of a reducer:

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

## Example: todos state management

- actions are represented by JavaScript objects
- actions always have a _type_ property
- actions commonly also have a _payload_ property

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

## Example: todos state management

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

## Example: todos state management

usage with TypeScript:

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

For managing state we can now also utilize `useReducer` in addition to `useState`:

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

specific example:

```js
const [count, countDispatch] = useReducer(countReducer, 0);
```

## Reducer Hook

Calling `useReducer` returns an array with two entries:

- current state
- a dispatch function that can be used to trigger actions

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

# Effect hook

## Effect hook

can be used to perform actions when a component was mounted for the first time or whent its props / state have changed

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

## Effect hook

may be used to perform _side effects_ in components:

- fetching data from APIs
- explicitly manipulating the DOM
- starting timers
- ...

## Example: DocumentTitle component

We will create a component that can set the document title dynamically:

```xml
<DocumentTitle value="my custom title" />
```

This component may appear anywhere in the React application.

## Example: DocumentTitle component

```jsx
const DocumentTitle = props => {
  const updateTitle = () => {
    document.title = props.value;
  };
  useEffect(updateTitle, [props.value]);
  return null;
};
```

## Effect hook: cleanup

An effect may return a "cleanup function"

This function will run e.g. before the component is removed

## Effect hook: cleanup

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

## Effect hook: after every rendering

If no second parameter is passed the function will be called after each rendering.

```jsx
const RenderLogger = () => {
  useEffect(() => {
    console.log('logger was rendered');
  });
  return <div>Render logger</div>;
};
```

# External hooks

## External hooks

Many additional hooks are provided by the React community

example use cases:

- querying APIs
- using global state
- using _localStorage_ for persistent state
- media queries
- querying the scroll position
- ... (see [awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks))

## Example: react-query

<https://github.com/tannerlinsley/react-query>

Popular hook that can help with retrieving APIs

## Example: react-query

simple use:

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

# Custom hooks

## Custom hooks

Custom hooks can be defined as functions; they often use existing hooks, e.g. `useState` or `useEffect`

## Custom hooks - useDate

Example: `useDate` - provides the current time and updates the component every 1000 milliseconds

```js
const Clock = () => {
  const time = useDate(1000);
  return (
    <div>The time is: {time.toLocaleTimeString()}</div>
  );
};
```

## Custom hooks - useDate

basic implementation of `useDate`:

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

## Custom hooks - useTodos

Example: `useTodos` - can be used to extract data handling from the component definition

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

## Custom hooks - useTodos

implementation of `useTodos`:

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

## Custom hooks - useAuth

examples for hooks that handle authentication:

- <https://usehooks.com/useAuth/>
- <https://medium.com/hackernoon/learn-react-hooks-by-building-an-auth-based-to-do-app-c2d143928b0b>

## Custom hooks - useJsonQuery

Example: `useJsonQuery` - enables querying for JSON data

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

## Custom hooks - useJsonQuery

simple implementation:

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

# Styling tools

## Styling tools

tools for external stylesheets:

- _classnames_ package
- CSS modules
- SCSS

CSS-in-JS libraries:

- styled-components
- JSS
- radium

## classnames

utility: npm package _classnames_:

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

## CSS modules

CSS modules are preconfigured in create-react-app; they enable using CSS class names that are guaranteed to be unique across CSS files

```js
import styles from './TodoItem.module.css';

<div className={styles.todoItem}>...</div>;

<div className={`${styles.todoItem} ${styles.completed}`}>
  ...
</div>;
```

## SCSS

enabling SCSS in a create-react-app project:

```bash
npm install node-sass
```

then we can use:

```js
import './TodoItem.scss';
```

## CSS-in-JS

**CSS-in-JS**: JavaScript is used to generate and attach stylesheets

libraries:

- styled-components
- JSS
- radium
- emotion

## styled-components

library that enables creating styled versions of existing HTML elements

npm package: `styled-components`

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

library that extends the `style` property syntax of HTML elements in a component

npm package: `radium`

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

# Routing and pre-rendering

## Routing and pre-rendering

- **client-side routing**: navigating between different views without leaving the React app
- **pre-rendering**: on first page load the browser receives pre-rendered HTML to speed up loading / displaying

## Routing

example: go to [reactjs.org](https://reactjs.org) and navigate between pages

navigation between pages is quick - only some parts of the page are replaced

## Pre-rendering

example 1:

go to [reactjs.org](https://reactjs.org) and wait for the browser's React devtools icon to activate - you will see content before React is ready

example 2:

Disable JavaScript in your browser's developer tools settings and visit [reactjs.org](https://reactjs.org) - you will still see content, though some interactivity will not work (e.g. dropdowns)

## Routing and pre-rendering

tools:

- _react-router_: _routing_
- _gatsby_: routing, _pre-rendering static content_
- _next.js_: routing, pre-rendering static content, _pre-rendering dynamic content_

# React Router

## Setup

npm packages:

- `react-router-dom`
- (`@types/react-router-dom`)

## Setup

the entire application is enclosed in a `BrowserRouter` element:

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

## Basic router components

- `<Route>` - a component that renders its content when active
- `<Switch>` - a container for `<Route>` elements
- `<Link>` / `<NavLink>` - are used in place of `<a>` elements

## Basic example

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

(syntax of React Router 5.1)

## Route parameters

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

## Styling links

supplying a class name that will be applied to any active link:

```xml
<NavLink to="/" activeClassName="active-link">Home</NavLink>
<NavLink to="/add" activeClassName="active-link">Add</NavLink>
```

## Navigation from React

possibilities:

- render a `<Redirect >` component
- use the history hook

## Navigation from React

```jsx
<Route path="/member-area">
  {username ? <MemberArea /> : <Redirect to="/login" />}
</Route>
```

## Navigation from React

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

# Lazy-loading components

## Lazy-loading components

to reduce bundle size of React apps: only import components when they are needed

common use case: import a route only when it is accessed

## Lazy-loading components

imports in JavaScript:

- using `import` as a statement - synchronous import before the rest of the file is executed (in webpack: automatically included in bundle)
- using `import` as a function - asynchronous import when needed

## Lazy-loading components

React facilities for lazy-loading:

- `lazy` function
- `Suspense` component

## Lazy-loading components

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
  source: <a
    href="https://reactjs.org/docs/code-splitting.html#route-based-code-splitting"
  >
    Route-based code splitting on reactjs.org
  </a>
</small>

# Pre-rendering

## Pre-rendering

Tools like **next.js** or **gatsby.js** can pre-render a React page before it reaches the client

advantages:

- faster initial rendering
- reduces additional API calls on the client
- easier indexing by search engines

## Pre-rendering

approaches:

- static site generation
- server-side rendering

## Pre-rendering

**static site generation**

- makes sense for data that changes infrequently (e.g. blog posts)
- when data changes the site has to be regenerated statically
- data that changes frequently (e.g. comments on a blog post) would not be part of the pre-rendering

supported by **next.js** and **gatsby.js**

## Pre-rendering

**server-side rendering**

- when a React page is opened a prerendered version of it is created on the server and sent to the client
- requires _node.js_ on the server

supported by **next.js**

# Next.js

## create-next-app

Create a new next.js app via:

```bash
npx create-next-app my-app
```

## Folder structure

- pages under _./pages_
- static assets under _./assets_
- used React components usually under _./components_

## npm scripts

- `npm run dev`: run the development server
- `npm run start` (or `npm start`): run the production server
- `npm run build`: build a static version for deployment

## Development server

```bash
npm run dev
```

An auto-updating server will start at _localhost:3000_

## Creating pages

Example page definition:

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

## Creating pages

Task: create further pages

## Route parameters

we can query parameters from URLs like these:

- `/posts/?postid=3`
- `/posts/3`

## Route parameters

Route parameters are enclosed in square brackets in the file name, e.g. `pages/posts/[id].js`

## Route parameters

Querying route parameters:

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

## Data fetching in next.js

usual process for fetching data in a React app:

- React app is sent to the client
- React app renders initially with no data
- client requests additional data
- data is sent to the client

process with next.js:

- data is fetched on the server
- app is rendered on the server
- pre-rendered app and the corresponding data for making it dynamic are sent to the client

## Data fetching in next.js

Fetching data for rendering a page:

- fetch static data via `getStaticProps` (during the build)
- fetch server-side dynamic data for pre-rendering via `getServerSideProps`

For using `fetch` in node.js we can use the npm Package `isomorphic-fetch`

## Data fetching in next.js

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

## Static site generation

By default _next.js_ runs on a node server and dynamically renders content

for static site generation see:

<https://nextjs.org/learn/excel/static-html-export>

## Resources

The next.js website has great materials: <https://nextjs.org>

# Optimizing performance

## Optimizing performance

topics:

- visualizing updates in the React devtools
- measuring render times in the React devtools
- memoizing components based on props
- memoizing expensive calculations for rendering
- virtual DOM and the _key_ prop

## Memoization

Memoization = technique to speed up function calls etc.: Previous results are cached and don't have to be recomputed

## Optimizing performance

what React already does for us:

- hooks (state, reducer, context) will _not_ trigger a re-rendering if their value has not changed

what we can add:

- memoizing component renderings based on their props (so they don't have to be rerendered by their parent if their props don't change)
- memoizing expensive calculations
- providing a key prop for repeating elements

# React devtools and performance

## React devtools and performance

react devtools functionality:

- visually highlight components whenever they update
- profiler that supports recording and profiling a session

## React devtools and performance

highlightling components whenever they update:

In the React devtools settings: select _Highlight updates when components render._

Components that render get a colored border (color varies based on render frequency)

## React devtools and performance

recording and profiling a session:

In the browser tools' "Profiler" tab:

- click the record button to start
- interact with the React application normally (each user action is recorded via a "_commit_")
- click the record button to stop

## React devtools and performance

exploring the profile data:

Each user interaction (e.g. click, button press) causes a so-called _commit_

Commits are shown as bars in the top right corner

Details of a commit can be seen by clicking on it

## React devtools and performance

Numbers in a commit detail:

```
TodoApp (3ms of 109ms)
```

this means:

- it took 109 milliseconds to render the entire app (note: will be faster in production)
- most time (106 ms) was spent rendering subcomponents
- the contents that are specific to _TodoApp_ took 3 ms

## React devtools and performance

colors in a commit detail:

Color scale from _green_ to _yellow_ shows how much time a component took to render - compared to its siblings

Grey-striped components did not rerender

# Preventing unneeded component rerenderings

## Preventing unneeded component rerenderings

Generally a component only needs to be rerendered when its props or state actually change

## Preventing unneeded component rerenderings

rules for rerendering in function components:

- setting a changed state will cause rerendering
- setting the same state as before will not cause rerendering
- the rerendering of a component will usually cause the rerendering of _all subcomponents_

## Preventing unneeded component rerenderings

demo: component only rerenders if its state changes

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

## Preventing unneeded component rerenderings

the rerendering of a component will usually cause the rerendering of _all subcomponents_

\- let's optimize this!

## Preventing unneeded component rerenderings

if only those subcomponents whose props have changed should rerender:

use React's `memo` function and the callback hook

## Preventing unneeded component rerenderings

using React's `memo` function:

```jsx
import React, { memo } from 'react';

function Rating(props) {
  // ...
}

export default memo(Rating);
```

## Preventing unneeded component rerenderings

the `Rating` component will not be rerendered if its props are the same as before:

```jsx
<Rating stars={4} />
<Rating stars={4} onChange={setRating1} />
```

## Preventing unneeded component rerenderings

what about this event listener?

```jsx
<Rating
  stars={4}
  onChange={newRating => setRating1(newRating)}
/>
```

the arrow function would be a different entity on every requested rendering

## Preventing unneeded component rerenderings

making memoization work for more complex event handlers / callback functions:

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

# Memoizing costly computations

## Memoizing costly computations

some component renderings may rely on costly computations that could benefit from memoization

## Memoizing costly computations

example without memoization:

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

## Memoizing costly computations

with memoization:

```js
const numActiveTodos = useMemo(
  // function to recompute value
  () => todos.filter(todo => !todo.completed).length,
  // array of dependencies
  [todos]
);
```

the computation is only rerun if a dependency listed in the array changes

# Virtual DOM

## Virtual DOM

If a React component does rerender, its results are not directly passed on to the browser.

Instead, a _virtual DOM_ representation is created and compared to the previous virtual DOM. Only the differences are passed on to the browser to process.

## Virtual DOM and repeating elements

Usually React is very efficient at figuring out what has changed - but it needs help when elements are repeated in an array

Rule of thumb: Any time we use `.map` in our JSX templates the inner elements should have a unique key property to help React

## Virtual DOM

see also: <https://reactjs.org/docs/reconciliation.html>

# Testing

## Automated testing in JavaScript

Some functions in React - including Reducers - are just plain JavaScript functions and can be tested like any other function.

See the presentation [JavaScript Testing](./javascript-testing-en.html) for an overview

## Testing React components

what to test:

- rendering
- triggering events
- changing state

## Test renderers for React

- `react-testing-library` (subproject of _testing library_)
- `react-test-renderer` (developed by the React team)
- `Enzyme`

## Snapshot Tests

Components are rendered and compared to earlier versions (snapshots)

# React-Testing-Library

## Testing-Library

**Testing-Library**: project for testing UI components

tests focus on aspects that are relevant for the end user (and not on the exact DOM structure)

## React-Testing-Library

```js
import { render } from '@testing-library/react';

it('renders learn react link', () => {
  const instance = render(<App />);
  const linkElement = instance.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

## Querying elements

- `.getByText` (throws if there is not a unique match)
- `.getAllByText` (throws if there are no matches)
- `.getByTitle`
- `.getByLabelText`
- ... (see <https://testing-library.com/docs/dom-testing-library/api-queries>)

## Assertions

extra assertions:

- `.toHaveTextContent()`
- `.toBeInTheDocument()`
- ... see <https://github.com/testing-library/jest-dom>

## Testing the rendering

rating component:

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

## Testing the rendering

slideshow component:

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

## Testing state changes

slideshow component:

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

## Testing events

rating component:

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

## Testing asynchronous code

`ChuckNorrisJoke` component which queries an API:

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

## Testing asynchronous code

testing with an actual API:

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

`waitForElement` will repeatedly query for an element until it exists

## Mocking objects

mocking API calls:

replacing `axios` with a mocked module:

```js
import axios from 'axios';
jest.mock('axios');
```

mocking `axios.get` as a successful promise:

```js
axios.get.mockResolvedValueOnce({
  data: {
    value: 'Chuck Norris counted to infinity. Twice.',
  },
});
```

## Testing errors

rating component:

```jsx
it('throws an error if the number of stars is 0', () => {
  const testFn = () => {
    render(<Rating stars={0} />);
  };
  expect(testFn).toThrow('number of stars must be 1-5');
});
```

## Manual setup

these steps are already set up when using `create-react-app`

enable advanced assertions (see <https://github.com/testing-library/jest-dom>):

```js
import '@testing-library/jest-dom/extend-expect';
```

test case cleanup (unmounting):

```js
import { cleanup } from '@testing-library/react';

afterEach(cleanup);
```

## Resource

<https://react-testing-examples.com/>

# React-Test-Renderer

## React-Test-Renderer - installation

```bash
npm install --save-dev react-test-renderer
```

with TypeScript:

```bash
npm install --save-dev react-test-renderer @types/react-test-renderer
```

## React-Test-Renderer - Example

```js
import TestRenderer from 'react-test-renderer';

it('renders a component without crashing', () => {
  const instance = TestRenderer.create(<MyComponent />)
    .root;
});
```

## React-Test-Renderer - working with instances

- `instance.find(All)` (receives a test function as an argument)
- `instance.find(All)ByType`
- `instance.find(All)ByProps`
- `instance.props`
- `instance.children`
- `instance.type`

## React-Test-Renderer - API reference

<https://reactjs.org/docs/test-renderer.html>

## Example: Testing with Jest and React-Test-Renderer

Testing a Rating component

## Test setup

```jsx
import React from 'react';
import TestRenderer from 'react-test-renderer';

import Rating from './Rating';
```

## Testing the rendering

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

## Testing events

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

## Testing exceptions

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

## Enzyme - Installation & Setup

```
npm install --save-dev enzyme enzyme-adapter-react-16
```

new file `src/setupTests.js`:

```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

## Enzyme - Examples

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

## Example: testing a rating component

With jest and enzyme

## Example: testing a rating component

```jsx
import React from 'react';
import { shallow, mount } from 'enzyme';

import Rating from './Rating';
```

## Example: testing a rating component

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

## Example: testing a rating component

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

## Example: testing a rating component

```jsx
describe('events', () => {
  it('reacts to click on first star', () => {
    const mockFn = fn();
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

## Example: testing a rating component

Testing a (hypothetical) rating component that has its own internal state:

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

## Example: testing a rating component

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

# Snapshot tests

## Snapshot tests

Components are rendered and compared to earlier versions (snapshots)

Snapshot tests are a kind of regression tests

## Snapshot tests - creating tests

with react-testing-library

```jsx
it('matches the snapshot', () => {
  const instance = render(<Slideshow />);
  expect(instance.baseElement).toMatchSnapshot();
  const slide = instance.getByAltText('slide');
  expect(slide).toMatchSnapshot();
});
```

## Updating snapshot tests

Once we have changed and and verified the behaviour of a component we can update the corresponding tests accordingly:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```

# Storybook

## Storybook

Enables creation of isolated component demos

example:

<https://airbnb.io/react-dates/>

## Storybook - Setup

```bash
npx -p @storybook/cli sb init --type react
```

Will create a config folder under `.storybook` and a demo stories under `stories`.

## Storybook

```bash
npm run storybook
```

## Storybook

configuration: via `.storybook/config.js`

# PWAs

Progressive Web Apps with React

## PWAs

**Progressive Web Apps** enable us to write applications for PC and mobile using HTML, CSS and JavaScript

Applications created with `create-react-app` already have the basics configured:

- configuration in `public/manifest.json`
- PWA-Boilerplate in `src/serviceWorker.js`

## PWAs: activation

in `index.js` / `index.tsx`:

```js
serviceWorker.register();
```

## PWAs: configuration

Via `public/manifest.json`

## PWA: add to homescreen

<https://developers.google.com/web/fundamentals/app-install-banners/>

## PWA: add to homescreen

Procedure in Chrome:

- wait until Chrome will allow the install prompt to be displayed
- display a button or the like that offers installation
- when the button is clicked, make Chrome display an installation prompt

## PWA: add to homescreen

TypeScript implementation:

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

TypeScript implementation:

```tsx
<button
  disabled={!canInstall}
  onClick={() => {
    (installPromptEventRef.current as any).prompt();
  }}>
  install
</button>
```

## PWA: Deployment on netlify

- `npm run build`
- drag & drop the build folder to netlify.com/drop
- switch the URL from _http&#x3A;//_ to _https&#x3A;//_
- try it out in Chrome on desktop and mobile

# React Native

## React Native

React Native can be used to write React applications for iOS and Android devices

## Options for development

- **Expo Snack**: online editor / playground
- **Expo CLI**: develop locally with little setup
- **React Native CLI**: develop with Xcode or Android Studio - is required when publishing

## Expo: online editor

[snack.expo.io](https://snack.expo.io)

## Expo: local development

installing expo:

```bash
npm install -g expo-cli
```

creating a new expo project:

```bash
expo init myproject
```

## Expo app

**Expo app**: for testing apps during development, available in the Android and iOS app stores

## React Native components

- View (=div)
- Text
- Image
- Button
- TextInput
- ScrollView

[detailed list](https://facebook.github.io/react-native/docs/components-and-apis#basic-components)

## React Native components

Examples:

```js
<Button title="press me" onPress={handlePress} />
```

```js
<TextInput value={myText} onChangeText={setMyText} />
```

## Styling

All React Native components accept a _style_ prop that can take an object:

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

The style prop can also be an array of objects

Entries that are _falsy_ are ignored - this can be used for conditional styles

```js
const TodoItem = ({ title, completed }) => (
  <View
    style={[todoItemStyle, completed && completedStyle]}>
    {title}
  </View>
);
```

## Styling

Creating _stylesheets_ that define multiple sets of styles:

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

using stylesheets:

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

## Platform-specific code

option 1 (simple cases):

```js
import { Platform } from 'react-native';
if (Platform.OS === 'web') {
  // 'web' / 'ios' / 'android'
}
```

option 2 (platform-specific components):

- `AddTodo.web.js`
- `AddTodo.ios.js`
- `AddTodo.android.js`

# Refs

### accessing DOM elements

## Refs

Refs enable direct access to DOM elements

use cases:

- managing focus, text selection, or media playback
- alternative way of managing inputs (uncontrolled components)
- integrating with third-party DOM libraries

## Refs

**managing focus, text selection, or media playback**

some changes cannot be expressed declaratively (via state); they require direct access to a DOM element

example: there are properties like `.value` for changing a value or `.className` for changing classes, but there is no property for managing focus

## Refs

**alternative way of managing inputs**

using `ref` instead of `value` and `onChange` can be less code (but is discouraged by the React documentation)

## Refs

**integrating with third-party DOM libraries**

Third-party libraries may require a DOM element being passed in

Example: Google Maps takes an element where it will paint the map

Many third-party libraries have wrappers for React where refs are not needed

## Refs

Managing focus with a ref:

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

Managing inputs: comparing `useState` and `useRef`:

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

### functions that modify component definitions

## Higher-order components

confusing terminology:

Higher-order components are **not** components 😲

Higher-order components are functions that can change/enhance a component definition

## Higher-order components

Example:

_React_'s `memo` is a higher-order component

It receives a component and returns a memoized component:

```js
const MemoizedRating = memo(Rating);
```

## Higher-order components

Example:

`connect` from _react-redux_ returns a HOC:

```js
// connector is a HOC
const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);
```

The resulting HOC receives a regular component and returns a component that is connected to the Redux store:

```js
const RatingContainer = connector(Rating);
```

# File Structure

## File Structure

<https://reactjs.org/docs/faq-structure.html>

common approaches:

- grouping by features or routes
- grouping by type (component / reducer / API interface)

# Manual setup and configuration of React

## Manual setup and configuration

Setting up React without _create-react-app_

Here we will use the _parcel_ bundler - an alternative to webpack

## package.json and dependencies

Start out with a `package.json` file that contains an empty object : `{}`

Install the required packages:

```bash
npm install react react-dom
```

```bash
npm install --save-dev parcel-bundler @babel/preset-react @babel/preset-env
```

## Configuring babel

via `babel.config.json` file:

```json
{
  "presets": ["@babel/preset-env", "@babel/react"]
}
```

## npm scripts

add scripts to `package.json`:

```json
"scripts": {
  "build": "parcel build src/index.html",
  "start": "parcel src/index.html"
},
```

## HTML entry point

Create _src/index.html_:

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

## Rendering an App component

Create _src/index.js_:

```js
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <div>Hello World!</div>;
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
```

## Running

Execute `npm run start` for a development server or `npm run build` for a build.

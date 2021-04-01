# Performance optimization

## Performance optimization

topics:

- visualizing re-renderings in the React devtools
- measuring render times in the React devtools
- memoizing expensive calculations for rendering
- memoizing components based on props
- memoization and event handlers
- virtual DOM and the _key_ prop
- lazy loading of components

# Three steps to update a component

## Three steps to update a component

1. build a virtual DOM representation of the new rendering ("render phase")
2. create a diff between the new and old virtual DOM ("reconciliation phase")
3. apply any changes in the virtual DOM to the real DOM ("commit phase")

## Three steps to update a component

speeding up the three steps:

- memoizing costly computations (_useMemo_) - may speed up step 1
- preventing unneeded component rerenderings - skips all steps if nothing changed
- using the _key_ property - helps with finding the minimal diff for step 3

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

# Memoization

## Memoization

_memoization_ = caching of previously computed results

applications in React:

- memoization of costly computations
- memoization of component renderings
- preserving the identity of event handlers (as basis for memoization of component renderings)

# Memoization of costly computations

## Memoization of costly computations

example without memoization:

```js
const [todos, setTodos] = useState([]);
const numActiveTodos = todos.filter(
  (todo) => !todo.completed
).length;
```

## Memoization of costly computations

with memoization:

```js
const [todos, setTodos] = useState([]);
const numActiveTodos = useMemo(
  // function to recompute value
  () => todos.filter((todo) => !todo.completed).length,
  // array of dependencies
  [todos]
);
```

the computation is only rerun if a dependency listed in the array changes

# Skipping unneeded rerenders

## Skipping unneeded rerenders

Note:

If the rendering of a component is the same as before, re-rendering _will generally already be fast_ as React will only recreate the virtual DOM (and will not touch the real DOM)

Often, no further optimization is necessary

## Skipping unneeded rerenders

Generally a component only needs to be rerendered when its props or state actually change

## Skipping unneeded rerenders

what React already does for us:

hooks (state, reducer, context) will _not_ trigger a re-rendering if their value has not changed

what we can add:

if a parent component rerenders, but the child's props haven't changed, don't rerender the child component (memoization)

## Skipping unneeded rerenders

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

## Skipping unneeded rerenders

if only those subcomponents whose props have changed should rerender:

- for function components: use React's `memo` function
- for class components: inherit from `PureComponent` instead of `Component`

## Skipping unneeded rerenders

optimized function component:

```jsx
import { memo } from 'react';

function Rating(props) {
  // ...
}

export default memo(Rating);
```

optimized class component:

```jsx
import { PureComponent } from 'react';

class Rating extends PureComponent {
  // ...
}
```

## Skipping unneeded rerenders

the `Rating` component will not be rerendered if its props are the same as before:

```jsx
<Rating stars={prodRating} />
<Rating stars={prodRating} onChange={setProdRating} />
```

## Skipping unneeded rerenders

[Demo: Sierpinski carpet with and without memo](https://codesandbox.io/s/memo-sierpinski-j5dv9)

## Skipping unneeded rerenders

See also:

- [reactjs.org - Optimizing Performance - Avoid Reconciliation](https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation)
- [Kent C. Dodds - Fix the slow render before you fix the re-render](https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render)

# Skipping rerenders and event handlers

## Skipping rerenders and event handlers

if `Rating` is a "memoized" component, which of the following will re-render when the parent is re-rendered?

```jsx
<Rating stars={prodRating} />
<Rating stars={prodRating} onChange={setProdRating} />
<Rating
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

## Skipping rerenders and event handlers

```jsx
<Rating
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

the change handler would be recreated and passed down as a different object on every rendering of the parent component

## Skipping rerenders and event handlers

solutions:

- pass down a `dispatch` function
- define the event handlers to be passed down in a class component
- memoize the event handlers

## Skipping rerenders and event handlers

memoizing event handlers:

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const todosWithEventHandlers = useMemo(
    () =>
      todos.map((todo) => ({
        ...todo,
        onToggle: () => {
          // ...
        },
      })),
    [todos]
  );
  return (
    <ul>
      {todosWithEventHandlers.map((todo) => (
        <li onClick={todo.onToggle}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

## Skipping rerenders and event handlers

memoization of a single event handler:

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = useMemo(
    () => (newTitle) => {
      setTodos([
        ...todos,
        { title: newTitle, completed: false },
      ]);
    },
    [todos]
  );
};
```

## Skipping rerenders and event handlers

shorter memoization of a single event handler via `useCallback`:

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = useCallback(
    (newTitle) => {
      setTodos([
        ...todos,
        { title: newTitle, completed: false },
      ]);
    },
    [todos]
  );
};
```

# Virtual DOM

## Virtual DOM

If a React component does rerender, its results are not directly passed on to the browser.

Instead, a _virtual DOM_ representation is created and compared to the previous virtual DOM. Only the differences are passed on to the browser to process.

## Virtual DOM and repeating elements

Usually React is very efficient at figuring out what has changed - but it needs help when elements are repeated in an array

Rule of thumb: Any time we use `.map` in our JSX templates the inner elements should have a unique key property to help React

## Virtual DOM

see also: <https://reactjs.org/docs/reconciliation.html>

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
import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
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

# Performance optimization and pre-rendering

## Performance optimization and pre-rendering

topics:

- optimizing rerenderings
- pre-rendering views
- splitting JavaScript bundles to reduce size

# Optimizing rerenderings

## Optimizing rerenderings

topics:

- visualizing updates in the React devtools
- measuring render times in the React devtools
- memoizing components based on props
- memoizing expensive calculations for rendering
- virtual DOM and the _key_ prop

## Memoization

Memoization = technique to speed up function calls etc.: Previous results are cached and don't have to be recomputed

## Optimizing rerenderings

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

\- this can be optimized!

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
<Rating stars={prodRating} />
<Rating stars={prodRating} onChange={setProdRating} />
```

## Preventing unneeded component rerenderings

what about this event listener?

```jsx
<Rating
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

the arrow function would be a different entity on every requested rendering

## Preventing unneeded component rerenderings

making memoization work for more complex event handlers / callback functions:

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (newTitle) =>
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

# Pre-rendering

## Pre-rendering

**pre-rendering**: on first page load the browser receives pre-rendered HTML to speed up loading / displaying

advantages:

- faster initial rendering
- reduces additional API calls on the client
- easier indexing by search engines

## Pre-rendering

example 1:

go to [reactjs.org](https://reactjs.org) and wait for the browser's React devtools icon to activate - you will see content before React is ready

example 2:

Disable JavaScript in your browser's developer tools settings and visit [reactjs.org](https://reactjs.org) - you will still see content, though some interactivity will not work (e.g. dropdowns)

## Approaches

- static site generation (pre-rendering static content)
- server-side rendering (pre-rendering dynamic content)

## Static site generation

- makes sense for data that changes infrequently (e.g. blog posts)
- when data changes the site has to be regenerated statically
- data that changes frequently (e.g. comments on a blog post) would not be part of the pre-rendering

## Server-side rendering

- when a React page is opened a prerendered version of it is created on the server and sent to the client
- requires JavaScript on the server (_node.js_)

## Tools

- _gatsby.js_: static site generation
- _next.js_: static site generation, server-side rendering

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

## Development server

```bash
npm run dev
```

An auto-updating server will start at _localhost:3000_

## Deployment with node.js

to build a production version:

```bash
npm run build
```

to run it:

```bash
npm run start
```

(requires node.js on the server)

## Deployment to a static server

change the _build_ script in _package.json_ to: `next build && next export`

then build the static version (to the _out_ folder) via:

```bash
npm run build
```

(see <https://nextjs.org/learn/excel/static-html-export>)

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

## Resources

The next.js website has great materials: <https://nextjs.org>

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

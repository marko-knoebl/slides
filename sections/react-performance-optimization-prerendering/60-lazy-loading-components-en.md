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
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
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

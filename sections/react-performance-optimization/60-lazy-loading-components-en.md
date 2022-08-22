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

with react router:

```jsx
import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}
```

<small>
  source: <a
    href="https://reactjs.org/docs/code-splitting.html#route-based-code-splitting"
  >
    Route-based code splitting on reactjs.org
  </a>
</small>

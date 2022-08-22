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

mit React Router v5:

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
  Quelle: <a
    href="https://reactjs.org/docs/code-splitting.html#route-based-code-splitting"
  >
    Route-based code splitting on reactjs.org
  </a>
</small>

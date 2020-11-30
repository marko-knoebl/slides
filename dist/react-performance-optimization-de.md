# Performanceoptimierung

## Performanceoptimierung

Themen:

- Visualisierung von Re-Renderings in den React Devtools
- Messen von Render-Zeiten in den React Devtools
- Memoisation aufwändiger Berechnungen für das Rendering
- Memoisierung von Komponenten basierend auf Props
- Memoisierung und Eventhandlern
- _Virtual DOM_ und die _key_-Property
- Lazy Loading von Komponenten

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

# Memoisierung

## Memoisierung

_Memoisierung_ = Cachen von zuvor berechneten Resultaten

Anwendungen in React:

- Memoisierung aufwändiger Berechnungen
- Memoisierung von Komponentenrenderings
- Erhalten der Identität von Event-Handlern (als Grundlage für die Memoisierung von Komponentenrenderings)

# Memoisierung aufwändiger Berechnungen

## Memoisierung aufwändiger Berechnungen

Beispiel ohne Memoisierung:

```js
const [todos, setTodos] = useState([]);
const numActiveTodos = todos.filter(
  (todo) => !todo.completed
).length;
```

## Memoization of costly computations

Mit Memoisierung:

```js
const [todos, setTodos] = useState([]);
const numActiveTodos = useMemo(
  // function to recompute value
  () => todos.filter((todo) => !todo.completed).length,
  // array of dependencies
  [todos]
);
```

Berechnung wird nur dann neu ausgeführt, wenn sich eine Abhängigkeit in dem Array ändert

# Memoisierung von Komponentenrenderings

## Vermeiden unnötiger Rerenderings

Im Allgemeinen muss eine Komponente nur neu gerendert werden, wenn sich entweder props oder state tatsächlich ändern

## Vermeiden unnötiger Rerenderings

was React schon für uns erledigt:

Hooks (state, reducer, context) lösen kein Re-Rendering aus, wenn sich ihr Wert nicht geändert hat

was wir beitragen können:

wenn eine Elternkomponente neu gerendert wird, die Props der Kindkomponente sich aber nicht geändert haben, soll die Kindkomponente nicht neu gerendert werden (Memoisation)

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

## Memoisierung von Komponentenrenderings

Wenn nur jene Unterkomponenten neu gerendert werden sollen, deren props sich geändert haben:

- für Funktionskomponenten: verwenden der `memo`-Funktion
- für Klassenkomponenten: Erben von `PureComponent` statt `Component`

## Memoisierung von Komponentenrenderings

memoisierte Funktionskomponente:

```jsx
import { memo } from 'react';

function Rating(props) {
  // ...
}

export default memo(Rating);
```

memoisierte Klassenkomponenten:

```jsx
import { PureComponent } from 'react';

class Rating extends PureComponent {
  // ...
}
```

## Memoisierung von Komponentenrenderings

Die `Rating`-Komponente wird nicht neu gerendert, wenn ihre Props die gleichen sind wie zuvor:

```jsx
<Rating stars={prodRating} />
<Rating stars={prodRating} onChange={setProdRating} />
```

# Memoisierung und Eventhandler

## Memoisierung und Eventhandler

Wenn `Rating` eine memoisierte Komponente ist, welche der folgenden Renderings werden beim Re-Rendering der Elternkomponente auch neu gerendert?

```jsx
<Rating stars={prodRating} />
<Rating stars={prodRating} onChange={setProdRating} />
<Rating
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

## Memoisierung und Eventhandler

```jsx
<Rating
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

Die Pfeilfunktion wäre bei jedem angeforderten Rendering ein anderes Objekt

## Memoisierung und Eventhandler

Lösungen:

- Übergeben einer `dispatch`-Funktion statt neu definierter Eventhandler
- Definieren des zu übergebenden Eventhanlders in einer Klassenkomponente (soweit möglich)
- Memoisieren des Eventhandlers

## Memoisierung und Eventhandler

Memoisierung von Eventhandlern:

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

## Memoisierung und Eventhandler

Memoisierung eines einzelnen Eventhandlers:

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

## Memoisierung und Eventhandler

verkürzte Memoisierunge eines einzelnen Eventhandlers via `useCallback`:

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

# Virtuelles DOM

## Virtuelles DOM

Beim erneuten Rendern einer React-Komponente: Resultate werden nicht direkt and den Browser übergeben.

Stattdessen: Ein _virtuelles DOM_ wird erstellt und mit dem vorherigen virtuellen DOM verglichen. Nur die Unterschiede werden zur Verarbeitung an den Browser übergeben.

## Virtuelles DOM und Wiederholen von Elementen

Üblicherweise ist React sehr effizient dabei, Änderungen herauszufinden - doch es benötigt Hilfe, wenn Elemente in einem Array Wiederholt werden

Faustregel: Wenn wir in unserem JSX-Template `.map` verwenden, sollten innere Elemente eine eindeutige key-Property haben, um React zu unterstützen

## Virtuelles DOM

siehe auch: <https://reactjs.org/docs/reconciliation.html>

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
  Quelle: <a
    href="https://reactjs.org/docs/code-splitting.html#route-based-code-splitting"
  >
    Route-based code splitting on reactjs.org
  </a>
</small>

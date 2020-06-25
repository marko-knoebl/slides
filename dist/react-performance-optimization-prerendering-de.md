# Performanceoptimierung und Pre-Rendering

## Performanceoptimierung und Pre-Rendering

Themen:

- Optimieren von Rerenderings
- Vorrendern von Ansichten
- Aufteilen von JavaScript-Bundles

# Re-Renderings optimieren

## Re-Renderings optimieren

Themen:

- Visualisierung von Updates in den React Devtools
- Messen von Render-Zeiten in den React Devtools
- Memoisation von Komponenten basierend auf Props
- Memoisation aufwändiger Berechnungen für das Rendering
- _Virtual DOM_ und die _key_-Property

## Memoisation

Memoisation = Technik, um Funktionsaufrufe zu optimieren: Bisherige Resultate werden gecached und müssen nicht neu berechnet werden

## Re-Renderings optimieren

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

# Pre-Rendering

## Pre-Rendering

**Pre-Rendering**: beim ersten Laden der React-Anwendung erhält der Browser vorgerendertes HTML, um das Laden / Anzeigen zu beschleunigen

Vorteile:

- schnellere erste Darstellung
- reduziert zusätzliche API-Aufrufe am Client
- einfachere Indexierung durch Suchmaschinen

## Pre-Rendering

Beispiel 1:

Gehe zu [reactjs.org](https://reactjs.org) und warte, bis sich das React Devtools Icon des Browsers aktiviert - Es werden schon Inhalte angezeigt, bevor React bereit ist

Beispiel 2:

Deaktiviere JavaScript in den Einstellungen der Browser-Entwicklertools und besuche [reactjs.org](https://reactjs.org) - es werden Inhalte angezeigt, auch wenn Teile der Interaktivität nicht funktionieren (z.B. Dropdowns)

## Zugänge

- Static Site Generation (Pre-Rendering statischer Inhalte)
- Server-side Rendering (Pre-Rendering dynamischer Inhalte)

## Static Site Generation

- sinnvoll, wenn Daten sich nicht oft ändern (z.B. Blog Posts)
- bei Änderung von Daten muss die Website statisch neu generiert und deployed werden
- Daten, die sich oft ändern (z.B. Kommentare zu einem Blog Post) wären nicht Teil des Pre-Renderings

## Server-side Rendering

- beim Öffnen einer React-Seite wird diese am Server vorgerendert und zum Client gesendet
- benötigt _node.js_ am Server

## Tools

- _gatsby_: Static Site Generation
- _next.js_: Static Site Generation, Server-side Rendering

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

## Entwicklungsserver

```bash
npm run dev
```

Ein Entwicklungsserver startet auf _localhost:3000_

## Deployment mit node.js

um einen Produktionsbuild zu erstellen:

```bash
npm run build
```

um ihn zu starten:

```bash
npm run start
```

(benötigt node.js am Server)

## Deployment an einen statischen Server

Ändernd des _build_-Scripts in _package.json_ auf: `next build && next export`

Ein statischer Build (im Ordner _out_) wird dann ausgeführt via:

```bash
npm run build
```

(siehe <https://nextjs.org/learn/excel/static-html-export>)

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

## Resourcen

Die next.js website hat sehr gute Materialien: <https://nextjs.org>

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
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
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

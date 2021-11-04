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

## Installation

Pakete (beinhalten Unterstützung für TypeScript):

- _react-router-dom_
- _history_

## Setup

Die ganze Anwendung wird in ein `BrowserRouter`-Element eingebettet:

```js
// index.tsx

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
- `<Routes>` - Container für `<Route>`-Elemente
- `<Link>` / `<NavLink>` - werden anstatt von `<a>`-Elementen verwendet

## Einfaches Beispiel

```js
const App = () => {
  return (
    <div>
      <NavLink to="/">home</NavLink>{' '}
      <NavLink to="/about">about</NavLink>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};
```

## Fortgeschrittenes Routing

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

## Navigation aus React

```jsx
const navigate = useNavigate();
// ...
navigate('/');
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

## Styling von Links

Übergeben eines Klassennamens, der auf aktive Links angewendet wird:

```xml
<NavLink to="/" activeClassName="active-link">Home</NavLink>
<NavLink to="/add" activeClassName="active-link">Add</NavLink>
```

# React Router

## React Router

- client-seitiges Routing
- Definieren von Routen
- Navigationslinks
- verschachtelte Routen
- Routenparameter
- Navigation aus dem Code
- aktive Links

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

npm-Paket: _react-router-dom_

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
function App() {
  return (
    <div>
      <NavLink to="/">home</NavLink>{' '}
      <NavLink to="/about">about</NavLink>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
```

## Verschachtelte Routen

```jsx
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/about" element={<AboutView />} />
      <Route path="/shop" element={<ShopView />}>
        <Route index={true} element={<ShopIndex />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
```

## Verschachtelte Routen

Der Output einer Unteroute wird im `<Outlet>` der Elternroute angezeigt:

```jsx
function ShopView() {
  return (
    <div>
      <h1>Shop</h1>
      <NavLink to="/shop">shop index</NavLink>
      <NavLink to="/shop/products">products</NavLink>
      <NavLink to="/shop/cart">cart</NavLink>

      <Outlet />
    </div>
  );
}
```

## Routenparameter

```jsx
<Route
  path="/products/:productId"
  element={<ProductDetails />}
/>
```

```jsx
function ProductDetails() {
  const { productId } = useParams();
  // ...
}
```

## Navigation aus React

```jsx
const navigate = useNavigate();
// ...
navigate('/');
```

## Styling von Links

Übergeben eines Klassennamens, der auf aktive Links angewendet wird:

```xml
<NavLink to="/" activeClassName="active-link">Home</NavLink>
<NavLink to="/add" activeClassName="active-link">Add</NavLink>
```

## Übung

erstelle Routen in der Todo-Anwendung, z.B.:

- `/`
- `/about`
- `/add`
- `/stats`

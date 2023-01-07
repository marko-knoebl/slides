# React Router

## React Router

- client-side routing
- defining routes
- navigation links
- nested routes
- route parameters
- navigation from code
- active links

## Client-side routing

**client-side routing**: navigating between views without leaving the React app

## Client side routing

options:

hash-based client-side routing, e.g.:

- `example.com/#/home`
- `example.com/#/shop/cart`

client-side routing based on on the _history API_, e.g.:

- `example.com/home`
- `example.com/shop/cart`

for the second method, the server needs additional configuration

## Installation

npm package: _react-router-dom_

## Setup

the entire application is enclosed in a `BrowserRouter` element:

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

## Basic router components

- `<Route>` - a component that renders its content when active
- `<Routes>` - a container for `<Route>` elements
- `<Link>` / `<NavLink>` - are used in place of `<a>` elements

## Basic example

```js
function App() {
  return (
    <div>
      <NavLink to="/">home</NavLink>{' '}
      <NavLink to="/about">about</NavLink>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
}
```

## Nested routes

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

## Nested routes

the output of a sub-route is displayed in the `<Outlet>` of the parent route's element:

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

## Route parameters

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

## Navigation from React

```jsx
const navigate = useNavigate();
// ...
navigate('/');
```

## Active link style

styling active links differently:

```jsx
<NavLink
  to="/about"
  className={(arg) =>
    arg.isActive ? 'NavLink NavLink--Active' : 'NavLink'
  }
>
  ...
</NavLink>
```

## Active link style

creating a reusable component:

```jsx
function MyNavLink(
  props: ComponentPropsWithoutRef<typeof NavLink>
) {
  return (
    <NavLink
      {...props}
      className={(arg) =>
        arg.isActive ? 'NavLink NavLink--Active' : 'NavLink'
      }
    />
  );
}
```

## Exercise

create routes in the todo app, e.g.:

- `/`
- `/about`
- `/add`
- `/stats`

# React Router

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

packages (include TypeScript support):

- _react-router-dom_
- _history_

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

## Advanced routing

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

## Route parameters

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

## Navigation from React

```jsx
const navigate = useNavigate();
// ...
navigate('/');
```

## Navigation from React

example:

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

## Styling links

supplying a class name that will be applied to any active link:

```xml
<NavLink to="/" activeClassName="active-link">Home</NavLink>
<NavLink to="/add" activeClassName="active-link">Add</NavLink>
```

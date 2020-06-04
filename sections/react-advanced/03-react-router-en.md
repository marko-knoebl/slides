# React Router

## React Router

**client-side routing**: navigating between views without leaving the React app

## Setup

npm packages:

- `react-router-dom`
- (`@types/react-router-dom`)

## Setup

the entire application is enclosed in a `BrowserRouter` element:

```js
// index.js

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
- `<Switch>` - a container for `<Route>` elements
- `<Link>` / `<NavLink>` - are used in place of `<a>` elements

## Basic example

```js
const App = () => {
  return (
    <div>
      <NavLink to="/slideshow">slideshow</NavLink>{' '}
      <NavLink to="/counter">counter</NavLink>
      <Switch>
        <Route path="/slideshow">
          <Slideshow />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
      </Switch>
    </div>
  );
};
```

(syntax of React Router 5.1)

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

## Styling links

supplying a class name that will be applied to any active link:

```xml
<NavLink to="/" activeClassName="active-link">Home</NavLink>
<NavLink to="/add" activeClassName="active-link">Add</NavLink>
```

## Navigation from React

possibilities:

- render a `<Redirect >` component
- use the history hook

## Navigation from React

```jsx
<Route path="/member-area">
  {username ? <MemberArea /> : <Redirect to="/login" />}
</Route>
```

## Navigation from React

```jsx
import { useHistory } from 'react-router-dom';

const AddTodoView = () => {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    // ...
    // go back to home view
    history.push('/');
  };
  return <form onSubmit={handleSubmit}>...</form>;
};
```

# React Router

---

## React Router

https://reacttraining.com/react-router/

---

## React Router - Setup

```bash
npm install react-router-dom
```

```bash
// TypeScript:
npm install @types/react-router-dom
```

---

## React Router - BrowserRouter

In order to use React Router:  
The entire Application is enclosed in a `BrowserRouter` - Element

```js
import { BrowserRouter } from 'react-router-dom';
[...]

<BrowserRouter>
  <App/>
</BrowserRouter>
```

---

## React Router - defining routes

```js
import { Route } from 'react-router-dom';

<Route path="/about" component={About} />
<Route path="/" exact component={List} />
<Route path="/add" component={AddTodo} />
```

---

## React Router - defining routes

If Props need to be passed:

```jsx
import { Route } from 'react-router-dom';

<Route
  path="/add"
  exact
  render={props => (
    <AddTodo onSubmit={this.handleAddTodo} />
  )}
/>;
```

---

## React Router - Router links

```jsx
import { Link } from 'react-router-dom';

<Link to="/">Home</Link>
<Link to="/add">Add</Link>
```

---

## React Router - Redirects

```jsx
import { Redirect } from 'react-router-dom';

<Route
  path="/home"
  render={props => <Redirect to="/" />}
/>;
```

---

## React Router - route parameters

```jsx
<Route
  path="/todos/:todoId"
  render={props => (
    <div>Current todo: {props.match.params.todoId}</div>
  )}
/>
```

Route parameters may be accessed via _props.match.params_

---

## React Router - Switch

Only the first matching route will be displayed

```jsx
import { Switch } from 'react-router-dom';

<Switch>
  <Route path="/todos/:todoId" component={Todo} />
  <Route path="/" component={NotFound} />
</Switch>;
```

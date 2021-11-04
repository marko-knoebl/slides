# Vue router

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

## Route configuration

```js
// router/index.js

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];
```

## Basic components

```xml
<router-link to="/">Home</router-link>
```

```xml
<router-view />
```

## Passing data

we can pass down data to the route:

```xml
<router-view :todos="todos" />
```

## Route parameters

```js
const routes = [
  {
    path: '/todos/:todoId',
    component: TodoDetailView,
  },
];
```

access the parameter:

```xml
Details of todo: {{ $route.params.todoId }}
```

## Programmatic navigation

```js
this.$router.push('/');
```

## Styling links

active links will receive the `.router-link-active` class

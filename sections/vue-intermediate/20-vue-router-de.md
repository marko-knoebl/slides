# Vue router

## client-seitiges Routing

**client-seitiges Routing**: Navigieren zwischen Ansichten, ohne die Anwendung zu verlassen

## Client side routing

Möglichkeiten:

hash-basiertes Client-seitiges Routing, z.B.:

- `example.com/#/home`
- `example.com/#/shop/cart`

Client-seitiges Routing basierend auf dem _History API_, z.B.:

- `example.com/home`
- `example.com/shop/cart`

Für die zweite Option muss der Server zusätzlich konfiguriert werden

## Routen-Konfiguration

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

## Grundlegende Komponenten

```xml
<router-link to="/">Home</router-link>
```

```xml
<router-view />
```

## Übergeben von Daten

Wir können Daten an die Route übergebn:

```xml
<router-view :todos="todos" />
```

## Routenparameter

```js
const routes = [
  {
    path: '/todos/:todoId',
    component: TodoDetailView,
  },
];
```

Zugriff auf die Parameter:

```xml
Details of todo: {{ $route.params.todoId }}
```

## Navigation aus dem Code heraus

```js
this.$router.push('/');
```

## Styling von Links

aktive Links erhalten die Klasse `router-link-active`

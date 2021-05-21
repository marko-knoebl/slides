# Überblick

## Geschichte

Klassenkomponenten waren vor der Einführung von Hooks (mit React 16.8, Februar 2019) weit verbreitet

Heute verlagert sich der Fokus hin zu Hooks

## Klassenkomponenten vs Hooks

Gründe für die Verwendung von Hooks:

- verringern oft Komplexität
- einfachere Modularität
- vermeiden Probleme mit `this`

Gründe für die Verwendung von Klassenkomponenten:

- Konzepte sind zu Beginn wohl vertrauter
- einfachere Memoisation
- Instanzvariablen (in Klassenkomponenten) sind einfacher als Refs (in Funktionskomponenten)

## Einfaches Beispiel

```jsx
import { Component } from 'react';

class App extends Component {
  render() {
    return <div>Hello, World!</div>;
  }
}

export default App;
```

# Overview

## History

Class components were widely used before the introduction of hooks (with React 16.8, in February 2019)

Today focus is shifting away from class components and towards hooks

## Class components vs hooks

reasons for using hooks:

- reducing complexity
- easier code re-use / modularity
- avoiding problems with `this`

reasons for using class components:

- avoiding problem with outdated state (stale closures)
- instance variables (in class components) are simpler than refs (in function components)

## Class component example

```jsx
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    // ...
    this.state = { name: 'World' };
  }

  render() {
    return <div>Hello, {this.state.name}!</div>;
  }
}

export default App;
```

# Manual project setup

## Rendering an App component

basic example for rendering an App component:

```js
import ReactDOM from 'react-dom';

function App() {
  return <div>Hello World!</div>;
}

const mountNode = document.querySelector('body');
ReactDOM.render(<App />, mountNode);
```

## Manual project setup

for details, see presentation on _JavaScript build systems_

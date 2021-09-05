# Manual project setup

## File structure

https://reactjs.org/docs/faq-structure.html

common approaches:

- grouping by features or routes
- grouping by type (component / reducer / API interface)


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

# Manuelle Projekt-Einrichtung

## Rendern einer App-Komponente

grundlegendes Beispiel für das Rendering einer App-Komponente:

```js
import ReactDOM from 'react-dom';

function App() {
  return <div>Hello World!</div>;
}

const mountNode = document.querySelector('body');
ReactDOM.render(<App />, mountNode);
```

## Manuelle Projekt-Einrichtung

für Details, siehe die Präsentation zu _JavaScript build systems_

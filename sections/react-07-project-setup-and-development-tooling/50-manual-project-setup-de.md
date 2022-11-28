# Manuelle Projekt-Einrichtung

## Rendern einer App-Komponente

grundlegendes Beispiel für das Rendering einer App-Komponente:

```tsx
import ReactDOM from 'react-dom/client';

function App() {
  return <div>Hello World!</div>;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
```

## Manuelle Projekt-Einrichtung

für Details, siehe die Präsentation zu _JavaScript build systems_

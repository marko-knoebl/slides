# Manual project setup

## Rendering an App component

basic example for rendering an App component:

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

## Manual project setup

for details, see presentation on _JavaScript build systems_

# state Hook

## state Hook

Die Funktion `useState` kann zu Beginn der Komponentenfunktion (wiederholt) aufgerufen werden. Sie hat die folgende Signatur:

- sie nimmt einen Parameter entgegen - den initialen Zustand
- sie gibt bei jedem Aufruf zwei Werte zurück: Den aktuellen Zustand sowie eine Funktion, mit der der Zustand neu gesetzt werden kann

```js
const App = () => {
  const [count, setCount] = useState(0);

  return ...
};
```

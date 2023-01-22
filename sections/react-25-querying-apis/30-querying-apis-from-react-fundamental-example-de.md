# APIs aus React abfragen: grundlegendes Beispiel

## APIs aus React abfragen: grundlegendes Beispiel

```js
const [data, setData] = useState(null);
async function loadData() {
  const newData = await fetchData();
  setData(newData);
}
```

```jsx
<button onClick={loadData}>
  load some data from an API
</button>
```

## APIs aus React abfragen: grundlegendes Beispiel

Aufgabe: In unserer bestehenden Todo-Anwendung, lade beim Klick eines Buttons Todos von diesem API:

https://jsonplaceholder.typicode.com/todos

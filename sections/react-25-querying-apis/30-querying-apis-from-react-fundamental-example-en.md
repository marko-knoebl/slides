# Querying APIs from React: fundamental example

## Querying APIs from React: fundamental example

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

## Querying APIs from React: fundamental example

Task: in our todo application, load todos from this API upon a button click:

https://jsonplaceholder.typicode.com/todos

# Fetch - Error handling

## Error handling

```js
fetch('/')
  .then(response => response.text())
  .then(console.log);
```

Various errors may occur here:

- browser is offline (no reply)
- server responds with a 404 or similar
- received non-text or empty reply

## Error handling: basic version

```js
fetch('/')
  .then(response => response.text())
  .catch(() => console.log('some error occured'))
  .then(console.log);
```

## Error handling: checking status

By default a reply with an error code (e.g. 404 or 500) is considered a success.

```js
fetch('/')
  .then(response => {
    if (response.ok) {
      handleReply(response);
    } else {
      console.log('Network response was not ok');
    }
  })
  .catch(() => {
    console.log('Network error');
  });
```

## Error handling: checking status

```js
const handleReply = response => {
  response
    .json()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log('Could not parse answer as json');
    });
};
```

## Example: fetching todos - basic

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .catch(error => {
    console.log('error when getting todos');
  })
  .then(updatePageWithNewTodos);
```

## Example: fetching todos - advanced

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    if (!response.ok) {
      throw response.statusText;
    } else {
      jesponse.json().then(updatePageWithNewTodos);
    }
  })
  .catch(error => console.log('unable to parse data'))
  .then(updatePageWithNewTodos);
```

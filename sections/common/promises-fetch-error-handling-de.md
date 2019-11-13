# Fetch - Fehlerbehandlung

## Fehlerbehandlung

```js
fetch('/')
  .then(response => response.text())
  .then(console.log);
```

Verschiedene Fehler können hier auftreten:

- Browser ist offline (keine Antwort)
- Server antwortet mit 404 oder ähnlicher Meldung
- Antwort ist leer oder beinhaltet etwas anderes als text

## Fehlerbehandlung: grundlegende Version

```js
fetch('/')
  .then(response => response.text())
  .catch(() => console.log('some error occured'))
  .then(console.log);
```

## Fehlerbehandlung: Überprüfen des Status

Standardmäßig wird eine Antwort mit einem Fehlercode (z.B. 404 oder 500) auch als Erfolg angesehen.

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

## Fehlerbehandlung: Überprüfen des Status

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

## Beispiel: Todos - grundlegend

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .catch(error => {
    console.log('error when getting todos');
  })
  .then(updatePageWithNewTodos);
```

## Beispiel: Todos - fortgeschritten

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

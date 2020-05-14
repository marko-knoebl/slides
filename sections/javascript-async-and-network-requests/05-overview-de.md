# Überblick

## Überblick

Verbreitete Möglichkeiten für asynchrone Logik:

- Callbacks
- Promises (moderner Zugang)

## Überblick

Möglichkeiten, um Netzwerkanfragen zu senden:

- **fetch** (Promises)
- **axios** (Promises)
- jQuery
- XMLHttpRequest

## Überblick

Anfragen mit axios (Promise) und jQuery (Callback):

```js
const url = 'https://jsonplaceholder.typicode.com/todos';

axios(url).then((res) => console.log(res.data));

jquery.getJSON(url, (data) => console.log(data));
```

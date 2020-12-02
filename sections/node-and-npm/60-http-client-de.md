# HTTP client

## Abfragen einer Website

"low-level" (einzelne TCP-Pakete):

```js
import http from 'http';

http.get('http://www.google.com', (responseStream) => {
  responseStream.setEncoding('latin1');
  responseStream.on('data', console.log);
  responseStream.on('error', console.error);
});
```

## Übung

Übung: rufe die Google-Website ab und schreibe Stücke davon in eine JSON-Array

## Libraries

Libraries für HTTP-Aufrufe:

- Fetch-Libraries (_node-fetch_, _isomorphic-fetch_)
- axios

## Node-fetch

```bash
npm install node-fetch
```

```js
import fetch from 'node-fetch';

fetch('https://google.com')
  .then((res) => res.text())
  .then((content) => console.log(content));
```

## Übungen

- rufe mehrere Websites ab (siehe _learnyounode_: juggling async)
- Anzahl der Goggle-Suchresultate für ein bestimmtes Thema

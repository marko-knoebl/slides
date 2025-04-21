# Same-origin Policy und CORS

## Same-origin Policy

Same-origin Policy: Sicherheitsregel im Browser:

Standardmäßig darf eine Seite von einer Website (z.B. _www.example.com_) keine Requests an eine andere Website (z.B. _api.example.com_) schicken

## Same-origin Policy

Beispiel: Gehe auf eine Website (z.B. Wikipedia) öffne die JavaScript-Konsole des Browsers und sende einen request zu einer anderen Website, z.B. via `fetch("https://google.com")`

Resultat: der Request wird verhindert

Grund: um das Ausnützen von cookie-basierter Authentifizierung durch Angreifer zu verhindern

## Cross-Origin resource sharing

Die angefragte Website kann _Cross-Origin resource sharing (CORS)_ für manche URLs oder für alle URLs erlauben

Das geschieht mit dem HTTP-Header "Access-Control-Allow-Origin"

Beispiel: die _jsonplaceholder_ API erlaubt CORS für alle Websites - also funktioniert `fetch("https://jsonplaceholder.typicode.com/todos")` von jeder Seite

## CORS mit express

CORS in express aktivieren:

```js
import cors from 'cors';
```

Erlauben von Requests von allen Domains:

```js
app.use('/api', cors());
```

Erlauben von Requests von einer bestimmten Domain:

```js
app.use('/api', cors({ origin: 'https://example.com' }));
```

# Promises

## Promises

Promise: JavaScript-Klasse, die zukünftige Resultate repräsentiert

werden intern verwendet, wenn `async` / `await` eingesetzt werden

## Promises

wir können auf Promises zugreifen, wenn wir "vergessen", auf ein asynchrones Resultat zu warten:

```js
// a will be a promise
const a = fetch('...');

// b will be the actual result
const b = await a;
```

## Promises

Beispiel aus der echten Welt:

Wir bestellen bei einem Fast-Food-Restaurant und erhalten folgenden Bon:

```txt
Bestellung #42:

- Cheeseburger
- kleine Pommes

Die Bestellung wird - sobald bereit - zu Ihrem Tisch gebracht.
```

Der Bon ist ein "Promise" - eine Repräsentation eines zukünftigen Ergebnisses

## Promises

warten auf das _resolven_ eines Promises:

- `.then()`
- `await`

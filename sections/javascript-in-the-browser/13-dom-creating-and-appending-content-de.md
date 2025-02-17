# DOM: Elemente erstellen und anhängen

## DOM: Elemente erstellen und anhängen

- `document.createElement()`
- `element.append(...)`
- `element.remove()`
- `element.innerHTML`

## Elemente erstellen und anhängen

Beispiel: Erstellen eines Paragraphen mit einem Link

Vorlage:

```html
<p>
  I'm learning <a href="https://example.com">JavaScript</a>.
</p>
```

```js
let p = document.createElement('p');

let link = document.createElement('a');
link.href = 'https://example.com';
link.textContent = 'JavaScript';

p.append("I'm learning ", link, ".");
```

Das neue Element (`p`) kann in das bestehende Dokument eingefügt werden.

## Elemente erstellen und anhängen

vorheriges Beispiel mit `innerHTML`:

```js
let p = document.createElement('p');
p.innerHTML =
  'I\'m learning <a href="https://example.com">JavaScript</a>.';
```

## Elemente erstellen und anhängen

Warum nicht immer `innerHTML` verwenden?

- kann ein Angriffsziel sein (Code Injection / XSS)
- Event-Listener können nicht hinzugefügt werden

## Gefahren von innerHTML

Die Verwendung von `innerHTML` ist gefährlich, wenn Inhalte von Benutzern bereitgestellt werden.

Beispiel: ein böswilliger Benutzer hat sich mit folgenden Daten registriert:

- Vorname: `John`
- Nachname: `Doe`
- Spitzname: `<script>prompt("Enter your credit card number:")</script>`

Wenn wir `innerHTML` verwenden, um den Spitznamen für andere Benutzer anzuzeigen, wird das Script in deren Browsern ausgeführt.

Bemerkung: die Verwendung von `textContent` bzw. `innerText` ist nicht gefährlich

## Gefahren von innerHTML

Möglichkeiten, um Angriffe zu verhindern:

Vermeiden von `innerHTML`

oder

"escapen" von Inhalten, die aus unsicheren Quellen kommen

## Gefahren von innerHTML

"Escapen" von Inhalten:

unsicherer String: `<script>...</script>`

"escaped" string mit HTML Entities: `&lt;script&gt;...&lt;/script&gt;`

## Übungen

- Erstelle ein Schachbrett
- Erstelle eine statische Todo-Liste

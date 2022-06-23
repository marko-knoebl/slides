# Tagged Template strings

## Tagged Template Strings

**Tagged** Template Strings ermöglichen zusätzliche Verarbeitung, wenn Werte eingebunden werden

Beispiele für Verwendungszwecke:

- "Escaping" von Werten aus unsicheren Quellen
- Anpasen der Einrückung
- Einbinden von Stilen in React
- ...

## Tagged Template Strings

Beispiel: "Escaping" von HTML:

```js
import { safeHtml } from 'common-tags';

const message = 'I <3 U';

const post = safeHtml`
  <div>${message}</div>
`;
```

Ergebnis:

```html
<div>I &lt;3 U</div>
```

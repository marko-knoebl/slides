# JavaScript-Dateien ausführen

## JavaScript-Dateien ausführen

Zwei wichtige Möglichkeiten:

Einbinden in eine HTML-Seite, aufrufen der Seite im Browser:

```html
<script src="myscript.js"></script>
```

Direktes Ausführen mittels node.js:

```bash
node myscript.js
```

## JavaScript-Dateien ausführen

Einbinden in HTML-Seite:

traditionelle Möglichkeit - erlaubt auch Entwicklung im lokalen Dateisystem:

```html
<script src="myscript.js"></script>
```

moderne Möglichkeit - ermöglicht _imports_ in JavaScript - muss auf einem Server gehostet sein (kann auch ein lokaler Server sein)

```html
<script src="myscript.js" type="module"></script>
```

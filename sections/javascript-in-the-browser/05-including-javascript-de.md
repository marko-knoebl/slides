# Einbinden von JavaScript in HTML-Dokumente

## Einbinden von JavaScript in HTML-Dokumente

Möglichkeiten:

intern, innerhalb des HTML-Codes:

```html
<script type="module">
  console.log('hallo welt');
</script>
```

extern, in einer separaten Datei:

```html
<script src="main.js" type="module"></script>
```

## Bedeutung von type="module"

"ältere" Version des Einbindens von JS:

```html
<script></script>
```

"moderne" Version:

```html
<script type="module"></script>
```

## Bedeutung von type="module"

Auswirkungen der Verwendung von `type="module"`:

- JS wird erst ausgeführt, wenn das HTML-Dokument vollständig geladen und bereit ist (JS-Ausführung ist "deferred")
- JS wird im "strict mode" ausgeführt (verbietet z.B. nicht deklarierte Variablen)
- Import-/Export-Funktionalität ist aktiviert

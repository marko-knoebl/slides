# Struktur eines HTML-Dokuments

## Grundlegende HTML-Struktur

In VS Code: Codeschnipsel `html:5`

## Grundlegende HTML-Struktur

```html
<!DOCTYPE html>
```

Deklariert die Datei als HTML(5)-Dokument

## Grundlegende HTML Struktur

- `<html>`: beinhaltet das ganze Dokument; oft ist z.B. `lang="de"` oder ähnliches gesetzt
- `<head>`: beinhaltet Informationen wie Dokumenttitel, Zeichensatz, ...
- `<body>`: die eigentlichen Inhalte - das, was im Browserfenster erscheint

## Einträge im head

- `title`
- `meta`
- favicon
- stylesheet
- scripts

## title

Dokumenttitel (erscheint in der Fensterleiste)

```html
<title>my website</title>
```

## meta

zum Einbinden verschiedener Metadaten über das Dokument

## meta: charset

Es sollte heutzutage immer `<meta charset="UTF-8" />` angegeben sein, dann können generell beliebige Unicode-Zeichen verwendet werden.

```html
<button>😊</button>
```

## Besondere Zeichen

Um die folgenden Zeichen in einem HTML-Dokument darzustellen, sollten sie immer "escaped" werden:

- `<` wird zu `&lt;`
- `>` wird zu `&gt;`
- `&` wird zu `&amp;`

Folgende Zeichen müssen in HTML-Attributen escaped werden:

- `"` wird zu `&quot;`
- (`'` wird zu `&apos;`, wenn das HTML-Attribut durch `'` begrenzt wird)

## meta: viewport

Sollte auf allen Websites verwendet werden, um die Browser-Skalierung zurückzusetzen

```html
<meta name="viewport" width="device-width" />
```

Hintergrund:  
In den Anfängen des mobilen Web (vor responsive Design) wurden Websites von Browsern of verkleinert dargestellt. Mit obigem Code wird dies verhindert.

https://viewportsizes.com/mine

## meta: description

Kann von Suchmaschinen verwendet werden, um eine Seitenzusammenfassung anzuzeigen  
Standardtitel für Lesezeichen

```html
<meta
  name="description"
  content="Wikipedia is a free online encyclopedia, ..."
/>
```

## meta: keywords

Kann von Suchmaschinen verwendet werden

```html
<meta name="keywords" content="HTML,javascript" />
```

## meta: http-equiv="X-UA-Compatible"

Ist bei Internet Explorer <= 10 relevant; führt zur Verwendung der modernsten Version der Rendering-Engine

## favicon

Icon, das im Tab der Website angezeigt wird

```html
<link
  rel="icon"
  sizes="16x16"
  href="favicon_16.png"
  type="image/png"
/>
```

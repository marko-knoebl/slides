# HTML Grundlagen

## HTML-Syntax

HTML besteht aus verschachtelten **Elementen**, die von **Tags** begrenzt werden.

```html
<h1>Dies ist eine Überschrift</h1>
```

## HTML-Syntax

Manche HTML-Elemente haben keinen Inhalt, zB der br-Tag, der einen Zeilenumbruch darstellt:

<!-- prettier-ignore -->
```html
<br>
```

## HTML-Syntax: Attribute

HTML-Tags können Attribute der folgenden Form zugewiesen werden:

```html
<img src="portrait.png" alt="Portraitbild des Benutzers" />
```

## HTML-Tags

Beispiele:

- h1-h6
- p
- em
- strong
- br
- ul & li
- img
- a

## Ausprobieren

https://codepen.io

(Alternativen: https://jsfiddle.net, https://plnkr.co, https://codesandbox.io)

## Kommentare

```html
<!-- dies ist ein Kommentar -->
```

## Grundlegende HTML-Struktur

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

In VS Code: Codeschnipsel `html:5`

## Besondere Zeichen

Um die folgenden Zeichen in einem HTML-Dokument darzustellen, sollten sie immer "escaped" werden:

- `<` wird zu `&lt;`
- `>` wird zu `&gt;`
- `&` wird zu `&amp;`

Folgende Zeichen müssen in HTML-Attributen excaped werden:

- `"` wird zu `&quot;`
- (`'` wird zu `&apos;`, wenn das HTML-Attribut durch `'` begrenzt wird)

## Besondere Zeichen

Es sollte heutzutage immer `<meta charset="UTF-8" />` angegeben sein, dann können generell beliebige Unicode-Zeichen verwendet werden.

```html
<button>😊</button>
```

## Viewport

```html
<meta
  name="view&quot;port"
  content="width=device-width, initial-scale=1"
/>
```

https://viewportsizes.com/mine

## Browser tools (F12)

Übung: Bestehende Website in Browser Tools begutachten

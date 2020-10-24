# Besondere Zeichen und Whitespace

## Besondere Zeichen

Um die folgenden Zeichen in einem HTML-Dokument darzustellen, sollten sie immer "escaped" werden:

- `<` wird zu `&lt;`
- `>` wird zu `&gt;`
- `&` wird zu `&amp;`

Folgende Zeichen müssen in HTML-Attributen escaped werden:

- `"` wird zu `&quot;`
- (`'` wird zu `&apos;`, wenn das Attribut mit `'` begrenzt wird)

## Whitespace

In HTML wird jede Abfolge von "Whitespace"- Zeichen (Leerzeichen, Zeilenumbrüche, Tabs) als einzelnes Leerzeichen interpretiert.

## Whitespace

Die folgenden Beispiele sin äquivalent (und stellen ein einzelnes Leerzeichen zwischen den Bildern dar):

<!-- prettier-ignore-start -->

```html
<img src="foo.png" /> <img src="bar.png" />
```

```html
<img src="foo.png" />    <img src="bar.png" />
```

```html
<img src="foo.png" />

<img src="bar.png" />
```

<!-- prettier-ignore-end -->

## Whitespace

Beispiel für mehrzeilige Formatierung, falls wir Elemente ohne Leerzeichen dazwischen darstellen wollen:

```html
<img src="image1.png" /><img src="image2.png" /><img
  src="image3.png"
/>
```

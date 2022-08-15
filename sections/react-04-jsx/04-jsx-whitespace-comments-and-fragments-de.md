# JSX: Whitespace, Kommentare und Fragmente

## Whitespace

in HTML sind die folgenden Beispiele äquivalent (und enthalten je ein Leerzeichen zwischen den Bildern):

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

in JSX gilt:

- Whitespace zwischen Elementen innerhalb einer Zeile wird als einzelnes Leerzeichen interpretiert
- Whitespace zwischen Elementen, der über mehrere Zeilen geht, wird ignoriert

<!-- prettier-ignore-start -->

Einzelnes Leerzeichen:

```xml
<img src="foo.png" />     <img src="bar.png" />
```

Kein Leerzeichen:

```xml
<img src="foo.png" />
<img src="bar.png" />
```

<!-- prettier-ignore-end -->

## Whitespace

"Erzwungenes" Einfügen eines Leerzeichens in JSX:

<!-- prettier-ignore -->
```jsx
<p>
  long multi-line text where spaces{' '}
  <strong>are wanted</strong>
</p>
```

## Escapes

Sonderzeichen wie `<` können mittels JavaScript eingefügt werden:

```jsx
<p>
  if a {'<'} max {'&'} a {'>'} min then ...
</p>
```

## Kommentare

Kommentare können als JavaScript-Kommentare geschrieben werden:

```jsx
<div>Hello World!{/* this is a comment */}</div>
```

## Fragmente

Erlauben es einer Komponente, mehrere Elemente zurückzugeben (anstatt eines einzelnen Elements)

```jsx
return (
  <>
    <td>Hello</td>
    <td>World</td>
  </>
);
```

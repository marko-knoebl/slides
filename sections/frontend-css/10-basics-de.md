# CSS

## CSS

Standard Stil-Sprache des webs: definiert Layout und Stil von HTML-Seiten

## Stile auf HTML-Elemente anwenden

```html
<h1 style="color: grey; font-size: 30px">Hello</h1>
```

## Stylesheets einbinden

üblicherweise im `head`:

```html
<link rel="stylesheet" href="style.css" />
```

## CSS-Beispiel

```css
/* comment */
h1 {
  font-family: sans-serif;
  color: grey;
}

#home-button {
  color: white;
}
```

## CSS-Syntax

- Selektoren
- Properties

## CSS-Selektoren

- Universalselektor: `*`
- Tag-Selektor: `h1`
- Klassen-Selektor: `.important`
- ID-Selektor: `#home-button`

## CSS-Selektoren: Priorität

Falls sich zwei CSS-Attribute widersprechen, "gewinnt":

- das Attribut mit dem _spezifischeren_ Selektor
- bzw. bei gleicher Spezifizität, das CSS-Statement, das im Code _später_ auftritt

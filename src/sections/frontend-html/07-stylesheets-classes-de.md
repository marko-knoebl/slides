# Stylesheets und Klassen

## Stylesheets

Möglichkeit, vorgefertigte Stile einzubinden und in mehreren HTML-Dokumenten zu übernehmen

Stylesheets können aus vorgegebenen Libraries eingebunden werden (z.B. bootstrap) oder selbst erstellt werden

## Stylesheets - Einbindung

oft im head:

```html
<link rel="stylesheet" href="style.css" />
```

## Stylesheets - Beispiel Bootstrap

Einbinden:

```html
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
/>
```

## Verwendung von Bootstrap

- ohne eigenes Zutun: Standardstil von Tags wie `body`, `h1`, `button`, ... verändert sich
- für weitere Funktionalität: Das Attribut `class` kann gesetzt werden

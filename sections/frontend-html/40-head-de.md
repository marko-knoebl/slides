# Head

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

## meta: viewport

Sollte auf allen Websites verwendet werden, um die Browser-Skalierung zurückzusetzen

```html
<meta name="viewport" width="device-width" />
```

Hintergrund:  
In den Anfängen des mobilen Web (vor responsive Design) wurden Websites von mobilen Browsern of verkleinert dargestellt. Mit obigem Code wird dies verhindert.

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

## favicon

Icon, das im Tab der Website angezeigt wird:

```html
<link
  rel="icon"
  sizes="32x32"
  href="favicon_32.png"
  type="image/png"
/>
```

ohne einen expliziten Link suchen Browser nach _favicon.ico_

# Web components

## Web components

Web components = benutzerdefinierte Elemente: Können mittels JavaScript erstellt und wie reguläre HTML-Elemente verwendet werden

## Web components

Beispiel: Fußzeile, die auf mehreren Seiten verwendet werden kann

```js
<my-footer></my-footer>
```

## Web components

Beispiel: Elemente, die eine Navigationsleiste bilden

```js
<my-navbar>
  <my-logo></my-logo>
  <my-navbar-item>
    <a href="...">Startseite</a>
  </my-navbar-item>
  <my-navbar-item>
    <a href="...">Über uns</a>
  </my-navbar-item>
</my-navbar>
```

## Web components

Beispiel: Kartenansicht mit verschiedenen Konfigurationsoptionen

```js
<my-map-view lat="48.2" lon="17.5" zoom="8"></my-map-view>
```

## Web components

Beispiel: E-Mail-Liste

```js
<my-email-list>
  <my-email from="..." to="..." title="..."></my-email>
  <my-email from="..." to="..." title="..."></my-email>
</my-email-list>
```

## Web components: Funktionalitäten

Relativ einfach zu implementieren:

- benutzerdefinierte Stile mit "Scoping"
- Inhalte an Elemente übergeben (Slots)
- Daten über statische Properties übergeben
- Benutzerdefinierte Ereignisse (z.B. benutzerdefinierter Tastendruck, Wertänderung, andere Interaktionen)

Komplizierter (ohne zusätzliche Tools):

- Komponenten, die sich im Laufe der Zeit ändern (z.B. aufgrund von sich ändernden Eigenschaften oder Benutzerinteraktionen)

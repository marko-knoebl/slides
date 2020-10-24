# Accessibility

## Accessibility

Strategien, um Websites für möglichst viele Menschen verwendbar zu machen

Relevante Gruppen:

- Menschen mit Sehbehinderungen
- Menschen mit Motorischen Einschränkungen
- Menschen mit Hörbehinderungen

Strategien:

- Screen Reader
- Websitenavigation via Tastatur
- Untertitel

## Unterstützung von Screen Readern

- Verwendung semantischer HTML Elemente (z.B. `button` und `section` statt `div`)
- Sinnvolle Texte auf Links bzw Buttons
  Schlechtes Beispiel: Klicken Sie [hier](https://en.wikipedia.org/wiki/Accessibility), um mehr zum Thema _Accessibility_ zu erfahren
  Gutes Beispiel: Erfahren Sie [mehr zum Thema Accessibility](https://en.wikipedia.org/wiki/Accessibility)
- Zugeordnete Label für Eingabefelder
- Alternativtext für Bildinhalte

## Beispiel: Alternativtext für Bildinhalte

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex:
    A two legged dinosaur standing upright, with small arms,
    and a large head with lots of sharp teeth."
  title="The Mozilla red dinosaur"
/>
```

## Unterstützung von Seitennavigation via Tastatur

- Verwendung semantischer Elemente (z.B. `button`, `a`, `form`, `input`)

## Resourcen

- [MDN: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)

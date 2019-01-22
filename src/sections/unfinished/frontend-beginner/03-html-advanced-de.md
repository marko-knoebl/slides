# HTML Fortgreschritten

---

## Semantisches HTML

- section
- article
- footer
- nav
- aside

---

## Tabellen

- table, tr
- th, td
- border-collapse
- caption
- colspan

---

## Tabellen: Übung Öffnungszeiten

---

## Tabellen: verwenden von Pseudoklassen

- `:hover`: Der Stil einer Tabellenzeile soll sich ändern, wenn wir die Maus darüber bewegen
- `:nth-child`: Die Zeilen sollen gestreift dargestellt werden

---

## Formulare

Beispiel:

```html
<form>
  <label for="firstname">First Name:</label>
  <input id="firstname" />
  <label for="lastname">Last Name:</label>
  <input id="lastname" />
</form>
```

---

## Input-Attribute

- placeholder
- autofocus
- autocomplete
- size

---

## Input-Typen

Standardwert: `text`

Weitere Möglichkeiten:

- `checkbox`
- `radio`
- `file`
- `password`
- `date` (HTML 5)
- `email`(HTML 5)
- `number` (HTML 5)
- `search` (HTML 5)

---

## autocomplete

Das `autocomplete`-Attribut kann für die Autovervollständigung hilfreich sein, z.B.:

- `name`
- `given-name`
- `email`
- `username`
- ...

---

## Validierung

- `required`
- `minlength`
- `maxlength`

CSS-Pseudoklassen: `:valid`, `:invalid`

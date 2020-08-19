# Formulare und Buttons

## Formulare und Buttons

Elemente:

- `button`
- `form`
- `input`
- `label`
- `select`
- ...

## Beispiel für ein Formular

```html
<form action="/register" method="post">
  <div>
    <label
      >first name: <input type="text" name="firstname"
    /></label>
  </div>
  <div>
    <label
      >last name: <input type="text" name="lastname"
    /></label>
  </div>
  <button type="submit">register</button>
</form>
```

## Button

```html
<button>press me!</button>
```

## Input

```html
<input />
```

```html
<input type="password" />
```

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

## Input-Attribute

- placeholder
- autofocus
- autocomplete
- size

## autocomplete

Das `autocomplete`-Attribut kann für die Autovervollständigung hilfreich sein, z.B.:

- `name`
- `given-name`
- `email`
- `username`
- ...

## Validierung

- `required`
- `minlength`
- `maxlength`

CSS-Pseudoklassen: `:valid`, `:invalid`

## Validierung - Beispiel

```html
<input
  type="number"
  min="-5"
  max="5"
  step="0.1"
  value="1"
/>
```

## Input und Label

Inputs sollten beschreibende Labels haben:

```html
<label>
  enter your name:
  <input />
</label>
```

oder

```html
<label for="name-input" /> <input id="name-input" />
```

## Formulare

```html
<form action="/register" method="post">
  first name: <input type="text" name="firstname" /><br />
  last name: <input type="text" name="lastname" /><br />
  <button type="submit">register</button>
</form>
```

## Formulare

Beim Abschicken des Formulars wird _post_-Request mit etwa folgendem Inhalt an die Adresse _/register_ gesendet:

```txt
firstname=John&lastname=Doe
```

## Button-Typen

Button-Typen:

- _submit_ (**standard**): beim Klicken werden Formulardaten an den Server übermittelt
- _button_
- _reset_

## Weitere Formular-Elemente

- textarea
- select

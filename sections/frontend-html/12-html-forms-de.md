# Formulare

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

## Input-Attribute

- placeholder
- autofocus
- autocomplete
- size

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

## Aktionen bei Formularen

```html
<form action="login.php" method="post">
  <input name="username" /><br />
  <input name="password" type="password" /><br />
  <button>log in</button>
</form>
```

Bei Betätigen des Buttons sendet das Formular einen post-Request an die Adresse _login.php_ und übermittelt die Daten _username_ und _password_

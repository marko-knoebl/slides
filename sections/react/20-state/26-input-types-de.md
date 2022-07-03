# Input-Typen

## Input-Typen

- text
- textarea
- checkbox
- dropdown
- numerisch
- ...

## Input-Typen

Text und Textarea:

```jsx
<input
  value={title}
  onChange={(event) => setTitle(event.target.value)}
/>
```

## Input-Typen

Checkbox:

```jsx
<input
  type="checkbox"
  checked={accept}
  onChange={(event) => setAccept(event.target.checked)}
/>
```

## Numerische Inputs

Grundlegender Rat für numerische Inputs:

speichere den Inhalt als String (nicht als Zahl)

Grund: mögliche Inhalte eines Numerischen Inputs (während der Benutzer tippt):

```txt
""
"-"
"-3"
"-3."
"-3.0"
```

## Numerische Inputs

Beispiel für numerischen Input mit direkten "Auswirkungen":

https://codesandbox.io/s/numeric-input-direct-results-5vde88

## Andere Input-Typen

siehe https://reactjs.org/docs/forms.html

## Übung: Newsletter-Formular

Erstelle eine Komponente namens `NewsletterSignup` mit drei State-Einträgen:

`email`, `repeatEmail`, `acceptTerms`

Demo einer vollständigen Version: https://codesandbox.io/s/newsletter-form-pvgs6l

Bemerkung: aktivieren / deaktivieren eines buttons in JSX: `<button disabled={...}>...</button>`

## Übung: Newsletter-Formular

Extra: füge ein Dropdown hinzu, mit dem eine Sprache für den Newsletter ausgewählt werden kann

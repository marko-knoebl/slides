# Formulare und Inputs

## Formular-Aktionen

Standardverhalten eines Formulars beim Submit: Direktes Senden der Daten an den Server

Ersetzen des Standardverhaltens:

```jsx
<form
  onSubmit={(event) => {
    event.preventDefault();
    // handle submit with custom logic
  }}
>
  ...
</form>
```

## Input Labels

Hinzufügen eines Labels für einen Input, ohne IDs zu verwenden:

```jsx
<label>
  first name:
  <input
  // ...
  />
</label>
```

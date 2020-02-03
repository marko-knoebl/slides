# Inputs & Formulare

## Inputs

Besonderheit von input-Elementen:

Ihre Properties (insbesondere `.value`) können durch User-Interaktionen direkt geändert werden

Es gibt damit Aspekte des UI-Zustands, die nicht im state erfasst sind.

## Inputs

So können wir den Value eines Inputs im State erfassen:

```jsx
<input
  value={inputText}
  onChange={event => {
    setInputText(event.target.value);
  }}
/>
```

## Formulare

Standardverhalten eines Formulars beim Submit: Direktes Senden der Daten an den Server

Ersetzen des Standardverhaltens:

```jsx
<form
  onSubmit={event => {
    event.preventDefault();
    // handle submit
  }}>
  <input />
</form>
```

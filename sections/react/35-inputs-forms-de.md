# Inputs & Formulare

## Inputs

Besonderheit von input-Elementen:

Ihre Properties (insbesondere `.value`) können durch User-Interaktionen direkt geändert werden

Es gäbe damit Aspekte des UI-Zustands, die von Haus aus nicht im state erfasst wären

## Inputs

So können wir den Value eines Inputs im State erfassen:

```jsx
<input
  value={inputText}
  onChange={(event) => {
    setInputText(event.target.value);
  }}
/>
```

## Formular-Aktionen

Standardverhalten eines Formulars beim Submit: Direktes Senden der Daten an den Server

Ersetzen des Standardverhaltens:

```jsx
<form
  onSubmit={(event) => {
    event.preventDefault();
    // handle submit
  }}
>
  <input />
</form>
```

## Formular-Validierung

"manuelle" Validierung:

```js
const NewsletterRegistration = () => {
  const [email, setEmail] = useState('');
  const [emailEdited, setEmailEdited] = useState(false);
  const emailInvalid = !isEmail(email);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(email);
      }}
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={() => setEmailEdited(true)}
      />
      <button disabled={emailInvalid}>subscribe</button>
      {emailEdited && emailInvalid ? (
        <div>invalid email</div>
      ) : null}
    </form>
  );
};

const isEmail = (email) =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

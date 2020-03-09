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

## Formular-Aktionen

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

## Formular-Validierung

"manuelle" Validierung:

```js
const NewsletterRegistration = () => {
  const [email, setEmail] = useState('');
  const [emailEdited, setEmailEdited] = useState(false);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(email);
      }}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        onBlur={() => setEmailEdited(true)}
      />
      <button disabled={!emailValid}>subscribe</button>
      {emailEdited && !isEmail ? (
        <div>invalid email</div>
      ) : null}
    </form>
  );
};

const isEmail = email =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

## Formulare mit "Formik"

npm-Paket: _formik_

stellt Komponenten (_Form_, _Field_, ...) bereit, die Code verinfachen können

kann besonders für komplexere Formulare nützlich sein

## Formulare mit "Formik"

```js
import { Formik, Form, Field, ErrorMessage } from 'formik';

const NewsletterRegistration = () => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={values => console.log(values)}
    validate={values => {
      const errors = {};
      if (!isEmail(values.email)) {
        errors.email = 'invalid email';
      }
      return errors;
    }}>
    {props => (
      <Form>
        <Field type="email" name="email" />
        <button disabled={!props.isValid}>subscribe</button>
        <ErrorMessage name="email" component="div" />
      </Form>
    )}
  </Formik>
);

const isEmail = email =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

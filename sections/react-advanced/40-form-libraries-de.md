# Formular-Libraries

## Formular-Libraries

Beispiele:

- react-hook-form (basiert auf einem React Hook)
- formik (basiert auf React-Komponenten)

Funktionalität:

- **Validierung**
- Verwalten von Formulardaten
- Vereinfachung des Submit-Handlers

## react-hook-form

_react-hook-form_ behält Inputdaten nicht im React State

Vorteile: schneller, einfacher

Nachteile: weicht von üblichen React-Konzepten ab (benutzt _refs_ anstatt _state_)

## react-hook-form

```js
import { useForm } from 'react-hook-form';

const NewsletterSignup = () => {
  const { register, errors, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input
        name="email"
        ref={register({
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      <button>sign up for newsletter</button>
      {errors.email ? <div>invalid email</div> : null}
    </form>
  );
};
```

Bemerkung: `register()` verwendet eine [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) um auf das input-Element zuzugreifen

## react-hook-form: register

Die `register`-Funktion kann Parameter für die Validierung erhalten:

- `required`
- `min`, `max`
- `minLength`, `maxLength`
- `pattern`
- `validate`

## react-hook-form: errors

Das Objekt `errors` gibt Fehler für registrierte Inputs mit einer _name_-Property aus

```jsx
<input name="email" ref={register(/*...*/)}>
```

```jsx
errors.email ? <div>invalid email</div> : null;
```

## react-hook-form: handleSubmit

`handleSubmit` validiert Formulardaten und gibt diese an eine Funktion weiter, wenn sie gültig sind

```jsx
<form
  onSubmit={handleSubmit((data) => {
    console.log(data.email);
  })}
>
  ...
</form>
```

## react-hook-form: mode

```js
useForm({ mode: 'onSubmit' });
```

mögliche Modes:

- `onSubmit` (Standard)
- `onBlur`
- `onTouched`
- `onChange`
- `all`

## react-hook-form: Tests

Beim Testen im Zusammenhang mit _react-hook-form_ muss ein entsprechendes Setup erfolgen:

```bash
npm install mutationobserver-shim
```

```js
// setupTests.js
import 'mutationobserver-shim';
```

## formik

```js
import { Formik, Form, Field, ErrorMessage } from 'formik';

const NewsletterRegistration = () => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={(values) => console.log(values)}
    validate={(values) => {
      const errors = {};
      if (!isEmail(values.email)) {
        errors.email = 'invalid email';
      }
      return errors;
    }}
  >
    {(props) => (
      <Form>
        <Field type="email" name="email" />
        <button disabled={!props.isValid}>subscribe</button>
        <ErrorMessage name="email" component="div" />
      </Form>
    )}
  </Formik>
);

const isEmail = (email) =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

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

function NewsletterSignup() {
  const { register, handleSubmit, formState } = useForm();
  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input
        {...register('email', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      {formState.errors.email ? (
        <div>invalid email</div>
      ) : null}
      <button type="submit">sign up for newsletter</button>
    </form>
  );
}
```

Bemerkung: react-hook-form verwendet eine [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs), um auf das input-Element zuzugreifen

## react-hook-form: register

Die `register`-Funktion kann Parameter für die Validierung erhalten:

- `required`
- `min`, `max`
- `minLength`, `maxLength`
- `pattern`
- `validate`

## react-hook-form: errors

Das Objekt `formState.errors` gibt Fehler für registrierte Inputs an

```jsx
<input {...register('email')} />
```

```jsx
formState.errors.email ? <div>invalid email</div> : null;
```

```jsx
!formState.isValid ? <div>invalid form entries</div> : null;
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
useForm({ mode: 'onBlur' });
```

`mode`: wann soll ein Wert zum ersten Mal validiert werden?

- `onSubmit` (Standard)
- `onBlur` - wenn der Input den Fokus verliert oder bei Submit
- `onTouched` - wenn der Input den Fokus verliert (wechselt nicht zu `reValidateMode`) oder bei Submit
- `onChange` - wenn sich der Input ändert oder bei Submit
- `all` - wenn der Input sich ändert oder wenn er den Fokus verliert, ohne sich geändert zu haben

## react-hook-form: mode

`reValidateMode`: wenn das Form submittet wurde und ein Fehler auftrat, wann sollte der Wert erneut validiert werden?

- `onSubmit`
- `onBlur`
- `onChange` (Standard)

## react-hook-form: reset, getValues

```js
const {
  register,
  errors,
  handleSubmit,
  reset,
  getValues,
} = useForm();
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
        <button type="submit" disabled={!props.isValid}>
          subscribe
        </button>
        <ErrorMessage name="email" component="div" />
      </Form>
    )}
  </Formik>
);

const isEmail = (email) =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

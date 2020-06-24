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

Nachteile: weicht von üblichen React-Konzepten ab

## react-hook-form

```js
import { useForm } from 'react-hook-form';

const NewsletterRegistration = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  });
  return (
    <form
      onSubmit={handleSubmit((values) => {
        console.log(values);
      })}
    >
      <input
        type="email"
        name="email"
        ref={register({
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email',
          },
        })}
      />
      <button disabled={errors.email}>subscribe</button>
      {errors.email && errors.email.message}
    </form>
  );
};
```

Bemerkung: `register()` verwendet eine [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) um auf das input-Element zuzugreifen

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

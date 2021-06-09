# Formulare und Validierung

## Formulare und Validierung

Wann kann ein Input validiert werden?

- wenn das Formular _submittet_ wird (_submit_)
- wenn ein Eingabefeld den Fokus verliert (_blur_)
- bei jeder Änderung eines Wertes (_change_)

Der beste Zugang hängt vom Anwendungsfall ab

## Validierung: Beispiele

Validierung bei jeder Änderung:

```js
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const emailValid = isEmail(email);

  // ...
  // display a form
  // and optionally a warning about an invalid email
};
```

## Validierung: Beispiele

Validierung bei _blur_ bzw _change_:

```js
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  // call from onBlur / onChange:
  const validateEmail = () => {
    setEmailValid(isEmail(email));
  };

  // ...
  // display a form
  // and optionally a warning about an invalid email
};
```

## Validierung: Beispiele

vollständiges Beispiel: Validierung bei _blur_ und _submit_

```js
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const validateEmail = () => {
    setEmailValid(isEmail(email));
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        validateEmail();
        if (isEmail(email)) {
          console.log(`Signed up: ${email}`);
        }
      }}
    >
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={() => validateEmail()}
      />
      <button>sign up</button>
      {!emailValid ? <div>invalid email</div> : null}
    </form>
  );
};

const isEmail = (email) =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

## Validierung

komplexere Schemata zur Validierung sind möglich

Beispiel: erste Validierung eines Feldes beim ersten _blur_, danach live-Validierung bei jedem _change_

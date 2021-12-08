# Exercise: registration form

## Exercise: registration form

Create a user registration form

Values should be stored in a single JS object with different keys:

```js
const [userData, setUserData] = useState({
  username: '',
  password: '',
  repeatPassword: '',
  acceptTerms: false,
});
```

## Exercise: registration form

Underneath the form, display a potential error message for the _first_ invalid input (if there is one)

possible error messages:

- _Username must not be empty_
- _Password must be at least 4 characters long_
- _Passwords don't match_
- _You must accept the terms and conditions_

## Exercise: registration form

extra: create a dropdown via a _select_ element for choosing a gender (e.g. _male_, _female_, _diverse_)

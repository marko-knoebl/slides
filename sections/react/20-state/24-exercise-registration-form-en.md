# Exercise: registration form

## Exercise: registration form

Create a user registration form

Values should be stored in a single JS object with different keys:

```js
const [userData, setUserData] = useState({
  firstName: "",
  lastName: "",
  password: "",
  repeatPassword: "",
})
```

## Exercise: registration form

Underneath the form, display a potential error message for the _first_ invalid input (if there is one)

possible error messages:

- _First name must not be empty_
- _Password must be at least 4 characters long_
- _Passwords don't match_

# Übung: Registrierungsformular

## Übung: Registrierungsformular

Erstelle ein Registrierungsformular für Benutzer

Werte sollten in einem einzigen JS-Objekt mit verschiedenen Keys gespeichert werden:

```js
const [userData, setUserData] = useState({
  username: "",
  password: "",
  repeatPassword: "",
})
```

## Übung: Registrierungsformular

Zeige unterhalb des Formulars eventuelle Fehlermeldungen für das _erste_ ungültige Input an (wenn es ein ungültiges gibt)

mögliche Meldungen:

- _Username must not be empty_
- _Password must be at least 4 characters long_
- _Passwords don't match_

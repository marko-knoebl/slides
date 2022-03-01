# Übung: Registrierungsformular

## Übung: Registrierungsformular

Erstelle ein Registrierungsformular für Benutzer

Werte sollten in einem einzigen JS-Objekt mit verschiedenen Keys gespeichert werden:

```js
const [userData, setUserData] = useState({
  username: '',
  password: '',
  repeatPassword: '',
  acceptTerms: false,
});
```

## Übung: Registrierungsformular

Zeige einen _Register_-Button an, der basierend auf den Benutzereingaben entweder enabled oder disabled ist:

```jsx
<button disabled={!canRegister}>register</button>
```

Bemerkung: versuche, redundante Daten im State zu vermeiden

## Übung: Registrierungsformular

Weitere Aufgaben:

- _Reset_-Button, um das Formular zurückzusetzen
- Anzeige der Nachricht "_passwords match_" bzw "_passwords don't match_"
- Dropdown, um ein Geschlecht auszuwählen (mittels eines _select_-Elements)

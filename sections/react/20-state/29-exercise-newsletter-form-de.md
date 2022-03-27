# Übung: Newsletter-Formular

## Übung: Newsletter-Formular

Erstelle ein Newsletter-Formular

Werte sollten in einem einzigen JS-Objekt mit verschiedenen Keys gespeichert werden:

```js
const [userData, setUserData] = useState({
  email: '',
  repeatEmail: '',
  acceptTerms: false,
});
```

## Übung: Newsletter-Formular

Zeige einen _Register_-Button an, der basierend auf den Benutzereingaben entweder enabled oder disabled ist:

```jsx
<button disabled={!canRegister}>register</button>
```

Bemerkung: versuche, redundante Daten im State zu vermeiden

## Übung: Newsletter-Formular

Weitere Aufgaben:

- _Reset_-Button, um das Formular zurückzusetzen
- Anzeige der Nachricht "_e-mails match_" bzw "_e-mails don't match_"
- Dropdown, um eine Sprache auszuwählen (mittels eines _select_-Elements)

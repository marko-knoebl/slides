# Benutzerauthentifizierung mit einem Identity Provider

## Identity Provider

Ein _Identity Provider_ kann die Identität eines Benutzers überprüfen (kann den Benutzer authentifizieren)

Beispiele:

> der aktuelle Benutzer ist auf dieser Domain als Benutzer "foo" eingeloggt

> der aktuelle Benutzer ist als Benutzer "x" bei _Google_ / als Benutzer "y" bei Facebook authentifiziert

## Identity provider

Mechanismus für den Benutzer:

Benutzer klickt auf _login_, wird zu einer Login-Seite weitergeleitet und nach erfolgreichem Login zur ursprünglichen Seite zurückgeleitet

im Hintergrund erhält der Benutzer ein _Identity Token_, einen kleinen Datensatz, der die Identität des Benutzers im Zusammenspiel mit dem Identity Provider belegen kann

## Auth0

**Auth0** (_auth-zero_) ist ein weit verbreiteter Identity Provider

## Auth0: Registrierung und Einrichtung

- registriere dich für einen Auth0-Account unter <https://auth0.com>
- in der Sidebar, wähle "Applications"
- wähle die "default application" oder erstelle eine neue "Single Page Web Application"

<!--
registration details:
select region: EU / US / AU
select account type: personal / company
-->

## Auth0: Registrierung und Einrichtung

_Application Settings_:

- erlaubte Redirect-Ziele nach dem Login: _Allowed Callback URLs_
- erlaubte Redirect-Ziele nach dem Logout: _Allowed Logout URLs_
- um Authentifizierungstokens zu erneuern: _Allowed Web Origins_

für die lokale Entwicklung, setze alle drei Werte auf _http://localhost:3000_

## Auth0: Registrierung und Einrichtung

unter _Settings_:

jeder Auth0-Klient hat zumindest eine **domain** (z.B. _dev-xxxxxxxx.eu.auth0.com_)

jede App hat eine bestimmte **client ID** (z.B. _jA0EAwMCxamDRMfOGV5gyZPnyX1BBPOQ_)

## auth0-react

Library: [auth0-react](https://github.com/auth0/auth0-react/)

npm-Paket: _@auth0/auth0-react_

Einbinden eines Providers, der einen Context verwaltet:

```jsx
<Auth0Provider
  domain="YOUR_AUTH0_DOMAIN"
  clientId="YOUR_AUTH0_CLIENT_ID"
  redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>
```

(siehe nächste Slide für Implementierung in _next.js_)

## auth0-react

bei Verwendung von _next.js_:

```jsx
// pages/_app.js
export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="YOUR_AUTH0_DOMAIN"
      clientId="YOUR_AUTH0_CLIENT_ID"
      redirectUri="YOUR_URL"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
```

## auth0-react

```jsx
const auth = useAuth0();

if (auth.isLoading) {
  return <div>...</div>;
} else if (auth.error) {
  return <div>...</div>;
} else if (!auth.isAuthenticated) {
  return (
    <button onClick={auth.loginWithRedirect}>Log in</button>
  );
} else {
  return (
    <div>
      main content
      <button onClick={auth.logout}>log out</button>
    </div>
  );
}
```

## auth0-react

Einträge im Rückgabewert von `useAuth0`:

- `isLoading`
- `error`
- `isAuthenticated`
- `loginWithRedirect`
- `logout`
- `user` (`user.sub`, `user.email`, `user.username`, `user.name`, ...)

## auth0-react

Aufgabe: Erstelle eine React-Anwendung, bei nur authentifizierte Benutzer auf den Inhalt zugreifen können; Name / e-mail des Benutzers sollen wenn vorhanden angezeigt werden

## auth0-react

Authentifizierung kann mithilfe von _Access Tokens_ verifiziert werden (in diesem Fall sind dies keine _JWT_ Tokens)

weitere Funktionalität von `useAuth0`:

- `getAccessTokenSilently`
- `getAccessTokenWithPopup`

## auth0-react

Ausführen eines Requests mit dem Access Token:

```js
const makeRequestSilently = () => {
  auth.getAccessTokenSilently().then((token) => {
    console.log(`make API request with token ${token}`);
  });
};
```

## auth0-react

Verifizieren des Auth0-Tokens auf Seite des APIs:

```js
const auth0Domain = 'dev-xxxxxxxx.eu.auth0.com';

fetch(`https://${auth0Domain}/userinfo`, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => res.json())
  .then((userInfo) => {
    console.log(`authenticated as ${userInfo.sub}`);
  })
  .catch((error) => console.log('error'));
```

Bemerkung: das reine Senden der Information (z.B. Benutzer-ID) vom Client ist nicht sicher, da dies vom API nicht verifiziert werden kann

## Ressourcen

- <https://auth0.com/docs/quickstart/spa/react>
- <https://auth0.com/blog/complete-guide-to-react-user-authentication/>
- <https://auth0.com/docs/libraries/auth0-react>
- [API reference](https://auth0.github.io/auth0-react/)

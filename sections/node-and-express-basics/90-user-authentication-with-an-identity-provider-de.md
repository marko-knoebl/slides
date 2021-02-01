<!--
related sections in:
- react-advanced
- node-and-express-intermediate
-->

# Benutzer-Authentifizierung mit einem Identity Provider

## Identity Provider

Ein _Identity Provider_ kann die Identität eines Benutzers überprüfen (kann den Benutzer authentifizieren)

Beispiele:

> der aktuelle Endnutzer ist auf dieser Domain als Benutzer "foo" eingeloggt

> der aktuelle Endnutzer ist al Benutzer "x" bei Google / als Benutzer "y" bei Facebook authentifiziert

## Identity Provider

Mechanismus für den Benutzer:

Benutzer klickt auf _login_, wird zu einer Login-Seite weitergeleitet und nach erfolgreichem Login zur ursprünglichen Seite zurückgeleitet

im Hintergrund erhält der Benutzer ein _Identity Token_, einen kleinen Datensatz, der die Identität des Benutzers im Zusammenspiel mit dem Identity Provider belegen kann

das Identity Token wird üblicherweise als Cookie gesetzt (z.B. `appSession`)

## Identity Provider

Standards:

- Authentifizierung via _OpenID Connect_
- Authorisierung via _OAuth2_

## Auth0

**Auth0** (_auth-zero_) is a widely-used identity provider

supports authentication via "internal" accounts or external identity providers (e.g. _Google_, _Apple_, _Facebook_, ...)

## Auth0: Registrierung und Einrichtung

- registriere dich für einen Auth0-Account unter <https://auth0.com>
- in der Sidebar, wähle "Applications"
- wähle die "default application" oder erstelle eine neue "Single Page Web Application"; der gewählte Name wird Benutzern bei der Authentifizierung angezeigt

<!--
registration details:
select region: EU / US / AU
select account type: personal / company
-->

## Auth0: Registrierung und Einrichtung

_Application Settings_:

- erlaubte Redirect-Ziele zum Abschließen des Logins: _Allowed Callback URLs_
- erlaubte Redirect-Ziele nach dem Logout: _Allowed Logout URLs_

Beispiel für Callback URLs:

```txt
http://localhost:3000/callback,
https://mydomain.com/callback
```

Beispiel für Logout URLs:

```txt
http://localhost:3000,
https://mydomain.com
```

## Konfiguration

Beispiel für `.env` Datei für lokale Entwicklung (Quellen auf nächster Slide)

```bash
ISSUER_BASE_URL=https://dev-xxxxxxxx.eu.auth0.com
CLIENT_ID=jA0EAwMCxamDRMfOGV5gyZPnyX1BBPOQ
SECRET=7qHciKUpXk7pCXqG45bweRBQxBTMpztB
BASE_URL=http://localhost:3000
PORT=3000
```

## Konfiguration

unter _Settings_:

jeder Auth0-Klient hat zumindest eine _domain_ (z.B. _dev-xxxxxxxx.eu.auth0.com_)

jede App hat eine bestimmte _client ID_ (z.B. _jA0EAwMCxamDRMfOGV5gyZPnyX1BBPOQ_)

selbst erstellt:

_secret_: erstelle eine lange, zufällige Zeichenfolge (empfohlen: mindestens 32 Zeichen)

## Express und Auth0

Guides:

Guide mit der aktuellsten Library (_express-openid-connect_): https://auth0.com/docs/quickstart/webapp/express

Guide mit älteren (verbreiteteren) Libraries: https://auth0.com/docs/quickstart/webapp/express

## Express und Auth0

npm-Paket: _express-openid-connect_

Middleware für Authentifizierung

stellt automatisch die URLs _/login_, _/logout_, _/callback_ bereit

```js
app.use(
  expressOpenidConnect.auth({
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    secret: process.env.SECRET,
  })
);
```

## Express und Auth0

```js
app.get('/', (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.send(
      `<p>logged in <a href="/logout">log out</a></p>
       <pre>${JSON.stringify(req.oidc.user)}</pre>`
    );
  } else {
    res.send(
      '<div>not logged in <a href="/login">log in</a></div>'
    );
  }
});
```

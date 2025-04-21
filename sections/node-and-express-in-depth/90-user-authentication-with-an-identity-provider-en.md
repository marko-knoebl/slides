<!--
related sections in:
- react-advanced
- node-and-express-intermediate
-->

# User authentication with an identity provider

## Identity provider

an _identity provider_ can verify the identity of users (can authenticate users)

examples:

> the current end user is logged in as user "foo" on this domain

> the current user is authenticated as user "x" by _Google_ / as user "y" by _facebook_

## Identity provider

mechanism for the user:

user clicks on _login_, is redirected to a login page, and then sent back to the original site once logged in

in the background the user will receive an _identity token_, a piece of data that can prove their identity with the identity provider

the identity token is usually set as a cookie (e.g. `appSession`)

## Identity provider

standards:

- authorization via _OAuth2_
- authentication via _OpenID Connect_

## Auth0

**Auth0** (_auth-zero_) is a widely-used identity provider

supports authentication via "internal" accounts or external identity providers (e.g. _Google_, _Apple_, _Facebook_, ...)

## Auth0: Registration and setup

- register for an Auth0 account on <https://auth0.com>
- in the sidebar, select "Applications"
- select the default application or create a new "Regular Web Application"; the selected name will be shown to users when they authenticate

<!--
registration details:
select region: EU / US / AU
select account type: personal / company
-->

## Auth0: Regsitration and setup

_Application Settings_:

- allowed redirect URLs for login completion: _Allowed Callback URLs_
- allowed redirect URLs after logout: _Allowed Logout URLs_

callback URLs example:

```txt
http://localhost:3000/callback,
https://mydomain.com/callback
```

logout URLs example:

```txt
http://localhost:3000,
https://mydomain.com
```

## Configuration

example `.env` configuration for local development (sources on next slide):

```bash
ISSUER_BASE_URL=https://dev-xxxxxxxx.eu.auth0.com
CLIENT_ID=jA0EAwMCxamDRMfOGV5gyZPnyX1BBPOQ
SECRET=7qHciKUpXk7pCXqG45bweRBQxBTMpztB
BASE_URL=http://localhost:3000
PORT=3000
```

## Configuration

under _Settings_:

each Auth0 registrant has at least one domain (e.g. _dev-xxxxxxxx.eu.auth0.com_)

each app has a specific client ID (e.g. _jA0EAwMCxamDRMfOGV5gyZPnyX1BBPOQ_)

self-generated:

_secret_: generate a long, random string yourself (recommendation: at least 32 characters)

## Express and Auth0

guides:

guide using the most recent library (_express-openid-connect_): https://auth0.com/docs/quickstart/webapp/express

guide using older (more wide-spread) libraries: https://auth0.com/docs/quickstart/webapp/express

## Express and Auth0

npm package: _express-openid-connect_

middleware for authentication

automatically adds URLs _/login_, _/logout_, _/callback_

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

## Express and Auth0

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

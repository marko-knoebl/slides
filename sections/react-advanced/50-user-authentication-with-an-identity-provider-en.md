# User authentication with an identity provider

<!--
related sections in:
- react-advanced
- node-and-express-intermediate
-->

## Identity provider

an _identity provider_ can verify the identity of users (can authenticate users)

examples:

> the current user is logged in as user "foo" on this domain

> the current user is authenticated as user "x" by _Google_ / as user "y" by _facebook_

## Identity provider

mechanism for the user:

user clicks on _login_, is redirected to a login page, and then sent back to the original site once logged in

in the background the user will receive an _identity token_, a piece of data that can prove their identity with the identity provider

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
- select the default application or create a new "Single Page Web Application"; the selected name will be shown to users when they authenticate

<!--
registration details:
select region: EU / US / AU
select account type: personal / company
-->

## Auth0: Registration and setup

_Application Settings_:

- allowed redirect destinations after login: _Allowed Callback URLs_
- allowed redirect destinations after logout: _Allowed Logout URLs_
- for refreshing authentication tokens: _Allowed Web Origins_

for local development, set all three to _http://localhost:3000_

## Domain and client ID

under _Settings_:

each Auth0 registrant has at least one domain (e.g. _dev-xxxxxxxx.eu.auth0.com_)

each app has a specific client ID (e.g. _jA0EAwMCxamDRMfOGV5gyZPnyX1BBPOQ_)

## auth0-react

library: [auth0-react](https://github.com/auth0/auth0-react/)

npm package: _@auth0/auth0-react_

include a provider that manages a context:

```jsx
<Auth0Provider
  domain="YOUR_AUTH0_DOMAIN"
  clientId="YOUR_AUTH0_CLIENT_ID"
  redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>
```

(see next slide for implementation in _next.js_)

## auth0-react

when using _next.js_:

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

entries in the return value of `useAuth0`:

- `isLoading`
- `error`
- `isAuthenticated`
- `loginWithRedirect`
- `logout`
- `user` (`user.sub`, `user.email`, `user.username`, `user.name`, ...)

## auth0-react

task: create a React app where the content is only accessible if the user is logged in and the username / email are displayed if available

## auth0-react

authentication can be verified via access tokens (these are not JWT tokens)

more entries in the return value of `useAuth0`:

- `getAccessTokenSilently`
- `getAccessTokenWithPopup`

## auth0-react

making a request with the access token:

```js
async function makeRequestSilently() {
  const token = await auth.getAccessTokenSilently();
  console.log(`make API request with token ${token}`);
}
```

## auth0-react

verifying an Auth0 token on the API side:

```js
const auth0Domain = 'dev-xxxxxxxx.eu.auth0.com';

try {
  const res = await fetch(
    `https://${auth0Domain}/userinfo`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const userInfo = await res.json();
  console.log(`authenticated as ${userInfo.sub}`);
} catch {
  console.log('error');
}
```

note: just sending user info (e.g. user ID) from the client is not secure since it can't be verified by the API; information can only be verified via a token

## Resources

- <https://auth0.com/docs/quickstart/spa/react>
- <https://auth0.com/blog/complete-guide-to-react-user-authentication/>
- <https://auth0.com/docs/libraries/auth0-react>
- [API reference](https://auth0.github.io/auth0-react/)

<!--
examples of hooks that handle authentication:

- https://usehooks.com/useAuth/
- https://medium.com/hackernoon/learn-react-hooks-by-building-an-auth-based-to-do-app-c2d143928b0b
-->

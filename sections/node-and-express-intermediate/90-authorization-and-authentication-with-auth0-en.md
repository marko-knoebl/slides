# Authorization and authentication with Auth0

## Authorization and authentication with Auth0

https://auth0.com/docs/quickstart/webapp/nodejs

## Data

callback URLs: http://localhost:3000/callback

logout URLs: http://localhost:3000

## Sessions in express

```js
// app.js

import expressSession from 'express-session';

const sessionConfig = {
  secret: 'CHANGE THIS TO A RANDOM SECRET',
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

if (app.get('env') === 'production') {
  // Use secure cookies in production (requires SSL/TLS)
  expressSession.cookie.secure = true;
  // app.set('trust proxy', 1);
}

app.use(expressSession(sessionConfig));
```

## Configure passport and passport-auth0

```js
const passportConfig = {
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  callbackURL:
    process.env.AUTH0_CALLBACK_URL ||
    'http://localhost:3000/callback',
};
```

## Configure passport and passport-auth0

```js
import Auth0Strategy from 'passport-auth0';

const strategy = new Auth0Strategy(
  passportConfig,
  (
    accessToken,
    refreshToken,
    extraParams,
    profile,
    done
  ) => {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);
```

## Configure passport and passport-auth0

```js
import passport from 'passport';

// ...

passport.use(strategy);

app.use(passport.initialize());
app.use(passport.session());
```

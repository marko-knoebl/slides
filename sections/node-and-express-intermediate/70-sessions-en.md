# Sessions

## Sessions

managing sessions through cookies via [express-session](https://github.com/expressjs/session)

```js
import expressSession from 'express-session';

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  cookie: { secure: false },
  resave: false,
  saveUninitialized: true,
};

app.use(expressSession(sessionConfig));
```

## Sessions

```js
app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`<p>views: ${req.session.views}</p>`);
  } else {
    req.session.views = 1;
    res.send(`<p>first view</p>`);
  }
});
```

## Database connection

without configuration, session data will be stored in memory - which is not suitable for production

to store in a database instead, see: https://github.com/expressjs/session#compatible-session-stores

```js
if (process.env.NODE_ENV === 'production') {
  expressSession.store = new MongoStore(options);
}
```

## Secure cookies

only send session cookies via HTTPS (not HTTP) in production:

```js
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  expressSession.cookie.secure = true;
}
```

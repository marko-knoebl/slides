# simple express JWT authentication service

for use on glitch.com:

```js
const express = require('express');
const bodyParser = require('body-parser');
const jsonwebtoken = require('jsonwebtoken');

const SECRET = 'JWT_SECRET';

// start out with one example user
const users = [
  { username: 'example', password: 'example' },
];

/**
middleware that checks authentication token
 */
const checkToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    jsonwebtoken.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'invalid token',
        });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.json({
      success: false,
      message: 'missing/invalid authorization header',
    });
  }
};

const getUserByName = username => {};

const registerHandler = (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.send(403).json({
      success: false,
      message: 'username or password missing',
    });
  } else {
    if (
      users.some(
        user => user.username === req.body.username
      )
    ) {
      res.json({
        success: false,
        message: 'username already taken',
      });
    }
    users.push({
      username: req.body.username,
      password: req.body.password,
    });
    res.json({
      success: true,
      message: 'registered successfully',
    });
  }
};

const loginHandler = (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.send(403).json({
      success: false,
      message: 'username or password missing',
    });
  } else {
    const user = users.find(
      u => u.username === req.body.username
    );
    if (user === undefined) {
      res
        .send(403)
        .json({ success: false, message: 'no such user' });
    } else {
      if (user.password === req.body.password) {
        const token = jsonwebtoken.sign(
          { username: user.username },
          SECRET,
          {
            expiresIn: '24h',
          }
        );
        res.json({
          success: true,
          message: 'auth successful',
          token: token,
        });
      } else {
        res.send(403).json({
          success: false,
          message: 'incorrect password',
        });
      }
    }
  }
};

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', loginHandler);
app.post('/register', registerHandler);

app.get('/', (req, res) => {
  res.json({ success: true, message: 'index resource' });
});
app.get('/restricted', checkToken, (req, res) => {
  res.json({
    success: true,
    message: 'restricted resource',
  });
});

app.listen(process.env.PORT);
```

example usage (results visible in network tab of browser dev tools):

```js
fetch('/');
// {"success":true,"message":"index resource"}
fetch('/restricted');
// {"success":false,"message":"missing/invalid authorization header"}
fetch('/register', {
  method: 'post',
  body: JSON.stringify({
    username: 'marko',
    password: 'foo',
  }),
  headers: { 'Content-Type': 'application/json' },
});
// {"success":true,"message":"registered successfully"}
fetch('/login', {
  method: 'post',
  body: JSON.stringify({
    username: 'marko',
    password: 'foo',
  }),
  headers: { 'Content-Type': 'application/json' },
});
//{ "success": true,
//  "message":"auth successful",
//  "token":"eyJhbGciOiJIUz..." }
fetch('/restricted', {
  headers: { authorization: 'Bearer eyJhbGciOiJIUz...' },
});
// {"success":true,"message":"restricted resource"}
```

## resources

https://medium.com/dev-bits/a-guide-for-adding-jwt-token-based-authentication-to-your-single-page-nodejs-applications-c403f7cf04f4

https://medium.com/better-programming/authentication-and-authorization-using-jwt-with-node-js-4099b2e6ca1f

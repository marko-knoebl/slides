/*
dependencies:

    "express": "^4.17.1",
    "express-react-views": "^0.11.0",
    "node-fetch": "^2.6.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
*/

import fetch from "node-fetch";
import express from "express";
import expressReactViews from "express-react-views";
import dotenv from 'dotenv';
import expressSession from 'express-session';
import Auth0Strategy from 'passport-auth0';
import passport from 'passport';

// load environment variables from file .env
dotenv.config();

const app = express();

// sessions

const sessionConfig = {
  secret: 'CHANGE THIS TO A RANDOM SECRET',
  cookie: {},
  resave: false,
  saveUninitialized: true,
};
// if (app.get('env') === 'production') {
//   // Use secure cookies in production (requires SSL/TLS)
//   expressSession.cookie.secure = true;
//   // app.set('trust proxy', 1);
// }
app.use(expressSession(sessionConfig));

// auth

const passportConfig = {
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  callbackURL:
    process.env.AUTH0_CALLBACK_URL ||
    'http://localhost:3000/callback',
};
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

passport.use(strategy);

app.use(passport.initialize());
app.use(passport.session());

// rest

app.engine("jsx", expressReactViews.createEngine());
app.set("view engine", "jsx");

app.get("/", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    res.send("production")
  } else {
    res.send("development")
  }
//  res.redirect("/1");
});
app.get("/favicon.ico", (req, res) => {
  res.status(404);
  res.send();
});
app.get("/:id", async (req, res) => {
  const id = req.params.id;
  const dataRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await dataRes.json();
  await res.render("pokemon", { id: id, data: data });
});

app.listen(3000);

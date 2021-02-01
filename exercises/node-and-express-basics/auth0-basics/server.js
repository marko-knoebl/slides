import dotenv from "dotenv";
import express from "express";
import expressOpenidConnect from "express-openid-connect";

const app = express();

dotenv.config();

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

app.get("/", (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.send(`<div>
      <p>logged in <a href="/logout">log out</a></p>
      <pre>${JSON.stringify(req.oidc.user)}</pre>
    </div>`);
  } else {
    res.send('<div>not logged in <a href="/login">log in</a></div>');
  }
});

app.listen(process.env.PORT);

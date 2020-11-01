const fs = require("fs");

const argon2 = require("argon2-wasm-pro");
const cors = require("cors");
const crypto = require("crypto");
const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const mingodb = require("@karuga/mingodb");

const publicKey = fs.readFileSync("./public.pem");
const privateKey = fs.readFileSync("./private.pem");

const db = mingodb("data.json"); // simple db

const app = express();
// allow all request origins
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.end(
    "welcome to the auth service\n\n" +
      "resources:\n/register\n/login\n/public-key"
  );
});

app.get("/public-key", (req, res) => {
  res.end(publicKey);
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = db.users.findOne({ username: username });
  if (user !== undefined) {
    return res.json({
      status: "error",
      message: "user exists"
    });
  }
  const hash = await argon2.hash({
    pass: password,
    salt: crypto.randomBytes(16)
  });
  const data = { username: username, hash: hash.encoded };
  db.users.insertOne(data);
  res.json({ status: "success" });
});

app.post("/login", async (req, res) => {
  const verified = await verifyCredentials(
    req.body.username,
    req.body.password
  );
  if (!verified) {
    return res.json({ status: "error" });
  }
  const token = createToken(req.body.username);
  res.json({ status: "success", token: token });
});

const verifyCredentials = async (username, password) => {
  const user = db.users.findOne({ username: username });
  if (user === undefined) {
    return false; // user does not exist
  }
  try {
    await argon2.verify({
      pass: password,
      encoded: user.hash
    });
    return true;
  } catch {
    return false; // wrong password
  }
};

const createToken = username => {
  return jsonwebtoken.sign(
    {
      sub: username,
      iss: "auth.foo-systems.com",
      aud: "forum.foo-systems.com",
      // expires in 1 h
      exp: Math.floor(Date.now() / 1000) + 60 * 60
    },
    privateKey
  );
};

app.listen(process.env.PORT);

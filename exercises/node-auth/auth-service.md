# Node auth service

Create an authorization service in node.js.

it should provide these resources:

- `/` - start page with short descriptive text
- `/public-key` - public key for the service
- `/register` - registration endpoint
- `/login` - login endpoint for registered users - returns a JSON web token

It should support these requests:

```js
let res = await fetch("/register", {
  method: "post",
  body: JSON.stringify({
    username: "alice",
    password: "ecila"
  }),
  headers: { "Content-Type": "application/json" }
});
let data = await res.json();
console.log(data); // { status: "success" }
```

```js
let res = await fetch("/login", {
  method: "post",
  body: JSON.stringify({
    username: "alice",
    password: "ecila"
  }),
  headers: { "Content-Type": "application/json" }
});
let data = await res.json();
console.log(data); // { status: "success", token: "..." }
```

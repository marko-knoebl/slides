# Sessions and tokens

## Sessions and tokens

Common procedure:

If a user logged in successfully they receive a secret token that identifies them for some time (e.g. for 30 minutes or for 1 day)

## Sessions and tokens

contents of tokens:

approach A: token contains a unique session id; associated session data is saved on a server

approach B: token contains all session data, signed by an authorization service

## JSON web tokens

JSON web tokens (JWT) are a means for a user to identify themselves to a web site

## JSON web tokens

example contents of a JWT (3 parts: algorithm, data, signature):

```json
{ "alg": "RS256" }
```

```json
{
  "iss": "google.com",
  "sub": "alice@gmail.com",
  "aud": "medium.com",
  "exp": 1577836800
}
```

```txt
eyJzdWIiOiJhbGljZSIsImlzcyI6ImF1dGguZ...
```

## JSON web tokens

translation:

```txt
This is a JSON web token signed with RS256
(RSA Signature with SHA-256)

We (google.com) confirm that the holder of this token is
logged in as "alice@gmail.com" with our service.
This confirmation is intended for use on medium.com.
This confirmation is valid until 2020-01-01 00:00.

signature: ...
```

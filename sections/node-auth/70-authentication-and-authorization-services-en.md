# Authentication and authorization services

## Authentication and authorization services

authorization service: provides a token that enables the _holder_ to request some actions on behalf of the token's _subject_

example authorization token for GitHub:

```
authorization token for GitHub
the holder of this token may:

- create new repositories for user "marko-knoebl"
- delete repositories belonging to user "marko-knoebl"
```

## Technologies

- _openID_: authentication protocol
- _OAuth_: authorization protocol
- _openID connect_: authentication protocol based on _OAuth_

## OpenID connect

[standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) in openID connect:

- _sub_: Subject - Identifier for the End-User at the Issuer.
- _name_, _given_name_, _family_name_, _nickname_, ...
- _email_, _email_verified_
- _phone_number_, _phone_number_verified_
- _locale_
- ...

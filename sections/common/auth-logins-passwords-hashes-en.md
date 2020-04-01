# Logins, passwords and hashes

## Logins, passwords and hashes

Facebook doesn't know your Facebook password!

## Logins, passwords and hashes

A website should never directly store a user's password

Instead: store a _hashed_ and _salted_ version of the password

## Logins, passwords and hashes

plain data:

```
name    | password
--------+--------------------
Alice   | 123456
Bob     | 123456
Charlie | abc123
Dave    | correcthorsebattery
```

## Logins, passwords and hashes

data with hashed passwords:

```
name    | password hash
--------+---------------------------------
Alice   | e10adc3949ba59abbe56e057f20f883e
Bob     | e10adc3949ba59abbe56e057f20f883e
Charlie | e99a18c428cb38d5f260853678922e03
Dave    | 3c077829151f03a4101bf36510d551b1
```

## Logins, passwords and hashes

data with hashed and salted passwords:

```
name    | salt     | hash
--------+----------+---------------------------------
Alice   | BzrYZGvv | c17dff0de6bbdfd0c8e7c2f35f2f74b0
Bob     | w6hxMeFz | 107b7047ae12bd19ca64f34b49fa1c98
Charlie | uOqA9bpX | c087747abdda0dc67ae9f31871692453
Dave    | nf7ExQnd | cd6bc62d87ad35d6ea4cbe83e89536f7
```

For Alice, the salt ("BzrYZGvv") and the hash of "123456-BzrYZGvv" are stored

## Algorithms

sorted from _most secure_ to _not secure_:

- Argon2
- scrypt
- bcrypt
- PBKDF2
- MD5

MD5 is _not secure_ but is used in these examples because of its simplicity

## Password hashes

A hash is a derived value that can be stored instead of a password

example MD5 hashes (not secure) in hex notation :

- `123456` → `e10adc3949ba59abbe56e057f20f883e`
- `abc123` → `e99a18c428cb38d5f260853678922e03`

## Password hashes

user registration:

user sends password (e.g. `123456`), server saves the password hash (e.g. `e10adc3949ba59abbe56e057f20f883e`)

user login:

user sends password, server computes its hash and compares it to the saved hash

## Salts

Salted hashes are hashes of passwords with some additional random data

If passwords are hashed unsalted it would be easy to recognize hashes of common or simple passwords

## Example process

based on MD5 (not secure):

Account creation:

- account creation requested: username `alice`, password `123456`
- salted password string with random suffix: `123456-BzrYZGvv`
- hashed version of the string: `c17dff0de6bbdfd0c8e7c2f35f2f74b0`
- new database record with three fields:
  - `alice`
  - `BzrYZGvv`
  - `c17dff0de6bbdfd0c8e7c2f35f2f74b0`

## Example process

based on MD5 (not secure):

Login attempt (unsuccessful):

- login requested: username `alice`, password `111111`
- reading salt for user `alice` from the database: `BzrYZGvv`
- salted password string: `111111-BzrYZGvv`
- hashed version of this string: `c42f4b80513e7aee0ff1c5b7ebe339e0`
- compare to the hash as stored in the database (`c17dff0de6bbdfd0c8e7c2f35f2f74b0`)
- hashes don't match - login denied

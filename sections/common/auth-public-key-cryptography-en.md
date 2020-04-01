# Public key cryptography

## Public key cryptography

use cases:

- digitally signing data
- sending encrypted data

## Public key cryptography

Alice has a secret private key and publishes an associated public key

Alice can "sign" some information with her private key - recipients of that information can verify that it is from Alice by using Alice's public key

Anyone can encrypt information using the public key and send it to Alice - only Alice can decrypt it with her private key, no one else can read it

## Key pairs

common cryptographic algorithm: RSA

Keys are often stored in `.pem` format

## Key pairs

`alice_private.pem`:

```txt
-----BEGIN RSA PRIVATE KEY-----
MIIBOgIBAAJBAMUKUlOcPJ4E0T1/9qirGZ+1udvYF9Bqvrc2zuoplenl8S0bdXGG
vm1SlCUX6UMKC/YkB77BjFaRIvhceCrTriUCAwEAAQJBAIn2KySNrUe6+cKE2XDJ
tDxGImdSy4HLa9OelYwRJ/1HHclYgACwzigWT6U+Xaej95lzKrWV+Gwlw/q10dWA
ZrUCIQD4xrKnJtGgU/HI7piVGNvYl7jP3zQJMMagq+iYKSi0/wIhAMrDCkwEcSld
E2HVyWUln+XTNwEVg484QZiPvE2aRyjbAiB5YjH/XvB/gxYBTXHDpfp3ByiUvLqe
FV+FO/vkaojDLwIgBpVusCk0w3MSPgsDDxW5q2zATHi2XOAmwR1pr9tilCECICRO
Lj9zPl9v6NhpmAXFPffzH7SJ5eIoF6bxu0j8l3GL
-----END RSA PRIVATE KEY-----
```

`alice_public.pem`:

```txt
-----BEGIN RSA PUBLIC KEY-----
MEgCQQDFClJTnDyeBNE9f/aoqxmftbnb2BfQar63Ns7qKZXp5fEtG3Vxhr5tUpQl
F+lDCgv2JAe+wYxWkSL4XHgq064lAgMBAAE=
-----END RSA PUBLIC KEY-----
```

## Generating a key pair

generating a pair of RSA keys in the browser:

https://www.csfieldguide.org.nz/en/interactives/rsa-key-generator/

- key size: choose any (larger keys are more secure but slower)
- format scheme: PKCS #1

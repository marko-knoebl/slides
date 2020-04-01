# Public-Key-Kryptographie

## Public-Key-Kryptographie

Anwendungsfälle:

- digitales Signieren von Daten
- Versenden von Verschlüsselten Daten

## Public-Key-Kryptographie

Alice verfügt über einen geheimen privaten Schlüssel und veröffentlicht einen zugehörigen öffentlichen Schlüssel

Alice kann Daten mit ihrem privaten Schlüssel "signieren" - Empfänger dieser Daten können mittels des öffentlichen Schlüssels sicherstellen, dass die Daten von Alice stammen

Andere können Daten mittels Alices öffentlichem Schlüssel verschlüsseln und an Alice senden - nur Alice kann sie mittels des privaten Schlüssel entschlüsseln

## Schlüsselpaare

Weit verbreiteter kryptographischer Algorithmus: RSA

Schlüssel werden oft im `.pem`-Format gespeichert

## Schlüsselpaare

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

## Schlüsselpaare

Erstellen eines RSA-Schlüsselpaares im Browser:

https://www.csfieldguide.org.nz/en/interactives/rsa-key-generator/

- Key Size: beliebig (längere Schlüssel sind sicherer, aber langsamer)
- Format Scheme: PKCS #1

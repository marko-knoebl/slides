# Authentifizierungs- und Authorisierungs- Services

## Authentifizierungs- und Authorisierungs- Services

Authorisierungs-Service: Kann Token zur verfügung stellen, welche den "Träger" des Tokens dazu berechtigen, Aktionen für das "Subjekt" des Tokens zu beantragen

Beispiel für ein Authorisierungs-Token für GitHub:

```
Authorisierungs-Token für GitHub
Der "Träger" dieses Tokens kann:

- neue Repositories für den User "marko-knoebl" erstellen
- Repositories des Users "marko-knoebl" löschen
```

## Technologien

- _openID_: Authentifizierungs-Protokoll
- _OAuth_: Authorisierungs-Protokoll
- _openID connect_: Authentifizierungs-Protokoll, das auf _OAuth_ basiert

## OpenID connect

[standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) in openID connect:

- _sub_: Subject - eindeutiger Identifier des End-Nutzers beim Aussteller
- _name_, _given_name_, _family_name_, _nickname_, ...
- _email_, _email_verified_
- _phone_number_, _phone_number_verified_
- _locale_
- ...

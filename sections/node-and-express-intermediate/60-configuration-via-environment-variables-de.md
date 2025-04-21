<!--
section almost duplicated in:
- node-web-development-with-node-and-express
- node-and-mongodb
-->

# Konfiguration mittels Umgebungsvariablen

## Konfiguration mittels Umgebungsvariablen

Zugangsdaten (z.B. für Datenbanken) und Konfiguration werden üblicherweise via Umgebungsvariablen bereitgestellt

Zugangsdaten sollten nicht unter Versionskontrolle stehen

## .env-Datei

verbreitete Möglichkeit, um Zugangsdaten bereit zu stellen: speichern in einer Datei namens _.env_, laden als Umgebungsvariablen mittels _dotenv_

Stelle sicher, dass _.env_ nicht unter Versionskontrolle steht (füge es zur Datei _.gitignore_ hinzu)

## .env-Datei

Beispiel für _.env_-Datei:

```bash
PORT=3000
NODE_ENV=production
DB_URL=mongodb+srv://...
AUTH0_DOMAIN=xxx.eu.auth0.com
```

laden in JavaScript:

```js
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
```

## NODE_ENV

Umgebungsvariable `NODE_ENV`: spielt z.B. bei express eine wichtige Rolle

in Produktivumgebungen sollte immer `NODE_ENV=production` gesetzt sein - ansonsten werden z.B. dem Endnutzer JavaScript-Fehlermeldungen im Detail angezeigt (mit Stack Traces)

# Bereitstellen von Zugangsdaten

## Bereitstellen von Zugangsdaten

Zugangsdaten und Datenbankkonfiguration werden üblicherweise via Umgebungsvariablen bereitgestellt

Zugangsdaten sollten nicht unter Versionskontrolle stehen

## Bereitstellen von Zugangsdaten

verbreitete Möglichkeit, um Zugangsdaten bereit zu stellen: speichern in einer Datei namens _.env_, laden als Umgebungsvariablen mittels _dotenv_

_.env_:

```bash
DB_URL=mongodb+srv://<user>:<password>@<clusterurl>/<dbname>
```

laden in JavaScript:

```js
import dotenv from 'dotenv';

dotenv.config();

const DB_URL = process.env.DB_URL;
```

## Bereitstellen von Zugangsdaten

Stelle sicher, dass _.env_ nicht unter Versionskontrolle steht (füge es zur Datei _.gitignore_ hinzu)

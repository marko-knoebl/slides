# Supplying credentials

## Supplying credentials

credentials and database configuration should be supplied via environment variables

credentials should not be under version control

## Supplying credentials

common way to supply credentials: store in a file named _.env_, load as environment variables via _dotenv_

_.env_:

```bash
DB_URL=mongodb+srv://<user>:<password>@<clusterurl>/<dbname>
```

loading in JavaScript:

```js
import dotenv from 'dotenv';

dotenv.config();

const DB_URL = process.env.DB_URL;
```

## Supplying credentials

make sure _.env_ is not under version control (add it to the _.gitignore_ file)

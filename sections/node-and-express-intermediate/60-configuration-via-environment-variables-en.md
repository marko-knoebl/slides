<!--
section duplicated in:
- node-web-development-with-node-and-express
- node-and-mongodb
-->

# Configuration via environment variables

## Configuration via environment variables

credentials (e.g. for databases) and configuration should be supplied via environment variables

credentials should not be under version control

## .env file

common way to supply configuration and credentials: store in a file named _.env_, load as environment variables via _dotenv_

make sure _.env_ is not under version control (add it to the _.gitignore_ file)

## .env file

example _.env_ file:

```bash
PORT=3000
NODE_ENV=production
DB_URL=mongodb+srv://...
AUTH0_DOMAIN=xxx.eu.auth0.com
```

loading in JavaScript:

```js
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
```

## NODE_ENV

Environment variable `NODE_ENV`: important when using e.g. express

in production environments, `NODE_ENV=production` should always be set - otherwise the user will be able to see JavaScript error messages in detail (with stack traces)

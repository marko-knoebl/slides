# Same-origin policy and CORS with node

## Same-origin policy and CORS with node

```js
import cors from 'cors';
```

allowing requests from all domains:

```js
app.use(cors());
```

allowing requests from a specific domain:

```js
app.use(cors({ origin: 'https://www.example.com' }));
```

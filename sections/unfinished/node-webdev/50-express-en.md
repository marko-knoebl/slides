# Express

## Express

```js
const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
```

## Simple express app

for use on glitch.com

```js
const cors = require('cors');
const express = require('express');

const messages = [{ text: 'default message' }];

const app = express();

app.use(cors());
app.use(express.json());

app.get('/messages', (request, response) => {
  response.json(messages);
});
app.post('/post-message', (request, response) => {
  messages.push(request.body);
  response.send('');
});

const listener = app.listen(process.env.PORT);
```

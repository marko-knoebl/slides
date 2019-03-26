# simple express app

for use on glitch.com

```js
const express = require('express');
const cors = require('cors');

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

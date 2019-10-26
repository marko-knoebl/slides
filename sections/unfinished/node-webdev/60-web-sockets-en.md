# Web Sockets

## Time Server

```js
const ws = require('ws');

const wss = new ws.Server({ port: 8080 });

wss.on('connection', ws => {
  setInterval(() => {
    ws.send(new Date().toLocaleTimeString());
  }, 1000);
});
```

## Time Server (express-ws)

```js
const express = require('express');
const expressWs = require('express-ws');

const app = express();
expressWs(app);

...

app.ws('/', (ws, req) => {
  ws.on('message', msg => {
    console.log(msg);
  });
  setInterval(() => {
    ws.send(new Date().toLocaleTimeString());
  });
});
```

## Time Client

```js
const url = 'wss://ossified-dance.glitch.me';
const connection = new WebSocket(url);

connection.send('hello');

connection.onmessage = message => {
  console.log(message.data);
};
```

## Time Server (express)

```js
const express = require('express');
```

## Chat Server

```js
const chatMessages = ['demo message'];
const connections = [];

wss.on('connection', connection => {
  connections.push(connection);
  connection.on('message', messageString => {
    message = JSON.parse(messageString);
    if (message.type === 'get_messages') {
      connection.send(JSON.stringify(chatMessages));
    } else if (message.type === 'post_message') {
      for (let receivingConnection of connections) {
        receivingConnection.send(JSON.stringify(message));
      }
    }
  });
});
```

## Chat Client

# chat application

What we'll create:

A chat application that does real-time messaging, notifications; caches user data and avatars

# server

glitch.com - hello express

code:

```js
const ws = require('ws');

const wss = new ws.Server({ port: 8080 });

const chatMessages = ['demo message'];

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
  });
  setInterval(() => {
    ws.send(new Date().toLocaleTimeString());
  }, 1000);
});
```

# client

code:

```js
const url = 'wss://xyz.glitch.me';
const connection = new WebSocket(url);

connection.onopen = () => {
  connection.send('hey');
};

connection.onerror = error => {
  console.log(`WebSocket error: ${error}`);
};

connection.onmessage = e => {
  console.log(e.data);
};
```

# TCP with node

## TCP with node

```js
const net = require('net');

const server = net.createServer(socket => {
  socket.write('hello');
  socket.write(
    new Uint8Array([104, 101, 108, 108, 111, 0, 1, 2])
  );
  socket.end();
});

server.listen(3000);
```

const app = require('express')()
const http = require('http').Server(app);
const io = require('socket.io')(http)

app.get('/', (req, res) => res.send('Hello!'));

io.on('connection', socket => {
  console.log('a user has connected');
  socket.on('consoleAlert', message => console.log(`The message is '${message}'`));
});

http.listen(3000, () => console.log('Example application is listening'));







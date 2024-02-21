const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const app = express();
const PORT = 8000;

//http서버
const server = http.createServer(app);
//socket서버
const io = socketIo(server);

//미들웨어
app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render('client');
});
//소켓 통신
io.on('connection', (socket) => {
    console.log('조인 전', socket);
    //socket : 하나의 브라우저에만 접속(자신한테만 보임)
    socket.on('hello', (arg) => {
        console.log(arg);
        socket.emit('rtHello', { name: 'hello', message: '안녕하세요' });
    });
    socket.on('study', (arg) => {
        console.log(arg);
        socket.emit('rtStudy', { name: 'study', message: '공부합시다' });
    });
    socket.on('bye', (arg) => {
        console.log(arg);
        socket.emit('rtBye', { name: 'bye', message: '잘가~' });
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

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
app.get('/chat', (req, res) => {
    res.render('chat');
});

//소켓 기본 채팅예제
io.on('connection', (socket) => {
    console.log('조인 전', socket.rooms);
    socket.on('join', (res) => {
        // 채팅방을 생성하는 방법 중 하나는 join(방아이디)사용. 방이 존재하면 그 방으로 접속
        socket.join(res);
        socket.chatRoom = res;
        console.log('조인 후', socket.rooms);
        //broadcast : 나를 제외한 전체 사용자(브라우저)에게 메세지 전달
        socket.broadcast.to(res).emit('create', '새로운 브라우저가 입장하였습니다.');
    });

    socket.on('message', (res) => {
        //io.to(특정방 아이디).emit(이벤트) 특정방의 전체 사용자에세 메세지 전달
        io.to(socket.chatRoom).emit('chat', res);
    });
});

//소켓 기본 예제
// io.on('connection', (socket) => {
//     console.log('조인 전', socket);
//     //socket : 하나의 브라우저에만 접속(자신한테만 보임)
//     socket.on('open_message', (arg, arg2, arg3, cb) => {
//         console.log('arg : ', arg, arg2, arg3);
//         cb(arg, arg2, arg3);
//     });
//     socket.on('form_message', (arg) => {
//         console.log(arg);
//         socket.emit('backend_message', arg);
//     });
// });

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

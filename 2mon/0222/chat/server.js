const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const PORT = 8000;

const server = http.createServer(app); //http 서버
const io = socketIo(server); //socket 서버

//미들웨어
app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render('client');
});
//사용자 정보 갱신 함수
function getUserList(room) {
    //room에 접속한 모든 사용자
    const users = [];
    //room은 접속한 room.id
    //채팅룸에 접속한 socket.id값을 찾음
    //io.sockets안에서 adapter안 rooms에서 room이 같은 것을 가져옴
    const clients = io.sockets.adapter.rooms.get(room);
    console.log('clients', clients);
    if (clients) {
        clients.forEach((client) => {
            //io.socket.sockets : socket.id가 할당한 변수들의 객체값
            const userSocket = io.sockets.sockets.get(client);
            console.log('userSocket', userSocket);
            const info = { userName: userSocket.userName, key: client };
            users.push(info);
        });
    }
    return users;
}
const roomList = [];

//소켓 서버
io.on('connection', (socket) => {
    //socket : 접속한 웹 브라우저
    //io : 접속해 있는 모든 웹 브라우저
    //웹 브라우저가 접속이 되면 고유한 id값이 생성됨. socket.id로 확인 가능
    // console.log(socket.id);
    // 채팅방 만들기
    socket.on('create', (res) => {
        //join(방이름) : 해방 방이름이 없으면 생성, 존재하면 입장
        console.log(res);
        socket.join(res.roomName);
        console.log('방생성 후', socket.rooms);
        //socket객체안에 원하는 값을 할당
        socket.roomName = res.roomName;
        socket.userName = res.userName;
        //나를 제외한 모든 방 사람들에게 메세지 전달
        //socket.broadcast.to() = socket.to() => 작은 범위에선 broadcast 없어도 상관 없음
        socket.to(res.roomName).emit('notice', `${socket.id}님이 입장하셨습니다.`);

        //채팅방 목록 갱신
        if (!roomList.includes(res.roomName)) {
            roomList.push(res.roomName);
            //갱신된 목록은 전체가 봐야함
            io.emit('roomList', roomList);
        }

        //사용자 정보 갱신
        const userList = getUserList(res.roomName);
        io.to(res.roomName).emit('userList', userList);
    });
    //메세지
    socket.on('sendMessage', (res) => {
        console.log(res);
        const { message, user, select } = res;
        if (select === 'all') {
            //특정방에 전체 사용자에게 메세지 보내기
            io.to(socket.roomName).emit('newMessage', { message, user, dm: false });
        } else {
            //선택된 사용자에게 메세지 보내기
            io.to(select).emit('newMessage', { message, user, dm: true });
            //자시 자신에게 메세지 보내기
            socket.emit('newMessage', { message, user, dm: true });
        }
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

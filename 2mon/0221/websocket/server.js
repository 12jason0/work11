const express = require('express');
const http = require('http');
const ws = require('ws');
const app = express();
const PORT = 8000;

//http서버
const server = http.createServer(app);

// 웹소켓 서버 연결
const wss = new ws.Server({ server: server });

//미들웨어
app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render('client');
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//웹 소켓은 http랑 별개여서 아무대나 적어도 상관 없음
//웹 소켓
//브라우저(클라이언트)들을 담을 배열 변수
wss.on('connection', (socket) => {
    //socket매개변수는 접속한 브라우저
    console.log(wss.clients);
    console.log('클라이언트가 연결 되었습니다.');

    //메세지 이벤트
    socket.on('message', (message) => {
        // 웹 소켓을 통해 클라이언트와 서버간의 데이터를 주고 받을 때는 일반적으로 문자열 또는 버퍼형태로 전달됨
        // 버퍼를 쓰는 이유 : 서버가 모두 다른 환경이기 때문에 객체를 전달할 때는 객체를 일렵의 바이트로 변환하는 직렬화 과정이 필요
        // 예를 들어 javascript에서는 읽을 수 있는 것들은 JAVA 나 파이썬에선 못 읽을 수 가 있음
        // 버퍼 : ex) 00 03 33 32 .....
        const msg = JSON.parse(message);
        // console.log(msg);
        // console.log(`클라이언트에서 받은 메세지 : ${msg.message}`);
        // socket.send(`서버메세지 : ${msg.message}`);
        wss.clients.forEach((value) => {
            value.send(`${msg.user}: ${msg.message}`);
        });
    });

    //오류 이벤트
    socket.on('error', (err) => {
        console.log('error 발생', err);
    });

    //접속 종료
    socket.on('close', () => {
        console.log('클라이언트와 연결이 종료됨');
    });
});

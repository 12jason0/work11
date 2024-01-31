//require() : 외부에서 주는 함수 가져와서 사용
// const connect = require('./module.js');
// const { a, b, c } = require('./module.js');
// console.log(a, b, c);

//http를 가져온다. 어떤 코드로 이루어져 있는지 모름
const http = require('http');
//fs : file system의 약자
const fs = require('fs');

//http 생성
//http  - 많은 기능을 수행하지 못하므로 express를 선호함
const server = http.createServer(function (req, res) {
    // res.writeHead(200); head에다가 200이라는 코드 보냄
    // res.write('<h1>Hello Nodejs</h1>');
    // res.end('<p>End</p>');

    //try-catch
    //오류가 나면 서버가 멈추는 것을 방지 하기 위해 try{정상 작동 할떄의 코드}catch(error){실패했을 때의 코드}

    //파일 전송
    try {
        const data = fs.readFileSync('./index.html');
        res.writeHead(200);
        res.end(data);
    } catch (error) {
        console.log(error);
        res.writeHead(404);
        res.end(error.message);
    }
});

//서버 이벤트
//요청할 때 들어오는 이벤트
// server.on('request', function () {
//     console.log('요청 이벤트');
// });

// //
// server.on('connection', function () {
//     console.log('접속 이벤트');
// });

//listen : 서버 실행
// ex) server.listen ( 포트 , 콜벡 함수(생략 가능) )
server.listen(8000, function () {
    console.log('8000번 포트 실행');
});

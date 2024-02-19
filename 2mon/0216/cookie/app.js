const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

//미들웨어
app.set('view engine', 'ejs');
//쿠키
//일반쿠키
app.use(cookieParser());
//쿠키옵션
const cookieConfig = {
    //httpOnly: 웹 서버를 통해서만 쿠키에 접근가능
    //=> 자바스크립트에서 document.cookie를 이용해서 쿠키에 접속하는것을 차단
    //maxAge: 쿠키의 수명
    //expires: 만료날짜를 GMT 시간으로 설정
    //path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고 웹브라우저는
    //해당하는 쿠키만 웹서에 전송. 쿠키가 전송될 URL을 지정 가능(기본값: '/')
    //domain: 쿠키가 전송될 도메인을 지정 가능(기본값: 현재도메인)
    //secure: https로 통시하는 경우만 쿠키를 전송
    //signed: 쿠키의 암호화 결정
    httpOnly: true,
    maxAge: 60 * 1000, //1분
};

//라우터
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/setCookie', (req, res) => {
    //쿠키이름, 쿠키값, 옵션객체
    res.cookie('myCookie', 'myValue', cookieConfig);
    // localStorage.setItem('myLocal', 'localValue'); //프론트
    res.send('쿠키 설정하기');
});
app.get('/getCookie', (req, res) => {
    // localStorage.getItem('myLocal'); //프론트
    res.send(req.cookies);
});
app.get('/clearCookie', (req, res) => {
    //쿠키삭제
    //localStorage.clear(); //프론트
    res.clearCookie('myCookie');
    res.send('쿠키삭제');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

//세션 옵션 객체
//httpOnly: 자바스크립트를 통해서 세션을 사용할 수 없도록 강제
//secure: https에서만 세션을 주고받음
//secret: 세션을 암호화하기 위한 비밀키
//resave: 세션을 항상 저장할 건지 지정(보통 false권장)
//=> 세션에 수정사항이 생기지 않더라도 매 요청(req)마다 세션을 다시 저장할 것인지 지정
//saveUninitialized: 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
//=> 초기화 되지 않는 세션을 스토어에 저장지 설정(보통 true)
//cookie 객체
app.use(
    session({
        secret: 'mySession',
        resave: false,
        saveUnintialized: true,
    })
);

app.get('/', (req, res) => {
    //세션설정
    //req.session.name = '홍길동';
    req.session.user = { id: 1, username: '홍길동' };
    res.send('세션설정');
});

app.get('/getSession', (req, res) => {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.send('사용자가 존재하지 않습니다');
    }
});
app.get('/destroy', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send(err);
        }
        res.send('세션삭제 완료');
    });
});

app.listen(PORT, () => {
    console.log(`http:localhost:${PORT}`);
});

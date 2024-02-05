//순서가 중요
//가져오는 명령어 -> 미들웨어 -> 주소 -> 불러오는 코드
const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
//x-www-form-urlencoded방식
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //json방식

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//router (서버 주소 만드는 코드)
app.get('/', (req, res) => {
    res.render('index');
});
// 주소 적으면 사이트가 열리기만 하고 정보는 없음
app.get('/getForm', (req, res) => {
    //get 방식일 때
    console.log(req.query);
    //backend에서 fontend로 데이터 전송
    res.render('result', { title: 'GET요청 결과', userInfo: req.query });
});
//POST 방식일 때
//주소를 적으면 사이트 못들어감
app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('result', { title: 'POST요청 결과', userInfo: req.body });
});

//서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

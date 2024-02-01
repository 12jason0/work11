const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//router (서버 주소 만드는 코드)
app.get('/', (req, res) => {
    res.render('exam');
});

//get 방식일 때
app.get('/getPage', (req, res) => {
    res.render('get'); //단순 페이지 열기
});
app.get('/resultget', (req, res) => {
    console.log(req.query);
    //객체 구조 분해 할당
    const { username, gender, birthYear, birthMonth, birthDay, hobby } = req.query;
    //데이터 정보 전달받기
    res.render('resultget', {
        title: 'GET전송',
        userInfo: {
            username,
            gender,
            birthYear,
            birthMonth,
            birthDay,
            hobby,
            color: { result: false, color: null },
            number: { result: false, number: null },
        },
    });
});
// POST 방식일 때
app.get('/postPage', (req, res) => {
    res.render('post');
});
app.post('/resultpost', (req, res) => {
    const { username, gender, birthYear, birthMonth, birthDay, hobby, color, number } = req.body;
    res.render('resultget', {
        title: 'POST전송',
        userInfo: {
            username,
            gender,
            birthYear,
            birthMonth,
            birthDay,
            hobby,
            //key-value형태에서 key값ㅅ과 value의 변수가 동일할때는 하나로 합치기 가능
            color: { result: true, color: color },
            number: { result: true, number: number },
        },
    });
});

//use는 http전송방식을 이해하지 못함
//같은 router(url)로 get, post로 만들 수 있지만 use로는 접근이 불가
//예를 들어 get방식의 '/login'과 post방식의 '/login'은 다른 통신이지만
//use는 동일한 페이지로 인식
//use는 404페이지 일때 주로 사용
app.use('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

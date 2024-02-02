const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set('view engine', 'ejs');

//router
// ======   페이지
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/submit', (req, res) => {
    res.render('submit');
});
app.get('/func', (req, res) => {
    res.render('func');
});
// ==========페이지
/**
 *  render() : 뷰 페이지 렌더링  render(뷰페이지 이름, 데이터(선택))
 *  JAON() : 객체 타입 데이터 전송
 
 *  send() : 모든 타입 데이터 전송(즉, 문자열, 배열, 객체, 숫자 등)
 *  청 받은 것을 응답(비동기 데이터 보내줌)
 *  클라이언트에 응답데이터를 보낼 때
 
 *  redirect() : 페이지 강제 이동
 */
//====== 요청과 응답
//ajax
app.get('/ajax', (req, res) => {
    console.log('요청값 : ', req.query);
    //객체 구조 분해 할당
    const { name, email } = req.query;
    //프론트 엔드로 보내는 데이터(응답)
    res.send({ user: `${name}님`, address: `주소 : ${email}` });
});

app.post('/ajax', (req, res) => {
    console.log('요청값 : ', req.body);
    //객체 구조 분해 할당
    const { name, email } = req.body;
    //프론트 엔드로 보내는 데이터(응답)
    //key값 과 value값이 동일할 때 합쳐서 적을 수 있음
    res.send({ username: name, email });
});

//axios
app.get('/axios', (req, res) => {
    console.log('요청값', res.query);
    res.send(req.query);
});

app.post('/axios', (req, res) => {
    console.log('요청값', res.body);
    const { username, email } = req.body;
    const data = {
        name: `안녕하세요 ${username}님`,
        address: `주소는 ${email}입니다.`,
    };
    res.send(data);
});

app.get('/fetch', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});

app.post('/fetch', (req, res) => {
    console.log('요청값', req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

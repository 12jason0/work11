require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

//해당 폴더의 index.js는 생략 가능
//const router = require('./routes');
const router = require('./routes/index');
// '/'=> 구분 하기 위해서 아무거나 적어도 상관 없음
//          패이지의 공통적으로 오기 때문
app.use('/', router);
const userRouter = require('./routes/user');
app.use('/user', userRouter);

//오류처리
app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

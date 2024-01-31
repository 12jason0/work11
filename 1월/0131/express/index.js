const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

//정적 파일 불러오기
app.use('/public', express.static(__dirname + '/public'));

//localhost:8000
app.get('/', (req, res) => {
    //send() 클라이언트에 응답데이터를 보낼 때
    res.send('Hello Express');
});

//렌더링
app.get('/kdt', (req, res) => {
    //render() 뷰 엔진 렌더링
    //.ejs를 안적는 이유
    // app.set('view engine', 'ejs'); 미리 설정을 해서
    res.render('test', { name: '홍길동' });
});

app.get('/gugu', (req, res) => {
    res.render('gugudan', { data: 2, dan: 3, leng: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
//순서가 가장 중요
//set -> get -> listen

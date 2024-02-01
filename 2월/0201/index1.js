const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index1');
});

app.get('/getForm1', (req, res) => {
    //get 방식일 때
    console.log(req.query);
    //backend에서 fontend로 데이터 전송
    res.render('result1', { title: 'GET요청 결과', userInfo: req.query });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

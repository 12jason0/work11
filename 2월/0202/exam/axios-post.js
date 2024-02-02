const express = require('express');
const app = express();
const PORT = 8000;
const id = 'jason';
const pw = '1234';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('axios1');
});
app.post('/axios1', (req, res) => {
    console.log(res.body);
    const { id, pw } = req.body;
    if (id === 'jason' && pw === '1234') {
        res.send({ success: true });
    } else {
        res.send({ success: false, message: '아이디 또는 비밀번호를 다시 확인해주세요.' });
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

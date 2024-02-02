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
    res.render('axios');
});

//axios
app.get('/axios', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

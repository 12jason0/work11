const express = require('express');
const app = express();
const PORT = 8000;
const id = 'jason';
const pw = '1234';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

const router = require('./routes/iindex');
app.get('/', router);
app.post('/login', router);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

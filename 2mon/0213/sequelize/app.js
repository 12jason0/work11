const express = require('express');
const app = express();
const PORT = 8000;

//미들웨어
app.set('view engine', 'ejs');
app.use(express.json());

//router
const indexRouter = require('./routes');
app.use('/', indexRouter);
const userRouter = require('./routes/user');
app.use('/api/user', userRouter);

//404
app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

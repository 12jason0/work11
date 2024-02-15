const express = require('express');
const db = require('./models');
const app = express();
const PORT = 8000;

//미들웨어
app.set('view engine', 'ejs');
app.use(express.json());

//라우터
const indexRouter = require('./routes');
app.use('/', indexRouter);
const postRouter = require('./routes/post');
app.use('/api/post', postRouter);
const memberRouter = require('./routes/member');
app.use('/api/member', memberRouter);

//404
app.get('*', (req, res) => {
    res.status(404).render('404');
});

//테이블싱크
//force:true 항상 테이블을 삭제 후 재생성
//force:false(기본값) 테이블이 존재하면 패쓰, 없으면 생성
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});

const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

//정적파일 설정
//http://localhost:8000/uploads/파일명
app.use('/uploads', express.static(__dirname + '/uploads'));

//multer 설정
const upload = multer({
    //dest : 업로드 할 파일을 저장할 폴더를 지정
    dest: 'uploads/',
});

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const newName = path.basename(file.originalname, ext) + Date.now() + ext;
            done(null, newName);
        },
    }),

    limits: { fileSize: 5 * 1024 * 1024 },
});

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/uploads', uploadDetail.single('file'), (req, res) => {
    console.log('file', req.file);
    console.log('title', req.body);
    res.render('result', { title: '프로필', userInfo: req.body, file: req.body });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

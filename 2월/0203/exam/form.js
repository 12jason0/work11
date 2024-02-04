const express = require('express');
const app = express();
const PORT = 8000;
const multer = require('multer');
const path = require('path');

app.set('view-engine', 'ejs');
app.set('views', './views');

app.use('/upload', express.static(__dirname + '/upload'));

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'upload/');
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
    res.render('form.ejs');
});

app.post('result', uploadDetail.single('file'), (req, res) => {
    const { id, pw, username, age, file } = req.body;
    res.render('upload');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

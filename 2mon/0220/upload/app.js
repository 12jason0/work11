const express = require('express');
//aws 설정을 위한 모듈
const aws = require('aws-sdk');
const multer = require('multer');
//aws s3에 파일 업로드하기 위한 multer설정
const multerS3 = require('multer-s3');
const app = express();
const PORT = 8000;

//aws 설정
aws.config.update({
    accessKeyId: '', //엑세스 키
    secretAccessKey: '', //엑세스키 비밀번호
    region: 'ap-northeast-2', //지역 (버킷에 있음)
});

//aws s3 인스턴스 생성
const s3 = new aws.S3();

//multer 설정
const upload = multer({
    storage: multerS3({
        s3, //s3: s3
        bucket: 'kdt11-oh-bucket',
        acl: 'public-read', //파일접근 권한(public-read로 해야 업로드된 파일이 공개)
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        },
    }),
});

//미들 웨어
app.set('view engine', 'ejs');

//라우터
//페이지
app.get('/', (req, res) => {
    res.render('index');
});
//api
app.post('/upload', upload.array('files'), (req, res) => {
    console.log(req.files);
    res.send(req.files);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

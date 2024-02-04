const express = require('express');
const multer = require('multer');
const path = require('path'); //폴더와 파일의 경로를 쉽게 조작하도록 제공
const app = express();
const PORT = 8000;

//view-engine
app.set('view-engine', 'ejs');
app.set('views', './views');

//정적파일 설정
//http://localhost:8000/uploads/파일명
app.use('/uploads', express.static(__dirname + '/uploads'));

//multer 설정
const upload = multer({
    //dest : 업로드 할 파일을 저장할 폴더를 지정
    dest: 'uploads/',
});

//multer 세부 설정(1)
const uploadDetail = multer({
    //storage : 저장할 공간에 대한 정보
    //diskStorage : 파일을 저장하기 위한 모든 제어 기능을 제공(파일 저장 관련 설정)
    storage: multer.diskStorage({
        //destination : 업로드 할 파일을 저장할 폴더를 지정(dest = destination)
        //destinaton : (요청 객체, 업로드 된 파일 객체, 콜백함수)
        destination(req, file, done) {
            //done(에러 처리 , '업로드 할 폴더 이름')
            done(null, 'uploads/');
        },

        //filename : 파일 이름을 결정(요청 객체, 업로드 된 파일 객체, 콜백함수)
        filename(req, file, done) {
            //extname() : 확장자를 추출
            const ext = path.extname(file.originalname);
            //basename() : 파일이름을 추출(파일의 오리지널명, 확장자)
            // => 확장자를 제외해서 파일이름만 추출
            const newName = path.basename(file.originalname, ext) + Date.now() + ext;
            done(null, newName);
        },
    }),

    //limits : 파일 저장 용량제한
    limits: { fileSize: 5 * 1024 * 1024 }, //5mb 제한
});

/*
multer 세부 설정 (2)
    storage와 limits 따로 구별해서 쓰는 코드(따로 쓰면 하나로 묶어야됌)

const storage = multer.diskStorage({
    destination: (req, file, done) => {
        done(null, 'uploads/');
    },
    filename: (req, file, done) => {
        const ext = path.extname(file.originalname);
        //basename() : 파일이름을 추출(파일의 오리지널명, 확장자)
        // => 확장자를 제외해서 파일이름만 추출
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        done(null, newName);
    },
});
const limits = {
    fileSize: 5 * 1024 * 1024,
};
*/

//router
// ===== 페이지
app.get('/', (req, res) => {
    res.render('index.ejs');
});
// limits와 storage 따로 쓰면 묶는 코드
// limits와 storage 따로 쓰면 묶는 코드
const uploadDetailPart2 = multer({ storage: uploadDetail.storage, limits: uploadDetail.limits });

// === 요청,응답 데이터 처리
//single()
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    console.log('file : ', req.file);
    console.log('title : ', req.body);
});

//멀티 버전(1) : array()
app.post('/uploads/array', uploadDetail.array('userfile'), (req, res) => {
    console.log('files', req.file);
    console.log('title', req.body);
});

//멀티 버전(2) : fields()
app.post('/uploads/fields', uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]), (req, res) => {
    console.log('files', req.file);
    console.log('title', req.body);
});

//동적
//formData.append('file'), file .....
//file 값을 uploadDetail.singlet('여기')에다가 작성
app.post('/upload/axios', uploadDetail.single('file'), (req, res) => {
    res.send({ file: req.file, title: req.body });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

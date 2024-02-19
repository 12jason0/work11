const express = require('express');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 8000;

let sign = ''; //전역변수로 패쓰워드 저장

app.use(express.json());

//라우터
app.post('/sign', (req, res) => {
    const { pw } = req.body;
    //const sign = createHashedPassword(pw);
    //sign = createPbkdf(pw);
    //sign = cipherEncrypt(pw);
    sign = bcryptPassword(pw);
    res.json({ result: sign });
});
app.post('/verify', (req, res) => {
    const { pw } = req.body;
    //const result = verifyPassword(pw, sign);
    //const result = decipher(sign);
    const result = comparePassword(pw, sign);
    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//단방향
//해시함수
const createHashedPassword = (password) => {
    //createHash(알고리즘).update(암호화할값).digest(인코딩방식)
    return crypto.createHash('sha256').update(password).digest('base64');
};
//pdkdf2함수
const salt = crypto.randomBytes(16).toString('base64'); //솔트생성
const iterations = 1000; //반복횟수
const keylen = 64; //생성할 키의 길이
const digest = 'sha256'; //알고리즘

//암호화생성
const createPbkdf = (password) => {
    console.log(salt);
    //pbkdf2함수(비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘)으로 생성. 반환은 buffer값
    const sign = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
    console.log(sign);
    return sign.toString('base64');
};
//암호비교
const verifyPassword = (password, dbPassword) => {
    const compare = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('base64');
    if (compare === dbPassword) {
        return true;
    } else {
        return false;
    }
};

//양방향
const algorithm = 'aes-256-cbc'; //256비트 키를 사용, 블록크기 128비트
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); //초기화벡터, 보완성을 높이기위해 사용
//암호화
const cipherEncrypt = (word) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv); //암호화 객체 생성
    let encryptedData = cipher.update(word, 'utf-8', 'base64'); //암호화할 데이터 처리
    encryptedData += cipher.final('base64'); //최종결과 생성
    return encryptedData;
};
//복호화
const decipher = (encryptedData) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv); //복호화 객체 생성
    let decryptedData = decipher.update(encryptedData, 'base64', 'utf-8');
    decryptedData += decipher.final('utf-8');
    return decryptedData;
};

//bcrypt 단방향
const saltNumber = 10;
//암호화
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, saltNumber);
};
//비교
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
};

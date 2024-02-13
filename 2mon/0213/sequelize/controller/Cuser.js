const User = require('../model/Muser');
const { Member } = require('../models');

//회원가입
exports.signup = async (req, res) => {
    console.log(req.body);
    // const result = await User.signup(req.body);
    // console.log('signup', result);
    const { id, pw, username } = req.body;
    Member.create({ userid: id, password: pw, username }).then(() => {
        res.json({ result: true });
    });
};

//로그인
exports.Clogin = async (req, res) => {
    console.log(req.body);
    const result = await User.Mlogin(req.body);
    console.log('login', result);
    if (result.length >= 1) {
        res.json({ result: true, message: '로그인 성공', id: result[0].id });
    } else {
        res.json({ result: false, message: '로그인 실패', id: null });
    }
};

//회원정보 조회
//결과값 보내줄 때 맞춰주면 프론트에서 편함
exports.Cinfo = async (req, res) => {
    console.log(req.params.id);
    const result = await User.Minfo(req.params.id);
    console.log('info', result);
    if (result.length > 0) {
        res.json({ result: true, info: result[0], message: '회원 존재' });
    } else {
        res.json({ result: false, info: null, message: '존재하는 회원없음' });
    }
};

//회원정보 수정
exports.Cupdate = async (req, res) => {
    const result = await User.Mupdate(req.body);
    console.log('update', result);
    res.json({ result: true });
};

//회원정보 삭제
exports.Cdelete = async (req, res) => {
    const result = await User.Mdelete(req.body);
    console.log('delete', result);
    res.json({ result: true });
};

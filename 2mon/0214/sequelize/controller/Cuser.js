const User = require('../model/Muser');
const { Member } = require('../models');
const { Op } = require('sequelize');

//회원가입
exports.signup = async (req, res) => {
    console.log(req.body);
    // const result = await User.signup(req.body);
    // console.log('signup', result);
    const { id, pw, username } = req.body;
    //create => insert
    Member.create({ userid: id, password: pw, username }).then(() => {
        res.json({ result: true });
    });
};

//로그인
exports.Clogin = async (req, res) => {
    //mysql 방법
    // console.log(req.body);
    // const result = await User.Mlogin(req.body);
    // console.log('login', result);
    // if (result.length >= 1) {
    //     res.json({ result: true, message: '로그인 성공', id: result[0].id });
    // } else {
    //     res.json({ result: false, message: '로그인 실패', id: null });
    // }
    //sequelize 방법
    // findOne : 배열로 안오고 하나만 온다
    const { id, pw } = req.body;
    Member.findOne({ where: { userid: id, password: pw } }).then((result) => {
        console.log('login', result);
        if (result !== null) {
            res.json({ result: true, message: '로그인 성공', id: result.id });
        } else {
            res.json({ result: false, message: '로그인 실패', id: null });
        }
    });
};
//회원정보 조회
//결과값 보내줄 때 맞춰주면 프론트에서 편함
exports.Cinfo = async (req, res) => {
    //mysql 방법
    // console.log(req.params.id);
    // const result = await User.Minfo(req.params.id);
    // console.log('info', result);
    // if (result.length > 0) {
    //     res.json({ result: true, info: result[0], message: '회원 존재' });
    // } else {
    //     res.json({ result: false, info: null, message: '존재하는 회원없음' });
    // }
    //sequelize 방법
    Member.findOne({ where: { id: req.params.id } }).then((result) => {
        if (result !== null) {
            res.json({ result: true, info: result, message: '회원 존재' });
        } else {
            res.json({ result: false, info: null, message: '존재하는 회원없음' });
        }
    });
};

//회원 정보 전체
//findAll() : where은 선택, 하나만 출력 시켜도 배열형태로 보여준다
//findOne() : where이 필수
exports.Call = async (req, res) => {
    Member.findAll({
        //attributes : 원하는 컬럼 조회
        attributes: ['id', 'username', 'userid'],
        //맨 위에 const { Op } = require('sequelize')를 적어야 사용할 수 있음
        //Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.lte(이하)
        //Op.or(또는), Op.ne(같지않음), Op.in(배열 요소 중 하나), Op.notIn(배열요소와 모두 다름)
        where: { id: { [Op.gt]: 5 } },
        order: [['id', 'DESC']],
        limit: 2,
        offset: 1,
    }).then((result) => {
        console.log(result);
        res.json({ result });
    });
};

//회원정보 수정
exports.Cupdate = async (req, res) => {
    //mysql 방법
    // const result = await User.Mupdate(req.body);
    // console.log('update', result);
    // res.json({ result: true });
    //Sequelize 방식
    const { id, username, pw } = req.body;
    Member.update({ username, password: pw }, { where: { id } }).then((result) => {
        console.log('update', result);
        res.json({ result: true });
    });
};

//회원정보 삭제
exports.Cdelete = async (req, res) => {
    //mysql 방법
    //const result = await User.Mdelete(req.body);
    // console.log('delete', result);
    // res.json({ result: true });
    // Sequelize 방법
    Member.destroy({ where: { id: req.body.id } }).then((result) => {
        console.log('delete', result);
        res.json({ result: true });
    });
};

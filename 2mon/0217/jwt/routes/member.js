const express = require('express');
const controller = require('../controller/member');
const middleware = require('../middleware'); //사용자 인증정보 미들웨어 추가

const router = express.Router();

//POST /signup 회원가입
router.post('/signup', controller.signup);
//POST /login 로그인
router.post('/login', controller.login);
//GET /profile 회원조회
router.get('/profile', middleware.auth, controller.find);
//PATCH /update 정보수정
router.patch('/update', middleware.auth, controller.update);
//DELETE /delete 회원탈퇴
router.delete('/delete', middleware.auth, controller.delete);

module.exports = router;

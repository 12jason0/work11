const express = require('express');
const controller = require('../controller/member');

const router = express.Router();

//POST /signup 회원가입
router.post('/signup', controller.signup);
//POST /login 로그인
router.post('/login', controller.login);
//GET /info 회원조회
router.get('/info', controller.find);
//PATCH /update 정보수정
router.patch('/update', controller.update);
//DELETE /delete 회원탈퇴
router.delete('/delete', controller.delete);
//GET /logout 로그아웃(세션삭제)
router.get('/logout', controller.logout);
//GET /getCookie 쿠키
router.get('/getCookie', controller.getCookie);

module.exports = router;

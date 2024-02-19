const express = require('express');
const controller = require('../controller/post');
const middleware = require('../middleware');

const router = express.Router();

//GET /all 전체글 조회
router.get('/all', middleware.auth, controller.all);
//GET /post/:id 게시판글 하나 조회
router.get('/:id', middleware.auth, controller.post);
//POST /write 게시판 글 하나 생성
router.post('/write', middleware.auth, controller.write);
//PATCH /update 게시판 글 하나 수정
router.patch('/update', middleware.auth, controller.update);
//DELETE /delete 게시판 글 하나 삭제
router.delete('/delete', middleware.auth, controller.delete);
//POST /comment 댓글 생성
router.post('/comment', middleware.auth, controller.comment);

module.exports = router;

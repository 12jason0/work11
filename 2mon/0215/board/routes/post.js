const express = require('express');
const controller = require('../controller/post');

const router = express.Router();

//GET /all 전체글 조회
router.get('/all', controller.all);
//GET /post/:id 게시판글 하나 조회
router.get('/:id', controller.post);
//POST /write 게시판 글 하나 생성
router.post('/write', controller.write);
//PATCH /update 게시판 글 하나 수정
router.patch('/update', controller.update);
//DELETE /delete 게시판 글 하나 삭제
router.delete('/delete', controller.delete);

//POST /comment 댓글 생성
router.post('/comment', controller.comment);

module.exports = router;

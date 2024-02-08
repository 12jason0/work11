const express = require('express');
const controller = require('../controller/Cvisitor');

const router = express.Router();

//방명록에 관련된 데이터 처리하는 라우터
//localhost:8000/api/visitor/
//GET / 방명록 전체 보이기
router.get('/', controller.allVisitor);
//GET /:id 방명록 하나 보이기
router.get('/:id', controller.getVisitor);
//POST /write 방명록 하나 작성
router.post('/write', controller.postVisitor);
//PATCH /update 방명록 하나 수정
router.patch('/update', controller.patchVisitor);
//DELETE /delete 방명록 하나 삭제
router.delete('/delete', controller.deleteVisitor);

module.exports = router;

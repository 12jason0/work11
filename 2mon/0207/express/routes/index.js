const express = require('express');
//router를 가져와서 사용하는 코드
// (단, router에서 r은 무조건 대문자)
const router = express.Router();
// ..은 두번 들어간다는 의미
const controller = require('../controller/comment');

//router
//get => router로 바꿔줘야함
router.get('/', controller.main);

//배열 전체를 보내는 것
router.get('/comments', controller.comments);

//전체 리스트의 상세 페이지
// 1) localhost:8000/comment?id=1  : 페이지가 아니고 처리하는 방식
// 2) lacalhost:8000/commment/1    : params 방식

// 2번 방식 ('/commtent/:page)에서 page는 params의 하나의 객체가 되는 부분이다
// page말고 다른 단어를 적어도 상관없음. {page : "값"}형태, :이 붙고 안붙고 차이가 큼.
router.get('/comment/:page', controller.comment);

//모듈화
//공통적으로 들어간 것을 적어야함
module.exports = router;

const commentsModel = require('../model/comment');

/* 방법 1
//모듈로 표현
exports.main = (req, res) => {
    res.render('index');
};

exports.comments = (req, res) => {
    res.render('comments', { list: comments });
};

exports.comment = (req, res) => {
    console.log(req.params);
    console.log(typeof req.params.page);
    // 형태가 string으로 오기 때문에 오류를 줄이기 위해서 미리 숫자로 설정을 하는게 좋다.
    // const page = Number(req.params.page);
    const page = Number(req.params.page);
    // 배열 하나를 보내는 것인데 배열의 인덱스 값은 0부터 시작, 하지만 page는 1부터 시작이므로 data: comments[page -1]를 설정함
    // comments 배열의 요소에 접근 => 즉, 객체 하나
    res.render('comment', { data: comments[page - 1] });
};
*/

//방법 2 [
//화살표 함수로 표현
const main = (req, res) => {
    res.render('index');
};

const comments = (req, res) => {
    res.render('comments', { list: commentsModel });
};

const comment = (req, res) => {
    console.log(req.params);
    console.log(typeof req.params.page);
    // 형태가 string으로 오기 때문에 오류를 줄이기 위해서 미리 숫자로 설정을 하는게 좋다.
    // const page = Number(req.params.page);
    const page = Number(req.params.page);
    // 배열 하나를 보내는 것인데 배열의 인덱스 값은 0부터 시작, 하지만 page는 1부터 시작이므로 data: comments[page -1]를 설정함
    // comments 배열의 요소에 접근 => 즉, 객체 하나
    res.render('comment', { data: commentsModel[page - 1] });
};

module.exports = { main: main, comments, comment };
// ]

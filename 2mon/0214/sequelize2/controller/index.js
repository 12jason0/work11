const main = (req, res) => {
    res.render('index');
};

const post = (req, res) => {
    res.render('post'); //전체 글 페이지
};

const detail = (req, res) => {
    res.render('detail'); //상세페이지
};
const write = (req, res) => {
    res.render('write'); //글쓰기 페이지
};

const non = (req, res) => {
    res.render('non');
};

module.exports = { main, post, detail, write, non };

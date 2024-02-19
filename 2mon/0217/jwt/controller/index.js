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
    res.render('write'); //글쓰기페이지
};

const signup = (req, res) => {
    res.render('signup'); //회원가입페이지
};

const login = (req, res) => {
    res.render('login');
};

const profile = (req, res) => {
    res.render('profile');
};

module.exports = { main, post, detail, write, signup, login, profile };

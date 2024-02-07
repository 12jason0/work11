require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

//임시 db
const comments = [
    {
        id: 1,
        userid: 'hello',
        date: '2024-02-01',
        comment: '안녕하세요',
    },
    {
        id: 2,
        userid: 'happy',
        date: '2024-02-03',
        comment: '반갑습니다',
    },
    {
        id: 3,
        userid: 'lucky',
        date: '2024-02-05',
        comment: '행복하세요',
    },
    {
        id: 4,
        userid: 'fail',
        date: '2024-02-07',
        comment: '축구망했다',
    },
];

//router
app.get('/', (req, res) => {
    res.render('index');
    // console.log('hi');
    // console.log(process.env);
    // console.log(process.env.NODE);
    // console.log(process.env.NAME);
    // console.log(process.env.NODE_ENV);
    // if (process.env.NODE_ENV === 'production') {
    //     console.log('라이브 서버입니다');
    // } else if (process.env.NODE_ENV === 'development') {
    //     console.log('개발용 서버 입니다');
    // }
});

//배열 전체를 보내는 것
app.get('/comments', (req, res) => {
    res.render('comments', { list: comments });
});

//전체 리스트의 상세 페이지
// 1) localhost:8000/comment?id=1  : 페이지가 아니고 처리하는 방식
// 2) lacalhost:8000/commment/1    : params 방식

// 2번 방식 ('/commtent/:page)에서 page는 params의 하나의 객체가 되는 부분이다
// page말고 다른 단어를 적어도 상관없음. {page : "값"}형태, :이 붙고 안붙고 차이가 큼.
app.get('/comment/:page', (req, res) => {
    console.log(req.params);
    console.log(typeof req.params.page);
    // 형태가 string으로 오기 때문에 오류를 줄이기 위해서 미리 숫자로 설정을 하는게 좋다.
    // const page = Number(req.params.page);
    const page = Number(req.params.page);
    // 배열 하나를 보내는 것인데 배열의 인덱스 값은 0부터 시작, 하지만 page는 1부터 시작이므로 data: comments[page -1]를 설정함
    // comments 배열의 요소에 접근 => 즉, 객체 하나
    res.render('comment', { data: comments[page - 1] });
});

//오류처리
app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

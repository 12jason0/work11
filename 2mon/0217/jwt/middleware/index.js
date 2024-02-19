const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    const header = req.headers.authorization;
    //req.headers['authorization']
    console.log(header);
    if (!header) {
        return res.status(401).json({ success: false });
    }
    const [_, token] = header.split(' ');

    //jwt 인증
    jwt.verify(token, process.env.SECRET, (err, decode) => {
        if (err) {
            return res.status(403).json({ success: false });
        }
        req.user = decode; //다음 미들웨어로 전달하는 값
        next();
    });
};

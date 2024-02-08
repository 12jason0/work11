const Users = require('../model/user');

const main = (req, res) => {
    res.render('index', { users: Users });
};

const register = (req, res) => {
    const { name, gender, major } = req.body;
    Users.push({
        id: Users.length + 1,
        name,
        gender,
        major,
    });
    res.send({ result: true });
};

module.exports = { main, register };

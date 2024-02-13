const express = require('express');
const controller = require('../controller/Cindex');

const router = express.Router();

//localhost:8000/
router.get('/', controller.main);
router.get('/login', controller.login);
router.get('/signup', controller.signup);
router.get('/profile/:id', controller.profile);

module.exports = router;

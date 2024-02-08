const express = require('express');
const controller = require('../controller/Cpage');

const router = express.Router();

//localhost:8000/
router.get('/', controller.main);

//localhost:8000/visitor
router.get('/visitor', controller.pageVisitor);

module.exports = router;

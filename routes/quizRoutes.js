const express = require('express');
const router = express.Router();
const { getQuizQuestions } = require('../controllers/quizController');

router.get('/', getQuizQuestions);

module.exports = router;

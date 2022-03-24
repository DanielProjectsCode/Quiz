const express = require("express");

const quizzesControllers = require('../controllers/quiz-controllers')

const router = express.Router();

router.post('/', quizzesControllers.createQuiz)

module.exports = router;

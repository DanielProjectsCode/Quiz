const express = require("express");

const quizzesControllers = require("../controllers/quiz-controllers");

const router = express.Router();

router.post('/login', quizzesControllers.login)

router.post("/", quizzesControllers.createQuiz);

router.get("/", quizzesControllers.getQuizzes);

router.get("/:qid", quizzesControllers.getQuizzesById);


module.exports = router;

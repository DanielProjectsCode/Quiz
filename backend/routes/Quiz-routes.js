const express = require("express");

const quizzesControllers = require("../controllers/quiz-controllers");
const checkAuth = require('../middleware/check-auth')

const router = express.Router();

router.use(checkAuth)

router.get("/:qid", quizzesControllers.getQuizzesById);

router.get("/", quizzesControllers.getQuizzes);

router.post("/", quizzesControllers.createQuiz);


module.exports = router;

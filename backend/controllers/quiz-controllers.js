const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const HttpError = require("../models/http-error");
const Quiz = require("../models/quiz");
const User = require('../models/user')


const getQuizzesById = async (req, res, next) => {
  const quizId = req.params.qid;

  let quiz;
  try {
    quiz = await Quiz.findById(quizId);
  } catch (err) {
    const error = new HttpError(
      `${err} Something went wrong, could not find a quiz.`,
      500
    );
    return next(error);
  }

  if (!quiz) {
    const error = new HttpError(
      "Could not find a quiz for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ quiz: quiz.toObject({ getters: true }) });
};

const getQuizzes = async (req, res, next) => {
  let quizzes;
  try {
    quizzes = await Quiz.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching quizes failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({
    quizzes: quizzes.map((quiz) => quiz.toObject({ getters: true })),
  });
};

const createQuiz = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { title, questions } = req.body;

  const createdQuiz = new Quiz({
    title,
    questions,
  });
  try {
    await createdQuiz.save();
  } catch (err) {
    const error = new HttpError("creating Quiz failed, please try again", 500);
    return next(error);
  }
  res.status(201).json({ quiz: createdQuiz });
};

exports.createQuiz = createQuiz;

exports.getQuizzes = getQuizzes;

exports.getQuizzesById = getQuizzesById;


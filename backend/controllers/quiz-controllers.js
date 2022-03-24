const uuid = require("uuid/v4");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const Quiz = require("../models/quiz");


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
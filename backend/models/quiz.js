const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: { type: String },
  questions: [
    {
      question: { type: String },
      optionA: { type: String },
      optionB: { type: String },
      answer: { type: String },
    },
  ],
});

module.exports = mongoose.model("Quizzes", quizSchema);

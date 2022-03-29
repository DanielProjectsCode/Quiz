const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: { type: String },
  questions: [
    {
      question: { type: String, required: true },
      optionA: { type: String, required: true },
      optionB: { type: String, required: true },
      optionC: { type: String, required: true },
      answer: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("Quizzes", quizSchema);

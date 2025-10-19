const mongoose = require('mongoose');

const quizQuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
  category: { type: String, required: true },
  difficulty: { type: String, required: true }
});

module.exports = mongoose.model('QuizQuestion', quizQuestionSchema, 'quizquestions');

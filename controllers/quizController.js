const QuizQuestion = require('../models/QuizQuestion');

const getQuizQuestions = async (req, res) => {
  const { category, difficulty, limit } = req.query;
  try {
    const questions = await QuizQuestion.aggregate([
      { 
        $match: { 
          category: { $regex: new RegExp(`^${category}$`, 'i') }, 
          difficulty: { $regex: new RegExp(`^${difficulty}$`, 'i') }
        } 
      },
      { $sample: { size: parseInt(limit) } }
    ]);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getQuizQuestions };

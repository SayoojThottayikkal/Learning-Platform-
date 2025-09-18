import Quiz from "../models/Quiz.js";
import Enrollment from "../models/Enrollment.js";
import gradeQuiz from "../utils/gradeQuiz.js";

export const createQuiz = async (req, res) => {
  const quiz = await Quiz.create(req.body);
  res.status(201).json(quiz);
};

export const submitQuiz = async (req, res) => {
  const { quizId } = req.params;
  const { answers } = req.body;
  const quiz = await Quiz.findById(quizId);
  if (!quiz) return res.status(404).json({ message: "Quiz not found" });

  const score = gradeQuiz(quiz, answers);
  await Enrollment.updateOne(
    { student: req.user._id, "quizzes.quiz": quiz._id },
    { $set: { "quizzes.$.score": score } },
    { upsert: true }
  );
  res.json({ score, total: quiz.questions.length });
};

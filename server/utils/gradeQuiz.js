export default function gradeQuiz(quiz, answers) {
  let score = 0;
  quiz.questions.forEach((q) => {
    const ans = answers.find((a) => a.questionId === q._id.toString());
    if (ans && ans.chosenIndex === q.correctIndex) score += q.points || 1;
  });
  return score;
}

import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({ text: String });
const questionSchema = new mongoose.Schema({
  text: String,
  options: [optionSchema],
  correctIndex: Number,
  points: { type: Number, default: 1 },
});

const quizSchema = new mongoose.Schema(
  {
    title: String,
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
    questions: [questionSchema],
    timeLimitMinutes: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Quiz", quizSchema);

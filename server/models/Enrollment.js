import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    progress: { type: Map, of: Boolean },
    quizzes: [
      {
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
        score: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Enrollment", enrollmentSchema);

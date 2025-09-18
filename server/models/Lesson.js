import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    videoUrl: String,
    resources: [{ filename: String, url: String }],
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }],
  },
  { timestamps: true }
);

export default mongoose.model("Lesson", lessonSchema);

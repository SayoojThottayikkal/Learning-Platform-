import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
    file: { filename: String, path: String, mimeType: String },
    grade: Number,
    feedback: String,
  },
  { timestamps: true }
);

export default mongoose.model("Submission", submissionSchema);

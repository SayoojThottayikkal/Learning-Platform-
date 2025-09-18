import Enrollment from "../models/Enrollment.js";
import Course from "../models/Course.js";

export const enrollCourse = async (req, res) => {
  const { courseId } = req.body;
  const enrollment = await Enrollment.create({
    student: req.user._id,
    course: courseId,
  });
  await Course.findByIdAndUpdate(courseId, { $inc: { studentsCount: 1 } });
  res.status(201).json(enrollment);
};

export const getMyEnrollments = async (req, res) => {
  const myCourses = await Enrollment.find({ student: req.user._id }).populate(
    "course"
  );
  res.json(myCourses);
};

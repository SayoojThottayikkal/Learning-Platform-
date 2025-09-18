import Lesson from "../models/Lesson.js";

export const createLesson = async (req, res) => {
  const { courseId, title, content, videoUrl } = req.body;
  const lesson = await Lesson.create({
    course: courseId,
    title,
    content,
    videoUrl,
  });
  res.status(201).json(lesson);
};

export const getLessons = async (req, res) => {
  const lessons = await Lesson.find({ course: req.params.courseId });
  res.json(lessons);
};

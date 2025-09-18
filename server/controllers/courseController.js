import Course from "../models/Course.js";

export const getAllCourses = async (req, res) => {
  const courses = await Course.find({ status: "published" }).populate(
    "instructor",
    "name"
  );
  res.json(courses);
};

export const createCourse = async (req, res) => {
  const { title, description, category } = req.body;
  const course = await Course.create({
    title,
    description,
    category,
    instructor: req.user._id,
    thumbnail: req.file?.path,
  });
  res.status(201).json(course);
};

export const updateCourse = async (req, res) => {
  const { id } = req.params;
  const updated = await Course.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

export const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course deleted" });
};

import User from "../models/User.js";
import Course from "../models/Course.js";

export const reviewCourse = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const course = await Course.findByIdAndUpdate(id, { status }, { new: true });
  res.json(course);
};

export const toggleUserBan = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  user.isBanned = !user.isBanned;
  await user.save();
  res.json({ message: `User ${user.isBanned ? "banned" : "unbanned"}` });
};

import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default async function auth(req, res, next) {
  const authHeader = req.headers.authorization?.split(" ")[1];
  if (!authHeader) return res.status(401).json({ message: "No token" });
  try {
    const payload = jwt.verify(authHeader, process.env.JWT_SECRET);
    const user = await User.findById(payload.id).select("-password");
    if (!user) return res.status(401).json({ message: "User not found" });
    if (user.isBanned) return res.status(403).json({ message: "User banned" });
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}

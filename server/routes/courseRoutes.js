import { Router } from "express";
import {
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";
import auth from "../middleware/auth.js";
import roles from "../middleware/roles.js";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const router = Router();

router.get("/", getAllCourses);
router.post(
  "/",
  auth,
  roles(["instructor"]),
  upload.single("thumbnail"),
  createCourse
);
router.put("/:id", auth, roles(["instructor"]), updateCourse);
router.delete("/:id", auth, roles(["instructor"]), deleteCourse);

export default router;

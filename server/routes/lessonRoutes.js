import { Router } from "express";
import { createLesson, getLessons } from "../controllers/lessonController.js";
import auth from "../middleware/auth.js";
import roles from "../middleware/roles.js";

const router = Router();

router.get("/:courseId", auth, getLessons);
router.post("/", auth, roles(["instructor"]), createLesson);

export default router;

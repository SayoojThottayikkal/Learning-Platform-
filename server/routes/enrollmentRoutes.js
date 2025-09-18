import { Router } from "express";
import {
  enrollCourse,
  getMyEnrollments,
} from "../controllers/enrollmentController.js";
import auth from "../middleware/auth.js";

const router = Router();

router.post("/", auth, enrollCourse);
router.get("/my", auth, getMyEnrollments);

export default router;

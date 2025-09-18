import { Router } from "express";
import { createQuiz, submitQuiz } from "../controllers/quizController.js";
import auth from "../middleware/auth.js";
import roles from "../middleware/roles.js";

const router = Router();

router.post("/", auth, roles(["instructor"]), createQuiz);
router.post("/:quizId/submit", auth, submitQuiz);

export default router;

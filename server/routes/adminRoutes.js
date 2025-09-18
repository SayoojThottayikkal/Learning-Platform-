import { Router } from "express";
import { reviewCourse, toggleUserBan } from "../controllers/adminController.js";
import auth from "../middleware/auth.js";
import roles from "../middleware/roles.js";

const router = Router();

router.put("/course/:id", auth, roles(["admin"]), reviewCourse);
router.put("/user/:id/ban", auth, roles(["admin"]), toggleUserBan);

export default router;

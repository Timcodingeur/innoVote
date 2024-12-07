import { Router } from "express";
import { postSignup, updateUserRole } from "../controllers/userController.mjs";

const router = Router();

router.post("/signup", postSignup);
router.put("/users/:id/role", updateUserRole);

export default router;

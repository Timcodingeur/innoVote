import { Router } from "express";
import { loginWithMSAL } from "../controllers/authController.mjs";

const router = Router();

router.post("/login", loginWithMSAL);

export default router;

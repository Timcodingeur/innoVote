import { Router } from "express";
import {
  inviteUserToPresentation,
  startPresentation,
  joinPresentation
} from "../controllers/inviteController.mjs";

const router = Router();

router.post("/presentations/:id/invite", inviteUserToPresentation);
router.post("/presentations/:id/start", startPresentation);
router.post("/presentations/join", joinPresentation);

export default router;

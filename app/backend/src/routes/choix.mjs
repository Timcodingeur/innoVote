import { Router } from "express";
import {
  getChoix,
  createChoix,
  getChoixById,
  updateChoix,
  deleteChoix
} from "../controllers/choixController.mjs";

const router = Router();

router.get("/events/:eventId/choix", getChoix);
router.post("/events/:eventId/choix", createChoix);
router.get("/events/:eventId/choix/:id", getChoixById);
router.put("/events/:eventId/choix/:id", updateChoix);
router.delete("/events/:eventId/choix/:id", deleteChoix);

export default router;

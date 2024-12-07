import { Router } from "express";
import {
  getSlides,
  createSlide,
  getSlideById,
  updateSlide,
  deleteSlide
} from "../controllers/slideController.mjs";

const router = Router();

router.get("/presentations/:presentationId/slides", getSlides);
router.post("/presentations/:presentationId/slides", createSlide);
router.get("/presentations/:presentationId/slides/:slideId", getSlideById);
router.put("/presentations/:presentationId/slides/:slideId", updateSlide);
router.delete("/presentations/:presentationId/slides/:slideId", deleteSlide);

export default router;

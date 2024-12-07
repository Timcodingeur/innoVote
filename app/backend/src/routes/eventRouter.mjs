import { Router } from "express";
import {
  getEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent
} from "../controllers/eventController.mjs";

const router = Router();

router.get("/presentations/:presentationId/slides/:slideId/events", getEvents);
router.post("/presentations/:presentationId/slides/:slideId/events", createEvent);
router.get("/presentations/:presentationId/slides/:slideId/events/:eventId", getEventById);
router.put("/presentations/:presentationId/slides/:slideId/events/:eventId", updateEvent);
router.delete("/presentations/:presentationId/slides/:slideId/events/:eventId", deleteEvent);

export default router;

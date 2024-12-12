import { Router } from "express";
import {
  getProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject
} from "../controllers/projetController.mjs";

const router = Router();

router.get("/presentations", getProjects);
router.post("/presentations", createProject);
router.get("/presentations/:id", getProjectById);
router.put("/presentations/:id", updateProject);
router.delete("/presentations/:id", deleteProject);

export default router;

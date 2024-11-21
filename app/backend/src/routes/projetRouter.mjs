import express from "express";
import {
    createProject,
    getProjects
} from "../controllers/projetController.mjs";


const projetRouteur = express();

projetRouteur.post("/create", createProject)
projetRouteur.get("/get", getProjects)

export { projetRouteur };

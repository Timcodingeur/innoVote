import express from "express";
import {
    addParticipant,
    getParticipants,
    removeParticipant
} from "../controllers/participerController.mjs";


const participerRouteur = express();

participerRouteur.post("/post", addParticipant)
participerRouteur.get("/get", getParticipants)
participerRouteur.delete("/delete", removeParticipant)

export { participerRouteur };

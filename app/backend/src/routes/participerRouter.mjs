import express from "express";
import {
    addParticipant,
    getParticipants,
    removeParticipant
} from "../controllers/participerController.mjs";


const loginRouteur = express();

loginRouteur.post("/login", addParticipant)
loginRouteur.post("/signup", getParticipants)
loginRouteur.post("/signup", removeParticipant)

export { loginRouteur };

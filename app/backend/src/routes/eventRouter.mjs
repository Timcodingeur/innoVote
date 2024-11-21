import express from "express";
import {
    createEvent,
    getEvents,
    updateEvent,
    deleteEvent
} from "../controllers/eventController.mjs";


const loginRouteur = express();

loginRouteur.post("/create", createEvent)
loginRouteur.get("/get", getEvents)
loginRouteur.put("/update", updateEvent)
loginRouteur.delete("/delete", deleteEvent)

export { loginRouteur };

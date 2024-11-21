import express from "express";
import {
    createEvent,
    getEvents,
    updateEvent,
    deleteEvent
} from "../controllers/eventController.mjs";


const eventRouteur = express();

eventRouteur.post("/create", createEvent)
eventRouteur.get("/get", getEvents)
eventRouteur.put("/update", updateEvent)
eventRouteur.delete("/delete", deleteEvent)

export { eventRouteur };

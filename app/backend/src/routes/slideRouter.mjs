import express from "express";
import {
    createSlide,
  viewSlide
} from "../controllers/slideController.mjs";


const slideRouteur = express();

slideRouteur.post("/create", createSlide)
slideRouteur.post("/view",  viewSlide)

export { slideRouteur };

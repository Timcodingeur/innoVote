import express from "express";
import {
    assignRole
} from "../controllers/roleController.mjs";


const roleRouteur = express();

roleRouteur.post("/", assignRole)


export { roleRouteur };

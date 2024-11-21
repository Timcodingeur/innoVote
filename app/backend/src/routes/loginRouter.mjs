import express from "express";
import {
  login
} from "../controllers/loginController.mjs";


const loginRouteur = express();

loginRouteur.post("/", login)

export { loginRouteur };

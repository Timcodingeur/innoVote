import express from "express";
import {
  postLogin,
  postSignup
} from "../controllers/loginController.mjs";


const loginRouteur = express();

loginRouteur.post("/login", postLogin)
loginRouteur.post("/signup", postSignup)

export { loginRouteur };

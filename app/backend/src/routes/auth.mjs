import { Router } from "express";
import { signin, handleRedirect, signout } from "../controllers/authController.mjs";

const router = Router();

// Démarre le flux de connexion MSAL (redirection vers Microsoft)
router.get("/signin", signin);

// Gère la redirection après le login MSAL
router.post("/redirect", handleRedirect);

// Déconnexion via MSAL
router.get("/signout", signout);

export default router;

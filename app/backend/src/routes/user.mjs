import { Router } from "express";
import { postSignup, updateUserRole, getIdClaims, getProfile, getSchedule } from "../controllers/userController.mjs";
import authProvider from "../auth/authProvider.mjs";
import { isAuthenticated } from "../middlewares/authMiddleware.mjs";

const router = Router();

// Routes REST standard
router.post("/signup", postSignup);
router.put("/users/:id/role", updateUserRole);

// Routes MSAL adaptées
// Affiche les claims du token ID
router.get("/id", isAuthenticated, getIdClaims);

// Récupère le profil utilisateur (nécessite un token Graph API : "User.Read")
router.get("/profile", isAuthenticated, authProvider.acquireToken(["User.Read"], process.env.REDIRECT_URI), getProfile);

// Accéder au contenu d'un lien partagé (nécessite "Files.Read")
router.get("/schedule", isAuthenticated, authProvider.acquireToken(["Files.Read"], process.env.REDIRECT_URI), getSchedule);

export default router;

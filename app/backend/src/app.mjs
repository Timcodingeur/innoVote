import express from "express";
import cors from "cors";
import { sequelize, initDb } from "./db/sequelize.mjs"; // Import de la base de données et initialisation
import presentationRoutes from "./routes/projetRouter.mjs";
import slideRoutes from "./routes/slideRouter.mjs";
import eventRoutes from "./routes/eventRouter.mjs";
import choixRoutes from "./routes/choix.mjs";
import userRoutes from "./routes/user.mjs";
import authRoutes from "./routes/auth.mjs";
import inviteRoutes from "./routes/invite.mjs";
import "dotenv/config"; // Chargement des variables d'environnement

const app = express(); // Création de l'application Express

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Middleware pour activer CORS avec les configurations spécifiées
app.use(cors({ 
  origin: `http://localhost:${process.env.PROJECT_CORS}`, 
  credentials: true 
}));

// Vérification de la connexion à la base de données
sequelize
  .authenticate()
  .then(() => console.log("La connexion à la base de donnée a bien été établie"))
  .catch((error) => console.error("Impossible de se connecter à la DB :", error));

// Initialisation de la base de données
initDb();

// Route principale pour vérifier si le système est actif
app.get("/", (req, res) => {
  res.send("Le système est lancé");
});

// Montage des différentes routes sous le préfixe /api
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", presentationRoutes);
app.use("/api", slideRoutes);
app.use("/api", eventRoutes);
app.use("/api", choixRoutes);
app.use("/api", inviteRoutes);

// Démarrage du serveur sur le port spécifié
app.listen(process.env.PROJECT_PORT, () => {
  console.log(`Application en écoute sur le port ${process.env.PROJECT_PORT}`);
});

// Gestion des erreurs 404 pour les ressources non trouvées
app.use((req, res) => {
  const message = "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
  res.status(404).json({ message });
});

export default app;

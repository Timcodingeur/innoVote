import { sequelize, initDb } from "../../src/sequelize.mjs"; // Importation de ton fichier Sequelize
import dotenv from "dotenv"; // Charger les variables d'environnement

dotenv.config(); // Charger les variables d'environnement depuis .env

// Avant tous les tests, synchroniser la base de données avec une option `force: true` pour réinitialiser les tables
beforeAll(async () => {
  try {
    await sequelize.authenticate(); // Vérifie la connexion à la base de données
    await sequelize.sync({ force: true }); // Réinitialise la base de données pour les tests
    console.log("Base de données de test initialisée");
  } catch (error) {
    console.error("Erreur lors de l'initialisation de la base de données de test :", error);
    process.exit(1); // Arrête Jest si la base de données ne peut pas être initialisée
  }
});

// Après chaque test, vider toutes les tables pour garantir des données propres
afterEach(async () => {
  const models = sequelize.models;
  for (const modelName in models) {
    if (models[modelName].destroy) {
      await models[modelName].destroy({ where: {}, truncate: true });
    }
  }
});

// Après tous les tests, fermer la connexion à la base de données
afterAll(async () => {
  await sequelize.close();
  console.log("Connexion à la base de données de test fermée");
});

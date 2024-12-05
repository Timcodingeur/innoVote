import { Projet } from "../db/sequelize.mjs";

/**
 * Création d'un projet
 */
export const createProject = async (req, res) => {
  try {
    const { name, description, connCode, owner } = req.body;

    if (!name || !connCode || !owner) {
      return res.status(400).json({ message: "Nom, connCode et owner requis." });
    }

    const project = await Projet.create({ name, description, connCode, owner });
    return res.status(201).json({ message: "Projet créé avec succès.", project });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

/**
 * Récupérer toutes les présentations
 */
export const getProject = async (req, res) => {
  try {
    const presentations = await Projet.findAll();
    return res.status(200).json(presentations);
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

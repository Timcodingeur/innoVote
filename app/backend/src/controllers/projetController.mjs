import { Projet } from "../db/sequelize.mjs";

export const getProjects = async (req, res) => {
  try {
    // Selon votre logique, récupérer uniquement les présentations 
    // auxquelles l'utilisateur connecté a accès.
    const projects = await Projet.findAll();
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

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

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Projet.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé." });
    }
    return res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, connCode, owner } = req.body;

    const project = await Projet.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé." });
    }

    if (name !== undefined) project.name = name;
    if (description !== undefined) project.description = description;
    if (connCode !== undefined) project.connCode = connCode;
    if (owner !== undefined) project.owner = owner;

    await project.save();
    return res.status(200).json({ message: "Projet mis à jour.", project });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Projet.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé." });
    }
    await project.destroy();
    return res.status(200).json({ message: "Projet supprimé avec succès." });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

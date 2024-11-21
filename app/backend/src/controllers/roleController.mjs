import { Role } from "../../db/sequelize.mjs";

/**
 * Ajout d'un rôle à un utilisateur
 */
export const assignRole = async (req, res) => {
  try {
    const { userId, projectId, role } = req.body;

    if (!userId || !projectId || !role) {
      return res.status(400).json({ message: "userId, projectId et rôle requis." });
    }

    const userRole = await Role.create({ userId, projectId, role });
    return res.status(201).json({ message: "Rôle assigné avec succès.", userRole });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

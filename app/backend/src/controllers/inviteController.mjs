import { User, Projet, Role } from "../db/sequelize.mjs";

const activeCodes = {}; // { code: presentationId }

function generateRandomCode() {
  return Math.random().toString(36).substring(2,8);
}

export const inviteUserToPresentation = async (req, res) => {
  try {
    const { id } = req.params; // presentationId
    const { userId, role } = req.body; // role spécifique à ce projet

    if (!userId || !role) {
      return res.status(400).json({ message: "userId et role requis." });
    }

    const project = await Projet.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Présentation non trouvée." });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    // Créer une entrée dans Role
    const userRole = await Role.create({ userId, projetId: id, role });

    return res.status(201).json({ message: "Utilisateur invité avec succès.", userRole });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const startPresentation = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Projet.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Présentation non trouvée." });
    }

    const code = generateRandomCode();
    activeCodes[code] = id;
    return res.status(200).json({ message: "Présentation lancée.", code });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const joinPresentation = async (req, res) => {
  try {
    const { code, userId } = req.body;
    if (!code || !userId) {
      return res.status(400).json({ message: "code et userId requis." });
    }

    const presentationId = activeCodes[code];
    if (!presentationId) {
      return res.status(400).json({ message: "Code invalide ou expiré." });
    }

    // Vérifier que l'utilisateur existe
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    // Optionnel : Ajouter l'utilisateur au projet avec un rôle "membre" s'il ne l'est pas déjà
    let userRole = await Role.findOne({ where: { userId, projetId: presentationId }});
    if (!userRole) {
      userRole = await Role.create({ userId, projetId: presentationId, role: 'membre' });
    }

    return res.status(200).json({ message: "Vous avez rejoint la présentation avec succès.", userRole });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

import { Participer } from "../db/sequelize.mjs";

/**
 * Ajout d'un utilisateur à un événement
 */
export const addParticipant = async (req, res) => {
  try {
    const { userId, eventId, role } = req.body;

    if (!userId || !eventId) {
      return res.status(400).json({ message: "userId et eventId requis." });
    }

    const participation = await Participer.create({ userId, eventId, role });
    return res.status(201).json({ message: "Participant ajouté avec succès.", participation });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

/**
 * Liste des participants d'un événement
 */
export const getParticipants = async (req, res) => {
  try {
    const { eventId } = req.params;

    const participants = await Participer.findAll({ where: { eventId } });
    return res.status(200).json(participants);
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

/**
 * Suppression d'un participant
 */
export const removeParticipant = async (req, res) => {
  try {
    const { id } = req.params;

    const participation = await Participer.findByPk(id);
    if (!participation) {
      return res.status(404).json({ message: "Participation non trouvée." });
    }

    await participation.destroy();
    return res.status(200).json({ message: "Participant supprimé avec succès." });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

import { Event } from "../../db/sequelize.mjs";

/**
 * Création d'un événement
 */
export const createEvent = async (req, res) => {
  try {
    const { type, info, projetId } = req.body;

    if (!type || !projetId) {
      return res.status(400).json({ message: "Type et projetId requis." });
    }

    const event = await Event.create({ type, info, projetId });
    return res.status(201).json({ message: "Événement créé avec succès.", event });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

/**
 * Liste des événements
 */
export const getEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

/**
 * Mise à jour d'un événement
 */
export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, info } = req.body;

    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: "Événement non trouvé." });
    }

    event.type = type || event.type;
    event.info = info || event.info;

    await event.save();
    return res.status(200).json({ message: "Événement mis à jour.", event });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

/**
 * Suppression d'un événement
 */
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: "Événement non trouvé." });
    }

    await event.destroy();
    return res.status(200).json({ message: "Événement supprimé avec succès." });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

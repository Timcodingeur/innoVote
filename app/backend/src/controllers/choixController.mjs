import { Choix, Event } from "../db/sequelize.mjs";

export const getChoix = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findByPk(eventId);
    if (!event) {
      return res.status(404).json({ message: "Événement non trouvé." });
    }
    const choix = await Choix.findAll({ where: { eventId }});
    return res.status(200).json(choix);
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const createChoix = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { point, description } = req.body;
    if (point === undefined) {
      return res.status(400).json({ message: "Point requis." });
    }
    const event = await Event.findByPk(eventId);
    if (!event) {
      return res.status(404).json({ message: "Événement non trouvé." });
    }
    const choix = await Choix.create({ point, description, eventId });
    return res.status(201).json({ message: "Choix créé avec succès.", choix });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const getChoixById = async (req, res) => {
  try {
    const { eventId, id } = req.params;
    const choix = await Choix.findOne({ where: { id, eventId }});
    if (!choix) {
      return res.status(404).json({ message: "Choix non trouvé." });
    }
    return res.status(200).json(choix);
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const updateChoix = async (req, res) => {
  try {
    const { eventId, id } = req.params;
    const { point, description } = req.body;
    const choix = await Choix.findOne({ where: { id, eventId }});
    if (!choix) {
      return res.status(404).json({ message: "Choix non trouvé." });
    }

    if (point !== undefined) choix.point = point;
    if (description !== undefined) choix.description = description;

    await choix.save();
    return res.status(200).json({ message: "Choix mis à jour.", choix });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const deleteChoix = async (req, res) => {
  try {
    const { eventId, id } = req.params;
    const choix = await Choix.findOne({ where: { id, eventId }});
    if (!choix) {
      return res.status(404).json({ message: "Choix non trouvé." });
    }
    await choix.destroy();
    return res.status(200).json({ message: "Choix supprimé avec succès." });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

import { Event, Slide } from "../db/sequelize.mjs";

export const getEvents = async (req, res) => {
  try {
    const { presentationId, slideId } = req.params;
    const slide = await Slide.findOne({ where: { id: slideId, projetId: presentationId }});
    if (!slide) {
      return res.status(404).json({ message: "Slide non trouvé." });
    }
    const events = await Event.findAll({ where: { slideId: slideId }});
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const createEvent = async (req, res) => {
  try {
    const { presentationId, slideId } = req.params;
    const { type, info } = req.body;
    if (!type) {
      return res.status(400).json({ message: "Type requis." });
    }
    const slide = await Slide.findOne({ where: { id: slideId, projetId: presentationId }});
    if (!slide) {
      return res.status(404).json({ message: "Slide non trouvé." });
    }

    const event = await Event.create({ type, info, slideId });
    return res.status(201).json({ message: "Événement créé avec succès.", event });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const { presentationId, slideId, eventId } = req.params;
    const event = await Event.findOne({ where: { id: eventId, slideId: slideId }});
    if (!event) {
      return res.status(404).json({ message: "Événement non trouvé." });
    }
    return res.status(200).json(event);
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { presentationId, slideId, eventId } = req.params;
    const { type, info } = req.body;

    const event = await Event.findOne({ where: { id: eventId, slideId: slideId }});
    if (!event) {
      return res.status(404).json({ message: "Événement non trouvé." });
    }

    if (type !== undefined) event.type = type;
    if (info !== undefined) event.info = info;

    await event.save();
    return res.status(200).json({ message: "Événement mis à jour.", event });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { slideId, eventId } = req.params;
    const event = await Event.findOne({ where: { id: eventId, slideId: slideId }});
    if (!event) {
      return res.status(404).json({ message: "Événement non trouvé." });
    }
    await event.destroy();
    return res.status(200).json({ message: "Événement supprimé avec succès." });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

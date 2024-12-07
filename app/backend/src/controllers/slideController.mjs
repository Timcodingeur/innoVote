import { Slide, Projet } from "../db/sequelize.mjs";

export const getSlides = async (req, res) => {
  try {
    const { presentationId } = req.params;
    const project = await Projet.findByPk(presentationId);
    if (!project) {
      return res.status(404).json({ message: "Présentation non trouvée." });
    }
    const slides = await Slide.findAll({ where: { projetId: presentationId }});
    return res.status(200).json(slides);
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const createSlide = async (req, res) => {
  try {
    const { presentationId } = req.params;
    const { note, fileUrl } = req.body; // fileUrl peut venir d'un service externe (Azure)
    if (!note || !fileUrl) {
      return res.status(400).json({ message: "Note et fileUrl requis." });
    }

    const project = await Projet.findByPk(presentationId);
    if (!project) {
      return res.status(404).json({ message: "Présentation non trouvée." });
    }

    const slide = await Slide.create({ note, fileUrl, projetId: presentationId });
    return res.status(201).json({ message: "Slide créé avec succès.", slide });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const getSlideById = async (req, res) => {
  try {
    const { presentationId, slideId } = req.params;
    const slide = await Slide.findOne({ where: { id: slideId, projetId: presentationId } });
    if (!slide) {
      return res.status(404).json({ message: "Slide non trouvé." });
    }
    return res.status(200).json(slide);
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const updateSlide = async (req, res) => {
  try {
    const { presentationId, slideId } = req.params;
    const { note, fileUrl } = req.body;
    
    const slide = await Slide.findOne({ where: { id: slideId, projetId: presentationId } });
    if (!slide) {
      return res.status(404).json({ message: "Slide non trouvé." });
    }

    if (note !== undefined) slide.note = note;
    if (fileUrl !== undefined) slide.fileUrl = fileUrl;

    await slide.save();
    return res.status(200).json({ message: "Slide mis à jour.", slide });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const deleteSlide = async (req, res) => {
  try {
    const { presentationId, slideId } = req.params;
    const slide = await Slide.findOne({ where: { id: slideId, projetId: presentationId } });
    if (!slide) {
      return res.status(404).json({ message: "Slide non trouvé." });
    }
    await slide.destroy();
    return res.status(200).json({ message: "Slide supprimé avec succès." });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

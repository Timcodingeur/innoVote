import multer from "multer"; // Pour gérer les fichiers
import { BlobServiceClient } from "@azure/storage-blob"; // SDK Azure
import "dotenv/config";
import { Slide } from "../db/sequelize.mjs";
//exemple avec azure
// Configuration de Multer
const upload = multer({ storage: multer.memoryStorage() });

// Initialisation du client Azure Blob Storage
const blobServiceClient = BlobServiceClient.fromConnectionString(
  `DefaultEndpointsProtocol=https;AccountName=${process.env.AZURE_STORAGE_ACCOUNT};AccountKey=${process.env.AZURE_STORAGE_ACCESS_KEY};EndpointSuffix=core.windows.net`
);
const containerClient = blobServiceClient.getContainerClient(process.env.AZURE_STORAGE_CONTAINER);

/**
 * Création d'un slide avec téléversement du fichier
 */
export const createSlide = [
  upload.single("file"), // Middleware pour gérer le fichier
  async (req, res) => {
    try {
      const { note, projetId } = req.body;

      // Validation des champs
      if (!note || !projetId || !req.file) {
        return res.status(400).json({ message: "Note, projetId et fichier requis." });
      }

      const file = req.file;
      const blobName = `${Date.now()}_${file.originalname}`; // Nom unique du fichier
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      // Téléversement vers Azure Blob Storage
      await blockBlobClient.uploadData(file.buffer, {
        blobHTTPHeaders: { blobContentType: file.mimetype }, // Type MIME du fichier
      });

      // URL du fichier
      const fileUrl = blockBlobClient.url;

      // Création du slide dans la base avec l'URL
      const slide = await Slide.create({
        note,
        fileUrl, // Stocke l'URL générée
        projetId,
      });

      return res.status(201).json({ message: "Slide créé avec succès.", slide });
    } catch (error) {
      console.error("Erreur lors de la création du slide :", error);
      return res.status(500).json({ message: "Erreur serveur.", error: error.message });
    }
  },
];

/**
 * Affichage d'un slide (contenu du fichier depuis Azure Blob Storage)
 */
export const viewSlide = async (req, res) => {
  try {
    const { id } = req.params;

    // Recherche du slide dans la base
    const slide = await Slide.findByPk(id);
    if (!slide) {
      return res.status(404).json({ message: "Slide non trouvé." });
    }

    // Récupération du contenu du fichier via Azure Blob Storage
    const blobName = slide.fileUrl.split("/").pop(); // Nom du blob à partir de l'URL
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    // Télécharger le fichier en mémoire
    const downloadResponse = await blockBlobClient.download(0);
    const contentType = downloadResponse.contentType || "application/octet-stream";

    // Configurer le type MIME pour l'affichage
    res.setHeader("Content-Type", contentType);

    // Streamer le fichier vers la réponse
    downloadResponse.readableStreamBody.pipe(res);
  } catch (error) {
    console.error("Erreur lors de l'ouverture du fichier :", error);
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

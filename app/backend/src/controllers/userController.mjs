import { User } from "../db/sequelize.mjs";
import { GRAPH_ME_ENDPOINT } from "../auth/authConfig.mjs";
import fetch from "../fetch.mjs"; 

// Contrôleur pour la création de compte
export const postSignup = async (req, res) => {
  try {
    const { pseudo, lastName, email } = req.body;
    // role par défaut = "invité"
    if (!pseudo || !lastName || !email) {
      return res.status(400).json({ message: "pseudo, lastName, email requis." });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email déjà utilisé." });
    }

    const newUser = await User.create({
      pseudo,
      lastName,
      email,
      role: "invité"
    });

    return res.status(201).json({
      message: "Utilisateur créé avec succès.",
      user: {
        id: newUser.id,
        pseudo: newUser.pseudo,
        lastName: newUser.lastName,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

// Contrôleur pour la mise à jour du rôle d'un utilisateur
export const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body; // "invité", "créateur", "admin"

    if (!role) {
      return res.status(400).json({ message: "Role requis." });
    }

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    user.role = role;
    await user.save();
    return res.status(200).json({ message: "Rôle mis à jour.", user });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

// Contrôleur pour afficher les claims du token ID (route /id)
export const getIdClaims = (req, res) => {
  if (!req.session.account || !req.session.account.idTokenClaims) {
    return res.status(401).json({ message: "Utilisateur non authentifié." });
  }
  return res.status(200).json({ idTokenClaims: req.session.account.idTokenClaims });
};

// Contrôleur pour récupérer le profil utilisateur depuis Microsoft Graph (route /profile)
export const getProfile = async (req, res, next) => {
  try {
    const graphResponse = await fetch(GRAPH_ME_ENDPOINT, req.session.accessToken);
    return res.status(200).json({ profile: graphResponse });
  } catch (error) {
    next(error);
  }
};

// Contrôleur pour accéder au contenu d'un lien partagé (route /schedule)
export const getSchedule = async (req, res, next) => {
  // Lien d'exemple, à adapter selon vos besoins réels
  const shareLink = "https://eduvaud-my.sharepoint.com/:u:/g/personal/px53yvq_eduvaud_ch/EUCwiFF_PTpFlW4eo9d5fsIB_JODGiewfxrZXYA1A7FxTQ?email=sofiene.belkhiria%40eduvaud.ch";
  const encodedShareLink = Buffer.from(shareLink).toString("base64").replace(/=+$/, "");
  const graphApiUrl = `https://graph.microsoft.com/v1.0/shares/u!${encodedShareLink}/root/content`;

  try {
    const graphResponse = await fetch(graphApiUrl, req.session.accessToken);
    return res.status(200).json({ scheduleData: graphResponse });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

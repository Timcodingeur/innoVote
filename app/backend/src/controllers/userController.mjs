import { User } from "../db/sequelize.mjs";

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
      // Pas de password, MSAL gère l'auth externe
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

    // Ici on pourrait vérifier si l'utilisateur courant (req.user) a le droit de changer le rôle
    // Par exemple, requiert un "admin".

    user.role = role;
    await user.save();
    return res.status(200).json({ message: "Rôle mis à jour.", user });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

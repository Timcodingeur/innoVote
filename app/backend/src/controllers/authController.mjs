export const loginWithMSAL = async (req, res) => {
    try {
      const { msalToken } = req.body;
      if (!msalToken) {
        return res.status(400).json({ message: "Token MSAL requis." });
      }
  
      // Vérifier le token MSAL via votre logique interne (bibliothèque MSAL côté serveur)
      // Si valide, on peut éventuellement générer un JWT interne ou juste répondre "OK"
      // Ici on fait simple :
      const isValid = true; // Vous devrez implémenter la vraie validation.
      
      if (!isValid) {
        return res.status(401).json({ message: "Token MSAL invalide." });
      }
  
      // Trouver l'utilisateur en base via l'email contenu dans le token MSAL
      // Si pas trouvé, créer un user avec rôle invité.
      // Pour simplifier, on admet que l'utilisateur existe déjà.
      return res.status(200).json({ message: "Connexion réussie via MSAL." });
    } catch (error) {
      return res.status(500).json({ message: "Erreur serveur.", error: error.message });
    }
  };
  
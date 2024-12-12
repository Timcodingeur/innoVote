import axios from "axios";

/**
 * Envoie une requête GET à un endpoint MS Graph avec un token d'accès
 * @param {string} endpoint - L'URL de l'endpoint MS Graph
 * @param {string} accessToken - Le jeton d'accès (Bearer token)
 * @returns {Promise<Object>} Les données renvoyées par la requête
 */
export default async function fetch(endpoint, accessToken) {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };

  console.log(`Requête envoyée à ${endpoint} à: ` + new Date().toString());

  try {
    const response = await axios.get(endpoint, options);
    return response.data;
  } catch (error) {
    // Renvoyer une erreur plus descriptive
    throw new Error(`Erreur lors de la requête vers ${endpoint}: ${error.message}`);
  }
}

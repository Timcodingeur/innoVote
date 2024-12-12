import authProvider from "../auth/authProvider.mjs";
import { REDIRECT_URI, POST_LOGOUT_REDIRECT_URI } from "../auth/authConfig.mjs";

// Contrôleur pour déclencher le flux de connexion MSAL
export const signin = authProvider.login({
  scopes: [],
  redirectUri: REDIRECT_URI,
  successRedirect: '/'
});

// Contrôleur pour gérer le retour de MSAL après le login
export const handleRedirect = authProvider.handleRedirect();

// Contrôleur pour la déconnexion via MSAL
export const signout = authProvider.logout({
  postLogoutRedirectUri: POST_LOGOUT_REDIRECT_URI
});

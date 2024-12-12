import authProvider from "../auth/authProvider.mjs";

export const acquireToken = async (req, res, next) => {
    try {
        // Ici, on suppose que vous souhaitez acquérir un token avec les scopes ['Files.Read']
        // Si vous voulez des scopes dynamiques, adaptez le code en conséquence.
        const msalInstance = authProvider.getMsalInstance(authProvider.msalConfig);

        // Désérialiser le cache de token s'il existe
        if (req.session.tokenCache) {
            msalInstance.getTokenCache().deserialize(req.session.tokenCache);
        }

        const tokenResponse = await msalInstance.acquireTokenSilent({
            account: req.session.account,
            scopes: ['Files.Read'],
        });

        req.session.tokenCache = msalInstance.getTokenCache().serialize();
        req.session.accessToken = tokenResponse.accessToken;
        
        next(); 
    } catch (error) {
        next(error); 
    }
};

export function isAuthenticated(req, res, next) {
    if (req.session && req.session.isAuthenticated) {
        return next();
    } else {
        // Redirige vers la page de connexion MSAL
        // Adaptez l'URL si nécessaire. Par exemple, si votre route de login MSAL est /api/signin, utilisez cette URL.
        res.redirect('/api/signin');
    }
}

import "dotenv/config";
import jwt from "jsonwebtoken";
import jwksRsa from "jwks-rsa";

const jwksClient = jwksRsa({
    jwksUri: `https://login.microsoftonline.com/${process.env.TENANT_ID}/discovery/v2.0/keys`
});

function includes(arr, value) {
    if (!Array.isArray(arr) || typeof value !== 'string') {
        return false;
    }        
    const lowerCaseValue = value.toLowerCase();
    return arr.some(item => item.toLowerCase().includes(lowerCaseValue));
}

function getKey(header, callback) {
    jwksClient.getSigningKey(header.kid, (err, key) => {
        if (err) {
            return callback(err, null);
        }
        const signingKey = key.getPublicKey();
        callback(null, signingKey);
    });
}

export function verifyToken(req, res, next) {
    const token = req.session ? req.session.idToken : null;

    if (!token) {
        // Si aucun token, on passe simplement au middleware suivant.
        // Si vous souhaitez un comportement différent (ex: retour 401), adaptez ce code.
        return next();
    }

    jwt.verify(token, getKey, {
        audience: process.env.CLIENT_ID, 
        issuer: `https://login.microsoftonline.com/${process.env.TENANT_ID}/v2.0`, 
        algorithms: ['RS256']
    }, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token');
        }
        const groups = decoded.groups || [];
        req.user = decoded; 
        req.session.isAuthorized = includes(groups, "teacher");
        next();
    });
}

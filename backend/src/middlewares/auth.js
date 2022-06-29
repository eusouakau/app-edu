const jwt = require('jsonwebtoken');
const authConfig = require('../config.json');


module.exports = (req, res, next) => {  
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if(!authHeader) return res.status(401).send({ error: 'Token não informado!' });

    const parts = authHeader.split(' ');

    if(parts.length !== 2) return res.status(401).send({ error: 'Token inválido!' });

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)) return res.status(401).send({ error: 'Token malformado!' });

    jwt.verify(token, authConfig.secret, (err, decoded) => { if(err) return res.status(401).send({ error: 'Token inválido!' });

    req.id = decoded.id;
    console.log(req.id);
    
    return next();
    });

}

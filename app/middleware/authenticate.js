const jwt = require('jsonwebtoken')
const config = require('../../config');


const authenticateToken =  (req, res, next) => {
   
    const token = req.headers['authorization']
    if(!token) res.sendStatus(401)
    if(token === null) res.sendStatus(401)
    jwt.verify(token, config.get('ACCESS_TOKEN_SECRET'), (err, user) => {
        if(err) return res.sendstatus(403)
        req.user = user
        next()
    });
}

module.exports =  {
    authenticateToken,  
}
const jwt = require('jsonwebtoken') //import JSON web token dependency
const secrets = require('./secrets.js')

module.exports = {
    generateToken
}

function generateToken (user) {

    const payload = {
        username: user.username
    }

    const options = {
        expiresIn: '1d'
    }
    
    return jwt.sign(payload, secrets.jwtSecret, options)
};
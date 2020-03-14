const db = require('../database/dbConfig.js');

module.exports = {
    addUser,
    getUser
};

function addUser (user) {
    return db('users')
        .insert(user)
}

function getUser (user) {
    return db('users')
        .where(user)
        .first()

}
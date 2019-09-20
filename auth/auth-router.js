const router = require('express').Router(); //import Express Router
const Users = require('./auth-helpers.js'); //import helpers/model
const bcrypt = require('bcryptjs'); //import bcrypt dependency
const jwt = require('jsonwebtoken'); // import JSON web token dependency
const { generateToken }  = require('./generateToken.js')//import function to generate user token

//<-----Added GET request to validate generated token
router.get('/')

router.post('/register', (req, res) => {
  // implement registration
    const { username, password } = req.body; //fetch data from body

    const hash = bcrypt.hashSync(password, 12) //Creates hash

    Users.addUser({ username, password: hash })
      .then(user => {
        console.log(user)
        res.status(201).json({
          message: 'You have been sucessfully registered!'
        })
      })
      .catch(err => res.status(500).json({error: err.response}))
});
 
router.post('/login', (req, res) => {
  // implement login
  const { username, password } = req.body;

    Users.getUser({ username })
      .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
          const token = generateToken(user);
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token: token
          })
        } else {
          res.status(404).json({
            message: `User ${user.username} not found`
          })
        }
      })
      .catch(err => res.status(500).json({error: err.response}))
});

module.exports = router;

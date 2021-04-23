const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

// /users/login
router.get('/login', userController.login) 

//user registers 
router.get('/register', userController.newUser) 
router.post('/register', userController.createUser)

router.get('/logout', userController.logout)

// router.post('/login', passport.authenticate('local', {
//                             successRedirect: '/users/signup',
//                             failureRedirect: '/users/signup' }));

module.exports = router
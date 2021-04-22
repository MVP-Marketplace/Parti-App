const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')


router.get('/login', userController.login) 

//user registers 
router.post('/signup', userController.createUser) 

router.get('/logout', userController.logout)

// router.post('/login', passport.authenticate('local', {
//                             successRedirect: '/users/signup',
//                             failureRedirect: '/users/signup' }));

module.exports = router
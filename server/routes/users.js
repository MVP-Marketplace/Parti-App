const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/login', userController.login);

//user registers
router.get('/register', userController.newUser);
router.post('/register', userController.createUser);

router.get('/logout', userController.logout);
router.get('/:id', userController.view);

router.post('/login', function (req, res, next) {
	console.log('login inside');
	passport.authenticate('local', function (err, user, info) {
		console.log(err);
    if (err) {
			return next(err);
		}
		if (!user) {
			return res.redirect('login');
		}
		console.log('user', user);
		console.log('body', req.body);
		req.logIn(user, function (err) {
			if (err) {
				return next(err);
			}
			console.log(req.user);
			res.send(req.user);
			// return res.redirect('/');
		});
	})(req, res, next);
});

router.get(
	'/auth/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
);

// GET /auth/google/callback
router.get(
	'/auth/google/return',
	passport.authenticate('google', { failureRedirect: 'users/login' }),
	function (req, res) {
		res.redirect('/');
	}
);

module.exports = router;

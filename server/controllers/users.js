const User = require("../models/User");
const localStrategy = require('passport-local');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose"); 


//read and encode data from the session 
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser());
passport.use(new localStrategy(User.authenticate()));


// create User with Passport  
const createUser = (req, res) => {
    User.register(({username: req.body.username, role: req.body.role}), req.body.password, function(err, user){
    if(err){
      console.log(err);
		return res.send({message: err}) 
        }
	else{
        passport.authenticate("local")(req, res, function(){
		res.send({user: user}) 
        console.log(user) // res.redirect("/")
        })
    }} 
)};

const newUser = (req, res) => {
	res.render("../views/register.ejs")
}

const login = (req, res) => {
	const user = req.body
	console.log('LINE 36 controllers/users' , user) 
	res.send({user: user})
};

const logout = (req, res) => {
	console.log(req.user);
	req.session.destroy((err) => {
		if (err) {
			console.log(err);
			res.redirect("/");
		} else {
			res.redirect("/users/login");
		}
	});
};

module.exports = {
	logout,
	login,
	createUser,
	newUser
};

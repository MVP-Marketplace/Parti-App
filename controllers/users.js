const User = require("../models/User");

// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose"); 


//read and encode data from the session 
// passport.serializeUser(User.serializeUser()); 
// passport.deserializeUser(User.deserializeUser());
// passport.use(new localStrategy(User.authenticate()));


//create User with Passport  
const createUser = (req, res) => {
	req.body.name
	req.body.email
	req.body.password
	User.register( new User({name: req.body.name, email: req.body.email}), req.body.password, function(err, user){
		if(err){
			console.log(err)
            return res.render( {
                message: "User is created"}) 
		}
		// passport.authenticate("local")(req, res, function(){
		// 	res.redirect("/")
		// })
	}	
)};

const login = (req, res) => {
	res.render( {
		message: 'Please login'
	})
};


const logout = (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			console.log(err);
			res.redirect("/");
		} else {
			res.redirect("/");
		}
	});
};


module.exports = {
	logout,
	login,
	createUser
};

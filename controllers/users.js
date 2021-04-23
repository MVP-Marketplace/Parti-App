const User = require("../models/User");

// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose"); 


//read and encode data from the session 
// passport.serializeUser(User.serializeUser()); 
// passport.deserializeUser(User.deserializeUser());
// passport.use(new localStrategy(User.authenticate()));



const createUser = (req, res)=>{
    try{
        const newUser = new User(req.body);
        newUser.save()
        res.send(newUser)
    }
    catch(err){
        res.send({message: err})
    }
}

const newUser = (req, res) => {
	res.render("../views/register.ejs")
}

const login = (req, res) => {
	res.render("../views/login.ejs")
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
	createUser,
	newUser
};

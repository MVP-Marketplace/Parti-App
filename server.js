const express               = require("express");
const mongoose = require("mongoose");
	//   passport              = require("passport");
	//   localStrategy         = require("passport-local");
	//   passportLocalMongoose = require("passport-local-mongoose"); 
// const methodOverride = require("method-override");
const session = require("express-session");

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();

//middleware
// app.set("view engine", "ejs");


//User session
app.use(
	session({
		secret: 'parti-app',
		resave: false,
		saveUninitialized: false,
	})
);

// app.use(methodOverride("_method"));

// parse incoming data into a JS object attached to the request
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// set location from which to pull static files
app.use(express.static("static"));

// //connect passport packages 
// app.use(passport.initialize());
// app.use(passport.session()); 

// //read and encode data from the session 
// passport.serializeUser(User.serializeUser()); 
// passport.deserializeUser(User.deserializeUser());

// routes

// const userRouter = require("./routes/users.js");
// app.use("/users", userRouter);

app.listen(PORT, console.log(`Server running on port ${PORT}`)) 

const express = require("express");
const mongoose = require("mongoose");
passport = require("passport");
localStrategy = require("passport-local");
passportLocalMongoose = require("passport-local-mongoose");
GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const { cloudinary } = require("./server/utils/cloudinary");

const methodOverride = require("method-override");
const session = require("express-session");
const bodyParser = require('body-parser');

const db = require("./server/models/index");
const User = require("./server/models/User.js");

require("dotenv").config();
const PORT = process.env.PORT || 3001;
const app = express();


//middleware
app.set("view engine", "ejs");

//User session
app.use(
  session({
    secret: "parti-app",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(methodOverride("_method"));

// parse incoming data into a JS object attached to the request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set location from which to pull static files
// app.use(express.static("static"));

// GoogleStrategy within Passport
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/users/auth/google/return",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      // passport callback function
      //check if user already exists in our db with the given profile ID
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log(profile);
          //if we already have a record with the given profile ID
          done(null, currentUser);
        } else {
          //if not, create a new user
          user = new User({
            username: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });
          user.save(function (err) {
            if (err) console.log(err);
            return done(null, user);
          });
        }
      });
    }
  )
);

//connect passport packages
app.use(passport.initialize());
app.use(passport.session());

//read and encode data from the session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

//homepage route
app.get("/", (req, res) => {
  res.send("Parti-App homepage");
});

// routes
const userRouter = require("./server/routes/users.js");
const cloudinaryRouter = require("./server/routes/cloudinary.js");
app.use("/users", userRouter);
app.use("/", cloudinaryRouter);


app.listen(PORT, console.log(`Server running on port ${PORT}`));

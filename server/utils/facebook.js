const express = require("express");
const app = express();
const passport = require("passport");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const session = require("express-session");
const facebookStrategy = require("passport-facebook").Strategy;
const db = require("./models/index");
const User = require("./models/User");

app.set("view engine", "ejs");

// Initialize Passport and restore authentication state, if any, from the session.
app.use(session({ secret: "keyboard cat" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

// FacebookStrategy within Passport
passport.use(
  new facebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ["id", "name", "email"],
      passReqToCallback: true,
    }, // Facebook will send back the token and profile.
    function (token, refreshToken, profile, done) {
      //Asynchronous callback.
      process.nextTick(function () {
        // Find the user in the database based on their facebook id.
        User.findOne({ facebookId: profile.id }, function (err, user) {
          // If there is an error, stop everything and return that
          // there is an error connecting to the database.
          if (err) return done(err);

          // If the user is found, then log them in.
          if (user) {
            console.log("user found");
            console.log(user);
            return done(null, user); // If a user is found, return that user.
          } else {
            // If there is no user found with that facebook id, create them.
            var newUser = new User();
            // Set all of the facebook information in our user model.
            newUser.facebookId = profile.id; // Set the users facebook id.
            newUser.name = profile.displayName; // Set the users name.
            newUser.email = profile.emails[0].value; // Facebook can return multiple emails, so we will use the first one.
            // Save our user to the database.
            newUser.save(function (err) {
              if (err) throw err;

              // If successful, return the new user.
              return done(null, newUser);
            });
          }
        });
      });
    }
  )
);

// Used to serialize the user.
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Used to deserialize the user.
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.get("/profile", isLoggedIn, function (req, res) {
  console.log(req.user);
  res.render("profile", {
    user: req.user, // Get the user data out of the session and pass it to template.
  });
});

// Route middleware to confirm authentication.
function isLoggedIn(req, res, next) {
  // If user is authenticated in the session, continue.
  if (req.isAuthenticated()) return next();

  // If they aren't, redirect them to the home page
  res.redirect("/");
}

// Facebook route middleware.
app.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: "email" })
);

app.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/profile",
    failureRedirect: "/",
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = { facebook };

//This may be duplicate code

// const express = require("express");
// const app = express();
// passport = require("passport");
// localStrategy = require("passport-local");
// passportLocalMongoose = require("passport-local-mongoose");
// GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
// const facebookStrategy = require("passport-facebook").Strategy;

// const User = require("../models/User");
// const db = require("../models/index");

// // GoogleStrategy within Passport
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:3000/users/auth/google/return",
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log(profile);
//       // passport callback function
//       //check if user already exists in our db with the given profile ID
//       User.findOne({ googleId: profile.id }).then((currentUser) => {
//         if (currentUser) {
//           console.log(profile);
//           //if we already have a record with the given profile ID
//           done(null, currentUser);
//         } else {
//           //if not, create a new user
//           user = new User({
//             username: profile.displayName,
//             email: profile.emails[0].value,
//             googleId: profile.id,
//           });
//           user.save(function (err) {
//             if (err) console.log(err);
//             return done(null, user);
//           });
//         }
//       });
//     }
//   )
// );

// // FacebookStrategy within Passport
// passport.use(
//   new facebookStrategy(
//     {
//       clientID: process.env.FACEBOOK_CLIENT_ID,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//       callbackURL: process.env.FACEBOOK_CALLBACK_URL,
//       profileFields: ["id", "name", "email"],
//       passReqToCallback: true,
//     }, // Facebook will send back the token and profile.
//     function (token, refreshToken, profile, done) {
//       //Asynchronous callback.
//       process.nextTick(function () {
//         // Find the user in the database based on their facebook id.
//         User.findOne({ uid: profile.id }, function (err, user) {
//           // If there is an error, stop everything and return that
//           // there is an error connecting to the database.
//           if (err) return done(err);

//           // If the user is found, then log them in.
//           if (user) {
//             console.log("user found");
//             console.log(user);
//             return done(null, user); // If a user is found, return that user.
//           } else {
//             // If there is no user found with that facebook id, create them.
//             var newUser = new User();
//             // Set all of the facebook information in our user model.
//             newUser.facebookId = profile.id; // Set the users facebook id.
//             newUser.username = profile.displayName; // Set the users name.
//             newUser.email = profile.emails[0].value; // Facebook can return multiple emails, so we will use the first one.
//             // Save our user to the database.
//             newUser.save(function (err) {
//               if (err) throw err;

//               // If successful, return the new user.
//               return done(null, newUser);
//             });
//           }
//         });
//       });
//     }
//   )
// );

// //read and encode data from the session
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id).then((user) => {
//     done(null, user);
//   });
// });

// module.exports = { passport };

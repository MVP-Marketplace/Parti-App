const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const localStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const facebookStrategy = require("passport-facebook").Strategy;
const { cloudinary } = require("./server/utils/cloudinary");
const cors = require("cors");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");

const db = require("./server/models/index");
const User = require("./server/models/User.js");

require("dotenv").config();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
const corsOptions = {
  origin: "http://example.com",
};

const configuredCors = cors(corsOptions);

app.options("*", configuredCors);

app.post("/", configuredCors, (req, res) => {
  console.log(req.body);
  res.send("Hello");
});

//Middleware
app.set("view engine", "ejs");

// Body parsing middleware
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

// Initialize Passport and restore authentication state, if any, from the session.
app.use(
  session({
    secret: "parti-app",
    resave: false,
    saveUninitialized: false,
  })
);
// Connect passport packages.
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use(methodOverride("_method"));

// set location from which to pull static files
app.use(express.static("static"));

// GoogleStrategy within Passport
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/users/auth/google/return",
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

// read and encode data from the session
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

// Passport logout path
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// middleware to set the user
function setUser(req, res, next) {
  const user = req.body.user;
  console.log("line 114 server.js", user);
  if (user) {
    req.user = User.find((user) => User.id === userId);
    console.log(user, userId);
  }
  next();
}

// Draft-js
app.use("/static", express.static(__dirname + "/uploads"));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().split(":")[0] + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.post("/uploadImage", upload.single("file"), (req, res) => {
  console.log("starting upload...", req.file);

  res.json("http://localhost:3001/static/" + req.file.filename);
});

// routes
const userRouter = require("./server/routes/users.js");
const cloudinaryRouter = require("./server/routes/cloudinary.js");
const cardRouter = require("./server/routes/greetingCard.js");
const contentRouter = require("./server/routes/content.js");
const posts = require("./server/routes/api/posts");
app.use("/users", userRouter);
app.use("/", cloudinaryRouter);
app.use("/card", cardRouter);
app.use("/content", contentRouter);
app.use("/api/posts", posts);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// Server connection.
app.listen(PORT, () => {
  console.log(`🌎 ==> Server is now listening on port ${PORT}!`);
});

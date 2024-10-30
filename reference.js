const express = require("express");
const app = express();
const session = require("express-session");
const store = new session.MemoryStore();
const db = require("./db");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "f4z4gs$Gcg",
    cookie: { maxAge: 300000000, secure: false },
    saveUninitialized: false,
    resave: false,
    store,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.users.findById(id, function (err, user) {
    if (err) {
      return done(err);
    }
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(function (username, password, cb) {
    db.users.findByUsername(username, function (err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password != password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", (req, res) => {
  res.render("profile", { user: req.user });
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("profile");
  }
);

app.get("/register", (req, res) => {
  res.render("register");
});

// POST REGISTER:
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  // Create new user:
  const newUser = await db.users.createUser({ username, password });
  // Add if/else statement with the new user as the condition:
  if (newUser) {
    // Send correct response if new user is created:
    res.status(201).json({
      msg: "User created!",
      newUser,
    });
  } else {
    // Send correct response if new user failed to be created:
    res.status(500).json({
      msg: "User was not created!",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

/* Register a user */
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const id = { id: helper.getNewId(users) };

  try {
    const user = await helper.findUser(users, email);

    if (user) {
      console.log("User already exists!");
      return res.redirect("login");
    }

    // Generate salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Hash password

    const newUser = {
      ...id,
      email,
      password: hashedPassword,
    };

    await users.push(newUser);
    await helper.writeJSONFile(filename, users);

    res.redirect("login");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* Log in user */
router.post("/login", async (req, res) => {
  const { password, email } = req.body;

  try {
    const user = await helper.findUser(users, email);

    if (!user) {
      console.log("User does not exist!");
      return res.redirect("login");
    }

    // Compare passwords:
    const matchedPassword = await bcrypt.compare(password, user.password);

    if (!matchedPassword) {
      console.log("Passwords did not match!");
      return res.redirect("login");
    }
    // return res.status(401).json({
    //   token: null,
    //   message: "Invalid password",
    // });

    res.render("profile", { user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/profile", (req, res) => {
  res.render("profile");
});

module.exports = router;

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require("path");
require("dotenv").config();
global.rootPath = path.resolve(__dirname);

const session = require("express-session");
const userDB = require("./src/db/users");
const store = new session.MemoryStore();
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan("short"));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const dbStrategy = function (username, password, done) {
  userDB.getUserByUsername(username, async function (err, result) {
    if (err) return done(err);
    if (!result.rows.length) return done(null, false, "No User Found in DB");
    const user = result.rows[0];
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) return done(null, false, "Wrong Password. Try again!");
    return done(null, user);
  });
};

passport.use("local", new LocalStrategy(dbStrategy));

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser((id, done) => {
  userDB.getUserById(id, (err, result) => {
    if (err) return done(err);
    else {
      const user = result.rows[0];
      return done(null, user);
    }
  });
});

// session cookie
app.use(
  session({
    secret: "dkjwqeldwed",
    cookie: { maxAge: 300000000, secure: false },
    saveUninitialized: false,
    resave: false,
    store,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.redirect("/login");
});

//Routes
app.use("/cart", require("./src/routes/cart/index"));
app.use("/orders", require("./src/routes/orders/index"));
app.use("/products", require("./src/routes/products/index"));
app.use("/register", require("./src/routes/register/index"));
app.use("/login", require("./src/routes/login/index"));
app.use("/users", require("./src/routes/users/index"));
app.use("/profile", require("./src/routes/profile"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

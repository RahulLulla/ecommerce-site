const passport = require("passport");

const loginRouter = require("express").Router();

loginRouter.get("/", (req, res, next) => {
  res.render("login");
});

loginRouter.post(
  "/",
  (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) return next(err);

      if (!user) return res.redirect("login");
      // if (!user) return res.status(401).json({ succes: false, message: info });

      return res.redirect("profile");
    })(req, res, next);
  }

  // passport.authenticate("local", {
  //   successRedirect: "profile",
  //   failureRedirect: "login",
  //   failWithError: true,
  // })
);

module.exports = loginRouter;

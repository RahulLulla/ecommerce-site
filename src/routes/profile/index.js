const profileRouter = require("express").Router();

profileRouter.get("/", (req, res, next) => {
  res.render("profile", { user: req.user });
});

module.exports = profileRouter;

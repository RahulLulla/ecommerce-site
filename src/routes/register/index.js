const registerRouter = require("express").Router();
const path = require("path");
const registerHandler = require(path.join(
  global.rootPath,
  "src/handler/registration/registration_handler"
));

registerRouter.get("/", (req, res) => {
  res.render("register");
});

registerRouter.post(
  "/",
  registerHandler.validateUsernameAvailability,
  registerHandler.handeUserRegistration
);

module.exports = registerRouter;

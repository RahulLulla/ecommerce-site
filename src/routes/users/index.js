const userRouter = require("express").Router();
const path = require("path");
const userHandler = require(path.join(
  global.rootPath,
  "src/handler/users/user_handler"
));

userRouter.param("userId", (req, res, next, userId) => {
  req.userId = userId;
  next();
});

userRouter.get("/", userHandler.handleGetUsers);
userRouter.get("/:userId", userHandler.handleGetUserById);
userRouter.put("/:userId", userHandler.handleUpdateUserById);
userRouter.delete("/:userId", userHandler.handleDeleteUserById);

module.exports = userRouter;

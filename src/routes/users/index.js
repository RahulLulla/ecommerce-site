const userRouter = require("express").Router();

userRouter.params("userId", (req, res, next, userId) => {});

userRouter.get("/", (req, res, next) => {});
userRouter.get("/:userId", (req, res, next) => {});
userRouter.post("/:userId", (req, res, next) => {});

module.exports = userRouter;

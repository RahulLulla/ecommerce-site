const cartRouter = require("express").Router();

cartRouter.params("cartId", (req, res, next, cartId) => {});

cartRouter.post("/", (req, res, next) => {});
cartRouter.post("/:cartId", (req, res, next) => {});
cartRouter.get("/:cartId", (req, res, next) => {});
cartRouter.post("/:cartId/checkout", (req, res, next) => {});

module.exports = cartRouter;

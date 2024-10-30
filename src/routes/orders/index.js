const orderRouter = require("express").Router();

orderRouter.params("orderId", (req, res, next, productId) => {});

orderRouter.get("/", (req, res, next) => {});
orderRouter.get("/:orderId", (req, res, next) => {});

module.exports = orderRouter;

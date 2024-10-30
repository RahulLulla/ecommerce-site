const productRouter = require("express").Router();

productRouter.params("productId", (req, res, next, productId) => {});

productRouter.get("/", (req, res, next) => {});
productRouter.get("/:productId", (req, res, next) => {});

module.exports = productRouter;

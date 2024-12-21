const productRouter = require("express").Router();
const path = require("path");
const productHandler = require(path.join(
  global.rootPath,
  "src/handler/products/product_handler"
));

productRouter.param("productId", (req, res, next, productId) => {
  req.productId = productId;
  next();
});

productRouter.get("/", productHandler.handleGetProducts);
productRouter.get("/:productId", productHandler.handleGetProductById);
// Additional
productRouter.post("/", productHandler.handleCreateProduct);
productRouter.put("/:productId", productHandler.handleUpdateProductById);
productRouter.delete("/:productId", productHandler.handleDeleteProductById);

module.exports = productRouter;

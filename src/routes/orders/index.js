const orderRouter = require("express").Router();

const path = require("path");
const orderHandler = require(path.join(
  global.rootPath,
  "src/handler/orders/order_handler"
));

orderRouter.param("orderId", (req, res, next, orderId) => {
  req.orderId = orderId;
  next();
});

orderRouter.get("/", orderHandler.handleGetOrders);
orderRouter.get("/:orderId", orderHandler.handleGetOrderById);

module.exports = orderRouter;

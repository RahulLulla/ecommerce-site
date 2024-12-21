const cartRouter = require("express").Router();
const path = require("path");

const createCartHandler = require(path.join(
  global.rootPath,
  "src/handler/cart/create_cart_handler"
));

const createCartItemHandler = require(path.join(
  global.rootPath,
  "src/handler/cart/create_cart_item_handler"
));

const cartDetailsHandler = require(path.join(
  global.rootPath,
  "src/handler/cart/cart_details_handler"
));

const checkoutHandler = require(path.join(
  global.rootPath,
  "src/handler/cart/checkout_handler"
));

cartRouter.param("cartId", (req, res, next, cartId) => {
  req.cartId = cartId;
  next();
});

cartRouter.post(
  "/",
  createCartHandler.doesUserExist,
  createCartHandler.handleCreateNewCart
);

cartRouter.post(
  "/:cartId",
  createCartItemHandler.filterProducts,
  createCartItemHandler.validateProductIds,
  createCartItemHandler.validateProductStock,
  createCartItemHandler.handleAddProductsToCart,
  createCartItemHandler.handleUpdateProductStock
);

cartRouter.get("/:cartId", cartDetailsHandler.handleGetCartDetails);

cartRouter.post(
  "/:cartId/checkout",
  checkoutHandler.doesCartExist,
  checkoutHandler.handleCreateOrder,
  checkoutHandler.handleCreateOrderItems,
  checkoutHandler.handlerUpdateOrderAmount
);

module.exports = cartRouter;

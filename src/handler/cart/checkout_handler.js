const path = require("path");
const cartDB = require(path.join(global.rootPath, "src/db/carts"));
const orderDB = require(path.join(global.rootPath, "src/db/orders"));

const doesCartExist = async (req, res, next) => {
  await cartDB.getCartDetails(req.cartId, (error, result) => {
    if (error) return res.status(500).send(error);
    else if (!result.rows.length) res.send("Cart doesn't exist");
    else {
      req.cart = result.rows[0];
      next();
    }
  });
};

const handleCreateOrder = async (req, res, next) => {
  await orderDB.createOrder(req.cart.user_id, (error, result) => {
    if (error) return res.status(500).send(error);
    else {
      req.order_id = result.rows[0].order_id;
      console.log(
        `Created Order ${req.order_id} for user id: ${req.cart.user_id}`
      );
      next();
    }
  });
};

const handleCreateOrderItems = async (req, res, next) => {
  await orderDB.createOrderItems(req.cartId, req.order_id, (error, result) => {
    if (error) res.status(500).send(error);
    else {
      next();
    }
  });
};

const handlerUpdateOrderAmount = (req, res, next) => {
  orderDB.updateOrderAmount(req.order_id, (error, result) => {
    if (error) res.status(500).send(error);
    else {
      res.send("Order Created");
    }
  });
};

module.exports = {
  doesCartExist,
  handleCreateOrder,
  handleCreateOrderItems,
  handlerUpdateOrderAmount,
};

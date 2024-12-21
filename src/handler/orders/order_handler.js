const path = require("path");
const orderDB = require(path.join(global.rootPath, "src/db/orders"));

const handleGetOrders = (req, res, next) => {
  orderDB.getOrders((error, result) => {
    if (error) res.status(500).send(error);
    else res.send(result.rows);
  });
};

const handleGetOrderById = (req, res, next) => {
  orderDB.getOrderById(req.orderId, (error, result) => {
    if (error) res.status(500).send(error);
    else res.send(result.rows);
  });
};

module.exports = {
  handleGetOrders,
  handleGetOrderById,
};

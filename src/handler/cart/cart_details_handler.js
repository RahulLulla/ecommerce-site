

const path = require("path");
const cartDB = require(path.join(global.rootPath, "src/db/carts"));

const handleGetCartDetails = (req, res, next) => {
  cartDB.getCartDetails(req.cartId, (error, result) => {
    if (error) res.status(500).send(error);
    else res.send(result.rows);
  });
};

module.exports = {
  handleGetCartDetails,
};

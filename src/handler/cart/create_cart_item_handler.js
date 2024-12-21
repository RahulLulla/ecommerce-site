const path = require("path");
const cartDB = require(path.join(global.rootPath, "src/db/carts"));
const productDB = require(path.join(global.rootPath, "src/db/products"));

function setDifference(setA, setB) {
  return new Set([...setA].filter((item) => !setB.has(item)));
}

const filterProducts = async (req, res, next) => {
  req.requestedProducts = req.body.products;
  const productIds = req.requestedProducts.map((product) => product.product_id);
  await productDB.getProductByIds(productIds, (error, result) => {
    if (error) res.status(500).send(error);
    req.dbProducts = result.rows;
    next();
  });
};

const validateProductIds = async (req, res, next) => {
  const inputProductIds = req.requestedProducts.map(
    (product) => product.product_id
  );
  const filteredProductIds = req.dbProducts.map(
    (product) => product.product_id
  );
  const invalidProducts = setDifference(
    new Set(inputProductIds),
    new Set(filteredProductIds)
  );
  if (invalidProducts.size) {
    message = `Invalid Product in request ${[...invalidProducts].toString()}`;
    res.status(400).send(message);
  } else {
    next();
  }
};

const validateProductStock = async (req, res, next) => {
  req.requestedProducts = req.requestedProducts.sort(
    (p1, p2) => p1.product_id - p2.product_id
  );
  const requestedQuantity = req.requestedProducts.map(
    (product) => product.quantity
  );
  const presentStock = req.dbProducts.map((product) => product.stock);

  for (let i = 0; i < presentStock.length; i++) {
    if (requestedQuantity[i] > presentStock[i]) {
      res.status(500).send("Requested quantity is more than available stock");
      return;
    }
  }
  next();
};

const handleAddProductsToCart = async (req, res, next) => {
  for (let product of req.requestedProducts) {
    await cartDB.addProductsToCart(
      req.cartId,
      product.product_id,
      product.quantity,
      (error, result) => {
        if (error) res.status(500).send(error);
        console.log(
          `Product ${result.rows[0].product_id} added to cart ${req.cartId}`
        );
      }
    );
  }
  next();
};

const handleUpdateProductStock = async (req, res, next) => {
  const requestedQuantity = req.requestedProducts.map(
    (product) => product.quantity
  );
  req.dbProducts.forEach(async (dbProduct, i) => {
    let newStock = dbProduct.stock - requestedQuantity[i];
    await productDB.updateProductStock(
      dbProduct.product_id,
      newStock,
      (error, result) => {
        if (error) res.status(500).send(error);
        console.log(
          `Product ${dbProduct.product_id} stock updated from ${dbProduct.stock} to ${newStock}`
        );
      }
    );
    if (i === requestedQuantity.length - 1)
      res.send("Products Added to Cart Successfully");
  });
};

module.exports = {
  filterProducts,
  validateProductIds,
  validateProductStock,
  handleAddProductsToCart,
  handleUpdateProductStock,
};

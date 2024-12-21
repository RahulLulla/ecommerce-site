const path = require("path");
const productDB = require(path.join(global.rootPath, "src/db/products"));

const handleGetProducts = (req, res, next) => {
  const cb = (error, result) => {
    if (error) res.status(500).send(error);
    else res.send(result.rows);
  };

  if (req.query.category)
    productDB.getProductByCategory(req.query.category, cb);
  else productDB.getProducts(cb);
};

const handleGetProductById = (req, res, next) => {
  productDB.getProductById(req.productId, (error, result) => {
    if (error) res.status(500).send(error);
    else res.send(result.rows);
  });
};

const handleCreateProduct = async (req, res, next) => {
  const { product_name, price, description, category, stock } = req.body;

  productDB.createProduct(
    product_name,
    price,
    description,
    category,
    stock,
    (error, result) => {
      if (error) res.status(500).send(error);
      else {
        console.log(`Product added with ID: ${result.rows[0].product_id}`);
        res.status(201).send();
      }
    }
  );
};

const handleUpdateProductById = (req, res, next) => {
  const { product_name, price, description, category, stock } = req.body;

  productDB.updateProductById(
    req.productId,
    product_name,
    price,
    description,
    category,
    stock,
    (error, result) => {
      if (error) res.status(500).send(error);
      else res.status(204).send(result.rows);
    }
  );
};

const handleDeleteProductById = (req, res, next) => {
  productDB.deleteProductById(req.productId, (error, result) => {
    if (error) res.status(500).send(error);
    else res.status(200).send(result.rows);
  });
};

module.exports = {
  handleGetProducts,
  handleGetProductById,
  handleCreateProduct,
  handleUpdateProductById,
  handleDeleteProductById,
};

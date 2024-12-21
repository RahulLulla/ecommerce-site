const processQuery = require("./query");

const getProducts = async (cb) => {
  await processQuery("SELECT * FROM products order by product_id ASC", [], cb);
};

const getProductByCategory = async (category, cb) => {
  await processQuery(
    "SELECT * FROM products where category = $1 order by product_id ASC",
    [category],
    cb
  );
};

const getProductByIds = async (productIds, cb) => {
  await processQuery(
    "SELECT * FROM products where product_id = ANY($1) order by product_id",
    [productIds],
    cb
  );
};

const getProductById = async (productId, cb) => {
  await processQuery(
    "SELECT * FROM products where product_id = $1",
    [productId],
    cb
  );
};

const createProduct = async (
  product_name,
  price,
  description,
  category,
  stock,
  cb
) => {
  await processQuery(
    "INSERT INTO products (product_name, price, description, category, stock) values ($1, $2, $3, $4, $5) RETURNING *",
    [product_name, price, description, category, stock],
    cb
  );
};

const updateProductById = async (
  productId,
  product_name,
  price,
  description,
  category,
  stock,
  cb
) => {
  await processQuery(
    "UPDATE products set product_name=$2, price=$3, category=$4, description=$5, stock=$6  where product_id = $1",
    [productId, product_name, price, category, description, stock],
    cb
  );
};

const updateProductStock = async (productId, stock, cb) => {
  await processQuery(
    "UPDATE products set stock=$2  where product_id = $1",
    [productId, stock],
    cb
  );
};

const deleteProductById = async (productId, cb) => {
  await processQuery(
    "DELETE FROM products where product_id = $1",
    [productId],
    cb
  );
};

module.exports = {
  getProducts,
  getProductByCategory,
  getProductById,
  getProductByIds,
  createProduct,
  updateProductById,
  updateProductStock,
  deleteProductById,
};

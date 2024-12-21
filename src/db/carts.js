const processQuery = require("./query");
const fs = require("fs");

let get_cart_details_query;
fs.readFile("src/db/getCardDetails.sql", "utf-8", (err, data) => {
  if (err) console.error("Could not read file", err);
  get_cart_details_query = data;
});

const getCartDetails = async (cart_id, cb) => {
  await processQuery(get_cart_details_query, [cart_id], cb);
};

const createNewCart = async (user_id, cb) => {
  await processQuery(
    "INSERT INTO carts (user_id, created_at) values ($1, now()::timestamp without time zone) RETURNING *",
    [user_id],
    cb
  );
};

const addProductsToCart = async (cart_id, product_id, quantity, cb) => {
  await processQuery(
    "INSERT INTO cart_items (cart_id, product_id, quantity) values ($1, $2, $3) RETURNING *",
    [cart_id, product_id, quantity],
    cb
  );
};

module.exports = {
  createNewCart,
  addProductsToCart,
  getCartDetails,
};

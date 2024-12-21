const processQuery = require("./query");

const fs = require("fs");

let get_order_details_query;
fs.readFile("src/db/getOrderDetails.sql", "utf-8", (err, data) => {
  if (err) console.error("Could not read file", err);
  get_order_details_query = data;
});

let get_order_details_by_id_query;
fs.readFile("src/db/getOrderDetailsById.sql", "utf-8", (err, data) => {
  if (err) console.error("Could not read file", err);
  get_order_details_by_id_query = data;
});

const getOrders = async (cb) => {
  await processQuery(get_order_details_query, [], cb);
};

const getOrderById = async (order_id, cb) => {
  await processQuery(get_order_details_by_id_query, [order_id], cb);
};

const createOrder = async (user_id, cb) => {
  await processQuery(
    `INSERT INTO orders (user_id, order_date) 
    values ($1, now()::timestamp without time zone) RETURNING *`,
    [user_id],
    cb
  );
};

const createOrderItems = async (cart_id, order_id, cb) => {
  await processQuery(
    `INSERT INTO public.order_items(order_id, product_id, quantity)
    SELECT $2 as "order_id", product_id, quantity
    FROM public.cart_items
    WHERE cart_id = $1`,
    [cart_id, order_id],
    cb
  );
};

const updateOrderAmount = async (order_id, cb) => {
  await processQuery(
    `UPDATE public.orders 
    set order_amount = (select sum(quantity*price)
        from public.order_items oi
        join products p
        on p.product_id = oi.product_id
        where order_id = $1)
    where order_id = $1
    `,
    [order_id],
    cb
  );
};

const deleteOrderById = async (userId, cb) => {
  await processQuery("DELETE FROM orders where order_id = $1", [userId], cb);
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  createOrderItems,
  updateOrderAmount,
  deleteOrderById,
};

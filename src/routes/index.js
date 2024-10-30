const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan("short"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Human");
});

app.use("/cart", require("./cart/index"));
app.use("/orders", require("./orders/index"));
app.use("/products", require("./products/index"));
app.use("/register", require("./register/index"));
app.use("/login", require("./login/index"));
app.use("/users", require("./users/index"));

app.post("/login", (req, res, next) => {});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const path = require("path");
const userDB = require(path.join(global.rootPath, "src/db/users"));
const cartDB = require(path.join(global.rootPath, "src/db/carts"));

const doesUserExist = (req, res, next) => {
  userDB.getUserById(req.body.user_id, (error, result) => {
    if (error) res.status(500).send(error);
    else {
      if (result.rows.length == 0) return res.send("User doesn't Exist!");
      next();
    }
  });
};

const handleCreateNewCart = async (req, res, next) => {
  const { user_id } = req.body;

  cartDB.createNewCart(user_id, (error, result) => {
    if (error) res.status(500).send(error);
    else {
      console.log(
        `Cart ID: ${result.rows[0].cart_id} created for User ${result.rows[0].user_id}`
      );
      res.status(201).send(result.rows);
    }
  });
};

module.exports = {
  doesUserExist,
  handleCreateNewCart,
};

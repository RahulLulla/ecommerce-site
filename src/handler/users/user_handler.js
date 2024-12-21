const path = require("path");
const userDB = require(path.join(global.rootPath, "src/db/users"));

const handleGetUsers = (req, res, next) => {
  userDB.getUsers((error, result) => {
    if (error) res.status(500).send(error);
    else res.send(result.rows);
  });
};

const handleGetUserById = (req, res, next) => {
  userDB.getUserById(req.userId, (error, result) => {
    if (error) res.status(500).send(error);
    else res.send(result.rows);
  });
};

const handleUpdateUserById = (req, res, next) => {
  userDB.updateUserById(
    req.userId,
    req.body.username,
    req.body.email,
    (error, result) => {
      if (error) res.status(500).send(error);
      else res.status(200).send(result.rows);
    }
  );
};

const handleDeleteUserById = (req, res, next) => {
  userDB.deleteUserById(req.userId, (error, result) => {
    if (error) res.status(500).send(error);
    else res.status(200).send(result.rows);
  });
};

module.exports = {
  handleGetUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
};

const processQuery = require("./query");

const getUsers = async (cb) => {
  await processQuery("SELECT user_id, username, is_active, email FROM users order by user_id ASC", [], cb);
  
};

const getUserById = async (userId, cb) => {
  await processQuery(
    "SELECT user_id, username, is_active, email FROM users where user_id = $1",
    [userId],
    cb
  );
};

const createUser = async (username, hashedPassword, email, cb) => {
  await processQuery(
    "INSERT INTO users (username, password, email, is_active) values ($1, $2, $3, $4) RETURNING *",
    [username, hashedPassword, email, true],
    cb
  );
};

const updateUserById = async (userId, username, email, cb) => {
  await processQuery(
    "UPDATE users set username=$2, email=$3  where user_id = $1",
    [userId, username, email],
    cb
  );
};

const deleteUserById = async (userId, cb) => {
  await processQuery(
    "DELETE FROM users where user_id = $1",
    [userId],
    cb
  );
};

const getUserByUsername = async (username, cb) => {
  await processQuery(
    "SELECT * FROM users where username = $1",
    [username],
    cb
  );
};

module.exports = {
  getUsers,
  getUserById,
  getUserByUsername,
  createUser,
  updateUserById,
  deleteUserById,
};

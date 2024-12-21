const bcrypt = require("bcrypt");
const path = require("path");
const userDB = require(path.join(global.rootPath, "src/db/users"));

const validateUsernameAvailability = async (req, res, next) => {
  await userDB.getUserByUsername(req.body.username, (error, result) => {
    if (error) res.status(500).send(error);
    else {
      if (result.rows.length != 0) return res.send("User already Exist!");
      next();
    }
  });
};

const handeUserRegistration = async (req, res, next) => {
  const { username, password, email } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  await userDB.createUser(username, hashedPassword, email, (error, result) => {
    if (error) res.status(500).send(error);
    else {
      console.log(`User added with ID: ${result.rows[0].user_id}`);
      // res.status(201).send();
      res.redirect("login");
    }
  });
};

module.exports = {
  validateUsernameAvailability,
  handeUserRegistration,
};

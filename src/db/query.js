const Pool = require("pg").Pool;
const path = require("path");
const data = require(path.join(global.rootPath, "database_info.json"));

const pool = new Pool({
  user: data["user"],
  host: data["host"],
  database: data["database"],
  password: data["password"],
  port: 5432,
});

const query = async (query_text, query_argument) => {
  const result = await pool.query(query_text, query_argument);
  return result;
};

const processQuery = async (query_text, query_argument, cb) => {
  try {
    const result = await query(query_text, query_argument);
    return cb(null, result);
  } catch (error) {
    return cb(error, null);
  }
};

module.exports = processQuery;

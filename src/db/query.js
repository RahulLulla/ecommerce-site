const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
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

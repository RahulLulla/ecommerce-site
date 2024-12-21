const handleGetCallback = (error, result) => {
  handleHTTPResponse(500, error, 200, result.rows);
};

const handleUpdateCallback = (error, result) => {
  handleHTTPResponse(500, error, 201, result.rows);
};

const handleDeleteCallback = (error, result) => {
  handleHTTPResponse(500, error, 200, result.rows);
};

const handlePostCallback = (error, result) => {
  handleHTTPResponse(500, error, 201, result.rows);
};

const handleHTTPResponse = (error, result, err_status, success_status) => {
  if (error) res.status(err_status).send(error);
  else res.status(success_status).send(result.rows);
};

module.exports = {
  handleGetCallback,
  handleUpdateCallback,
  handleDeleteCallback,
  handlePostCallback,
};

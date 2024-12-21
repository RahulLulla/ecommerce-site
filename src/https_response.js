const handleGetCallback = (error, result) => {
  if (error) res.status(500).send(error);
  else res.send(result.rows);
};

const handleUpdateCallback = (error, result) => {
  if (error) res.status(500).send(error);
  else res.status(204).send(result.rows);
};

const handleDeleteCallback = (error, result) => {
  if (error) res.status(500).send(error);
  else res.status(200).send(result.rows);
};

const handlePostCallback = (error, result) => {
  if (error) res.status(500).send(error);
  else res.status(201).send(result.rows);
};

module.exports = {
  handleGetCallback,
  handleUpdateCallback,
  handleDeleteCallback,
  handlePostCallback,
};

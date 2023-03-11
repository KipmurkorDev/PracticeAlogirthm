const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const data = require('./data/messages.json');

  res.json(data);
});

const port = process.env.port || 8001;

app.listen(port, () =>
  console.log(
    `Message service running on port ${port}, http://localhost:${port}`
  )
);
const express = require('express');
const app = express();
const PORT = 4000;

app.get('/test', (req, res) => {
  res.json('test ok');
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log(`Server listening on PORT: ${PORT} `);
});

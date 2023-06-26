const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json())

app.post('/register', (req, res) => {
  const { username, password } = req.body;

  res.json({ 'username': username, 'password': password});
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log(`Server listening on PORT: ${PORT} `);
});

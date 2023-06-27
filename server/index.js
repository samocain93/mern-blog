const express = require('express');
const cors = require('cors');
const app = express();
const User = require('./models/User');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const newUser = await User.create({
    username,
    password,
  });

  res.json(newUser);
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log(`Server listening on PORT: ${PORT} `);
});

const express = require('express');
const cors = require('cors');
const app = express();
const User = require('./models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
require('dotenv').config();
const PORT = process.env.PORT;

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = await User.create({
      username,
      password:bcrypt.hashSync(password, salt),
    });

    res.json(newUser);
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
});


app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username })
    const matching = bcrypt.compareSync(password, user.password)
    // console.log(user)
   
    matching ? console.log('user match successful') : res.status(400).json('wrong credentials')
})




app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log(`Server listening on PORT: ${PORT} `);
});

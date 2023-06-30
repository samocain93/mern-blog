const express = require('express');
const cors = require('cors');
const app = express();
const User = require('./models/User');
const Post = require('./models/Post');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const multer = require('multer');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const fs = require('fs');
const PORT = process.env.PORT;

const uploadMiddleware = multer({ dest: 'uploads/' });

const salt = bcrypt.genSaltSync(10);
const secret = 'secret';

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect(process.env.MONGO_URI);

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });

    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  const matching = bcrypt.compareSync(password, user.password);
  // console.log(user)

  if (matching) {
    // logged in and redirect
    jwt.sign({ username, id: user._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id: user._id,
        username,
      });
    });
  } else {
    res
      .status(400)
      .json(
        'Login attempt failed. Please try a different username or password.'
      );
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok');
});

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;
      // res.json(info);
      const { title, summary, content } = req.body;
      const newPost = await Post.create({
        title,
        summary,
        content,
        image: newPath,
        author: info.id,
      });
      res.json(newPost);
    });
  }
});

app.get('/post', async (req, res) => {
  res.json(
    await Post.find()
      .populate('author', ['username'])
      .sort({ createdAt: -1 })
      .limit(20)
  );
});

app.get('/post/:id', async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id).populate('author', ['username']);
  res.json(post)
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log(`Server listening on PORT: ${PORT} `);
});

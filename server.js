const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SaltRounds = 10;

//connect mongoosenitoring engine, pass option { useUnifiedTopology: true }
mongoose.connect('mongodb://localhost:27017/henryKCWebsiteDB', { useNewUrlParser: true, useUnifiedTopology: true });
// create schema
const blogSchema = {
  title: String,
  image: String,
  content: String,
  time: String
};

const adminSchema = {
  password: String
};


// Create models

const Post = mongoose.model('Post', blogSchema);
const Admin = mongoose.model('Admin', adminSchema);

const post = Post({
  title: 'First Post',
  image: 'This file',
  content: 'This content is massive.',
  time: 'Tue Apr 7, 2020'
});


bcrypt.hash('', SaltRounds, (err, hash) => {
  const admin = Admin({
    password: hash
  });
  // admin.save();
});



// post.save();

//set app
const app = express();
app.use(express.static('./public'))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));



// set the upload





app.post('/upload', (req, res) => {
  console.log(req.files.data);
})

app.post('/admin', (req, res) => {
  const neededString = ((req.body.body));
  Admin.findOne((err, result) => {
    if(!err) {
      bcrypt.compare(neededString, result.password, (err, boolean) => {
        res.send(boolean);
      })
    } else {
      console.log(err);
    }
  })
})

const port = 5000;
app.listen(port, () => console.log('Server running on port ' + port));


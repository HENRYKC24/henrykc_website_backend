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
  post: String,
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
  post: 'This content is massive.',
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
app.use(fileUpload());
app.use(express.static('./public'))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));



// set the upload





app.post('/upload', (req, res) => {
  if( !req.files ) {
    return res.json({msg: 'No file selected'});
  }
  const {title, post} = JSON.parse(req.body.info);
  console.log(title, post);
  if (!title || !post) {
    return res.json({msg: 'No post title or body'});
  }
  const file = req.files.file;
  const fileNameInServer = `uploaded-image-${Date.now()}${file.name}`;
  file.mv(`${__dirname}/public/blog-images/${fileNameInServer}`, err => {
    if( err ) {
      return res.send(err);
    }
  });

  const newPost = Post({
    title,
    post,
    image: fileNameInServer,
    time: new Date().toDateString()
  });

  newPost.save();
  res.json({msg: 'File successfully uploaded', filePath: `${__dirname}/public/blog-images/${fileNameInServer}`});
  
})

app.post('/admin', (req, res) => {
  const {body: neededString} = ((req.body));
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


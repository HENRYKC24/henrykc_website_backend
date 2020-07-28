const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path');
const SaltRounds = 10;


//atlas connection
mongoose.connect('mongodb+srv://Henry:5432atlas@cluster0-jn6nw.mongodb.net/henryKCWebsiteDB', { useNewUrlParser: true, useUnifiedTopology: true });

//local connection or heroku sandbox on deploy
// mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/henryKCWebsiteDB', { useNewUrlParser: true, useUnifiedTopology: true });


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

bcrypt.hash('h', SaltRounds, (err, hash) => {
  const admin = Admin({
    password: hash
  });
  // admin.save();
});

//set app
const app = express();
app.use(fileUpload());
app.use(express.static('./public'))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// get routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
app.get('/getNumberOfPosts', (req, res) => {
  Post.find({}, (err, result) => {
    if( !err ) {
      res.json({totalPosts: result.length});
    } else {
      console.log(err)
    }
  })
})

app.get('/getBlogs/:skip/:limit', (req, res) => {
  const skip = Number(req.params.skip);
  const limit = Number(req.params.limit);
  Post.find({}, (err, posts) => {
    if( !err ) {
      res.json(posts);
    } else {
      console.log(err);
    }
  }).sort({$natural:-1}).skip(skip).limit(limit);
})

app.get('/showSingle/:id', (req, res) => {
  Post.findOne({_id: req.params.id}, (err, result) => {
    if( !err ) {
      res.json(result);
    } else {
      console.log(err);
    }
  })
})

app.post('/upload', (req, res) => {
  const file = req.files.file;
  const {title, post} = JSON.parse(req.body.info);
  const removeLeadingDots = (input) => {
    let result = '', index;
    for( let i = 0; i < input.length; i++ ) {
      if (input[i] === '.' ) {
        index = i;
      }
    }
    for ( let i = 0; i < input.length; i++) {
      if( input[i] === '.' && i !== index ) {
        continue;
      }
      if( input[i] !== ' ' ) {
        result += input[i];
      }
    }
    return result;
  }
  const dirnameArray = [__dirname];
  const fileNameInServer = `uploaded-image-${Date.now()}${removeLeadingDots(file.name)}`;
  file.mv(`${__dirname}/client/build/images/${fileNameInServer}`, err => {
    if( err ) {
      console.log(err);
      return res.status(500).send(err);

    }
  });

  const newPost = Post({
    title,
    post,
    image: fileNameInServer,
    time: new Date().toDateString()
  });

  newPost.save();
  res.json(
    {
      msg: 'File successfully uploaded',
      filePath: `public/uploads/${fileNameInServer}`
    }
  );
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
});

if ( process.env.NODE_ENV === 'production' ) {
  app.use(express.static( 'client/build' ));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
  })
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server running on port ' + port));


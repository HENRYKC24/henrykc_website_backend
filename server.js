const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SaltRounds = 10;

//connect mongoosenitoring engine, pass option { useUnifiedTopology: true }
mongoose.connect('mongodb://localhost:27017/henryKCWebsiteDB', { useNewUrlParser: true, useUnifiedTopology: true });
// create schema
const blogSchema = {
  title: String,
  file: String,
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
  file: 'This file',
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
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/api/customers', (req, res) => {
  const customers = [
    {id:1, firstName: 'John', lastName: 'Doe'},
    {id:2, firstName: 'Steve', lastName: 'Smith'},
    {id:3, firstName: 'Mary', lastName: 'Swanson'}
  ];
  res.json(customers);
});


app.post('/compose', (req, res) => {
  const title = req.body.title;
  const post = req.body.post;
  const time = new Date().toDateString();
  res.send('You actually made it to the server!');
})

app.post('/admin-compose-credential', (req, res) => {
  const password = req.body.password;
  console.log(req.body);
  // res.send('password: ' + req.body.password);
  Admin.findOne((err, result) => {
    console.log(result);
    bcrypt.compare(req.body.password, result.password, (err, boolean) => {
      console.log(boolean);
      res.send(boolean);
    })
  })
  bcrypt.compare(req.body.password,)
})


const port = 5000;
app.listen(port, () => console.log('Server running on port ' + port));


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SaltRounds = 10;

//connect mongoosenitoring engine, pass option { useUnifiedTopology: true }
mongoose.connect('mongodb://localhost:27017/henryKCWebsiteDB', { useNewUrlParser: true, useUnifiedTopology: true });
// create a schema
const blogSchema = {
  title: String,
  file: String,
  content: String,
  time: String
};


// Create blog model

const Post = mongoose.model('Post', blogSchema);

const post = Post({
  title: 'First Post',
  file: 'This file',
  content: 'This content is massive.',
  time: 'Tue Apr 7, 2020'
})

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


app.post('/henry/kc/24/compose', (req, res) => {
  const title = req.body.title;
  const post = req.body.post;
  const time = new Date().toDateString();
})


const port = 5000;
app.listen(port, () => console.log('Server running on port ' + port));


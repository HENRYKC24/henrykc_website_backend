const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//connect mongoose
// mongoose.connect('mogodb://localhost:27017/blogPostDB', { useNewUrlParser: true });

//set app
const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id:1, firstName: 'John', lastName: 'Doe'},
    {id:2, firstName: 'Steve', lastName: 'Smith'},
    {id:3, firstName: 'Mary', lastName: 'Swanson'}
  ];
  res.json(customers);
});

const port = 5000;
app.listen(port, () => console.log('Server running on port ' + port));


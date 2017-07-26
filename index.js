const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const Data = require('./views/data.js');

const mustacheExpress = require('mustache-express');

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache")
app.set("views", path.join(__dirname, "views") )

app.get('/', function (req, res) {
  res.render('homepage.mustache', Data);
});

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
  console.log('Successfully started express application!')
});

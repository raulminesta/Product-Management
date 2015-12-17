var express = require('express');
var path = require('path');
var bodyparser = require('body-parser')
var app = express();

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, './client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000, function() {
  console.log('༼つ ◕_◕ ༽つ 8000 ༼つ ◕_◕ ༽つ ');
});
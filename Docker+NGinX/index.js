var express = require('express');
var app = express();
const port = 3000;

var server = app.listen(port, () => {
  console.log("Start Server Port : " + port);
});

app.get('/', (req,res) => {
  res.send('Hello Docker Container');
})
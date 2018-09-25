//Load express module with `require` directive
var express = require('express')
var Request = require("request");
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  //res.send('this is Service - 2');
  //res.send(JSON.parse(body));

  Request.get("http://www.google.com", (error, response, body) => {
    res.statusCode = 200;
    res.send("This is Google homepage </br> <b>" + body +"</b>");
  });


})

app.get('/whoami',function(req,res) {
   res.send("This is my domain");
})



//Launch listening server on port 80
app.listen(80, function () {
  console.log('app listening on port 80!')
})

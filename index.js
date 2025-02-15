var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/:name', function(req, res) {
    res.send('Hello ' + req.params.tagId + '!')
});

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
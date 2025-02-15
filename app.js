import express from "express";

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/:name', function(req, res) {
    res.send('Hello ' + req.params.name + '!')
});

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})


export default app;
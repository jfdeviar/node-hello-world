import express from "express";

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.get('/bye/:name', function(req, res) {
    const sanitizedName = req.params.name.replace(/[^a-zA-Z0-9 ]/g, '');
    res.send('Bye ' + sanitizedName + '!')
});

app.get('/:name', function(req, res) {
    const sanitizedName = req.params.name.replace(/[^a-zA-Z0-9 ]/g, '');
    res.send('Hello ' + sanitizedName + '!')
});

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})


export default app;
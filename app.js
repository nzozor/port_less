var express = require('express');

var app = express();

var port = 3000;

app.use(express.static('public'));


app.get('/books', function(req, res) {
    res.send('Hello Books');
});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});
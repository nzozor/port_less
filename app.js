var express = require('express');

var app = express();

var port = 3000;

app.use(express.static('public'));
app.use(express.static('node_modules/particles.js/'));

app.use(express.static('src/views'));
// app.use(express.static('./index.html'));


// app.get('/', function(req, res) {
//     res.send('Hello World');
// });

app.get('/books', function(req, res) {
    res.send('Hello Books');
});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});
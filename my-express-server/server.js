const express = require('express');

const app = express();

app.get('/', function(req, res) {
    console.log(req);
    res.send('<h1>Hello World!</h1>');
})

app.get('/about', function(req, res) {
    res.send('I am a computer Enginnering student at PICT pune.');
})

app.listen(3000, function() {
    console.log('Server listening to port 3000.');
})
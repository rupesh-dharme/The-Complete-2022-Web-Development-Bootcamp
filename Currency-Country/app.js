const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const { json } = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
})


app.post('/', function(req, res) {
    var capital = req.body.capital;
    console.log(capital);
    var url = 'https://restcountries.com/v3.1/capital/' + capital
    https.get(url, function(response) {
        response.on('data', function(data) {
            jsonData = JSON.parse(data);
            var country = jsonData[0].name.common;
            res.send(capital + " is the capital of " + country + '.');
        })
    })
})


app.listen(3000, function() {
    console.log("listening to port 3000.");
})
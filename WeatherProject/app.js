const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})


app.post('/', function(req, res) {
    var query = req.body.cityName;
    var apiKey = '57ef9366b4c12de65341e6711753bb20';
    var unit = 'metric';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apiKey + '&units=' + unit;

    https.get(url, function(response) {
        console.log(response);

        response.on('data', function(data) {
            var weatherData = JSON.parse(data);
            var iconId = weatherData.weather[0].icon;
            var iconURL = 'http://openweathermap.org/img/wn/' + iconId + '@2x.png';
            var temp = weatherData.main.temp;
            var desc = weatherData.weather[0].description;
            res.write('<p>Current weather is ' + desc + '.</p>');
            res.write('<h1>The temp in '+ query +' is '+ temp + ' deg celsius</h1>');
            res.write('<img src="' + iconURL + '">');
            res.send();
        });
    })
})


app.listen(3000, function() {
    console.log("Listening to requests on port 3000.");
})
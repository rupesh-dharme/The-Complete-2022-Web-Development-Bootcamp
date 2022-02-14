const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmicalculator', function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight/(height*height);
    res.send("Your BMI is " + bmi);
})

app.post('/', function(req, res) {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    res.send("The sum of the values is " + result);
})

app.listen(3000, function() {
    console.log('Listening to port 3000.');
})
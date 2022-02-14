const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();
const items = ["Get food", "Cook food", "Eat food"];
const workItems = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    const day = date.myDate();
    res.render('list', {listTitle: day, items: items});
})

app.get('/work', function(req, res) {
    res.render('list', {listTitle: 'work', items: workItems})
})

app.get('/about', function(req, res) {
    res.render('about');
})

app.post('/', function(req, res) {
    const item = req.body.newItem;
    const id = req.body.button;
    if (id === 'work') {
        workItems.push(item);
        res.redirect('/work');
        return;
    }
    items.push(item);
    res.redirect('/');
})

app.listen(3000, function() {
    console.log("Listening to port 3000.");
})
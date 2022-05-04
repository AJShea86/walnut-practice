const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipes');
const db = mongoose.mongoose.connection

app.get('/', function(req, res){
    res.send('Hello Andrew, good luck!')
});

app.listen(3000);
console.log('Running on port 3000...')
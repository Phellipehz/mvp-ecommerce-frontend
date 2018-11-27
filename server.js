const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/dist/mvp-ecommerce-frontend'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/mvp-ecommerce-frontend/index.html'));
});

app.listen(80);
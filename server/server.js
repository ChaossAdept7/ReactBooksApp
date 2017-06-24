/**
 * Created by serj on 5/23/17.
 */
var express = require('express');

var path = require('path');

var app = express();
var fs = require('fs');

var config = require('../webpack.config');
var webpack = require('webpack');
//allows us to hooking express app
var webpackDevMiddleWare = require('webpack-dev-middleware');
//allows us to hot module reloading
var webpackHotMiddleWare = require('webpack-hot-middleware');

//read config and get compiler
var compiler = webpack(config);

//publicPath where wp simulates our publicPath from wp config
app.use(webpackDevMiddleWare(compiler, {noInfo:true, publicPath:config.output.publicPath}))
app.use(webpackHotMiddleWare(compiler));
app.use(express.static('./dist'));


app.use('/get_books', function (req, res) {
    /* get book description from file */
    var books = JSON.parse(fs.readFileSync(path.resolve('server/books.json'), 'utf8'));
    res.json(books);
});

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});


var port = 3000;

app.listen(port, function(error) {
    if (error) throw error;
    console.log("Express server listening on port", port);
});

const express = require('express');
const webpack = require('webpack');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../webpack.config');
const compiler = webpack(config);

const routes = require('./routes/api')

// Connect to database
mongoose.connect('mongodb://localhost/movies', {useMongoClient: true});
mongoose.connection.once('open', function(){
  console.log('We are connected to MongoDB');
})
mongoose.Promise = global.Promise;


// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Body parser - middleware
app.use(bodyParser.json());

app.use('/api', routes)
// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});

const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const ejs = require('ejs');


// E X P R E S S
const app = express();

// E X P R E S S   A R G S
app.use('/', routes);
// EJS engine for views and logic
app.set('view engine', 'ejs');
// Public mapping of /img for images
app.use(express.static(`public`));

module.exports = app;
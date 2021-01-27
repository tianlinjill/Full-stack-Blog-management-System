//import express
const express = require('express');

//Create blog display page routingconst home = express.Router();
const home = express.Router();
// Display page of the front page of the blog
home.get('/', require('./home/index'));

//Blog front-end article display page
home.get('/article', require('./home/article'));

// Blog front-end article comment route
home.post('/comment', require('./home/comment'));

//Export the routing object as a module
module.exports = home;

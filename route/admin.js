
//IMPORT express frame
const express = require('express');

//Create blog display page rout
const admin = express.Router();

//Render the sign in page
admin.get('/login', require('./admin/loginPage'));

// implement login function
admin.post('/login',require('./admin/login') );


//Create user list route to render user list page
admin.get('/user', require('./admin/userPage'));

//Implement user log out function
admin.get('/logout', require('./admin/logout'))

// Create user edit page route
admin.get('/user-edit', require('./admin/user-edit'));

// Create a route to add user 
admin.post('/user-edit', require('./admin/user-edit-fn'));

// Create modify the user page route
admin.post('/user-modify', require('./admin/user-modify'));

// Create delete user page route
admin.get('/user-delete', require('./admin/user-delete'));

//Create an article management page
admin.get('/article', require('./admin/article'));

//Create article editing page
admin.get('/article-edit', require('./admin/article-edit'));

// Create an add article route page
admin.post('/article-add', require('./admin/article-add'));

// Create article edit page
admin.post('/article-modify', require('./admin/article-modify'));

// Create article and delete routing page
admin.get('/article-delete', require('./admin/article-delete'));

//Export the routing object as a module member
module.exports = admin;

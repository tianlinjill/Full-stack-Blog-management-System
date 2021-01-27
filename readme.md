# Blog Management System

Introduction: This is a blog management system, in this system I create two main role: Admin and Normal user. 

As a Admin user you could CURD the user account and publish article

As a Normal user you could browse the website to read the article create by the admin user, and leave comment on the bottom of the article!

Safety: once user log out the system would automicall delete user's session and login infomation.

Login infomrtion:

Role: Admin

​	Username: admin@gmail.com pwd: admin

Role: Normal 

​	Username: normal@gmail.com pwd: normal	



## Technical stack

Html

CSS

JS

Express framework

Database: mongDB

### Art-template template engine

To make later maintenance more convenient.Extract the same codes of different html pages to the common art file, and let the subclass html inherit the common art file. 

### Bcrypt module

Use hash encryption to encrypt the password and store it in the database to prevent brute force cracking.

### JOI module

Collection of validation rules

### formidable module

Used for binary file upload (picture)

### Morgan module

Print the request sent by the client to the server onto the console

### Config module

Allows developers to extract application configuration information for different operating environments into separate files

### mongoose-sex-page module

Paging module

## Will do

User could also publish article.

Picture could be added inner article for better reading experience.

User dashboard: 

   1.User could read data about his or her article such as number of view.

2. User/Admin could delete comment in his or her article to avoid the hate speech.

   
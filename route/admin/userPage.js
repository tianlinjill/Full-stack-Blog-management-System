// import the user collection constructor in the database
const { User } = require('../../model/user');

module.exports = async (req, res) => {
 // current from user
   req.app.locals.currentLink = 'user';

   //Accept the current page parameters passed by the user, if page is not passed, the default is 1
   let page = req.query.page || 1;
   // one page show 10 info
   let pageSize = 10;
   // query the total 
   let count = await User.countDocuments({});
  // total page
   let total = Math.ceil(count / pageSize);
 
 //The starting position of the data query corresponding to the page number (current page-1)* pagesize
   let start = (page - 1) * pageSize;

// Query user information from the database
   let users = await User.find({}).limit(pageSize).skip(start)
   
// Render user list template
   res.render('admin/user', {
      users: users,
      page: page,
      total: total
   })
}
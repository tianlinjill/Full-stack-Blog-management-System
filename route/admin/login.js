//import the user collection constructor
const { User } = require('../../model/user');
// import Encryption module 
const bcrtpt = require('bcrypt');
module.exports = async (req, res) => {
   // Receive request parameters
   const { email, password } = req.body;

   if (email.trim().length == 0 || password.trim().length == 0)
      return res.status(400).render('admin/error', { msg: 'Incorrect email address or password' })
   // Query user information based on email address

   let user = await User.findOne({ email: email })
   //User found
   if (user) {
      let isValid = await bcrtpt.compare(password, user.password); 
      if (isValid) {
         // login success
         // Store the username in the request object
         req.session.username = user.username;
         // Store user roles in session
         req.session.role = user.role;
         // Store the user object in locals so that the server can access
         req.app.locals.userInfo = user;
         if (user.role == 'admin') {
            //redirect user page
         res.redirect('/admin/user');

         } else {
            //redirect home page
            res.redirect('/home/')
         }
         
        

      } else {
         // login failed
         res.status(400).render('admin/error',{msg:'Incorrect email address or password'})
      }
      
   } else {
      // user not found
      res.status(400).render('admin/error',{msg:'Incorrect email address or password'})
   }
}

 
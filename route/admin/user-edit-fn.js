

const { User, validateUser } = require('../../model/user');
const bcrypt = require('bcrypt');
module.exports = async (req, res) => {
   
    // verify
    try {
       await validateUser(req.body)
    } catch (ex) {
        //verify failed
        // ex.message
        // redirect to user edit page
      return  res.redirect(`/admin/user-edit?message=${ex.message}`)
        
    }
    
    // Query whether the user exists based on the email address
    let user = await User.findOne({ email: req.body.email });
    //check whether the mailbox is occupied
    if (user) {
        return  res.redirect(`/admin/user-edit?message=${'Email address is already occupied!'}`)   
    } 
    // Encrypt the password
    const salt = await bcrypt.genSalt(10);
    
    const password = await bcrypt.hash(req.body.password, salt);
    //Replace password
    req.body.password = password;

    //Add users to the database
    await User.create(req.body);
    // Redirect the page to the user list page
    res.redirect('/admin/user');
    
}
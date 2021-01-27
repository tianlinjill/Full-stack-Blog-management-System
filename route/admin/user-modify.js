
const { User } = require('../../model/user');
// import encryption module to decrypt the password
const bcrypt = require('bcrypt');
module.exports = async (req, res) => {
    
    
    // Accept the request parameters passed by the user
    const body = req.body;
    // get id from query
    const id = req.query.id;
    let user = await User.findOne({ _id: id });
    
    const isValid = await bcrypt.compare(body.password, user.password);
    if (isValid) {
        //Password match successfully
       
        // update user information
        await User.updateOne({ _id: id }, {
            // banned password change
            username: body.username,
            email: body.email,
            role: body.role,
            state: body.state
        });
        // redirect the user list
        res.redirect('/admin/user');
    } else {
        //password matched failed
         return  res.redirect(`/admin/user-edit?id=${id}&message=${'Password verification failed, user information cannot be modified'}`)
    }
    
   
}
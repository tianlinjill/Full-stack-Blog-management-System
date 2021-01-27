// The edit function needs to query the user by id
const { User } = require('../../model/user');

module.exports = async (req, res) => {

   // Indicates that the current user is visiting the user management page
   req.app.locals.currentLink = 'user';
    // Get the id& message parameter in the address bar
    
    const { message, id } = req.query;
   
    if (id) {
        //include id edit function
        let user = await User.findOne({ _id: id })
        res.render('admin/user-edit', {
            message: message,
            user: user,
            link: '/admin/user-modify?id='+ id ,
            button:'Edit'
    });
      
        return;
    } else {
        //uninclude id add function
        res.render('admin/user-edit', {
            message: message,
            link: '/admin/user-edit',
            button:'Add'
    });
    }

    
}
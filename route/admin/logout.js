module.exports = (req, res)=> {
    //delete session
    req.session.destroy(function () {
        //delete cookie
        res.clearCookie('connect.sid');
        //Redirect to user login page
        res.redirect('/admin/login');
        // Delete user information in the template
        req.app.locals.userInfo = null;
    })
}
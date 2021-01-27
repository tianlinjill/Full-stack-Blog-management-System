 const guard = (req, res, next ) => {
    // Check that the user visits from the landing page
    // check the user's login status
    // if checked approve the user
    // If the user is not logged in, redirect the request to the login page
    
    if (req.url != '/login' && !req.session.username ) {
        // not from login page  &session did not save user's data
        //res.send(req.url)
        res.redirect('/admin/login')
    } else {
      // If the user role is not admin, redirect the request to the homepage
      if ( req.session.role == 'normal') {
        return res.redirect('/home/')
      }
        //user has loggined in approved
      next()
    }   
}
module.exports = guard;
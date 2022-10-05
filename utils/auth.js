const withAuth = (req, res, next) => {

    //DELETE WHEN REQ SESSION LOGGED IN IS HANDLED

    // req.session.logged_in = true;
    //^^^^^^^^^^^^^^^^^^
    //DELETE WHEN REQ SESSION LOGGED IN IS HANDLED

    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;
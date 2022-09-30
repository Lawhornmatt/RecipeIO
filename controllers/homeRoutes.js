const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {

    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  console.log(req.session.logged_in);
  res.render('login');

//THIS NEEDS TO BE UNCOMMENTED IF REQ SESSION LOGGED IN IS WORKING

  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
   
  // }


});





module.exports = router;
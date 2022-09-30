const router = require('express').Router();
const withAuth = require('../../utils/auth');






router.get('/books',withAuth, (req, res) => {

    try {
            //replace this with the correct handlebars path
            //       VVVVVVVVVVV
        res.render('TEMP_RECIPES', {
          logged_in: req.session.logged_in,
        });
      } catch (err) {
        res.status(500).json(err);
      }

    //LIST OF THE COOKBOOKS


  });

  
router.get('/books/:name',withAuth, (req, res) => {


    try {
            //replace this with the correct handlebars path
            //       VVVVVVVVVVV
        res.render('home', {
          logged_in: req.session.logged_in,
        });
      } catch (err) {
        res.status(500).json(err);
      }
    //CHOSEN BOOK


  });

  router.get('/books/:name/recipes',withAuth, (req, res) => {


    try {
                //replace this with the correct handlebars path
            //       VVVVVVVVVVV
        res.render('TEMP_RECIPES', {
          logged_in: req.session.logged_in,
        });
      } catch (err) {
        res.status(500).json(err);
      }
    //COOKBOOK LIST OF RECIPES


  });

  router.get('/books/:name/recipes/:id',withAuth, (req, res) => {

    try {
            //replace this with the correct handlebars path
            //       VVVVVVVVVVV
        res.render('home', {
          logged_in: req.session.logged_in,
        });
      } catch (err) {
        res.status(500).json(err);
      }
    
    //INDIVIDUAL RECIPE


  });



module.exports = router;

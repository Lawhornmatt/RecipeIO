const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Book, Recipe, User } = require('../models');
const bcrypt = require('bcrypt')


router.get('/', withAuth, async(req, res) => {
    try {
        let { count, rows } = await Recipe.findAndCountAll({});

        const randRecipe = Math.floor(Math.random() * count) + 1;
        // const recipeData = await Recipe.findByPk(randRecipe);

        // Serialize data so the template can read it
        // let recipe = recipeData.get({ plain: true });

        res.render('home', {
            // recipe, commented out until recipe data is available
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});




//get and post of register

router.get('/register', withAuth, (req, res) => {

    try {
        //replace this with the correct handlebars path
        res.render('signup', {
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }

    //LIST OF THE COOKBOOKS


});

// create user
router.post('/register', async(req, res) => {
    // console.log('POST /register | req.body: ' + req.body.firstName + ' ' + req.body.lastName + ' ' + req.body.username + ' ' + req.body.email + ' ' + req.body.password)
    try {
        const userData = await User.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        // console.log('POST /register | userData' + userData);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ status: 'ok', message: `${userData.first_name} is logged in!` })
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/account', withAuth, async(req, res) => {
    try {
        const desiredAccount = await User.findOne({
            where: {
                id: req.session.user_id
            }
        });

        const accountData = desiredAccount.get({ plain: true });

        // res.json(bookData);

        res.render('account', {
            accountData,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/account/:user', withAuth, async(req, res) => {

    try {
        console.log(req.params.username);
        const desiredAccount = await User.findOne({
            where: {
                username: req.params.user
            }
        });

        const accountData = desiredAccount.get({ plain: true });

        // res.json(bookData);

        res.render('account', {
            accountData,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/about', withAuth, (req, res) => {

    try {
        //replace this with the correct handlebars path
        //       VVVVVVVVVVV
        res.render('about', {
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }

    //about us information


});



router.get('/login', (req, res) => {
    console.log(req.session.logged_in);
    res.render('login');

    //THIS NEEDS TO BE UNCOMMENTED IF REQ SESSION LOGGED IN IS WORKING

    if (req.session.logged_in) {
        res.redirect('/');
        return;

    }


});

//LOGIN (AUTHENTICATE USER)
router.post('/login', async(req, res) => {
    try {
        //Read name and password from req.body
        const email = req.body.email;
        const password = req.body.password;

        //find if name exists in db
        const userData = await User.findOne({
            where: {
                email: email,
            }
        });
        if (!userData) {
            res
                .status(400)
                .json({ status: 'error', message: 'Invalid Login' })
            return
        }
        if (await bcrypt.compare(password, userData.password) === false) {
            res.json({ status: 'error', message: 'Invalid Login' })
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ status: 'ok', message: `${userData.first_name} is logged in!` })
        });
        console.log('session: ', req.session.user_id);
    } catch (err) {
        res.status(404).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.json({ message: 'Logged out' })
            res.status(204).end();
            console.log('Session Destroyed');
        });
    } else {
        res.status(404).end();
    }
});

// Delete user
router.delete('/account/:id', async (req, res) => {

    let deleteID = req.session.user_id;


    try {
      const desiredAccount = await User.destroy( { 
        where: {
          id: deleteID
      }});

      if (!desiredAccount) {
        res.status(404).json({ message: 'No account found with this id!' });
        return;
      }

      req.session.destroy(() => {
        console.log('Session Destroyed');
    });

      res.status(200).json(desiredAccount);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
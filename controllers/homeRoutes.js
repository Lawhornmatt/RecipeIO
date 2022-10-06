const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Book, Recipe, User } = require('../models');
const bcrypt = require('bcrypt')
let nodemailer = require("nodemailer");

// This is for testing email service
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "537935e779b49b",
      pass: "37eea9dd4ae0e8"
    }
  });

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

        // 
        var mailOptions = {
            from: '"Example Team" <from@example.com>',
            to: `${userData.email}`,
            subject: 'Welcome to RecipeIO!',
            text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
            html: `<b>Hey there! </b>
            <br> 
            <p>Welcome to RecipeIO where all your recipes are a click away!</p>
            <br>
            <p>Just incase you forgot your log in info, here is it!</p>
            <p>Name: ${userData.first_name}</p>
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>Password: You got this!</p>
            `
        };
        
        // send some mail
        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });

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


module.exports = router;
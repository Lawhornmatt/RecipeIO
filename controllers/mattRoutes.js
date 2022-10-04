const router = require('express').Router();
const withAuth = require('../utils/auth');
const {Book, Recipe, User} = require('../models');
const bcrypt = require('bcrypt')

// ===  NEW BOOK ROUTES ===

router.get('/newbook',withAuth, (req, res) => {

    try {
        res.render('newBook', {
          logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/newbook',withAuth, async (req, res) =>{
    // console.log('POST /register | req.body: ' + req.body.firstName + ' ' + req.body.lastName + ' ' + req.body.username + ' ' + req.body.email + ' ' + req.body.password)
    try {
        const bookData = await Book.create({
          name: req.body.name,
          user_id: req.body.user_id,
        });
  
        // console.log('POST /register | bookData' + bookData);
  
        req.session.save(() => {
          req.session.logged_in = true;
  
          res.json({status: 'ok', message:`${bookData.name} is created!`})
        });
    }catch(err){
        res.status(400).json(err);
    }
});

// ===  NEW RECIPE ROUTES ===

router.get('/newrecipe',withAuth, async (req, res) => {

    try {
      const userBooks = await Book.findAll( {
        where: {
          user_id: req.session.user_id
        }
      });

      const preBookData = userBooks.map((book) => book.get({plain: true}));

      res.render('newRecipe', {
        preBookData,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/newrecipe',withAuth, async (req, res) =>{
    try {
        const recipeData = await Recipe.create({
          name: req.body.name,
          ingredients: req.body.ingredients,
          directions: req.body.directions,
        });
  
        // console.log('POST /register | bookData' + bookData);
  
        req.session.save(() => {
          req.session.logged_in = true;
  
          res.json({status: 'ok', message:`${bookData.name} is created!`})
        });
    }catch(err){
        res.status(400).json(err);
    }
});

router.post('/editbook',withAuth, async (req, res) =>{
    try {
        const bookData = await Book.create({
          name: req.body.name,
          user_id: req.body.user_id,
        });
  
        // console.log('POST /register | bookData' + bookData);
  
        req.session.save(() => {
          req.session.logged_in = true;
  
          res.json({status: 'ok', message:`${bookData.name} is created!`})
        });
    }catch(err){
        res.status(400).json(err);
    }
});

module.exports = router;

const router = require('express').Router();
const withAuth = require('../utils/auth');
const {Book, Recipe, User} = require('../models');
const bcrypt = require('bcrypt')

// ===  NEW BOOK ROUTES ===

router.get('/newbook',withAuth, (req, res) => {

    try {
        res.render('newbook', {
          logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/newbook', async (req, res) =>{
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

router.get('/newrecipe',withAuth, (req, res) => {

    try {
        res.render('newRecipe', {
          logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/newrecipe', async (req, res) =>{
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

module.exports = router;

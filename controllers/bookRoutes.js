const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Book, Recipe, User, BookRecipe } = require('../models');
const bcrypt = require('bcrypt')

//LIST OF THE COOKBOOKS
router.get('/', withAuth, async(req, res) => {
    try {
        const allBooks = await Book.findAll({
            where: {
                user_id: req.session.user_id
            }
        });

        const bookData = allBooks.map((book) => book.get({ plain: true }));
        // const bookData = allBooks.get({ plain: true });

        // console.log('GET /books | bookData' + bookData);

        // res.json(bookData);

        res.render('books', {
            bookData,
            logged_in: req.session.logged_in,
        });
        // res.json(bookData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Look at the new book form
router.get('/newbook',withAuth, (req, res) => {

    try {
        res.render('newBook', {
          logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Insert a new book associated with user into the Book table
router.post('/makenewbook',withAuth, async (req, res) =>{
    try {
        const bookData = await Book.create({
          name: req.body.name,
          user_id: req.session.user_id,
        });
  
        // console.log('POST /register | bookData' + bookData);
  
        req.session.save(() => {
          req.session.logged_in = true;
  
          console.log(`\x1b[32mstatus: 'ok', message: ${bookData.name} is created!\x1b[0m`);
          res.redirect('/books');
        });
    }catch(err){
        res.status(400).json(err);
    }
});

//CHOSEN BOOK
router.get('/:id', withAuth, async(req, res) => {
    try {
        const desiredBook = await Book.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: Recipe,
                through: {
                    BookRecipe,
                    attributes: []
                }
            }]
        });

        const bookData = desiredBook.get({ plain: true });

        // res.json(bookData);

        res.render('viewBook', {
            bookData,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async(req, res) => {
    try {
        const desiredBook = await Book.destroy({
            where: {
                id: req.params.id
            },
        });
        res.status(200).json(desiredBook);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
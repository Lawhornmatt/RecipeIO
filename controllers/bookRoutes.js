const router = require('express').Router();
const withAuth = require('../utils/auth');
const {Book, Recipe, User, BookRecipe} = require('../models');
const bcrypt = require('bcrypt')

//LIST OF THE COOKBOOKS
router.get('/',withAuth, async (req, res) => {
  try {
      const allBooks = await Book.findAll( {
        where: {
          user_id: req.session.user_id
        }
      });

      const bookData = allBooks.map((book) => book.get({plain: true}));
      // const bookData = allBooks.get({ plain: true });

      // console.log('GET /books | bookData' + bookData);

      // res.json(bookData);

      res.render('books', {
        bookData,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

//CHOSEN BOOK
router.get('/:id',withAuth, async (req, res) => {


    try {
      const desiredBook = await Book.findOne( { 
        where: {
          id: req.params.id
        },
        include: [
          { model: Recipe,
            through: { BookRecipe,
              attributes: []
            }
          }
        ]
      });

      const bookData = desiredBook.get({plain: true});

      // res.json(bookData);

      res.render('viewBook', {
        bookData,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;

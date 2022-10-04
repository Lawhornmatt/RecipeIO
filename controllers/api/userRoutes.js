const router = require('express').Router();
const withAuth = require('../../utils/auth');
const {Book, Recipe, User, BookRecipe} = require('../../models');
const { request } = require('express');

//LIST OF THE COOKBOOKS
router.get('/books',withAuth, async (req, res) => {
  try {
      const allBooks = await Book.findAll( {
        where: {
          user_id: req.session.user_id
        }
      });

      const books = allBooks.map((book) => book.get({plain: true}));

      res.status(200).json(books);

      // res.render('books', {
      //   books,
      //   logged_in: req.session.logged_in,
      // });
    } catch (err) {
      res.status(500).json(err);
    }
});

//All Recipes
router.get('/books/:id',withAuth, async (req, res) => {


    try {
      const desiredBook = await Book.findOne( { 
        where: {
          id: req.params.id,
        },
        include: [{model: Recipe}],
      });

      const book = desiredBook.get({plain: true});

      res.status(200).json(book);


        // res.render('home', {
        //   book,
        //   logged_in: req.session.logged_in,
        // });
      } catch (err) {
        res.status(500).json(err);
      }
});

//COOKBOOK LIST OF RECIPES
// router.get('/books/:name/recipes',withAuth, async (req, res) => {

//   try {
//       const allReciepes = await Recipe.findAll( {
//         where: {

//         }
//       });

//       const recipes = allReciepes.map((reciepe) => reciepe.get({plain: true}));

//       res.status(200).json(recipes);

//       // res.render('TEMP_RECIPES', {
//       //   recipes,
//       //   logged_in: req.session.logged_in,
//       // });
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

//INDIVIDUAL RECIPE
router.get('/books/:name/recipes/:id',withAuth, async (req, res) => {

  const desiredBook = await Book.findOne( { 
    where: { 
      title: req.params.name 
    } 
  });

  try {
    const desiredRecipe = await Book.findOne( {
      where: {
        name: req.params.name
      }
    });

    const myRecipe = desiredRecipe.get({plain: true});

      res.render('home', {
        myRecipe,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});



module.exports = router;

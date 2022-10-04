const router = require('express').Router();
const withAuth = require('../utils/auth');
const {Book, Recipe, User, BookRecipe} = require('../models');
const bcrypt = require('bcrypt')


//COOKBOOK LIST OF RECIPES
router.get('/',withAuth, async (req, res) => {
  try {
      // const allRecipes = await Book.findAll( {
      //   attributes: [],
      //   where: {
      //     user_id: req.session.user_id
      //   },
      //   include: [
      //     { model: Recipe,
      //       through: { BookRecipe,
      //         attributes: []
      //       }
      //     }
      //   ]
      // });
      const allRecipes = await Recipe.findAll( {
        include: [
          { model: Book,
            attributes: [],
            through: { BookRecipe,
              attributes: [],
            },
            where: {
              user_id: req.session.user_id
            },
          }
        ]
      });

      const recipesData = allRecipes.map((recipe) => recipe.get({plain: true}));

      // res.json(recipesData);

      res.render('viewRecipes', {
        recipesData,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

//INDIVIDUAL RECIPE
router.get('/:name/recipes/:id',withAuth, async (req, res) => {

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

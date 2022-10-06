const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Book, Recipe, User, BookRecipe } = require('../models');
const bcrypt = require('bcrypt')


//COOKBOOK LIST OF RECIPES
router.get('/', withAuth, async(req, res) => {
    try {
        const allRecipes = await Recipe.findAll({
            include: [{
                model: Book,
                attributes: [],
                through: {
                    BookRecipe,
                    attributes: [],
                },
                where: {
                    user_id: req.session.user_id
                },
            }]
        });

        const recipesData = allRecipes.map((recipe) => recipe.get({ plain: true }));

        // res.json(recipesData);

        res.render('viewRecipes', {
            recipesData,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/newrecipe', withAuth, async(req, res) => {
    try {
        const userBooks = await Book.findAll({
            where: {
                user_id: req.session.user_id
            }
        });
        const preBookData = userBooks.map((book) => book.get({ plain: true }));
        res.render('newRecipe', {
            preBookData,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// == Creates a new recipe and it's associated BookRecipe tag 
router.post('/createnewrecipe', withAuth, async(req, res) => {
    console.log(`\x1b[32mPOST /createnewrecipe | req.body\x1b[0m` + JSON.stringify(req.body));
    // FIRST: Create the recipe in the recipe table
    var newRecipeID;

    try {
        const recipeData = await Recipe.create({
            name: req.body.name,
            ingredients: req.body.ingredients,
            directions: req.body.directions,
        }).then(function(info) {
            // console.log(`\x1b[32mpost-create info: \x1b[0m` + info.id);
            newRecipeID = info.id;
        });


        req.session.save(() => {
            req.session.logged_in = true;

            console.log(`\x1b[32mstatus: 'ok', message: ${recipeData} is created!\x1b[0m`);
            res.redirect('/recipes');
        });
    } catch (err) {
        res.status(400).json(err);
    }
    console.log(`\x1b[32mpost-create info: \x1b[0m` + newRecipeID); // REMOVE ME LATER
    // SECOND: Create however many BookRecipe tags as necessary 
    if (req.body.bookAssign) {
        let bookArrayYay = req.body.bookAssign;
        console.log(`\x1b[32mstatus: bookAssign For Each: ${bookArrayYay}\x1b[0m`);

        bookArrayYay.forEach(async function(element) {
            try {
                const BRData = await BookRecipe.create({
                    book_id: element,
                    recipe_id: newRecipeID,
                });

                console.log(`\x1b[32mBRData: \x1b[0m` + JSON.stringify(BRData));

                req.session.save(() => {
                    req.session.logged_in = true;

                    console.log(`\x1b[32mstatus: 'ok', message: BR ID: ${BRData.id} is created!\x1b[0m`);
                });
            } catch (err) {
                res.status(400).json(err);
            }
        });
    }
});


// == CURRENTLY NON FUNCTIONAL AND UNACCESSIBLE TO USERS
// TODO: add  some icon to books, like a gear, to click on and change their associated recipes
router.post('/editbook', withAuth, async(req, res) => {
    try {
        const bookData = await Book.create({
            name: req.body.name,
            user_id: req.body.user_id,
        });

        // console.log('POST /editbook | bookData' + bookData);

        req.session.save(() => {
            req.session.logged_in = true;

            res.json({ status: 'ok', message: `${bookData.name} is created!` })
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//INDIVIDUAL RECIPE
router.get('/:id', withAuth, async(req, res) => {
    try {
        const allRecipes = await Recipe.findOne({
            where: {
                id: req.params.id
            },
        });

        const recipesData = allRecipes.get({ plain: true });

        // res.json(recipesData);

        res.render('oneRecipe', {
            recipesData,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// ===  NEW RECIPE ROUTES ===

// == Look at the Recipe Form 


module.exports = router;
const { BookRecipe } = require('../models');

const BookRecipeData = [{
        recipe_id: 1,
        book_id: 3,
    },
    {
        recipe_id: 2,
        book_id: 1,
    },
    {
        recipe_id: 2,
        book_id: 3,
    },
    {
        recipe_id: 3,
        book_id: 2,
    }
];

const seedBookRecipe = () => BookRecipe.bulkCreate(BookRecipeData);

module.exports = seedBookRecipe;
const { BookRecipe } = require('../models');

const BookRecipeData = [
    {
        recipe_id: 1,
        book_id: 1,
    },
    {
        recipe_id: 1,
        book_id: 2,
    },
    {
        recipe_id: 2,
        book_id: 2,
    },
    {
        recipe_id: 3,
        book_id: 1,
    },
    {
        recipe_id: 4,
        book_id: 3,
    },
    {
        recipe_id: 4,
        book_id: 4,
    },
    {
        recipe_id: 5,
        book_id: 4,
    },
    {
        recipe_id: 6,
        book_id: 3,
    },
    {
        recipe_id: 7,
        book_id: 5,
    },
    {
        recipe_id: 7,
        book_id: 6,
    },
    {
        recipe_id: 8,
        book_id: 6,
    },
    {
        recipe_id: 9,
        book_id: 5,
    }
];

const seedBookRecipe = () => BookRecipe.bulkCreate(BookRecipeData);

module.exports = seedBookRecipe;
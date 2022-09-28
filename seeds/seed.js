const sequelize = require('../config/connection');
//const { Book, BookRecipe, Ingredient, Recipe, User } = require('../models');
const recipeData = require('./recipeData');
const userData = require('./userData');
const bookData = require('./bookData');
const bookRecipe = require('./BookRecipeData')

async function seedDatabase() {
    await sequelize.sync({ force: true });
    await userData();
    await bookData();
    await recipeData();
    await bookRecipe();
}

seedDatabase();
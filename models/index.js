const User = require('./User');
const Book = require('./Book');
const Recipe = require('./Recipe');
const BookRecipe = require('./BookRecipe');

Book.belongsTo(User, { foreignKey: 'user_id' });

Book.belongsToMany(Recipe, {
    through: BookRecipe,
    foreignKey: 'book_id',
});

Recipe.belongsToMany(Book, {
    through: BookRecipe,
    foreignKey: 'recipe_id',
});

module.exports = {
    User,
    Book,
    Recipe,
    BookRecipe
};
const User = require('./User');
const Book = require('./Book');
const Recipe = require('./Recipe');
const BookRecipe = require('./BookRecipe');

Book.belongsTo(User, { foreignKey: 'user_id' });

Book.belongsToMany(Recipe, {
    through: BookRecipe,
});

Recipe.belongsToMany(Book, {
    through: BookRecipe,
});

module.exports = {
    User,
    Book,
    Recipe,
    BookRecipe
};
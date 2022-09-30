const User = require('./User');
const Book = require('./Book');
const Recipe = require('./Recipe');
const BookRecipe = require('./BookRecipe');

Book.belongsTo(User, { foreignKey: 'user_id' });

Book.hasMany(Recipe, {
    foreignKey: 'book_id',
    onDelete: 'CASCADE'
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
const user = require('./User');
const book = require('./book');
const recipe = require('./recipe');

book.blongsTo(user, {foreignKey: 'user_id'});

book.hasMany(recipe, {
    foreignKey: 'book_id',
    onDelete: 'CASCADE'
});

recipe.belongsToMany(book);

modeule.exports = {
    user,
    book,
    recipe,
};
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class BookRecipe extends Model {}

BookRecipe.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'book',
            key: 'id',
        },
        allowNull: false,
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'recipe',
            key: 'id',
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book_recipe',
});

module.exports = BookRecipe;
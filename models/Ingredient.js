const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model {}

Ingredient.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // allowed to be NULL in case the user doesn't know how much they have
    qty_on_hand: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    // allowed to be NULL in case the user doesn't know the units of measurement
    unit_of_measurement: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredient',
});

module.exports = User;
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Movies = sequelize.define('movie', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.STRING,
        allowNull: false
    },
    realeseYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});
module.exports = Movies;








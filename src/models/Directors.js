const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Directors = sequelize.define('director', {
    firstName: {
        type: DataTypes.STRING,
    
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality:{
        type: DataTypes.STRING,
        allowNull: false
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
});

module.exports = Directors;
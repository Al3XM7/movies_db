const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Actors = sequelize.define('actor', {
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

module.exports = Actors;

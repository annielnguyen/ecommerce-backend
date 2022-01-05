const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//create our location model
class Category extends Model {}
//create fields/columns for location model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category'
  }
);

module.exports = Category;

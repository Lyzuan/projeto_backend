const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product'); 

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 100] 
    }
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
    validate: {
      len: [1, 100] 
    }
  },
  use_in_menu: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
  tableName: 'categories',
});


Category.belongsToMany(Product, { through: 'ProductCategory', foreignKey: 'category_id' });

module.exports = Category;

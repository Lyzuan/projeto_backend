const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProductCategory = sequelize.define('ProductCategory', {
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'id',
    },
    onDelete: 'CASCADE',
    primaryKey: true, 
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'categories',
      key: 'id',
    },
    onDelete: 'CASCADE',
    primaryKey: true, 
  },
}, {
  timestamps: true,
  tableName: 'product_categories',
});

module.exports = ProductCategory;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product'); 

const ProductOption = sequelize.define('ProductOption', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shape: {
    type: DataTypes.ENUM,
    values: ['square', 'circle'],
    defaultValue: 'square',
  },
  radius: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  type: {
    type: DataTypes.ENUM,
    values: ['text', 'color'],
    defaultValue: 'text',
  },
  values: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'product_options',
});


ProductOption.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = ProductOption;

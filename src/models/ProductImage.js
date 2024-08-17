const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product'); 

const ProductImage = sequelize.define('ProductImage', {
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
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'product_images',
});


ProductImage.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = ProductImage;

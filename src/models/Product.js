const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./Category'); 

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
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
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0 
    }
  },
  description: {
    type: DataTypes.STRING,
    validate: {
      len: [0, 500] 
    }
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0 
    }
  },
  price_with_discount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0 
    }
  },
}, {
  timestamps: true,
  tableName: 'products',
});


Product.belongsToMany(Category, { through: 'ProductCategory', foreignKey: 'product_id' });
Product.hasMany(ProductImage, { foreignKey: 'product_id' });
Product.hasMany(ProductOption, { foreignKey: 'product_id' });

module.exports = Product;

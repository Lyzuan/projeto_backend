const { body, param } = require('express-validator');

const validateCategoryCreation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('slug').notEmpty().withMessage('Slug is required'),
  
];

const validateCategoryUpdate = [
  param('id').isInt().withMessage('ID must be an integer'),
  body('name').optional().notEmpty().withMessage('Name is required'),
  body('slug').optional().notEmpty().withMessage('Slug is required'),
  
];

module.exports = { validateCategoryCreation, validateCategoryUpdate };

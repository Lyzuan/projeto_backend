const { body, param } = require('express-validator');

const validateUserCreation = [
  body('firstname').notEmpty().withMessage('Firstname is required'),
  body('surname').notEmpty().withMessage('Surname is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),

];

const validateUserUpdate = [
  param('id').isInt().withMessage('ID must be an integer'),
  body('firstname').optional().notEmpty().withMessage('Firstname cannot be empty'),
  body('surname').optional().notEmpty().withMessage('Surname cannot be empty'),
  body('email').optional().isEmail().withMessage('Valid email is required'),
 
];

module.exports = { validateUserCreation, validateUserUpdate };

const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const { validateCategoryCreation, validateCategoryUpdate } = require('../middlewares/validateCategory');
const { authenticateUser } = require('../middlewares/authenticateUser'); 

const router = express.Router();


router.get('/v1/category/search', CategoryController.getCategories);
router.get('/v1/category/:id', CategoryController.getCategoryById);
router.post('/v1/category', authenticateUser, validateCategoryCreation, CategoryController.createCategory);
router.put('/v1/category/:id', authenticateUser, validateCategoryUpdate, CategoryController.updateCategory);
router.delete('/v1/category/:id', authenticateUser, CategoryController.deleteCategory);

module.exports = router;

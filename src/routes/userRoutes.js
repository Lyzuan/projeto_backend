const express = require('express');
const { getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');
const { validateUserCreation, validateUserUpdate } = require('../middlewares/validateUser');
const { authenticateUser } = require('../middlewares/authenticateUser'); 

const router = express.Router();


router.get('/:id', authenticateUser, getUserById);
router.post('/', validateUserCreation, createUser);
router.put('/:id', authenticateUser, validateUserUpdate, updateUser);
router.delete('/:id', authenticateUser, deleteUser);

module.exports = router;

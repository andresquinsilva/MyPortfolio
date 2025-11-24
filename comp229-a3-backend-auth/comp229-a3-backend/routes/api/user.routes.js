const express = require('express');
const auth = require('../../middleware/auth');
const {
  getAllUsers, getUserById, createUser, updateUser, removeUser, removeAllUsers
} = require('../../controllers/user.controller');

const router = express.Router();

router.get('/', auth, getAllUsers);
router.get('/:id', auth, getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', auth, removeUser);
router.delete('/', auth, removeAllUsers);

module.exports = router;

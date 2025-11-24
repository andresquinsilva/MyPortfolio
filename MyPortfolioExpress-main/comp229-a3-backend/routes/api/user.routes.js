const express = require('express');
const {
  getAllUsers, getUserById, createUser, updateUser, removeUser, removeAllUsers
} = require('../../controllers/user.controller');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', removeUser);
router.delete('/', removeAllUsers);

module.exports = router;

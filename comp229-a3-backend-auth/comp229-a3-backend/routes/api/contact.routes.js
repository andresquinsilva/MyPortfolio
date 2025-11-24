const express = require('express');
const auth = require('../../middleware/auth');
const {
  getAllContacts, getContactById, createContact, updateContact, removeContact, removeAllContacts
} = require('../../controllers/contact.controller');

const router = express.Router();

router.get('/', auth, getAllContacts);
router.get('/:id', auth, getContactById);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', auth, removeContact);
router.delete('/', auth, removeAllContacts);

module.exports = router;

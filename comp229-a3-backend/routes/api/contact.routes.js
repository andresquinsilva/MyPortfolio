const express = require('express');
const {
  getAllContacts, getContactById, createContact, updateContact, removeContact, removeAllContacts
} = require('../../controllers/contact.controller');

const router = express.Router();

router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', removeContact);
router.delete('/', removeAllContacts);

module.exports = router;

const Contact = require('../models/contact.model');

async function getAllContacts(req, res){ const items = await Contact.find(); res.json(items); }
async function getContactById(req, res){
  const item = await Contact.findById(req.params.id);
  if(!item) return res.status(404).json({message:'Contact not found'});
  res.json(item);
}
async function createContact(req, res){ const item = await Contact.create(req.body); res.status(201).json(item); }
async function updateContact(req, res){
  const item = await Contact.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});
  if(!item) return res.status(404).json({message:'Contact not found'});
  res.json(item);
}
async function removeContact(req, res){
  const item = await Contact.findByIdAndDelete(req.params.id);
  if(!item) return res.status(404).json({message:'Contact not found'});
  res.json({message:'Contact removed', id:item._id});
}
async function removeAllContacts(req, res){
  const r = await Contact.deleteMany({});
  res.json({message:'All contacts removed', deletedCount:r.deletedCount});
}

module.exports = { getAllContacts, getContactById, createContact, updateContact, removeContact, removeAllContacts };

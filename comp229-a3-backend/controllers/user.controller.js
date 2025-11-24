const User = require('../models/user.model');

async function getAllUsers(req, res){ const items = await User.find(); res.json(items); }
async function getUserById(req, res){
  const item = await User.findById(req.params.id);
  if(!item) return res.status(404).json({message:'User not found'});
  res.json(item);
}
async function createUser(req, res){ const item = await User.create(req.body); res.status(201).json(item); }
async function updateUser(req, res){
  const item = await User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});
  if(!item) return res.status(404).json({message:'User not found'});
  res.json(item);
}
async function removeUser(req, res){
  const item = await User.findByIdAndDelete(req.params.id);
  if(!item) return res.status(404).json({message:'User not found'});
  res.json({message:'User removed', id:item._id});
}
async function removeAllUsers(req, res){
  const r = await User.deleteMany({});
  res.json({message:'All users removed', deletedCount:r.deletedCount});
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, removeUser, removeAllUsers };

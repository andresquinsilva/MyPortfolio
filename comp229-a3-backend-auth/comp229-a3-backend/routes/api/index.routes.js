const express = require('express');
const contactRoutes = require('./contact.routes');
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to My Portfolio application' });
});

router.use('/contacts', contactRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;

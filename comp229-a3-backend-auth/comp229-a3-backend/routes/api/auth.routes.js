const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../../models/user.model');

const router = express.Router();

/**
 * POST /api/auth/login
 * Body: { email, password }
 * Returns: { token }
 */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email: email });

    if (!user || user.password !== password) {
      // Simple password check (no hashing) to match existing data
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const payload = { id: user._id, email: user.email, name: user.name };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET || 'devsecret',
      { expiresIn: '1d' }
    );

    res.json({ token });
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

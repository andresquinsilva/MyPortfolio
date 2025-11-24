import express from 'express';
const router = express.Router();

router.get('/', (req, res) => res.render('pages/home', { page: 'Home' }));
router.get('/about', (req, res) => res.render('pages/about', { page: 'About' }));
router.get('/projects', (req, res) => res.render('pages/projects', { page: 'Projects' }));
router.get('/services', (req, res) => res.render('pages/services', { page: 'Services' }));
router.get('/contact', (req, res) => res.render('pages/contact', { page: 'Contact' }));

router.post('/contact', (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body || {};
  console.log('Contact form:', { firstName, lastName, phone, email, message, ts: new Date().toISOString() });
  res.redirect('/');
});

export default router;

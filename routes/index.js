import express from 'express';
const router = express.Router();

// Site-wide data (title, etc.)
const site = {
  title: 'Andres Quintero — Portfolio'
};

router.get('/', (req, res) =>
  res.render('pages/home', {
    page: 'Home',
    site
  })
);

router.get('/about', (req, res) =>
  res.render('pages/about', {
    page: 'About',
    site
  })
);

router.get('/projects', (req, res) =>
  res.render('pages/projects', {
    page: 'Projects',
    site
  })
);

router.get('/services', (req, res) =>
  res.render('pages/services', {
    page: 'Services',
    site
  })
);

router.get('/contact', (req, res) =>
  res.render('pages/contact', {
    page: 'Contact',
    site
  })
);

router.post('/contact', (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body || {};
  console.log('Contact form:', {
    firstName,
    lastName,
    phone,
    email,
    message,
    ts: new Date().toISOString()
  });
  res.redirect('/');
});

export default router;

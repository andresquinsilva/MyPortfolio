# Express Portfolio — COMP229 Assignment

This project implements a **Personal Portfolio Website** using **ExpressJS** and the **EJS** templating engine.

## How to Run

```bash
npm install
npm run dev   # or: npm start
# Visit http://localhost:3000
```

## Structure (Express Generator–style)

```
bin/www                # server bootstrap
app.js                 # Express app setup (EJS, static, sessions, flash)
routes/index.js        # routes for Home, About, Projects, Services, Contact (GET/POST)
views/
  partials/            # head, header, flash, footer, error
  pages/               # home.ejs, about.ejs, projects.ejs, services.ejs, contact.ejs
public/
  css/styles.css
  js/main.js
  images/              # logo.svg, project images placeholders, me-placeholder.jpg
  files/Resume.pdf     # linkable resume PDF
```

## Rubric Coverage

- **Pages & Content (Home, About, Projects, Services, Contact)** ✔  
  Home has welcome + CTAs (About, Projects) and a mission statement.  
  About shows legal name, headshot placeholder, summary, and **Resume (PDF)** link.  
  Projects: 3+ projects with image + role + outcome.  
  Services: list of services.  
  Contact: panel with info **and** interactive form capturing First/Last name, Phone, Email, Message. POST logs data and redirects to Home with flash success.

- **Navigation & Custom Logo** ✔  
  Responsive Bootstrap navbar + **custom `AQ` logo.svg** near the nav.

- **Express + EJS with Partials and Routes** ✔  
  5 page templates + partials (`head`, `header`, `flash`, `footer`, `error`).  
  Routes exist for each page; `res.render(view, locals)` used.

- **Express Generator–style Structure** ✔  
  `bin/www`, `public`, `routes`, `views` folders used.  
  Bootstrap recommended — included via CDN.  
  Assets (JS, CSS, images, PDF) live under `public/`.

- **Internal Documentation** ✔  
  Headers in CSS/JS with **File name, Student’s Name, StudentID, Date**.  
  Section headers and contextual names; comments added.

- **Code Quality** ✔  
  Simple, clean naming.

- **Version Control + Cloud Hosting** ✔  
  Initialize git, commit in stages, push to GitHub, deploy to your cloud host.  
  Example:
  ```bash
  git init
  git add .
  git commit -m "feat: scaffold Express + EJS portfolio"
  git remote add origin <YOUR_REPO_URL>
  git push -u origin main
  ```

## Customize to Match Your Previous Portfolio *Exactly*

- Replace `views/pages/*` content with the text/images from your first assignment.  
- Drop your real headshot into `public/images/me.jpg` and update the `src` in `about.ejs`.  
- Replace `public/files/Resume.pdf` with your actual resume file.  
- Swap project images and descriptions in `routes/index.js` → `projects` array.  
- Update social links in `partials/footer.ejs`.

## Notes
- Minimal security hardening added with `helmet`.  
- Flash messages appear after submitting the Contact form and redirecting to Home.  
- For production, set `SESSION_SECRET` in an `.env` file.

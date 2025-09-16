/** =====================================================
 * File: src/pages/Home.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * Description: Home page with hero, photo, cloud/cyber goal, skills, goals, and CTAs
 * ==================================================== */

import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="container">
      {/* ===== Hero ===== */}
      <section
        className="panel card fadein"
        style={{
          padding: '1.6rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative gradient blob */}
        <div aria-hidden
          style={{
            position: 'absolute', right: -80, top: -60, width: 260, height: 260,
            background: 'radial-gradient(circle at 30% 30%, rgba(94,161,255,0.35), rgba(155,94,254,0.2) 40%, transparent 60%)',
            filter: 'blur(10px)'
          }}
        />

        {/* Profile picture */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <img
            src="./IMG_3207.jpeg"
            alt="Andres Quintero"
            className="profile-pic"
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid var(--border)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.4)'
            }}
          />
        </div>


        {/* Hero copy */}
        <div style={{ flex: 1, minWidth: '260px' }}>
          <h1 style={{ margin: 0 }}>Andres Quintero</h1>
          <div className="subtitle">Aspiring <strong>Cloud & Cybersecurity</strong> Engineer</div>
          <p style={{ marginTop: '0.6rem', color: 'var(--muted)' }}>
            I build clean, reliable web apps and I’m growing toward cloud architecture and security best practices.
            I enjoy solving real problems with practical UI, solid data models, and secure patterns.
          </p>

          {/* Quick links */}
          <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginTop: '0.9rem' }}>
            <a className="btn btn-primary" href="/Software Engineer Technology Resume  -PC.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <a className="btn" href="https://github.com/andresquinsilva" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn" href="https://www.linkedin.com/in/andres-quintero-44a21b2a9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <Link className="btn" to="/projects">View Projects</Link>
          </div>
        </div>
      </section>

      {/* ===== Cloud/Security-focused Skills ===== */}
      <section className="panel card fadein" style={{ padding: '1.2rem', marginTop: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>Skills</h2>
        <div className="skills">
          {/* Cloud & Security first */}
          <span className="chip">Cloud Fundamentals</span>
          <span className="chip">Networking Basics</span>
          {/* Web stack */}
          <span className="chip">React</span>
          <span className="chip">JavaScript</span>
          <span className="chip">HTML</span>
          <span className="chip">CSS</span>
          <span className="chip">C#</span>
          <span className="chip">SQL</span>
          <span className="chip">REST APIs</span>
          <span className="chip">Git & GitHub</span>
        </div>
      </section>

      {/* ===== Goals ===== */}
      <section className="panel card fadein" style={{ padding: '1.2rem', marginTop: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>Goals</h2>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr' }}>
          <div className="goal">
            <h3 style={{ margin: '0 0 .25rem 0' }}>Short-term (1–3 months)</h3>
            <ul style={{ margin: '0 0 0 1rem', lineHeight: '1.8' }}>
              <li>Host projects on the cloud; practice secure app configs (env vars, least privilege).</li>
              <li>Hands-on labs with IAM, VPC, security groups, and basic monitoring/logging.</li>
              <li>Strengthen web app security basics: input validation, auth, error handling.</li>
            </ul>
          </div>
          <div className="goal">
            <h3 style={{ margin: '0 0 .25rem 0' }}>Long-term (3–12 months)</h3>
            <ul style={{ margin: '0 0 0 1rem', lineHeight: '1.8' }}>
              <li>Earn an entry-level cloud cert (e.g., AWS Cloud Practitioner or Azure Fundamentals).</li>
              <li>Build a small secure cloud app (frontend + API + DB) with logging & alerts.</li>
              <li>Learn basic threat modeling and apply OWASP Top 10 mitigations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Optional: Certifications / Coursework ===== */}
      <section className="panel card fadein" style={{ padding: '1.2rem', marginTop: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>Certifications & Coursework</h2>
        <div className="skills">
          <span className="chip">AWS Cloud Practitioner (in progress)</span>
          <span className="chip">Azure Fundamentals (studying)</span>
          <span className="chip">Networking & Security Basics</span>
          <span className="chip">DB Design & SQL</span>
          <span className="chip">Software Requirements (SRS)</span>
        </div>
      </section>

      {/* ===== Contact CTA ===== */}
      <section className="panel card fadein" style={{ padding: '1.2rem', marginTop: '1rem', textAlign: 'center' }}>
        <h2 style={{ marginTop: 0 }}>Let’s Connect</h2>
        <p style={{ color: 'var(--muted)', marginTop: '.4rem' }}>
          Open to internships and project collaborations in cloud and cybersecurity.
        </p>
        <div style={{ display: 'flex', gap: '.6rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '.6rem' }}>
          <Link className="btn btn-primary" to="/contact">Contact Me</Link>
          <Link className="btn" to="/projects">See Projects</Link>
        </div>
      </section>
    </div>
  )
}

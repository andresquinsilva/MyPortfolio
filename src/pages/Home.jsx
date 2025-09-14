/** =====================================================
 * File: src/pages/Home.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * Description: Home with welcome + CTA
 * ==================================================== */
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container">
      <section className="panel" style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginTop: 0 }}>Welcome 👋</h1>
        <p style={{ color: 'var(--muted)' }}>
          I’m <strong>Andres Quintero</strong> — an aspiring full-stack developer focused on clean UI,
          solid data models, and practical problem solving. Explore my work and services below.
        </p>
        <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1rem' }}>
          <Link className="btn btn-primary" to="/about">About Me</Link>
          <Link className="btn" to="/projects">View Projects</Link>
        </div>
        <div style={{ marginTop: '1.2rem', color: 'var(--muted)' }}>
          <em>Mission:</em> Build reliable, human-friendly software that solves real problems.
        </div>
      </section>
    </div>
  )
}

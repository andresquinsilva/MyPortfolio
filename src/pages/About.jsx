/** =====================================================
 * File: src/pages/About.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * Description: About page with bio and (later) resume link
 * ==================================================== */
export default function About() {
  return (
    <div className="container">
      <section className="panel" style={{ padding: '2rem' }}>
        <h1 style={{ marginTop: 0 }}>About Me</h1>
        <p style={{ color: 'var(--muted)' }}>
          I’m <strong>Andres Quintero</strong>, a Software Engineering Technology student at Centennial College
          with a focus on web development (React/JavaScript), databases (SQL), and object-oriented programming
          (Java/C#). I enjoy turning complex requirements into simple, reliable interfaces and back-end logic.
          Outside school, I stay active through soccer and fitness. I’m bilingual (English/Spanish) and
          comfortable collaborating in Agile teams.
        </p>

        {/* Add your resume later to /public/resume.pdf */}
        <div style={{ marginTop: '1rem' }}>
          <a className="link" href="./Software Engineer Technology Resume  -PC.pdf" target="_blank" rel="noopener noreferrer">
            View my resume 
          </a>
        </div>
      </section>
    </div>
  )
}

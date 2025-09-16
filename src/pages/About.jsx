/** =====================================================
 * File: src/pages/About.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * ==================================================== */

export default function About() {
  return (
    <div className="container">
      <h1>About Me</h1>

      <section className="panel" style={{ padding: '1.2rem' }}>
        <p>
          I’m <strong>Andres Quintero</strong>, a Software Engineering Technology student at
          Centennial College with a focus on web development (React/JavaScript), databases (SQL),
          and object-oriented programming (Java/C#). I enjoy turning complex requirements into
          simple, reliable interfaces and back-end logic. Outside school, I stay active through
          soccer and fitness. I’m bilingual (English/Spanish) and comfortable collaborating in
          Agile teams.
        </p>

        <p style={{ marginTop: '1rem' }}>
          <a className="btn btn-primary"
            href="/Software Engineer Technology Resume  -PC.pdf"
            target="_blank"
            rel="noopener noreferrer">
            View my resume
          </a>
        </p>
      </section>

      {/* Skills */}
      <section className="panel" style={{ padding: '1.2rem', marginTop: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>Skills</h2>
        <div className="skills">
          <span className="chip">React</span>
          <span className="chip">JavaScript</span>
          <span className="chip">HTML</span>
          <span className="chip">CSS</span>
          <span className="chip">C#</span>
          <span className="chip">SQL</span>
          <span className="chip">Git & GitHub</span>
          <span className="chip">REST APIs</span>
        </div>
      </section>
    </div>
  )
}

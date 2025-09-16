/** =====================================================
 * File: src/pages/Home.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * ==================================================== */

export default function Home() {
  return (
    <div className="container">
      <section
        className="panel"
        style={{
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap'
        }}
      >

        {/* Profile picture */}
        <img
          src="./IMG_3207.jpeg"
          alt="Andres Quintero"
          className="profile-pic"
        />

        {/* Welcome text */}
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h1>Welcome 👋</h1>
          <p>
            I’m <strong>Andres Quintero</strong> — an aspiring full-stack developer focused on
            clean UI, solid data models, and practical problem solving. Explore my work and services below.
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="/about">About Me</a>
            <a className="btn" href="/projects">View Projects</a>
          </div>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--muted)' }}>
            Mission: Build reliable, human-friendly software that solves real problems.
          </p>
        </div>

      </section>
    </div>
  )
}

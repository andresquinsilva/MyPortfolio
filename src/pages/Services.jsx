/** =====================================================
 * File: src/pages/Services.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * ==================================================== */
const services = [
  { title: 'Web Development', desc: 'Responsive websites using React, HTML, CSS, and JavaScript.' },
  { title: 'Frontend Engineering', desc: 'Reusable components, routing, and state management.' },
  { title: 'SQL Database Design', desc: 'Schema design, querying, and data modeling for apps.' },
  { title: 'API Integration', desc: 'RESTful endpoints, client-side fetch, and error handling.' },
  { title: 'QA & Testing Support', desc: 'Test planning, basic automation, and debugging.' },
]

export default function Services() {
  return (
    <div className="container">
      <h1>Services</h1>
      <div className="grid grid-3">
        {services.map((s, i) => (
          <section key={i} className="panel" style={{ padding: '1.2rem' }}>
            <h2 style={{ marginTop: 0 }}>{s.title}</h2>
            <p style={{ margin: 0, color: 'var(--muted)' }}>{s.desc}</p>
          </section>
        ))}
      </div>
    </div>
  )
}

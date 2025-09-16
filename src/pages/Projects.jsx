/** =====================================================
 * File: src/pages/Projects.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * ==================================================== */

import React from 'react'


const STUDY_BUDDY_PRESENTATION = encodeURI('/Study buddy presentation - Presentation.pdf')
const ASSIGNMENT_3_SQL = encodeURI('/Assignment 3.sql')

const projects = [
  {
    title: 'Study Buddy – Software Requirements (SRS)',
    role: 'Team member | Agile | Documentation',
    desc: 'Co-authored an SRS with requirements, UML diagrams, and QA checks.',
  },
  {
    title: 'Responsive To-Do List – C#/HTML/JS',
    role: 'Developer | UI/UX',
    desc: 'Mobile-first to-do style app with add/remove/list and simple persistence.',
    link: '/AndresQuintero_301466379_Assignment5/index.html',
  },
  {
    title: 'Fake Store – Products Catalog',
    role: 'Developer | Frontend',
    desc: 'Product grid with images, price formatting, and basic error handling.',
    link: '/AndresQuintero_301466379_Assignment6/index.html'
  }
]

export default function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>

      <div className="grid grid-3">
        {projects.map((p, i) => (
          <article key={i} className="panel card fadein" style={{ padding: '1.2rem' }}>
            {p.img && <img src={p.img} alt={`${p.title} preview`} />}
            <h2 style={{ marginTop: 0, fontSize: '1.25rem' }}>{p.title}</h2>
            <div style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>{p.role}</div>
            <p style={{ margin: 0 }}>{p.desc}</p>
            {p.link && (
              <div style={{ marginTop: '0.8rem' }}>
                <a className="btn btn-primary" href={p.link} target="_blank" rel="noopener noreferrer">
                  Open Project
                </a>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Downloads / Artifacts */}
      <section className="panel" style={{ padding: '1.2rem', marginTop: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>Project Artifacts & Downloads</h2>
        <ul style={{ lineHeight: '1.9', paddingLeft: '1rem' }}>
          <li>
            <a className="link" href={STUDY_BUDDY_PRESENTATION} target="_blank" rel="noopener noreferrer">
              Study Buddy Presentation (slides)
            </a>
          </li>
          <li>
            <a className="link" href={ASSIGNMENT_3_SQL} download>
              Assignment 3 – SQL file (download)
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

/** =====================================================
 * File: src/pages/Projects.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * Description: Highlight projects with links to static builds in /public
 * ==================================================== */
const projects = [
  {
    title: 'Study Buddy – Software Requirements (SRS)',
    role: 'Team member | Agile | Documentation',
    desc: 'Co-authored an SRS for a learning app with AI assistant, mock exams, and progress analytics. Contributed UML, requirements, and quality checks.',
    link: './Study buddy presentation - Presentation.pdf'
  },
  {
    title: 'Retail Database – SQL',
    role: 'Team lead | Data modeling | SQL',
    desc: 'Designed an e-commerce style relational schema, built retrieval/update/testing queries, and coordinated milestones.',
    link: './Assignment 3.sql'
  },
  {
    title: 'Fake Store – Products Catalog',
    role: 'Developer | UI/UX',
    desc: 'Mobile-first to-do style app (library manager demo) with add/remove/list and simple persistence.',
    link: '/AndresQuintero_301466379_Assignment6/index.html'
  },
  {
    title: 'Responsive To-Do List – C#/HTML/JS',
    role: 'Developer | Frontend',
    desc: 'Product grid with images, price formatting, and error handling (fetches sample data).',
    link: '/AndresQuintero_301466379_Assignment5/index.html'
  }
]

export default function Projects(){
  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="grid grid-3">
        {projects.map((p, i) => (
          <article key={i} className="panel" style={{padding:'1.2rem'}}>
            <h2 style={{marginTop:0, fontSize:'1.25rem'}}>{p.title}</h2>
            <div style={{color:'var(--muted)', marginBottom:'0.5rem'}}>{p.role}</div>
            <p style={{margin:0}}>{p.desc}</p>
            {p.link && (
              <div style={{marginTop:'0.8rem'}}>
                <a className="btn btn-primary" href={p.link} target="_blank" rel="noopener noreferrer">
                  Open Project
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

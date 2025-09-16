/** =====================================================
 * File: src/components/NavBar.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * ==================================================== */
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const linkClass = ({ isActive }) => `${isActive ? 'active' : ''}`

export default function NavBar() {
  const [open, setOpen] = useState(false)

  // close menu after clicking a link (mobile)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <nav className="nav container" aria-label="Primary">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Logo size={34} />
          <strong>Andres Quintero</strong>
        </div>

        {/* Desktop links */}
        <div className="links">
          <NavLink to="/" className={linkClass} onClick={close}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={close}>About</NavLink>
          <NavLink to="/projects" className={linkClass} onClick={close}>Projects</NavLink>
          <NavLink to="/services" className={linkClass} onClick={close}>Services</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={close}>Contact</NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile dropdown panel */}
      <div id="mobile-menu" className={`mobile-panel ${open ? 'open' : ''}`}>
        <NavLink to="/" onClick={close}>Home</NavLink>
        <NavLink to="/about" onClick={close}>About</NavLink>
        <NavLink to="/projects" onClick={close}>Projects</NavLink>
        <NavLink to="/services" onClick={close}>Services</NavLink>
        <NavLink to="/contact" onClick={close}>Contact</NavLink>
      </div>
    </header>
  )
}

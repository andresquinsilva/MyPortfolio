/** =====================================================
 * File: src/components/NavBar.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * Description: Top navigation with logo
 * ==================================================== */
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const linkClass = ({ isActive }) => `${isActive ? 'active' : ''}`

export default function NavBar() {
  return (
    <header className="header">
      <nav className="nav container" aria-label="Primary">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Logo size={34} />
          <strong>Andres Quintero</strong>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.25rem' }}>
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </nav>
    </header>
  )
}

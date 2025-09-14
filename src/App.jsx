/** =====================================================
 * File: src/App.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * Description: Layout, routes, and footer
 * ==================================================== */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div>
      <NavBar />
      <main style={{ paddingTop: '0.5rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Andres Quintero</footer>
    </div>
  )
}

/** =====================================================
 * File: src/App.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * ==================================================== */

import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <>
      {/* Top navigation */}
      <NavBar />

      {/* Page content */}
      <main style={{ padding: '1rem 0' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        © 2025 Andres Quintero
      </footer>
    </>
  )
}

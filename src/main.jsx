/** =====================================================
 * File: src/main.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * Description: App bootstrap and Router provider
 * ==================================================== */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

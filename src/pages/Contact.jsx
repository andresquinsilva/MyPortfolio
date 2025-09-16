/** =====================================================
 * File: src/pages/Contact.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * ==================================================== */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '', message: ''
  })

  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    const messages = JSON.parse(localStorage.getItem('messages') || '[]')
    messages.push({ ...form, ts: new Date().toISOString() })
    localStorage.setItem('messages', JSON.stringify(messages))
    navigate('/') // redirect to Home
  }

  return (
    <div className="container">
      <section className="panel" style={{ padding: '2rem' }}>
        <h1 style={{ marginTop: 0 }}>Contact</h1>
        <p style={{ color: 'var(--muted)' }}>Use the form or the info below.</p>

        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr', marginTop: '1rem' }}>
          <div className="panel" style={{ padding: '1rem' }}>
            <div className="label">Email</div>
            <a className="link" href="mailto:Quintero.silva14@gmail.com">Quintero.silva14@gmail.com</a>
            <div className="label" style={{ marginTop: '0.8rem' }}>Phone</div>
            <a className="link" href="tel:+16476879722">647-687-9722</a>
            <div className="label" style={{ marginTop: '0.8rem' }}>Location</div>
            <div>Vaughan, Ontario</div>
          </div>

          <form className="panel" onSubmit={onSubmit} style={{ padding: '1rem' }}>
            <div className="label">First Name</div>
            <input className="input" name="firstName" value={form.firstName} onChange={onChange} required />
            <div className="label" style={{ marginTop: '0.8rem' }}>Last Name</div>
            <input className="input" name="lastName" value={form.lastName} onChange={onChange} required />
            <div className="label" style={{ marginTop: '0.8rem' }}>Contact Number</div>
            <input className="input" name="phone" value={form.phone} onChange={onChange} />
            <div className="label" style={{ marginTop: '0.8rem' }}>Email Address</div>
            <input type="email" className="input" name="email" value={form.email} onChange={onChange} required />
            <div className="label" style={{ marginTop: '0.8rem' }}>Message</div>
            <textarea className="textarea" name="message" rows="4" value={form.message} onChange={onChange} />
            <button className="btn btn-primary" type="submit" style={{ marginTop: '1rem' }}>Send</button>
          </form>
        </div>
      </section>
    </div>
  )
}

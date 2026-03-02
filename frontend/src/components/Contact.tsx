import React, { useState } from 'react'

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)

    const form = e.currentTarget

    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('https://prop-insure-hub.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSubmitted(true)
        form.reset()
        alert('Message sent successfully')
      } else {
        alert('Failed to send message')
      }
    } catch (error) {
      console.error(error)
      alert('Error sending message')
    } finally{
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="section-heading">
        <h2>Contact Us</h2>
        <p>Share your details and we will reach out with the best options for you.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Get in Touch</h3>
          <p>
            <strong>Agent:</strong> Rajan Singh Chauhan
          </p>
          <p>
            <strong>Phone:</strong> +91-9711591961, +91-7982378582
          </p>
          <p>
            <strong>Email:</strong> futuresecurewithinsurance001@gmail.com
          </p>
          <p>
            <strong>Address:</strong> Sector 73, Noida
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your full name" required />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your phone number"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us what kind of coverage or property help you need"
              required
            />
          </div>
          <button type="submit" className="primary-btn" disabled={loading}>
            {loading ? (
              <span className="spinner-btn">
                <span className="spinner"></span> Sending...
              </span>
            ) : (
              'Submit'
            )}
          </button>
          {submitted && <p className="form-success">Thank you! We will contact you shortly.</p>}
        </form>
      </div>
    </section>
  )
}



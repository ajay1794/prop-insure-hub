import React from 'react'

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) {
      const yOffset = -80
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <h1>Comprehensive Insurance & Property Solutions</h1>
        <p>
          Prop-Insure Hub, led by Rajan Singh Chauhan, offers tailored insurance and property services
          in Sector 73, Noida. Safeguard your life, health, vehicles, and property with trusted partners.
        </p>
        <div className="hero-highlights">
          <div className="hero-card">
            <h3>Multi-line Coverage</h3>
            <p>Life, vehicle, medical, and property insurance under one roof.</p>
          </div>
          <div className="hero-card">
            <h3>Property Expertise</h3>
            <p>Property sale, purchase, renting, and assistance for home loans.</p>
          </div>
        </div>
        <button className="primary-btn" style={{ marginTop: '1.5rem' }} onClick={scrollToContact}>
          Contact Us
        </button>
      </div>
    </section>
  )
}



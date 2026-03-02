import React, { useState } from 'react'
import logo from '/logo.png'

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -80
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand" onClick={() => handleNavClick('home')}>
          <img src={logo} alt="Prop-Insure Hub logo" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-name">Prop-Insure Hub</span>
            <span className="brand-tagline">Secure Your Future, Protect Your Assets</span>
          </div>
        </div>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <button className="nav-link" onClick={() => handleNavClick('home')}>
            Home
          </button>
          <button className="nav-link" onClick={() => handleNavClick('about')}>
            About
          </button>
          <button className="nav-link" onClick={() => handleNavClick('partners')}>
            Our Partners
          </button>
          <button className="nav-link" onClick={() => handleNavClick('contact')}>
            Contact Us
          </button>
        </nav>
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}



import React from 'react'

const partners = [
  'LIC',
  'Bajaj Allianz',
  'ICICI Lombard',
  'Aditya Birla Health',
  'Star Health Insurance',
]

export const Partners: React.FC = () => {
  return (
    <section id="partners" className="section partners">
      <div className="section-heading">
        <h2>Our Insurance Partners</h2>
        <p>We work with leading insurers to offer you robust and reliable coverage.</p>
      </div>
      <div className="partners-grid">
        {partners.map((name) => (
          <div key={name} className="partner-card">
            <div className="partner-logo-placeholder">{name[0]}</div>
            <span className="partner-name">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}



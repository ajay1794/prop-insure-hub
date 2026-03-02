import React from 'react'

export const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <div className="section-heading">
        <h2>About Prop-Insure Hub</h2>
        <p>Personalised insurance and property advisory in Noida.</p>
      </div>
      <div className="about-grid">
        <div>
          <h3>Meet Your Advisor</h3>
          <p>
            Prop-Insure Hub is led by <strong>Rajan Singh Chauhan</strong>, a dedicated insurance and
            property consultant based in <strong>Sector 73, Noida</strong>. With a focus on clarity and
            trust, Rajan helps families and professionals understand their risks and choose the right
            coverage.
          </p>
          <p>
            From life and medical insurance to vehicle and property policies, you get end-to-end support
            – from comparing plans to documentation and claim assistance.
          </p>
        </div>
        <div>
          <h3>What We Offer</h3>
          <ul className="icon-list">
            <li>Life Insurance</li>
            <li>Vehicle Insurance</li>
            <li>Medical Insurance</li>
            <li>Property Insurance</li>
            <li>Property Sale / Purchase</li>
            <li>Property Renting</li>
            <li>Support for Home Loans</li>
          </ul>
        </div>
      </div>
    </section>
  )
}



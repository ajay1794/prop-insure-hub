import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Partners } from './components/Partners'
import { Contact } from './components/Contact'

export const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Partners />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Prop-Insure Hub. All rights reserved.</p>
      </footer>
    </div>
  )
}



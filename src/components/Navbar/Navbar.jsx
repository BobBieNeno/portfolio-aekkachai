import React, { useState } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'About',   href: '#about'   },
  { label: 'Skills',  href: '#skills'  },
  { label: 'Work',    href: '#projects'},
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container">

        {/* Logo */}
        <a className="navbar__logo" href="#hero" onClick={() => handleNavClick('#hero')}>
          <span className="logo-ui">CS</span>
          <span className="logo-senjor">Portfo<span className="logo-dot">.</span></span>
        </a>

        {/* Desktop nav links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <button
                className="navbar__link"
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          className="navbar__resume"
          href="/resume.pdf"
          download="Resume_UISenjor.pdf"
          aria-label="Download Resume"
        >
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(link => (
          <button
            key={link.label}
            className="mobile-link"
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </button>
        ))}
        <a className="mobile-resume" href="/resume.pdf" download>
          Download Resume
        </a>
      </div>
    </header>
  )
}

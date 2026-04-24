import React, { useEffect, useRef } from 'react'
import './Hero.css'

const SHAPES = [
  // Top row
  { id: 'tl-sq',  type: 'rounded-rect', pos: 'top-left',   w: 130, h: 130, rx: 28 },
  { id: 'tl-sq2', type: 'rounded-rect', pos: 'top-left-2', w: 140, h: 140, rx: 28 },
  { id: 'tr-sq',  type: 'rounded-rect', pos: 'top-right',  w: 130, h: 130, rx: 28 },
  { id: 'tr-sq2', type: 'rounded-rect', pos: 'top-right-2',w: 140, h: 140, rx: 28 },

  // Left column
  { id: 'ml-sq',  type: 'rounded-rect', pos: 'mid-left',   w: 120, h: 120, rx: 28 },
  { id: 'ml-sq2', type: 'rounded-rect', pos: 'mid-left-2', w: 130, h: 130, rx: 60 },
  { id: 'bl-circ',type: 'circle',       pos: 'bot-left',   size: 110 },
  { id: 'bl-sq',  type: 'rounded-rect', pos: 'bot-left-2', w: 130, h: 130, rx: 28 },

  // Right column
  { id: 'mr-circ',type: 'circle',       pos: 'mid-right',  size: 120 },
  { id: 'mr-sq',  type: 'rounded-rect', pos: 'mid-right-2',w: 130, h: 130, rx: 28 },
  { id: 'br-sq',  type: 'rounded-rect', pos: 'bot-right',  w: 120, h: 120, rx: 28 },
  { id: 'br-sq2', type: 'rounded-rect', pos: 'bot-right-2',w: 130, h: 130, rx: 40 },
]

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const shapes = heroRef.current?.querySelectorAll('.shape')
    shapes?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.08}s`
    })
  }, [])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero" ref={heroRef}>

      {/* Geometric border shapes */}
      <div className="shapes-grid">
        {/* Top Left cluster */}
        <div className="shape shape--tl-1">
          <div className="shape__inner shape__inner--rounded" />
        </div>
        <div className="shape shape--tl-2">
          <div className="shape__inner shape__inner--rounded" />
        </div>

        {/* Top Right cluster */}
        <div className="shape shape--tr-1">
          <div className="shape__inner shape__inner--rounded" />
        </div>
        <div className="shape shape--tr-2">
          <div className="shape__inner shape__inner--rounded" />
        </div>

        {/* Left Mid cluster */}
        <div className="shape shape--ml-1">
          <div className="shape__inner shape__inner--rounded" />
        </div>
        <div className="shape shape--ml-2">
          <div className="shape__inner shape__inner--pill" />
        </div>

        {/* Left Bottom cluster */}
        <div className="shape shape--bl-1">
          <div className="shape__inner shape__inner--circle" />
        </div>
        <div className="shape shape--bl-2">
          <div className="shape__inner shape__inner--rounded" />
        </div>

        {/* Right Mid cluster */}
        <div className="shape shape--mr-1">
          <div className="shape__inner shape__inner--circle" />
        </div>
        <div className="shape shape--mr-2">
          <div className="shape__inner shape__inner--rounded" />
        </div>

        {/* Right Bottom cluster */}
        <div className="shape shape--br-1">
          <div className="shape__inner shape__inner--rounded" />
        </div>
        <div className="shape shape--br-2">
          <div className="shape__inner shape__inner--pill" />
        </div>

        {/* Bottom Row */}
        <div className="shape shape--bot-1">
          <div className="shape__inner shape__inner--rounded" />
        </div>
        <div className="shape shape--bot-2">
          <div className="shape__inner shape__inner--pill" />
        </div>
        <div className="shape shape--bot-3">
          <div className="shape__inner shape__inner--rounded" />
        </div>
      </div>

      {/* Hero content */}
      <div className="hero__content">
        <div className="hero__tag">Computer Science Portfolio</div>
        <h1 className="hero__headline">
          Portfolio&nbsp;&amp;&nbsp;Resume<br />
          <em>Digital Systems</em>
        </h1>
        <p className="hero__sub">
         Bachelor's degree in Computer Science · Full-Stack Developer · UI/UX Enthusiast<br />
          Crafting performant, elegant software from idea to deployment.
        </p>
        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </button>
          <button
            className="hero__btn hero__btn--secondary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="hero__scroll" onClick={scrollToAbout} aria-label="Scroll down">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 3v14M4 11l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  )
}

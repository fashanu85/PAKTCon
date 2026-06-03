import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import AboutSection from '../components/AboutSection'
import CertificationsSection from '../components/CertificationsSection'
import ServicesSection from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'

function Home() {
  useScrollReveal()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ['Is Sensitive', 'Is Vital', 'Matters']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-video-container">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">Cybersecurity Excellence Since 2017</div>
          <h1 className="hero-title">
            Protecting What<br/>
            <em key={currentWordIndex} className="rotate-text">
              {words[currentWordIndex]}
            </em>
          </h1>
          <p className="hero-sub">
            PAKT Consulting Limited is a leading cybersecurity firm based in the United Kingdom — delivering enterprise-grade security solutions to businesses of all sizes.
          </p>
          <div className="hero-cta" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/about" className="btn-primary">Get Started</Link>
            <Link to="/services" className="btn-outline">Our Services</Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="reveal">
            <div className="stat-num">7+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div className="reveal reveal-delay-1">
            <div className="stat-num">200+</div>
            <div className="stat-label">Clients Secured</div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="stat-num">50+</div>
            <div className="stat-label">Certified Experts</div>
          </div>
          <div className="reveal reveal-delay-3">
            <div className="stat-num">99%</div>
            <div className="stat-label">Client Retention</div>
          </div>
        </div>
      </div>

      <AboutSection />
      <CertificationsSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}

export default Home

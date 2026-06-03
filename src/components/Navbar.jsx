import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../images/logo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav')
      if (nav) {
        nav.style.background = window.scrollY > 60
          ? 'rgba(2,11,24,0.98)'
          : 'rgba(2,11,24,0.92)'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    closeMenu()
  }, [location])

  return (
    <>
      <nav className="pakt-nav">
        <div className="pakt-nav-inner">
          <Link to="/" className="pakt-nav-logo">
            <img src={Logo} alt="PAKT" />
          </Link>
          <ul className="pakt-nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  )
}

export default Navbar

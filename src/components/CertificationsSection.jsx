import { Link } from 'react-router-dom'

function CertificationsSection({ isFullPage = false }) {
  return (
    <section 
      className="certs-section" 
      id="certifications" 
      style={isFullPage ? { paddingTop: '120px' } : {}}
    >
      <div className="container">
        <div style={{ maxWidth: '600px' }} className="reveal">
          <p className="section-label">Our Credentials</p>
          <h2 className="section-title">Our Certifications</h2>
          <p className="section-body">
            At PAKT Consulting, we take pride in our commitment to excellence and our dedication to providing top-notch cybersecurity services to our clients.
          </p>
          {!isFullPage && <Link to="/certifications" className="btn-outline">Read More</Link>}
        </div>

        <div className="cert-grid">
          <div className="cert-card reveal reveal-delay-1">
            <div className="cert-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <h3>CISSP</h3>
            <p>Certified Information Systems Security Professional</p>
          </div>
          <div className="cert-card reveal reveal-delay-2">
            <div className="cert-icon">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>CEH</h3>
            <p>Certified Ethical Hacker</p>
          </div>
          <div className="cert-card reveal reveal-delay-3">
            <div className="cert-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3>CISM</h3>
            <p>Certified Information Security Manager</p>
          </div>
          <div className="cert-card reveal reveal-delay-4">
            <div className="cert-icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            </div>
            <h3>ISO 27001</h3>
            <p>Information Security Management System</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection

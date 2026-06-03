import { Link } from 'react-router-dom'

function ServicesSection({ isFullPage = false }) {
  return (
    <section 
      className="services-section" 
      id="services" 
      style={isFullPage ? { paddingTop: '120px' } : {}}
    >
      <div className="container">
        <div className="two-col reverse">
          <div className="col-visual reveal">
            <div className="img-frame">
              <div className="img-placeholder-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-text reveal reveal-delay-1">
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Our Services</h2>
            <p className="section-body">
              PAKT Consulting Limited network security services include a wide range of solutions to help protect your organisation&apos;s networks and infrastructure from cyber threats.
            </p>
            {!isFullPage && <Link to="/services" className="btn-primary">Read More</Link>}
          </div>
        </div>

        <div className="services-grid" style={{ marginTop: '5rem' }}>
          <div className="service-card reveal reveal-delay-1">
            <div className="service-num">01</div>
            <h3>Network Security</h3>
            <p>Comprehensive protection for your network infrastructure — firewalls, intrusion detection, and continuous monitoring.</p>
          </div>
          <div className="service-card reveal reveal-delay-2">
            <div className="service-num">02</div>
            <h3>Penetration Testing</h3>
            <p>Ethical hacking exercises that identify and expose vulnerabilities in your systems before adversaries do.</p>
          </div>
          <div className="service-card reveal reveal-delay-3">
            <div className="service-num">03</div>
            <h3>Security Auditing</h3>
            <p>In-depth audits to evaluate your security posture against industry standards and regulatory frameworks.</p>
          </div>
          <div className="service-card reveal reveal-delay-4">
            <div className="service-num">04</div>
            <h3>Incident Response</h3>
            <p>Rapid response teams ready to contain, investigate, and recover from security incidents 24/7.</p>
          </div>
          <div className="service-card reveal reveal-delay-1">
            <div className="service-num">05</div>
            <h3>Security Training</h3>
            <p>Tailored awareness programs equipping your staff with the knowledge to recognise and mitigate cyber threats.</p>
          </div>
          <div className="service-card reveal reveal-delay-2">
            <div className="service-num">06</div>
            <h3>Cloud Security</h3>
            <p>End-to-end cloud security strategy, architecture review, and compliance management for modern cloud environments.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

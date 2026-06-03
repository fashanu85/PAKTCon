import useScrollReveal from '../hooks/useScrollReveal'

const inputStyle = {
  background: 'var(--navy-900)',
  border: '1px solid var(--border)',
  color: 'var(--white)',
  padding: '0.9rem 1.25rem',
  fontFamily: 'var(--font-body)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  width: '100%',
}

function handleFocus(e) {
  e.target.style.borderColor = 'rgba(200,168,75,0.5)'
}

function handleBlur(e) {
  e.target.style.borderColor = 'rgba(58,110,200,0.25)'
}

function Contact() {
  useScrollReveal()

  return (
    <section
      style={{
        background: 'var(--navy-800)',
        borderTop: '1px solid var(--border)',
        padding: '120px 2rem 6rem',
      }}
      id="contact"
    >
      <div className="container">
        <div className="two-col two-col-top">
          <div className="col-text reveal">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Contact Us</h2>
            <p className="section-body">
              Thank you for your interest in PAKT Consulting. We are dedicated to providing top-notch cybersecurity solutions to businesses and organizations, helping them protect their valuable assets and sensitive information from evolving cyber threats.
            </p>
            <p className="section-body">
              If you have any questions, require further information, or would like to discuss how we can assist you in strengthening your cybersecurity posture, please feel free to reach out to us. We value your feedback, inquiries, and concerns, and we are here to assist you in any way we can.
            </p>
            <p className="section-body">
              <strong>Contact Information:</strong>
            </p>
            <p className="section-body">
              <strong>General Inquiries:</strong><br />
              For general inquiries or information about our services, please email us at{' '}
              <a href="mailto:info@paktconsulting.co.uk" style={{ color: 'var(--gold)' }}>
                info@paktconsulting.co.uk
              </a>
            </p>
            <p className="section-body">
              <strong>Sales Inquiries:</strong><br />
              If you are interested in our cybersecurity solutions and would like to discuss your specific requirements or request a proposal, please email our sales team at{' '}
              <a href="mailto:sales@paktconsulting.co.uk" style={{ color: 'var(--gold)' }}>
                sales@paktconsulting.co.uk
              </a>
            </p>
            <p className="section-body">
              We look forward to hearing from you and assisting you with your cybersecurity needs. At PAKT Consulting, your security is our priority.
            </p>
          </div>
          <div className="col-visual reveal reveal-delay-2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                placeholder="Full Name"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <input
                type="email"
                placeholder="Email Address"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <button className="btn-primary" style={{ alignSelf: 'flex-start', padding: '1rem 2.8rem' }}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

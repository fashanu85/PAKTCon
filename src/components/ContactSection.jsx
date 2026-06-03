function ContactSection({ isFullPage = false }) {
  return (
    <section 
      style={{ 
        background: 'var(--navy-800)', 
        borderTop: '1px solid var(--border)', 
        padding: isFullPage ? '120px 2rem 6rem' : '6rem 2rem' 
      }} 
      id="contact"
    >
      <div className="container">
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }} className="reveal">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-body" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Ready to secure your organisation? Reach out and our team of experts will get back to you within 24 hours.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', marginTop: '2.5rem' }}>
            <input
              type="text"
              placeholder="Full Name"
              style={{ background: 'var(--navy-900)', border: '1px solid var(--border)', color: 'var(--white)', padding: '0.9rem 1.25rem', fontFamily: 'var(--font-body)', fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.2s' }}
              onFocus={(e) => e.target.style.borderColor='rgba(200,168,75,0.5)'}
              onBlur={(e) => e.target.style.borderColor='rgba(58,110,200,0.25)'}
            />
            <input
              type="email"
              placeholder="Email Address"
              style={{ background: 'var(--navy-900)', border: '1px solid var(--border)', color: 'var(--white)', padding: '0.9rem 1.25rem', fontFamily: 'var(--font-body)', fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.2s' }}
              onFocus={(e) => e.target.style.borderColor='rgba(200,168,75,0.5)'}
              onBlur={(e) => e.target.style.borderColor='rgba(58,110,200,0.25)'}
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              style={{ background: 'var(--navy-900)', border: '1px solid var(--border)', color: 'var(--white)', padding: '0.9rem 1.25rem', fontFamily: 'var(--font-body)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s' }}
              onFocus={(e) => e.target.style.borderColor='rgba(200,168,75,0.5)'}
              onBlur={(e) => e.target.style.borderColor='rgba(58,110,200,0.25)'}
            ></textarea>
            <button className="btn-primary" style={{ alignSelf: 'flex-start', padding: '1rem 2.8rem' }}>Send Message</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

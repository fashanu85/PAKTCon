import useScrollReveal from '../hooks/useScrollReveal'

function About() {
  useScrollReveal()

  return (
    <section className="about-section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="two-col two-col-top">
          <div className="col-text reveal">
          <p className="section-label">Who We Are</p>
          <h2 className="section-title">About Us</h2>
          <p className="section-body">
            PAKT Consulting Limited is a leading cyber security firm based in the United Kingdom. Founded on April 11, 2017, we have been providing comprehensive security solutions to businesses of all sizes.
          </p>
          <p className="section-body">
            Our team of experts is dedicated to helping our clients protect their valuable data and assets from cyber threats. We understand the importance of staying ahead of the latest security trends and use cutting-edge technology to provide our clients with the best possible protection.
          </p>
          <p className="section-body">
            Our services include penetration testing, vulnerability assessments, incident response, compliance consulting and more. With our help, businesses can rest easy knowing that their sensitive information is safe and secure.
          </p>
          <p className="section-body">
            Our goal is to help our clients achieve a higher level of security and peace of mind. With our expertise and cutting-edge technology, we are committed to keeping our clients safe in today's ever-changing cyber landscape.
          </p>
          <p className="section-body">
            Contact us today to learn how we can help protect your company from cyber attacks.
          </p>
          </div>
          <div className="col-visual reveal reveal-delay-2">
            <div className="img-frame">
              <div className="img-placeholder-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l6 2.67V11c0 3.83-2.6 7.39-6 8.55-3.4-1.16-6-4.72-6-8.55V7.67L12 5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

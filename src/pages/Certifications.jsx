import useScrollReveal from '../hooks/useScrollReveal'

function Certifications() {
  useScrollReveal()

  return (
    <section className="certs-section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="two-col two-col-top">
          <div className="col-text reveal">
            <p className="section-label">Our Credentials</p>
            <h2 className="section-title">Our Certifications</h2>
            <p className="section-body">
              At PAKT Consulting, we take pride in our commitment to excellence and our dedication to providing top-notch cybersecurity services to our clients. Our team of highly skilled professionals is equipped with the knowledge and expertise necessary to deliver comprehensive solutions that safeguard businesses against evolving cyber threats. We understand the importance of certifications in demonstrating our competence and proficiency in the field of cybersecurity. Here are some of the certifications held by our team members:
            </p>
            <p className="section-body">
              <strong>Certified Information Systems Security Professional (CISSP):</strong> Our experts possess the CISSP certification, which validates their expertise in designing, implementing, and managing secure information systems. This globally recognized certification demonstrates our commitment to upholding the highest standards of cybersecurity practices.
            </p>
            <p className="section-body">
              <strong>Certified Ethical Hacker (CEH):</strong> Our team includes Certified Ethical Hackers who have undergone rigorous training to identify vulnerabilities in computer systems and networks. With this certification, we possess the skills to assess the security posture of our clients' infrastructures and provide effective recommendations for improvement.
            </p>
            <p className="section-body">
              <strong>Certified Information Security Manager (CISM):</strong> Our professionals have achieved the CISM certification, which demonstrates their proficiency in managing and overseeing information security programs within organizations. This certification enables us to develop robust security strategies tailored to our clients' specific needs.
            </p>
            <p className="section-body">
              <strong>Certified Cloud Security Professional (CCSP):</strong> As organizations increasingly embrace cloud computing, our team members with CCSP certification possess the knowledge and expertise to ensure the security of cloud environments. We understand the unique challenges associated with cloud security and offer tailored solutions to protect our clients' data and applications.
            </p>
            <p className="section-body">
              <strong>CompTIA Security+:</strong> Our team includes professionals with the CompTIA Security+ certification, a widely recognized credential that validates their fundamental knowledge of network security concepts and practices. This certification ensures that our team members are well-versed in the essential principles of cybersecurity.
            </p>
            <p className="section-body">
              <strong>Certified Information Privacy Professional (CIPP):</strong> We have experts who hold the CIPP certification, demonstrating their understanding of global privacy laws and regulations. This certification allows us to provide guidance on privacy compliance and develop strategies to protect sensitive data.
            </p>
            <p className="section-body">
              These certifications exemplify our commitment to continuous learning and staying up-to-date with the latest advancements in the cybersecurity field. By maintaining these credentials, we ensure that our clients receive the highest quality of service and benefit from the most current cybersecurity practices.
            </p>
            <p className="section-body">
              Please note that this list represents a sample of the certifications held by our team members at PAKT Consulting. We are constantly pursuing additional certifications and training to expand our knowledge and expertise in the ever-evolving landscape of cybersecurity.
            </p>
          </div>
          <div className="col-visual reveal reveal-delay-2">
            <div className="img-frame">
              <div className="img-placeholder-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications

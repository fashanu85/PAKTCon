import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom';
const services = [{
  id: 'cybersecurity',
  title: 'Cybersecurity consultancy',
  short: 'Understand your risks. Make security part of the way you work.',
  text: 'Practical support with application security, cloud and security architecture, and governance. Turn technical concerns into clear priorities.',
  items: ['Security and architecture reviews', 'Application security programmes', 'Risk prioritisation and practical guidance']
}, {
  id: 'development',
  title: 'Application development',
  short: 'Turn a business need into a useful digital product.',
  text: 'Explore web and mobile applications, internal tools and integrations, with security considered from the outset. Start with a focused scope and real user needs.',
  items: ['Web and mobile application planning', 'Business tools and integrations', 'Prototyping and iterative development']
}, {
  id: 'ai-solutions',
  title: 'AI-powered solutions',
  short: 'Explore where AI can make everyday work easier.',
  text: 'Practical applications of AI for knowledge access, document workflows and automation. Consider data handling, human oversight and suitability before choosing a solution.',
  items: ['Use-case discovery and feasibility', 'Knowledge and document assistants', 'Workflow automation with human review']
}];
const metadata = {
  '/': ['Cybersecurity & Digital Solutions | PAKT Consulting', 'PAKT Consulting is a UK specialist consultancy supporting cybersecurity, application development and practical AI-powered solutions.'],
  '/about': ['About PAKT Consulting | UK Technology Consultancy', 'A small, independent UK consultancy taking a practical, security-conscious approach to technology.'],
  '/services': ['Cybersecurity, App Development & AI | PAKT Consulting', 'Explore cybersecurity consultancy, application development and AI-powered solutions shaped around your business needs.'],
  '/contact': ['Discuss Your Project | PAKT Consulting', 'Contact PAKT Consulting to discuss cybersecurity, an application idea or a practical AI use case.']
};
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
function Brand() {
  return <span className="brand"><svg viewBox="0 0 36 42" aria-hidden="true"><path d="M18 2 33 8v12c0 9-8 16-15 20C11 36 3 29 3 20V8Z" /><path d="m11 21 5 5 10-12" /></svg><span>PAKT<span className="brand-sub">CONSULTING</span></span></span>;
}
function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  return <header className="site-header"><div className="container header-inner"><Link to="/" aria-label="PAKT Consulting home" onClick={() => setOpen(false)}><Brand /></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? 'Close ×' : 'Menu ☰'}</button><nav id="primary-navigation" aria-label="Main navigation" className={open ? 'navigation is-open' : 'navigation'} onKeyDown={e => {
        if (e.key === 'Escape') {
          setOpen(false);
          toggle.current?.focus();
        }
      }}>{[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/contact', 'Discuss your project']].map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={to === '/contact' ? 'nav-cta' : undefined} onClick={() => setOpen(false)}>{label}{to === '/contact' && <Arrow />}</NavLink>)}</nav></div></header>;
}
function PageBehaviour() {
  const {
    pathname,
    hash
  } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    const [title, description] = metadata[pathname] || ['Page Not Found | PAKT Consulting', 'Find your way back to PAKT Consulting.'];
    document.title = title;
    let robots = document.querySelector('meta[name=robots]');
    if (metadata[pathname]) robots?.remove();else {
      if (!robots) {
        robots = document.createElement('meta');
        robots.name = 'robots';
        document.head.append(robots);
      }
      robots.content = 'noindex';
    }
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    const url = `https://www.paktconsulting.co.uk${pathname === '/' ? '/' : pathname}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();else window.scrollTo(0, 0);
    if (!first.current) document.getElementById('main-content')?.focus({
      preventScroll: true
    });
    first.current = false;
  }, [pathname, hash]);
  return null;
}
function ContactCTA() {
  return <section className="contact-band"><div className="container band-inner"><div><p className="eyebrow">LET’S TALK</p><h2>A challenge, an idea,<br />or a next step?</h2><p>Tell us what you are working towards.</p></div><Link className="button button-gold" to="/contact">Discuss your project <Arrow /></Link></div></section>;
}
function Home() {
  return <>
  <section className="hero"><div className="container hero-grid"><div><p className="eyebrow">INDEPENDENT THINKING. PRACTICAL TECHNOLOGY.</p><h1>Secure foundations.<br /><em>New possibilities.</em></h1><p className="hero-description">Cybersecurity consultancy, application development and practical AI solutions — shaped around your business.</p><div className="actions"><Link className="button button-gold" to="/contact">Discuss your project <Arrow /></Link><Link className="text-link" to="/services">Explore our services →</Link></div><p className="hero-note">UK-based consultancy · Established in 2017</p></div><div className="hero-art" role="img" aria-label="Our approach: secure, build and improve"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><Brand /></div><div className="art-label label-one"><span>01</span> Secure</div><div className="art-label label-two"><span>02</span> Build</div><div className="art-label label-three"><span>03</span> Improve</div><p className="art-caption">SECURITY AT THE CENTRE</p></div></div></section>
  <section className="section light"><div className="container"><div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>Technology with<br />a clear purpose.</h2></div><p>Strengthen what you have. Build what you need. Explore what comes next.</p></div><div className="service-grid">{services.map((s, i) => <Link to={`/services#${s.id}`} className="service-card" key={s.id}><span className="card-number">0{i + 1}</span><h3>{s.title}</h3><p>{s.short}</p><span className="card-link">Explore service <Arrow /></span></Link>)}</div></div></section>
  <section className="section"><div className="container split"><div><p className="eyebrow">SMALL BY DESIGN</p><h2>Focused advice.<br />A considered approach.</h2></div><div><p className="large-copy">PAKT is a small, independent consultancy bringing a security-conscious approach to business technology.</p><p>We start by understanding the problem, agree a manageable scope and keep the work focused on useful outcomes. Clear communication and careful handling of information are part of that approach.</p><Link className="text-link" to="/about">Get to know PAKT →</Link></div></div></section>
  <section className="section light"><div className="container"><p className="eyebrow">POSSIBILITIES FOR YOUR BUSINESS</p><h2>From a question<br />to a practical next step.</h2><p className="section-intro">Examples of the challenges we can explore together.</p><div className="possibility-grid">{[['A clearer security roadmap', 'Understand an application or cloud environment and identify where to focus improvement.'], ['A better way to work', 'Explore a customer-facing application or an internal tool that connects a fragmented process.'], ['Knowledge within reach', 'Assess whether an AI assistant could help people find information, with suitable access and review.']].map(([title, text]) => <article key={title}><span className="small-symbol" aria-hidden="true">↗</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><ContactCTA />
  </>;
}
function About() {
  return <><section className="page-intro"><div className="container"><p className="eyebrow">ABOUT PAKT</p><h1>A small consultancy.<br /><em>A practical perspective.</em></h1><p className="hero-description">Helping businesses make considered decisions about security and technology.</p></div></section><section className="section light"><div className="container split"><div><p className="eyebrow">WHO WE ARE</p><h2>Independent.<br />Focused. Approachable.</h2></div><div><p className="large-copy">PAKT Consulting Limited is a UK-based consultancy, established in 2017.</p><p>Our focus brings together cybersecurity, application development and practical uses of AI. We help clarify the problem and shape an approach that fits the business, rather than starting with a particular tool.</p><p>We discuss relevant experience with care for client confidentiality. Project information is shared only where appropriate and with permission.</p></div></div></section><section className="section"><div className="container"><p className="eyebrow">HOW WE WORK</p><h2>Clarity at every step.</h2><div className="process-grid">{[['Understand', 'Discuss the context, priorities and constraints.'], ['Define', 'Agree the scope, responsibilities and intended outcome.'], ['Deliver', 'Work in manageable stages with clear communication.'], ['Review', 'Assess the result and agree the next steps.']].map(([title, text], i) => <article key={title}><span className="card-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><ContactCTA /></>;
}
function Services() {
  return <><section className="page-intro"><div className="container"><p className="eyebrow">OUR SERVICES</p><h1>Secure. Build.<br /><em>Move forward.</em></h1><p className="hero-description">Focused support for your systems, your software and your next idea.</p><div className="service-jumps">{services.map(s => <a href={`#${s.id}`} key={s.id}>{s.title} ↓</a>)}</div></div></section>{services.map((s, i) => <section id={s.id} key={s.id} className={`section service-detail ${i % 2 === 0 ? 'light' : ''}`}><div className="container split"><div><p className="eyebrow">SERVICE / 0{i + 1}</p><h2>{s.title}</h2><p className="large-copy">{s.short}</p></div><div><p>{s.text}</p><ul className="deliverables">{s.items.map(item => <li key={item}>{item}</li>)}</ul><p className="outcome">Scope and deliverables are agreed around your needs before work begins.</p><Link className="text-link" to="/contact">Discuss this service →</Link></div></div></section>)}<ContactCTA /></>;
}
function Contact() {
  const email = 'mailto:sales@paktconsulting.co.uk?subject=Project%20enquiry';
  return <><section className="page-intro"><div className="container"><p className="eyebrow">CONTACT</p><h1>Let’s discuss<br /><em>your next step.</em></h1><p className="hero-description">A security question, an application idea or an AI use case — start with a short introduction.</p></div></section><section className="section light"><div className="container contact-layout"><div className="email-panel"><p className="eyebrow">PROJECT ENQUIRIES</p><h2>Tell us what you<br />have in mind.</h2><a className="email-address" href={email}>sales@paktconsulting.co.uk <Arrow /></a><p>This opens your email application. You can also copy the address into your preferred email service.</p><a className="button button-dark" href={email}>Start an email <Arrow /></a><div className="general-contact"><strong>General enquiries</strong><a href="mailto:info@paktconsulting.co.uk">info@paktconsulting.co.uk</a></div></div><div className="enquiry-guide"><p className="eyebrow">A USEFUL STARTING POINT</p><h3>A few details are enough.</h3><ol><li>What would you like to achieve?</li><li>What is the main challenge?</li><li>Do you have a timeframe in mind?</li></ol><div className="privacy-note"><h3>Keep the first message high-level.</h3><p>Please leave out passwords, personal records, confidential documents and sensitive system details. We can agree an appropriate way to share information if needed.</p></div><p>We will review your enquiry and discuss whether the work is a suitable fit before agreeing any scope.</p></div></div></section></>;
}
function NotFound() {
  return <section className="page-intro"><div className="container"><p className="eyebrow">PAGE NOT FOUND</p><h1>Let’s get you<br /><em>back on track.</em></h1><p>The page you requested could not be found.</p><Link to="/" className="button button-gold">Return home →</Link></div></section>;
}
function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-top"><Link to="/" aria-label="PAKT Consulting home"><Brand /></Link><p>Security-conscious thinking.<br />Practical digital solutions.</p><nav aria-label="Footer navigation"><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/contact">Contact</Link></nav></div><div className="footer-bottom"><p>© {new Date().getFullYear()} PAKT Consulting Limited</p><p>Registered in England and Wales · Company no. 10721181</p></div></div></footer>;
}
export function Site() {
  return <><PageBehaviour /><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content" tabIndex="-1"><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} /><Route path="/contact" element={<Contact />} /><Route path="/certifications" element={<Navigate to="/about" replace />} /><Route path="*" element={<NotFound />} /></Routes></main><Footer /></>;
}
export default function App() {
  return <BrowserRouter><Site /></BrowserRouter>;
}

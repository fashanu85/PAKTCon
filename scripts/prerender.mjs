import { readFile, writeFile } from 'node:fs/promises'
import { render } from '../dist-ssr/prerender.js'
const pages = [
 ['/', 'Cybersecurity & Digital Solutions | PAKT Consulting', 'PAKT Consulting is a UK specialist consultancy supporting cybersecurity, application development and practical AI-powered solutions.'],
 ['/about', 'About PAKT Consulting | UK Technology Consultancy', 'A small, independent UK consultancy taking a practical, security-conscious approach to technology.'],
 ['/services', 'Cybersecurity, App Development & AI | PAKT Consulting', 'Explore cybersecurity consultancy, application development and AI-powered solutions shaped around your business needs.'],
 ['/contact', 'Discuss Your Project | PAKT Consulting', 'Contact PAKT Consulting to discuss cybersecurity, an application idea or a practical AI use case.'],
 ['/404', 'Page Not Found | PAKT Consulting', 'Find your way back to PAKT Consulting.'],
]
const template = await readFile('dist/index.html', 'utf8')
const escape = s => s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;')
for (const [path, title, description] of pages) {
 const url = `https://www.paktconsulting.co.uk${path}`
 let html = template.replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`)
 html = html.replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
 html = html.replace(/(<meta (?:name="description"|property="og:description") content=")[^"]*/, `$1${escape(description)}`)
 html = html.replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(title)}`)
 html = html.replace(/(<meta property="og:description" content=")[^"]*/, `$1${escape(description)}`)
 html = html.replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
 html = html.replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
 if (path === '/404') html = html.replace('</head>', '<meta name="robots" content="noindex" /></head>')
 await writeFile(`dist/${path === '/' ? 'index' : path.slice(1)}.html`, html)
}
console.log(`Prerendered ${pages.length} pages`)

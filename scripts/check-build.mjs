import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
const pages = ['index', 'about', 'services', 'contact']
const titles = new Set()
for (const page of pages) {
 const html = await readFile(`dist/${page}.html`, 'utf8')
 assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${page}: one primary heading`)
 assert.match(html, /<main id="main-content"/, `${page}: main landmark`)
 assert.doesNotMatch(html, /<video|200\+|50\+|99%|href="\/certifications"|Send Message/, `${page}: removed claims and unwired forms`)
 assert.match(html, /mailto:sales@paktconsulting.co.uk|href="\/contact"/, `${page}: enquiry path`)
 const title = html.match(/<title>(.*?)<\/title>/)[1]
 assert.ok(!titles.has(title), `${page}: unique title`)
 titles.add(title)
 assert.match(html, /<meta name="description" content="[^"]+"/)
 assert.match(html, new RegExp(`<link rel="canonical" href="https://www.paktconsulting.co.uk/${page === 'index' ? '' : page}"`))
 for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
  if (href === '/' || href.startsWith('/assets/') || href === '/pakt-mark.svg') continue
  assert.ok(['/about', '/services', '/contact'].includes(href), `${page}: unexpected internal route ${href}`)
 }
}
const notFound = await readFile('dist/404.html', 'utf8')
assert.match(notFound, /name="robots" content="noindex"/)
const config = JSON.parse((await readFile('vercel.json', 'utf8')).replace(/^\uFEFF/, ''))
assert.equal(config.cleanUrls, true)
assert.ok(config.redirects.some(r => r.source === '/certifications' && r.destination === '/about' && r.permanent))
console.log('PASS: rendered content, metadata, enquiry paths, internal links, retired route and 404 checks')

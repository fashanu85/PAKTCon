# PAKT Consulting website

React and Vite website with static HTML generated for the public pages.

## Development

- `npm ci`
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm test`
- `npm run preview`

The build creates page-specific HTML and metadata for Home, About, Services and Contact, plus a real 404 page. Vercel serves the clean URLs directly. The former certifications URL redirects permanently to About.

## Content and enquiries

Public wording describes a small consultancy. Do not add client identities, project screenshots, performance figures, credentials or availability promises without supporting evidence and approval.

Enquiries use explicit email links to the existing business addresses. No message is sent by the website itself, and no form backend or email-provider credentials are required. Verify mailbox availability separately. A future on-site form needs an approved delivery provider, server-side validation, abuse controls, appropriate privacy information and a delivery test before release.

## Deployment

Vercel project: `pakt-con`. Framework: Vite. Build: `npm run build`. Output: `dist`.

Use a branch preview for checks before production. Confirm direct navigation and reload on every route, the certifications redirect, missing-page 404 status, security headers and mobile navigation. Only `dist` is deployed; the server-rendering build in `dist-ssr` is an intermediate artifact.

Fonts currently load from Google Fonts. There are no application analytics, cookies, autoplay videos or enquiry forms introduced by this revision.

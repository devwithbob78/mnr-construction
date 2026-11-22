# MNR Construction — Frontend Preview

A responsive, premium-style frontend concept for MNR Construction. Built with plain HTML, CSS, and JavaScript so it can be edited easily and deployed to static hosting.

## Files
- `index.html` — public company website
- `styles.css` — responsive website styling
- `script.js` — mobile navigation and quote-form preview behavior
- `admin.html` / `admin.css` — static admin dashboard preview
- `assets/` — original MNR logo SVGs and favicon

## Run locally
Open `index.html` in a browser, or serve this folder with any static web server. No build step is required.

## Important before launch
1. Replace the phone, email, service area, and any other placeholder details once supplied by the client.
2. The project gallery currently uses Unsplash stock photography for visual presentation. These are illustrative images, not verified MNR projects. Replace them with the company's own work before describing them as completed projects.
3. The quote form is a frontend-only preview and does not send or store submissions.
4. The admin dashboard is a static UI preview. It has no login, database, saving, upload, or live analytics yet.
5. Confirm the client's actual service territory, business claims, licenses, insurance details, and approved legal copy before publishing.
6. Review the licensing and current Unsplash terms for each selected image before production use. The image URLs are remote and require an internet connection.

## Brand direction
- Primary: deep navy `#172B3A`
- Accent: warm brass `#C89B58`
- Background: soft warm neutral `#F5F3EE`
- Typography: Manrope + DM Sans

## Next phase
Connect Supabase authentication, database tables, storage buckets, role-based access/RLS, quote submissions, email notifications, and CMS CRUD operations. Keep all service-role keys server-side; never expose them in browser JavaScript.

# Inspirico website starter

A responsive, static HTML/CSS/JavaScript website for an education consultancy offering university admissions guidance and IELTS/TOEFL preparation.

## Files
- `index.html` — website structure and content
- `styles.css` — responsive styling and brand colors
- `script.js` — mobile navigation and enquiry form behavior

## Preview locally
1. Extract the ZIP file.
2. Open `index.html` in a browser.

No build tools or paid software are required.

## Important edits before publishing
1. In `script.js`, replace `YOUR_EMAIL@example.com` with your real business email.
2. In `index.html`, replace the placeholder email text under Contact with your real email address.
3. Add your business WhatsApp number and any social media links you want to use.
4. Review the service descriptions so they accurately reflect the services you offer. Avoid promising admission or a specific test score.
5. Add real testimonials only after getting permission from the students concerned.
6. Consider adding a privacy notice before collecting personal data.

## Free hosting
This is a static site and can be published using GitHub Pages or Cloudflare Pages. A free hosting subdomain can be used at first; purchasing a custom domain is optional and normally costs money.

### GitHub Pages (one option)
1. Create a GitHub account and a new **public** repository.
2. Upload `index.html`, `styles.css`, and `script.js` to the repository root.
3. Open **Settings → Pages**.
4. Under the build/deployment section, select deploying from a branch, then select `main` and `/ (root)`.
5. Save and wait for GitHub to publish the site. GitHub will show the live URL in Pages settings.

Official documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## Form limitation
The enquiry form is front-end only. After you set your email address, it opens the visitor's default email application using a `mailto:` link. It does not store submissions on a server. For a proper hosted form later, connect a form backend or service.

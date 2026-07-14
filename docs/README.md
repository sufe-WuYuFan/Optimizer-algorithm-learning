# Wu Yufan Academic CV

A static academic profile that requires no build tools. Its visual direction is inspired by AcademicPages CV layouts, while the page structure, color palette, and interactions are independently implemented.

## Local Preview

Run the following command from the site directory:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/` in a browser.

## Content Maintenance

- Personal information, education, student leadership, honors, and teaching experience are maintained in `index.html`.
- PDF materials are listed on the separate second-level page `notes.html`; the homepage contains only the Notes entry point.
- Visual styles are defined in `assets/css/site.css`.
- Theme switching, mobile navigation, and active-section highlighting are implemented in `assets/js/site.js`.
- The homepage uses the personal photo at `assets/images/profile-photo.png`; if it cannot be loaded, the interface automatically falls back to `assets/images/avatar.svg`.

## GitHub Pages

The `.github/workflows/pages.yml` workflow publishes the root-level `docs/` directory to GitHub Pages. For initial setup, select **GitHub Actions** under **Settings → Pages → Build and deployment → Source**, then run the workflow manually or push an update to `docs/`.

Site URL:

`https://sufe-WuYuFan.github.io/Optimizer-algorithm-learning/`

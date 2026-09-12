# Sola Café

A neighbourhood café website built with vanilla HTML5, CSS, and JavaScript. Final project for MSCS Web Development.

## Pages

- **Home** — Hero, features grid, hours and location
- **Menu** — Searchable menu with debounced filter
- **Photos** — Lightbox gallery
- **About** — Story and values
- **Contact** — Client-side validated contact form

## Setup

No build step required. The site is static HTML/CSS/JS.

**Clone the repo:**

```bash
git clone https://github.com/maymememaung/sola.git
cd sola
```

**Install test dependencies** (only needed to run tests):

```bash
npm install
```

## Running Locally

Use any static file server. Three options:

**VS Code Live Server** — install the Live Server extension, right-click `index.html`, select *Open with Live Server*.

**Node (npx serve):**

```bash
npx serve -p 5500 .
```

**Python:**

```bash
python3 -m http.server 5500
```

Then open `http://localhost:5500` in your browser.

## Tests

**Unit tests** (Vitest — validates form and search logic):

```bash
npm test
```

**Accessibility smoke tests** (Playwright + axe, WCAG 2.1 AA):

```bash
npm run test:a11y
```

The a11y tests require a running local server on port 5500. Start one first (see above), then run the command in a second terminal.

## Deployment

### GitHub Pages

1. Go to the repo on GitHub → **Settings** → **Pages**
2. Under *Source*, select **Deploy from a branch**
3. Choose `main` branch, `/ (root)` folder → **Save**
4. The site will be live at `https://maymememaung.github.io/sola/` within a minute

### Netlify

1. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**
2. Connect your GitHub account and select the `sola` repo
3. Leave build command and publish directory blank (static site)
4. Click **Deploy site**

## Design System

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#23301F` | Headings, body text |
| `--color-secondary` | `#485A42` | Subheadings, nav links |
| `--color-bg` | `#EDEEE7` | Page background |
| `--color-surface` | `#D6D2C2` | Cards, dividers |
| `--color-accent` | `#C8963E` | Decorative only (fails contrast on light bg) |

Typography: [Manrope](https://fonts.google.com/specimen/Manrope) — weights 400, 500, 600, 700, 800.

Spacing base unit: 4px (`--space-1` through `--space-16`).

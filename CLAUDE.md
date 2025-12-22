# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Core-Styles 3 is Webstop's design system for building grocery retailer websites. It's built on Bootstrap 5 and provides CSS components, JavaScript utilities, and layout patterns for both public-facing and admin interfaces. The project follows Style Guide Driven Development (SGDD), where the living documentation site is the development environment itself.

## Development Commands

### Setup
```bash
./setup
```
Run this once before first development session to install dependencies.

### Development Server (requires two terminals)

Terminal 1 - Hugo documentation server:
```bash
./serve
```

Terminal 2 - Sass/JS file watcher:
```bash
./watch
```

Once both are running, visit http://localhost:1313/ to see the documentation site.

### Manual Build Commands

When auto-watch fails (known issue), use these manual commands:

**Documentation site CSS:**
```bash
npm run css-docs-compile
```

**Production CSS (dist folder):**
```bash
npm run css-compile
```

**JavaScript compilation:**
```bash
npm run js              # All JS files
npm run js-main         # Main public/admin bundles
npm run js-circular     # Circular iframe bundles
npm run js-docs         # Documentation site JS
```

**Full production build:**
```bash
npm run dist            # Builds dist/ folder with CSS, JS, images
npm run docs            # Builds documentation site
npm run pushable        # Both dist and docs + version update
```

## Architecture

### File Structure

**Source Files (edit these):**
- `scss/` - Sass source files for the design system
- `js/` - JavaScript source files
- `site/content/docs/3.0/` - Documentation markdown files

**Generated Files (DO NOT edit):**
- `dist/` - Production CSS/JS for distribution as npm package
- `docs/` - Generated Hugo site served on GitHub Pages at guides.webstop.com
- `node_modules/` - Dependencies defined in package.json

### CSS Architecture

Main entry points:
- `scss/core-styles-defaults.scss` - Public-facing styles (Bootstrap + Core-Styles)
- `scss/webstop-admin.scss` - Admin interface styles (includes admin variables/typography)

Core-Styles organization (`scss/_core-styles.scss`):
1. Root variables: `_variables.scss`, `_variables-webstop-brand.scss`
2. Bootstrap extensions: `bootstrap_extentions/`
3. Utilities: `utilities/` (background, box, icons, max-width, min-width, page-break, text, etc.)
4. Layouts: `layout/admin.scss`, `layout/public.scss`
5. Components: `components/` (cards, search, tags, toolbar, sidebar, etc.)
6. Products: `products/circulars/`, `products/shopping_lists/`

**Important:** Bootstrap must be imported BEFORE `_core-styles.scss`. This is why entry files import Bootstrap first.

### JavaScript Architecture

Entry points:
- `js/main-public.js` - Public website bundle
- `js/main-admin.js` - Admin interface bundle
- `js/main-public-aye.js` - Public bundle with Aye analytics
- `js/circular-iframe-parent.js` & `js/circular-iframe-internal.js` - Circular viewer

Load order (critical):
1. `config.js`
2. `live.js`
3. `cookies.js`
4. All other modules (alphabetical)

JavaScript uses Rollup bundler (config: `build/rollup.config.mjs`) with Babel transpilation and Terser minification.

### Documentation Site

Built with Hugo static site generator. Structure:
- `site/content/` - Markdown content
- `site/layouts/` - HTML templates
- `site/static/` - Static assets (copied from compilation)
- `site/assets/scss/` - Documentation site-specific styles

**Important note:** Everything in `site/` is copied to the `docs/` folder in root during the build process, so the files in the `site/` folder are the actual documentation site that can be edited directly.

Content organization:
- `/docs/3.0/getting-started/` - Introduction and setup
- `/docs/3.0/layouts/` - Page layout patterns
- `/docs/3.0/components/` - Reusable components
- `/docs/3.0/products/` - Product-specific features (circulars, store locator, shopping lists)
- `/docs/3.0/utilities/` - CSS utility classes
- `/docs/3.0/icons/` - Icon documentation
- `/guides/3.0/` - Development approach and process guides

**Important note:** Everything in the `site/` folder is copied to the `docs/` in root folder during the build process, so the files in the root `docs/` folder are NOT part of development environment and should NOT be edited directly.

## Deployment Process

1. Update version in `package.json` and `config.yml`
2. Run `npm run pushable` (builds dist/, docs/, and creates version file)
3. Commit and push changes
4. Create GitHub release tag (e.g., `v3.0.12`)
5. Upload `dist/` folder to S3 CDNs (Main-Core and Ace-Core at `core_app_assets/core-repos/core-styles-3/[version]/`)

Projects consume Core-Styles 3 via npm: `"core-styles-3": "github:webstop/core-styles-3#v3.0.12"`

## Key Conventions

### Adding New JavaScript Files

When creating a new JS file, you must:
1. Import it in the appropriate main file (`main-public.js` or `main-admin.js`)
2. Document it in `site/content/docs/3.0/getting-started/introduction.md`
3. Add script tag to `site/layouts/_default/baseof.html`
4. Update consuming apps (core-lasso, tops-lasso, styler gem)

### Style Guide Driven Development

All component development happens within the documentation site itself. The examples shown in the docs are the actual development environment. This ensures documentation stays current as a natural part of the development process.

Build patterns/components in the docs first, then they automatically become available to consuming applications through the npm package distribution.

## Dependencies

- Bootstrap 5.3.7
- jQuery 3.7.1
- Popper.js 2.11.8
- Hugo (via hugo-bin)
- Sass 1.50.1
- Toast UI Editor 3.2.2
- ahoy.js 0.4.3 (analytics)
- js-cookie 3.0.5

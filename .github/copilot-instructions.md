# Copilot Instructions for portfolio-27

## Architecture Overview

This is a **static portfolio website** built with vanilla PHP, HTML, and JavaScript. It's a personal portfolio for Pim Willems (teacher at Fontys ICT and frontend engineer) showcasing selected projects.

### Key Pages

- **`index.php`** — Home page with bio, name, and 6-item image grid (uses custom `<image-slot>` web component)
- **`work.php`** — Project showcase with 5 projects, filterable by technology tags

### Shared Components

- **`head.php`** — Reusable `<head>` contents (fonts, theme CSS variables, base styling, script imports)
- **`nav.php`** — Shared navigation bar (left link + contact button)
- Both are included via `<?php include 'partials/{file}.php'; ?>` pattern

**Note:** The current code expects these files in `partials/` subdirectory, but they're actually in the root. This will cause PHP warnings when running.

### Design System

Uses CSS custom properties (dark mode support via `prefers-color-scheme`):
- **Colors**: `--bg`, `--ink`, `--muted`, `--accent` (#ff6f91 light / #e07a93 dark)
- **Slots**: `<image-slot>` custom element (defined in `imageslot.js`) for user-fillable image placeholders
- **Typography**: Archivo font (400–900 weights), emphasis on generous letter-spacing and line-height

### Client-Side Behavior

**`work.php` scripting** (inline `<script>` block):
- Filter buttons (top) toggle project visibility by tech tag
- Scroll-reveal animation: elements fade in + slide up as they enter viewport
- Uses `IntersectionObserver` with fallback to manual scroll/resize listeners
- Filter state persists within the page (not across reloads)

**`imageslot.js`** (31KB custom element):
- Persists dropped images via `.image-slots.state.json` sidecar file
- Supports drag-drop, click-to-browse, and reframing (double-click to reposition/scale with `fit=cover`)
- Only accepts raster formats (PNG, JPEG, WebP, AVIF) — SVG/GIF excluded for security and animation reasons
- Requires `omelette` runtime for sidecar writes; read-only in vanilla HTML environments

## Output Escaping & Security

All PHP template variables use **`htmlspecialchars()`** for XSS safety. The pattern is strict:
- Variables bound directly to attributes: `<?= htmlspecialchars($var) ?>`
- HTML-safe content (labels from `partials/nav.php`): passed as literal HTML in variable (e.g., `$nav_back_label = 'work&nbsp;→'`)
- User-supplied strings: always escaped via `htmlspecialchars()`

## Project Data Structure (work.php)

```php
$projects = [
    [
        'num'    => '01',
        'slug'   => 'rally',  // Used in image IDs
        'title'  => 'Project Name',
        'desc'   => 'Description...',
        'techs'  => ['Tech1', 'Tech2', ...],  // Filter tags
        'layout' => 'big-left' | 'triptych' | 'tall-right' | 'center-wide' | 'two-wide'
    ],
    ...
]
```

Image IDs follow the pattern: `{slug}-{N}` (e.g., `rally-1`, `rally-2`).

Each layout is rendered via `match()` with heredoc HTML strings containing inline grid styles and `<image-slot>` elements.

## Styling Notes

- Full-height pages using flexbox (`height: 100vh` on `.page`)
- Grid-based image layouts with `16px` gap and `6px` rounded corners
- Accessible spacing/typography (font-weight, letter-spacing, line-height)
- Smooth transitions (0.55s ease) for reveal animations and filter interactions

## No Build/Test Infrastructure

This is a **zero-build** portfolio—no npm, Composer, webpack, or tests. Files are served as-is by PHP.

- Lint/format: Not configured (code is hand-crafted, follows manual conventions)
- Run locally: Use `php -S localhost:8000` or serve via Apache/Nginx with PHP handler

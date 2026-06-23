<?php
/**
 * Shared <head> contents.
 *
 * Expects the including file to have set:
 *   string $page_title   — document <title>
 */
?>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= htmlspecialchars($page_title) ?></title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="./project/image-slot.js"></script>
  <style>
    *, *::before, *::after { box-sizing: border-box; }

    :root {
      --bg: #f1ebdb;
      --ink: #1d1b16;
      --muted: #3a3631;
      --slot: #e4dcc5;
      --border: #d9d0b8;
      --accent: #ff6f91;
      --accent-ink: #1d1b16;
      --tag-border: #c9c0a8;
      --tag-ink: #4a463d;
      --filter-label: #8a8270;
      --filter-border: #c9c0a8;
      --filter-ink: #1d1b16;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #242320;
        --ink: #ece5d6;
        --muted: #b3ab98;
        --slot: #312f2b;
        --border: #38362f;
        --accent: #e07a93;
        --accent-ink: #242320;
        --tag-border: #45433d;
        --tag-ink: #b3ab98;
        --filter-label: #8c8473;
        --filter-border: #45433d;
        --filter-ink: #ece5d6;
      }
    }

    html, body { margin: 0; }

    body {
      font-family: 'Archivo', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      background: var(--bg);
      color: var(--ink);
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-link {
      font-weight: 700;
      font-size: 17px;
      color: var(--ink);
      text-decoration: none;
      letter-spacing: -0.01em;
    }

    .nav-contact {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--accent);
      color: var(--accent-ink);
      font-family: inherit;
      font-weight: 700;
      font-size: 15px;
      padding: 11px 20px;
      border-radius: 999px;
      text-decoration: none;
      letter-spacing: -0.01em;
    }

    image-slot {
      display: block;
      background: var(--slot);
    }

    image-slot.is-accent { background: var(--accent); }
  </style>

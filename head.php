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
      color-scheme: light;
    }

    html.dark {
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
      color-scheme: dark;
    }

    @media (prefers-color-scheme: dark) {
      :root:not(.light) {
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
        color-scheme: dark;
      }
    }

    html, body { margin: 0; }

    body {
      font-family: 'Archivo', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      background: var(--bg);
      color: var(--ink);
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    html.js body {
      opacity: 0;
      transform: translateY(18px);
      transition:
        opacity 0.35s ease,
        transform 0.35s ease,
        background-color 0.3s ease,
        color 0.3s ease;
    }

    html.js body.is-ready {
      opacity: 1;
      transform: translateY(0);
    }

    html.js body.is-leaving {
      opacity: 0;
      transform: translateY(-18px);
      pointer-events: none;
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .nav-link {
      font-weight: 700;
      font-size: 17px;
      color: var(--ink);
      text-decoration: none;
      letter-spacing: -0.01em;
    }

    .nav-actions {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: flex-end;
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

    .theme-toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      padding: 0;
      background: transparent;
      border: 1px solid var(--border);
      border-radius: 999px;
      font-size: 20px;
      cursor: pointer;
      color: var(--ink);
      transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
    }

    .theme-toggle:hover {
      border-color: var(--ink);
      background: var(--slot);
      transform: scale(1.1);
    }

    .theme-toggle svg {
      width: 18px;
      height: 18px;
      stroke: currentColor;
      fill: none;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
      pointer-events: none;
    }

    @media (max-width: 480px) {
      .nav {
        align-items: flex-start;
      }

      .nav-actions {
        gap: 8px;
      }
    }

    image-slot {
      display: block;
      background: var(--slot);
    }

    image-slot.is-accent { background: var(--accent); }
  </style>
  <script>
    (function() {
      const html = document.documentElement;
      html.classList.add('js');
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Set initial theme
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        html.classList.add('dark');
      } else if (savedTheme === 'light') {
        html.classList.add('light');
      }
    })();
  </script>
  <script>
    (function () {
      function enterPage() {
        requestAnimationFrame(() => {
          document.body.classList.add('is-ready');
          document.body.classList.remove('is-leaving');
        });
      }

      document.addEventListener('DOMContentLoaded', () => {
        enterPage();

        document.addEventListener('click', (event) => {
          const link = event.target.closest('a[href]');
          if (!link) return;
          if (link.target === '_blank' || link.hasAttribute('download')) return;
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

          const url = new URL(link.href, window.location.href);
          const samePage = url.href === window.location.href;
          const sameOrigin = url.origin === window.location.origin;
          const isPortfolioPage = /\/(index|work)\.php$/.test(url.pathname);

          if (!sameOrigin || !isPortfolioPage || samePage) return;

          event.preventDefault();
          document.body.classList.remove('is-ready');
          document.body.classList.add('is-leaving');
          window.setTimeout(() => {
            window.location.href = url.href;
          }, 220);
        });
      });

      window.addEventListener('pageshow', enterPage);
    })();
  </script>

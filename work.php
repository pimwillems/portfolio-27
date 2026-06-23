<?php
$projects = [
    [
        'num'    => '01',
        'slug'   => 'rally',
        'title'  => 'Rally',
        'desc'   => 'A progressive web app for logging matches, tracking rallies and ranking the Fontys ping-pong ladder.',
        'techs'  => ['Svelte', 'Node', 'PWA'],
        'layout' => 'big-left',
    ],
    [
        'num'    => '02',
        'slug'   => 'pacer',
        'title'  => 'Pacer',
        'desc'   => 'Turning GPS traces into 3D elevation ribbons you can spin, compare and share after every run.',
        'techs'  => ['WebGL', 'Three.js', 'TypeScript'],
        'layout' => 'triptych',
    ],
    [
        'num'    => '03',
        'slug'   => 'fontys-studio',
        'title'  => 'Fontys Studio',
        'desc'   => 'A teaching platform and component library used across first-year ICT design modules.',
        'techs'  => ['React', 'TypeScript', 'Design Systems'],
        'layout' => 'tall-right',
    ],
    [
        'num'    => '04',
        'slug'   => 'symbols',
        'title'  => 'Symbols',
        'desc'   => 'An ever-growing set of geometric creatures generated from a handful of rules and a lot of play.',
        'techs'  => ['Canvas', 'Generative', 'WebGL'],
        'layout' => 'center-wide',
    ],
    [
        'num'    => '05',
        'slug'   => 'teach-deck',
        'title'  => 'Teach Deck',
        'desc'   => 'Live, multiplayer lecture slides where students poll, draw and react in real time.',
        'techs'  => ['Vue', 'Node', 'WebSockets'],
        'layout' => 'two-wide',
    ],
];

// Collect all unique filter tags from project data
$all_techs = array_unique(array_merge(...array_column($projects, 'techs')));

$page_title = 'Work — Pim Willems';
?>
<!DOCTYPE html>
<html lang="en">
<head>
<?php include 'head.php'; ?>
  <style>
    .page {
      max-width: 1280px;
      margin: 0 auto;
      padding: 28px 34px 64px;
      display: flex;
      flex-direction: column;
    }

    .masthead {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 30px;
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.55s ease, transform 0.55s ease;
      gap: 20px;
    }

    .masthead.is-visible { opacity: 1; transform: none; }

    .masthead h1 {
      margin: 0;
      font-weight: 800;
      font-size: 108px;
      line-height: 0.82;
      letter-spacing: -0.05em;
    }

    .masthead h1 .period { color: var(--accent); }

    .masthead p {
      margin: 0 0 8px;
      width: 300px;
      font-size: 16px;
      line-height: 1.45;
      font-weight: 500;
      color: var(--muted);
      text-wrap: pretty;
    }

    .filter-bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 9px;
      margin-top: 34px;
      padding-bottom: 30px;
      border-bottom: 1px solid var(--border);
    }

    .filter-label {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--filter-label);
      margin-right: 6px;
      flex-shrink: 0;
    }

    .filt {
      font-family: inherit;
      padding: 7px 14px;
      border: 1px solid var(--filter-border);
      border-radius: 999px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--filter-ink);
      background: transparent;
      cursor: pointer;
      transition: border-color .15s;
      white-space: nowrap;
    }

    .filt:hover { border-color: var(--ink); }

    .filt.is-active {
      background: var(--accent);
      border-color: var(--accent);
      color: var(--accent-ink);
    }

    .projects {
      display: flex;
      flex-direction: column;
      gap: 148px;
      margin-top: 96px;
    }

    article {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.55s ease, transform 0.55s ease;
    }

    article.is-visible { opacity: 1; transform: none; }

    .project-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 28px;
    }

    .project-title-group {
      display: flex;
      align-items: baseline;
      gap: 16px;
    }

    .project-num {
      font-size: 13px;
      font-weight: 700;
      color: var(--accent);
      letter-spacing: 0.1em;
    }

    .project-title {
      margin: 0;
      font-weight: 800;
      font-size: 50px;
      letter-spacing: -0.03em;
      line-height: 0.9;
    }

    .project-meta { width: 430px; }

    .project-desc {
      margin: 0 0 12px;
      font-size: 16px;
      line-height: 1.45;
      color: var(--muted);
      text-wrap: pretty;
    }

    .tags { display: flex; flex-wrap: wrap; gap: 8px; }

    .tag {
      padding: 5px 11px;
      border: 1px solid var(--tag-border);
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--tag-ink);
    }

    .site-footer {
      margin-top: 120px;
      padding-top: 24px;
      border-top: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;
      font-size: 15px;
      flex-wrap: wrap;
      gap: 12px;
    }

    .site-footer a { color: var(--ink); text-decoration: none; }
    .site-footer .arrow { color: var(--accent); }

    @media (max-width: 768px) {
      .page {
        padding: 20px 20px 40px;
      }

      .masthead {
        flex-direction: column;
        align-items: flex-start;
      }

      .masthead h1 {
        font-size: 64px;
      }

      .masthead p {
        width: 100%;
        font-size: 14px;
      }

      .projects {
        gap: 80px;
        margin-top: 60px;
      }

      .project-header {
        flex-direction: column;
      }

      .project-title {
        font-size: 36px;
      }

      .project-meta {
        width: 100%;
      }

      .filter-bar {
        margin-top: 24px;
        padding-bottom: 20px;
      }

      .site-footer {
        margin-top: 80px;
        padding-top: 20px;
      }
    }

    @media (max-width: 480px) {
      .page {
        padding: 16px 16px 32px;
      }

      .masthead {
        gap: 12px;
        margin-top: 20px;
      }

      .masthead h1 {
        font-size: 48px;
      }

      .masthead p {
        font-size: 13px;
      }

      .projects {
        gap: 60px;
        margin-top: 40px;
      }

      .project-header {
        gap: 12px;
        margin-bottom: 20px;
      }

      .project-title {
        font-size: 28px;
      }

      .project-num {
        font-size: 11px;
      }

      .project-desc {
        font-size: 14px;
      }

      .tag {
        font-size: 10px;
        padding: 4px 9px;
      }

      .filter-bar {
        margin-top: 18px;
        padding-bottom: 16px;
        gap: 6px;
      }

      .filter-label {
        font-size: 11px;
      }

      .filt {
        font-size: 11px;
        padding: 6px 12px;
      }

      .site-footer {
        margin-top: 60px;
        padding-top: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }

      .site-footer a { display: block; }
    }
  </style>
</head>
<body>
  <div class="page" id="work-page">

    <?php
    $nav_back_href  = 'index.php';
    $nav_back_label = '←&nbsp;home';
    $contact_href   = 'https://www.linkedin.com/in/pimwillems-frontend-developer/';
    include 'nav.php';
    ?>

    <div class="masthead">
      <h1>Selected<br>work<span class="period">.</span></h1>
      <p>Five things I built between 2022 and 2025 — for the classroom, the track and the table.</p>
    </div>

    <div class="filter-bar">
      <span class="filter-label">filter —</span>
      <button class="filt" data-f="all">all</button>
      <?php foreach ($all_techs as $tech): ?>
        <button class="filt" data-f="<?= htmlspecialchars($tech) ?>"><?= htmlspecialchars($tech) ?></button>
      <?php endforeach; ?>
    </div>

    <div class="projects">
      <?php foreach ($projects as $p):
          $slug   = $p['slug'];
          $techs  = implode(',', $p['techs']);
      ?>
      <article data-techs="<?= htmlspecialchars($techs) ?>">

        <div class="project-header">
          <div class="project-title-group">
            <span class="project-num">(<?= $p['num'] ?>)</span>
            <h2 class="project-title"><?= htmlspecialchars($p['title']) ?></h2>
          </div>
          <div class="project-meta">
            <p class="project-desc"><?= htmlspecialchars($p['desc']) ?></p>
            <div class="tags">
              <?php foreach ($p['techs'] as $tech): ?>
                <span class="tag"><?= htmlspecialchars($tech) ?></span>
              <?php endforeach; ?>
            </div>
          </div>
        </div>

        <?php
        // Each layout matches the design from Work Dark.dc.html
        match ($p['layout']) {

            'big-left' => print(<<<HTML
              <div style="display:grid;grid-template-columns:2fr 1fr;grid-template-rows:1fr 1fr;gap:16px;height:430px;">
                <image-slot id="{$slug}-1" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 01" style="grid-row:span 2;width:100%;height:100%;"></image-slot>
                <image-slot id="{$slug}-2" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 02" style="width:100%;height:100%;"></image-slot>
                <image-slot id="{$slug}-3" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 03" style="width:100%;height:100%;"></image-slot>
              </div>
              HTML),

            'triptych' => print(<<<HTML
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;height:360px;">
                <image-slot id="{$slug}-1" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 01" style="width:100%;height:100%;"></image-slot>
                <image-slot id="{$slug}-2" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 02" style="width:100%;height:100%;"></image-slot>
                <image-slot id="{$slug}-3" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 03" style="width:100%;height:100%;"></image-slot>
              </div>
              HTML),

            'tall-right' => print(<<<HTML
              <div style="display:grid;grid-template-columns:1fr 2fr;grid-template-rows:1fr 1fr;gap:16px;height:430px;">
                <image-slot id="{$slug}-1" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 01" style="width:100%;height:100%;"></image-slot>
                <image-slot id="{$slug}-3" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 03" style="grid-row:span 2;width:100%;height:100%;"></image-slot>
                <image-slot id="{$slug}-2" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 02" style="width:100%;height:100%;"></image-slot>
              </div>
              HTML),

            'center-wide' => print(<<<HTML
              <div style="display:grid;grid-template-columns:1fr 2fr 1fr;gap:16px;height:420px;">
                <image-slot id="{$slug}-2" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 02" style="width:100%;height:100%;"></image-slot>
                <image-slot id="{$slug}-1" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 01" class="is-accent" style="width:100%;height:100%;"></image-slot>
                <image-slot id="{$slug}-3" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 03" style="width:100%;height:100%;"></image-slot>
              </div>
              HTML),

            'two-wide' => print(<<<HTML
              <div style="display:grid;grid-template-columns:2fr 1fr;gap:16px;">
                <image-slot id="{$slug}-1" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 01" style="width:100%;height:260px;"></image-slot>
                <image-slot id="{$slug}-2" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 02" style="width:100%;height:260px;"></image-slot>
                <image-slot id="{$slug}-3" shape="rounded" radius="6" fit="cover" placeholder="{$p['slug']} · 03" style="grid-column:span 2;width:100%;height:240px;"></image-slot>
              </div>
              HTML),

            default => null,
        };
        ?>

      </article>
      <?php endforeach; ?>
    </div>

    <footer class="site-footer">
      <span>Pim Willems — Tilburg</span>
      <a href="#">say hi&nbsp;<span class="arrow">→</span></a>
    </footer>

  </div>

  <script>
    (function () {
      const page = document.getElementById('work-page');

      // ── Filter ──────────────────────────────────────────────────────────
      const btns = [...page.querySelectorAll('.filt')];
      const projs = [...page.querySelectorAll('[data-techs]')];

      function applyFilter(f) {
        btns.forEach(b => b.classList.toggle('is-active', b.dataset.f === f));
        projs.forEach(p => {
          const techs = p.dataset.techs.split(',').map(s => s.trim());
          p.style.display = (f === 'all' || techs.includes(f)) ? '' : 'none';
        });
      }

      btns.forEach(b => b.addEventListener('click', () => applyFilter(b.dataset.f)));
      applyFilter('all');

      // ── Scroll reveal ────────────────────────────────────────────────────
      const reveals = [page.querySelector('.masthead'), ...page.querySelectorAll('article')];

      function show(el) { el.classList.add('is-visible'); }

      function check() {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        reveals.forEach(el => {
          if (el.classList.contains('is-visible')) return;
          const r = el.getBoundingClientRect();
          if (r.top < vh * 0.92 && r.bottom > 0) show(el);
        });
      }

      check();
      requestAnimationFrame(check);
      window.addEventListener('scroll', check, { passive: true });
      window.addEventListener('resize', check);

      if (typeof IntersectionObserver === 'function') {
        const io = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
        }, { threshold: 0.1 });
        reveals.forEach(el => io.observe(el));
      }

      setTimeout(() => reveals.forEach(show), 2500);
    })();
  </script>

  <script>
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const sunIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"></path></svg>';
    const moonIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 9 9 0 1 0 20 14.5z"></path></svg>';
    
    function updateIcon() {
      toggle.innerHTML = html.classList.contains('dark') ? sunIcon : moonIcon;
    }
    
    function switchTheme() {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.remove('light');
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      updateIcon();
    }
    
    toggle.addEventListener('click', switchTheme);
    updateIcon();
  </script>
</body>
</html>

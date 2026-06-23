<!DOCTYPE html>
<html lang="en">
<head>
<?php
$page_title = 'Pim Willems';
include 'head.php';
?>
  <style>
    html, body { height: 100%; }

    .page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 28px 34px 22px;
      overflow: auto;
    }

    .main {
      flex: 1;
      display: flex;
      gap: 44px;
      padding-top: 40px;
      min-height: 0;
    }

    .left {
      width: 430px;
      flex: none;
      display: flex;
      flex-direction: column;
    }

    .blurb {
      margin: 0;
      font-size: 26px;
      line-height: 1.22;
      font-weight: 500;
      text-wrap: pretty;
      letter-spacing: -0.01em;
    }

    .blurb .hi { color: var(--accent); }

    .name {
      margin: auto 0 -12px;
      font-weight: 800;
      font-size: 124px;
      line-height: 0.82;
      letter-spacing: -0.05em;
    }

    .name .period { color: var(--accent); }

    .grid {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr 1fr;
      gap: 16px;
      min-height: 0;
    }

    .grid image-slot {
      width: 100%;
      height: 100%;
    }

    .footer-bar {
      flex: none;
      margin-top: 26px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;
      font-size: 15px;
      flex-wrap: wrap;
      gap: 12px;
    }

    .footer-bar a { color: inherit; text-decoration: none; }
    .footer-arrow { font-size: 18px; color: var(--accent); }

    @media (max-width: 768px) {
      .page {
        padding: 20px 20px 16px;
      }
      
      .main {
        flex-direction: column;
        gap: 24px;
        padding-top: 20px;
      }

      .left {
        width: 100%;
      }

      .name {
        font-size: 64px;
      }

      .blurb {
        font-size: 18px;
      }

      .grid {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        gap: 12px;
      }
    }

    @media (max-width: 480px) {
      .page {
        padding: 16px 16px 12px;
      }

      .main {
        gap: 16px;
        padding-top: 16px;
      }

      .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }

      .name {
        font-size: 48px;
        margin: auto 0 -8px;
      }

      .blurb {
        font-size: 16px;
      }

      .footer-bar {
        font-size: 13px;
        gap: 8px;
      }
    }
  </style>
</head>
<body>
  <main class="page">

    <?php
    $nav_back_href  = 'work.php';
    $nav_back_label = 'work&nbsp;→';
    $contact_href   = 'https://www.linkedin.com/in/pimwillems-frontend-developer/';
    include 'nav.php';
    ?>

    <div class="main">
      <div class="left">
        <p class="blurb">Tilburg based teacher at Fontys ICT and frontend engineer. Table tennis player and runner — building visual worlds populated by <span class="hi">symbols</span>, all with play at heart.</p>
        <h1 class="name">Pim<br>Willems<span class="period">.</span></h1>
      </div>

      <div class="grid">
        <?php
        $slots = [
            ['id' => 'pf-1', 'accent' => true,  'label' => 'symbol 01'],
            ['id' => 'pf-2', 'accent' => false, 'label' => 'symbol 02'],
            ['id' => 'pf-3', 'accent' => false, 'label' => 'symbol 03'],
            ['id' => 'pf-4', 'accent' => false, 'label' => 'symbol 04'],
            ['id' => 'pf-5', 'accent' => true,  'label' => 'symbol 05'],
            ['id' => 'pf-6', 'accent' => false, 'label' => 'symbol 06'],
        ];

        foreach ($slots as $slot):
            $class = $slot['accent'] ? ' class="is-accent"' : '';
        ?>
          <image-slot
            id="<?= htmlspecialchars($slot['id']) ?>"
            shape="rounded" radius="6" fit="cover"
            placeholder="<?= htmlspecialchars($slot['label']) ?>"
            <?= $class ?>></image-slot>
        <?php endforeach; ?>
      </div>
    </div>

    <footer class="footer-bar">
      <a href="work.php">recent work</a>
      <span class="footer-arrow">↓</span>
      <a href="work.php">view all</a>
    </footer>

  </main>
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

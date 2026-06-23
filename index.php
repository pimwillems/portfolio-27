<!DOCTYPE html>
<html lang="en">
<head>
<?php
$page_title = 'Pim Willems';
include 'partials/head.php';
?>
  <style>
    html, body { height: 100%; }

    .page {
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 28px 34px 22px;
      overflow: hidden;
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
    }

    .footer-bar a { color: inherit; text-decoration: none; }
    .footer-arrow { font-size: 18px; color: var(--accent); }
  </style>
</head>
<body>
  <main class="page">

    <?php
    $nav_back_href  = 'work.php';
    $nav_back_label = 'work&nbsp;→';
    include 'partials/nav.php';
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
</body>
</html>

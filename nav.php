<?php
/**
 * Shared navigation bar.
 *
 * Expects the including file to have set:
 *   string $nav_back_href    — href for the left link
 *   string $nav_back_label   — text for the left link (HTML-safe)
 *   string $contact_href     — href for the contact pill  (default '#')
 */
$contact_href ??= '#';
?>
<nav class="nav">
  <a href="<?= htmlspecialchars($nav_back_href) ?>" class="nav-link"><?= $nav_back_label ?></a>
  <a href="<?= htmlspecialchars($contact_href) ?>" class="nav-contact">contact&nbsp;→</a>
</nav>

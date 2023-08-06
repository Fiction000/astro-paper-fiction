---
layout: ../layouts/AboutLayout.astro
title: "About"
---

# このブログについて

ウェブ開発、デジタルマーケティング周りで働いている人のブログ。

主なトピックは**映画/海外ドラマ**、**読書記録**、**SEO/Web**、**データ分析**あたりです（たぶん）。

{
// only display if at least one social link is enabled
socialCount > 0 && (

  <div class="social-wrapper">
    <div class="social-links">経歴などはこちらから → </div>
    <Socials />
  </div>
)
}

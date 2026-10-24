---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Hello! I am **Migyeong Kang**, a Ph.D. candidate in Applied Artificial Intelligence at **Sungkyunkwan University (SKKU)**, advised by [Prof. Jinyoung Han](https://sites.google.com/site/jyhantop/jinyoung-han-ph-d). I expect to graduate in **February 2027**.

My research focuses on **natural language processing (NLP) for mental health**, particularly mental disorder detection using deep learning and large language models. Building on this work, I aim to develop AI systems for mental health support and counseling, with an emphasis on human–computer interaction (HCI) and human–AI alignment.

I was a Visiting Scholar at Indiana University Bloomington from September 2024 to March 2025, working with [Prof. Haewoon Kwak](https://haewoon.github.io/) and [Prof. Jisun An](https://jisun.me/).

You can find my research on the [Publications]({{ '/publications/' | relative_url }}) page and download my [CV]({{ '/cv/' | relative_url }}).

## News

- **2026:** Two papers, **Same Symptoms, Different Severity?** and **SCENE**, were accepted to **Findings of EMNLP 2026**.
- **September 2026:** Our SCENE research was featured in [University Journal (대학저널)](https://dhnews.co.kr/news/view/1065598902277328).
- **2026:** **SynSym** was accepted to the **KDD 2026 Datasets and Benchmarks Track**. [Paper](https://doi.org/10.1145/3770854.3785698)

## Selected Publications

<div class="publications-page selected-publications">
{% assign selected_ids = "C-4,C-8,C-10" | split: "," %}
{% for selected_id in selected_ids %}
{% assign paper = site.data.papers | where: "id", selected_id | first %}
<article class="selected-publication">
  <a class="selected-publication__image" href="{{ paper.image | relative_url }}" aria-label="View full-size figure for {{ paper.title | escape }}">
    <img src="{{ paper.image | relative_url }}" alt="{{ paper.image_alt | escape }}" loading="lazy" decoding="async">
  </a>
  <div class="selected-publication__details">
  <h3 class="paper-title">{{ paper.title | escape }}</h3>
  <p class="paper-authors">{{ paper.authors | escape | replace: 'Migyeong Kang', '<strong>Migyeong Kang</strong>' | replace: '**', '<sup>DOUBLESTAR</sup>' | replace: '*', '<sup>*</sup>' | replace: 'DOUBLESTAR', '**' }}</p>
  <p class="paper-venue">{{ paper.venue | escape }}</p>
  <div class="paper-links">
    {% for link in paper.links %}
    <a class="paper-link--{{ link.label | downcase }}" href="{{ link.url }}">{{ link.label }} <span aria-hidden="true">↗</span></a>
    {% endfor %}
  </div>
  </div>
</article>
{% endfor %}
</div>

[View all publications]({{ '/publications/' | relative_url }})

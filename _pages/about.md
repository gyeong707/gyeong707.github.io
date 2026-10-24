---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Hello! I am **Migyeong Kang**, a Ph.D. candidate in Applied Artificial Intelligence at **Sungkyunkwan University (SKKU)**, advised by [Prof. Jinyoung Han](https://sites.google.com/site/jyhantop/jinyoung-han-ph-d). I expect to graduate in **February 2027**.

My research focuses on using **natural language processing (NLP) to address challenges in mental health**. My work so far has centered on **mental disorder detection using deep learning and large language models**. I aim to explore broader applications in mental health, including **support and counseling**, drawing on **human–computer interaction (HCI) and human–AI alignment**.

I was a Visiting Scholar at Indiana University Bloomington from September 2024 to March 2025, working with [Prof. Haewoon Kwak](https://haewoon.github.io/) and [Prof. Jisun An](https://jisun.me/).

You can find my research on the [Publications]({{ '/publications/' | relative_url }}) page and download my [CV]({{ '/cv/' | relative_url }}).

## News

- **2026:** Two papers, **Same Symptoms, Different Severity?** and **SCENE**, were accepted to **Findings of EMNLP 2026**.
- **September 2026:** Our SCENE research was featured in [University Journal (대학저널)](https://dhnews.co.kr/news/view/1065598902277328).
- **2026:** **SynSym** was accepted to the **KDD 2026 Datasets and Benchmarks Track**. [Paper](https://doi.org/10.1145/3770854.3785698)

## Selected Publications

{% assign selected_ids = "C-4,C-8,C-10,C-9" | split: "," %}
{% for selected_id in selected_ids %}
{% assign paper = site.data.papers | where: "id", selected_id | first %}
<article class="publication-entry" style="margin-bottom: 1.75em;">
  <h3 style="margin-top: 1em; margin-bottom: 0.35em;">{{ paper.title | escape }}</h3>
  <p style="margin-bottom: 0.35em;">{{ paper.authors | escape | replace: 'Migyeong Kang', '<strong>Migyeong Kang</strong>' | replace: '**', '<sup>DOUBLESTAR</sup>' | replace: '*', '<sup>*</sup>' | replace: 'DOUBLESTAR', '**' }}</p>
  <p style="margin-bottom: 0.5em;"><em>{{ paper.venue | escape }}</em></p>
  <div>
    {% for link in paper.links %}
    <a class="btn btn--inverse" href="{{ link.url }}">{{ link.label }}</a>
    {% endfor %}
  </div>
</article>
{% endfor %}

[View all publications]({{ '/publications/' | relative_url }})

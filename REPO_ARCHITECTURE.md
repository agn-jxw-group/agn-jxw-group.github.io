# Proposed production repository

The production repository is intentionally small and content-first.

```text
agn-jxw-group/
├── README.md                         how to preview and contribute
├── astro.config.mjs                 Astro and GitHub Pages settings
├── package.json                     build tools and commands
├── public/
│   ├── fonts/                       optional locally hosted approved fonts
│   ├── images/
│   │   ├── hero/
│   │   ├── research/<story-slug>/   paper figures and illustrations
│   │   ├── people/                  portraits
│   │   ├── facilities/              mission/telescope images
│   │   └── activities/<event-slug>/ gallery photographs
│   └── favicon.svg
├── src/
│   ├── content.config.ts            required fields and validation rules
│   ├── content/
│   │   ├── research/                one MDX file per public story
│   │   ├── people/                  one Markdown file per member
│   │   ├── facilities/              one Markdown file per facility
│   │   ├── activities/              one Markdown file per event
│   │   ├── news/                    dated homepage and archive announcements
│   │   └── research-categories/     the four public research questions
│   ├── pages/
│   │   ├── index.astro
│   │   ├── research/
│   │   │   ├── index.astro
│   │   │   └── [pillar]/            pillar index and nested story pages
│   │   ├── team.astro
│   │   ├── facilities.astro
│   │   ├── activities/              index and event pages
│   │   ├── news/                    chronological News archive
│   │   └── join.astro
│   ├── layouts/                      shared page and story frames
│   ├── components/                  header, footer, cards, person rows
│   ├── styles/                       NASA-inspired tokens and layout rules
│   └── config/                       site identity, navigation, contacts
├── templates/                       copyable Markdown and MDX examples
│   ├── research-story.mdx
│   ├── person.md
│   ├── facility.md
│   ├── activity.md
│   └── news.md
└── .github/
    ├── workflows/deploy.yml          automatic GitHub Pages publication
    └── pull_request_template.md       contribution checklist
```

## Example research story

```mdx
---
title: "The soft X-ray glow follows the disk"
publicQuestion: "What creates the mysterious soft X-ray excess?"
pillar: feeding
date: 2025-10-18
authors: [Shi-Jiang Chen, Jun-Xian Wang, Jia-Lai Kang]
paperUrl: https://doi.org/...
paperTitle: The exact original paper title
citation: Chen, S.-J., Wang, J.-X., Kang, J.-L., et al. 2025, ApJ, 995, 197
leadership: Led by Shi-Jiang Chen in the USTC group.
figure: /images/research/soft-excess.png
figureAlt: Soft X-ray strength plotted against ultraviolet luminosity.
figureCredit: Figure 2 from Chen et al. (2025).
draft: false
---

Most matter does not fall directly into a black hole...

<StoryFigure
  src="/images/research/soft-excess.png"
  alt="Describe the pattern for a reader who cannot see it."
  caption="Explain what the public should notice."
  credit="Figure 2 from Chen et al. (2025), ApJ."
  size="standard"
/>

The physical interpretation, including important caveats.
```

## Example person

```md
---
name: Example Name
nameZh: 示例姓名
role: Graduate student
group: graduate
order: 6
initials: EN
portrait: /images/people/example-name.webp
interests: [AGN variability, accretion disks]
homepage: https://example.edu/
---

Two or three friendly sentences written for prospective students.
```

Save profiles with surname-first filenames (for example, `chen-shi-jiang.md`). The filename supplies the stable Team anchor. For students, `order` records grade seniority, with `1` as the most senior rank; equal ranks are alphabetized by filename.

The schema in `content.config.ts` checks these fields. If someone forgets a title, portrait, alternative text, or figure credit, the website build fails with a useful error before the pull request is merged.

## What belongs in Git

Commit source pages, Markdown, configuration, small optimized web images, fonts with suitable licenses, and the package lockfile.

Do **not** commit `node_modules/`, build output such as `dist/`, local preview caches, environment files, or macOS `.DS_Store` files. GitHub rebuilds those automatically.

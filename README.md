# Watching Cosmic Lighthouses

[Watching Cosmic Lighthouses](https://agn-jxw-group.github.io/) is the public website of the USTC AGN & X-ray Astrophysics Group led by Jun-Xian Wang, Zhen-Yi Cai, and Teng Liu.

The website has two main purposes:

- explain our research on active galactic nuclei, supermassive black holes, and the X-ray Universe in clear, engaging language accessible to the public;
- introduce the group to prospective students—especially undergraduates—and help them find a way into astronomical research.

The site is actively maintained. Group members and alumni are encouraged to correct existing material and contribute new research stories, profiles, facilities, news, and activity photographs.

## How the website is built

The site uses [Astro](https://astro.build/) to turn small content files and reusable page components into a fast static website. Most contributors only need to edit Markdown; knowledge of HTML, CSS, or JavaScript is not normally required.

In simplified form, the build works like this:

1. Content is written in Markdown (`.md`) or MDX (`.mdx`) under `src/content/`.
2. `src/content.config.ts` checks that required information—such as titles, image descriptions, and credits—is present.
3. Files under `src/pages/` and `src/layouts/` arrange that content into pages.
4. Reusable interface elements live in `src/components/`.
5. `src/styles/global.css` applies the common visual language across the site.
6. Astro generates ordinary static HTML, CSS, and images for GitHub Pages.

Research stories use MDX because it combines normal Markdown with simple components such as `<StoryFigure>`, allowing figures to appear beside the paragraphs that explain them.

### Design language

The interface is inspired by NASA's Horizon Design System: immersive astronomical imagery, Inter headlines, Public Sans body text, DM Mono labels, carbon-black surfaces, thin dividers, restrained red accents, and circular-arrow actions. The layout is responsive and is designed to remain readable on desktop, tablet, and phone screens.

This is an independent USTC group website and is not affiliated with NASA. Retain all font, image, observatory, mission, artist, and paper credits when modifying the site.

## Website modules and where to edit them

| Module | Public route | Main content | Page/layout code | Images |
| --- | --- | --- | --- | --- |
| Home | `/` | `src/config/site.ts` and recent entries from `src/content/news/` | `src/pages/index.astro` | `public/images/hero/` and images selected by News records |
| Research overview and pillars | `/research/` | `src/content/research-categories/` | `src/pages/research/index.astro` and `src/pages/research/[pillar]/index.astro` | `public/images/research/categories/` |
| Research stories | `/research/<pillar>/<story>/` | `src/content/research/` | `src/pages/research/[pillar]/[slug].astro` | `public/images/research/` |
| Team | `/team/` | `src/content/people/` | `src/pages/team.astro` | `public/images/people/` |
| Past members | `/team/past-members/` | `src/content/past-members/` | `src/pages/team/past-members.astro` | `public/images/people/past/` |
| Facilities | `/facilities/` | `src/content/facilities/` | `src/pages/facilities.astro` | `public/images/facilities/` |
| Activities | `/activities/` | `src/content/activities/` | `src/pages/activities/` | `public/images/activities/<event>/` |
| News | `/news/` | `src/content/news/` | `src/pages/news/index.astro` and `src/components/NewsCard.astro` | Any suitable credited image under `public/images/` |
| Join us | `/join/` | PI contacts in `src/config/site.ts`; introductory wording in `src/pages/join.astro` | `src/pages/join.astro` | None currently required |

Other important locations:

- `src/config/site.ts`: site name, descriptor, homepage hero text, navigation labels, and PI contact information.
- `src/content.config.ts`: validated fields accepted by every content collection.
- `src/styles/global.css`: global colors, fonts, spacing, responsive behavior, and shared visual rules.
- `src/components/`: reusable header, footer, links, News cards, and research figures.
- `templates/`: safe starting examples for new content.
- `public/images/`: web-ready images that are published with the site.
- `source-assets/`: local, Git-ignored originals and editorial source material; files here never appear on the website directly.

## Preview the website locally

Install [Node.js 22](https://nodejs.org/), then run:

```sh
npm install
npm run dev
```

Open the local address printed in the terminal, usually `http://127.0.0.1:4321/`. The development server watches the source files: saving a Markdown, MDX, Astro, or CSS file normally updates the open page automatically.

Before submitting any change, run:

```sh
npm run build
```

The build performs Astro type and content validation, generates the complete website, and checks internal links, public asset paths, image alternatives, and research-figure captions.

## How to contribute

For a small correction, edit the relevant file directly in a branch or fork. For a new entry, copy the closest example from `templates/`, rename it appropriately, and fill in its front matter and body. Submit the result as a Pull Request.

Please keep these principles in mind:

- **Content contributions should normally modify only `.md` or `.mdx` files. Please do not modify shared `.astro` or `.css` files without approval from a repository administrator.** For most contributions, editing `.md` or `.mdx` files is sufficient.
- Write for the public. Explain the question and result before introducing specialist terminology.
- Place published images below `public/images/`, then reference them from the relevant `.md` or `.mdx` files.
- Avoid adding unnecessarily large images, which can slow page loading. If a full-resolution file is needed, link to an externally hosted copy instead.
- Include research led by, or scientifically central to, the group; avoid papers in which group involvement is only marginal.
- Every image needs useful alternative text and an explicit credit. Use an authoritative source link where applicable.
- Run `npm run build` and inspect the affected page on both a wide and narrow screen before opening a Pull Request.

> [!NOTE]
> **Preparing figures for the website:** keep the full-resolution original in `source-assets/` and publish only the web-ready copy under `public/images/`. For photographs or artist impressions, create a high-quality JPEG with `sips -Z 2560 -s format jpeg -s formatOptions 96 INPUT_IMAGE --out public/images/PATH/OUTPUT.jpg`. For scientific plots, preserve PNG and its original resolution; reduce its file size losslessly with `oxipng -o 4 --out public/images/PATH/OUTPUT.png INPUT_IMAGE.png` (install with `brew install oxipng` on macOS). Do not use lossy PNG tools such as `pngquant` for scientific figures, and always inspect labels, curves, and fine details before committing the result.

### Research stories

Copy `templates/research-story.mdx` into `src/content/research/`. Use a short lowercase filename; this filename becomes the final part of the story URL.

The public story title and summary should emphasize the main scientific result without overstating it. `paperTitle` must reproduce the original paper title, while `citation` should use standard astronomy formatting, for example:

```text
Petrucci, P. O., Gronkiewicz, D., Rozanska, A., et al. 2020, A&A, 634, A85
```

Place each `<StoryFigure>` immediately after the paragraph that introduces it. Every figure requires:

- `src`: a path beginning with `/images/`;
- `alt`: what the figure shows for a reader who cannot see it;
- `caption`: what the reader should notice or learn;
- `credit`: the paper figure, observatory, artist, or institution that supplied it.

Use `figure` for the primary article image and optional `cardFigure` for a simpler crop on compact cards. Use `size="narrow"` or `size="standard"` for lower-resolution plots rather than upscaling them.

Research-pillar introductions and their external paper lists live separately in `src/content/research-categories/`. Each pillar record also controls its heading and credited hero image.

### Team profiles

Copy `templates/person.md` into `src/content/people/`. Use a surname-first filename such as `chen-shi-jiang.md`, while keeping the displayed name in its natural form (`Shi-Jiang Chen`). The filename also becomes the stable Team anchor: `/team/#chen-shi-jiang`.

Available groups are `leaders`, `postdocs`, `graduate`, `undergraduate`, and `visiting`. For students, `order` represents academic seniority within the section: `1` is the most senior rank, followed by `2`, and so on. People at the same rank are alphabetized by surname-first filename.

Write the biography below the closing `---`. Ordinary Markdown links are supported, for example:

```md
Working with [Prof. Example](https://example.edu/).
```

Portraits are optional. If no portrait is supplied, the site shows the person's initials.

### Past members

Copy `templates/past-member.md` into `src/content/past-members/`. Keep one surname-first file per person and record multiple stages in that same file. Names are required; Chinese names, portraits, roles, dates, and a one-sentence Markdown note are optional. Omit information that cannot be verified rather than guessing it.

### Facilities

Copy `templates/facility.md` into `src/content/facilities/`. Describe both what the instrument does and how the group uses or participates in it. `relatedPapers` should contain only directly relevant group-led work; leave the list empty when no appropriate paper is available.

### Activities

Copy `templates/activity.md` into `src/content/activities/`. Store its photographs in a dedicated folder below `public/images/activities/`. Set `consentConfirmed: true` only after confirming that identifiable participants permit public use of the photographs.

### News

Copy `templates/news.md` into `src/content/news/`. News entries may link to internal pages or complete external URLs. The homepage displays exactly one published entry with `pinned: true`, followed by the four newest non-pinned entries; `/news/` contains the complete archive in reverse chronological order. Keep exactly one non-draft entry pinned, or the build will fail.

## What belongs in Git

Commit source pages, Markdown and MDX content, configuration, templates, scripts, the package lockfile, and optimized images under `public/images/`.

Do not commit:

- `node_modules/`;
- generated output such as `dist/` or `.astro/`;
- `.env` files;
- macOS `.DS_Store` files;
- local originals or working documents in `source-assets/`.

These exclusions are already recorded in `.gitignore`.

## Deployment

The site is hosted as the `agn-jxw-group` organization website at [https://agn-jxw-group.github.io/](https://agn-jxw-group.github.io/). Pull requests and pushes are validated by `.github/workflows/check.yml`.

Publication is handled by `.github/workflows/deploy.yml`. Repository administrators can run **Deploy GitHub Pages (review gate)** from the Actions tab when the repository variable `ENABLE_PAGES_DEPLOY` is set to `true`.

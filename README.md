# USTC Active Universe

The public website for the USTC AGN & X-ray Astrophysics Group. It is a static [Astro](https://astro.build/) site: most updates are Markdown files, so contributors do not need to understand the page code.

## Preview on your computer

Install [Node.js 22](https://nodejs.org/), then run:

```sh
npm install
npm run dev
```

Open the address printed in the terminal. Before opening a pull request, run `npm run build`. To imitate the GitHub project URL, run `BASE_PATH=/agn-jxw-group/ npm run build` and then `BASE_PATH=/agn-jxw-group/ npm run preview`.

## The simple mental model

- `src/config/site.ts` controls the site name, descriptor, hero text, navigation and group-leader contacts.
- `src/content/research/` contains one MDX file per paper story.
- `src/content/research-categories/` contains the four public research questions and their credited hero images.
- `src/content/people/` contains one Markdown file per person.
- `src/content/facilities/` contains one Markdown file per telescope or mission.
- `src/content/activities/` contains one Markdown file per event.
- `src/content/news/` contains one Markdown file per homepage/archive announcement.
- `public/images/` contains optimized images used by those files.
- `source-assets/` is a local, Git-ignored archive for originals and editorial source files. The website serves only the optimized copies in `public/images/`.
- `templates/` contains safe examples to copy.

The front matter at the top of each Markdown or MDX file is checked by `src/content.config.ts`. Missing figure credit, alternative text or other required information stops the build before it can be merged.

Research URLs follow the content hierarchy: `/research/` introduces the four questions, `/research/feeding/` shows one pillar, and `/research/feeding/universal-quasar-sed/` contains a complete story.

## Add something

Copy the closest file from `templates/`, rename it with a short lowercase slug, fill in every field, and put its image in the matching `public/images/` folder. Research stories use the `.mdx` extension: this behaves like ordinary Markdown but also lets you place a `<StoryFigure>` between the paragraphs that discuss it. See `templates/research-story.mdx` for a complete example.

Use `figure` for the primary story/social image and, when useful, `cardFigure` for a simpler crop on the research pillar page. News records choose their own display image and may reuse that crop. Every `<StoryFigure>` requires `src`, `alt`, `caption`, and `credit`; `sourceUrl` and `size` are optional. `caption` should say what the reader should notice. `credit` should identify the paper figure, observatory, artist, or institution. Images must live below `public/images/`, and the MDX path must begin `/images/`—the build rejects figures that point into `/tmp`, ScholarAIO, or `source-assets`.

The “Read the research” panel is generated from `paperTitle`, `citation`, and `paperUrl`. Copy the original published title exactly and format the citation in the standard astronomy style, for example `Petrucci, P. O., Gronkiewicz, D., Rozanska, A., et al. 2020, A&A, 634, A85`. Keep the story public-facing: begin with the question, place each figure near its explanation, and state the main caveat.

For Team profiles, use a surname-first filename such as `chen-shi-jiang.md`, while keeping the displayed `name` in its natural form (`Shi-Jiang Chen`). The filename becomes the stable Team anchor, so links to this example end in `/team/#chen-shi-jiang`. For students, `order` is the seniority rank within the section: `1` is the most senior grade, then `2`, and so on. People with the same rank are alphabetized by their surname-first filename. The `leaders`, `postdocs`, and `past` sections may use `order` for their explicit group ordering.

Write the biography below the closing `---` in the person file. It supports normal Markdown links such as `[Prof. Claudio Ricci](https://www.claudioricci.eu)`. The older `bio:` front-matter field remains supported for existing profiles. Available `group` values are `leaders`, `postdocs`, `graduate`, `undergraduate`, `visiting`, and `past`.

For News, copy `templates/news.md`. The homepage shows exactly one published entry with `pinned: true` plus the four newest non-pinned entries; `/news/` shows the complete archive in reverse chronological order. The optional `url` accepts either an internal `/path/` or a complete `https://` link. News body text is not displayed in v1. Keep exactly one non-draft entry pinned or the build will stop with an explanatory error.

Each research-category file also records `heroImage`, `heroAlt`, `heroCredit`, and `heroSourceUrl`. Keep the source URL authoritative and describe what the image shows rather than repeating its filename. Photographic or rendered hero images may use high-quality JPEG/WebP; plots and diagrams should remain lossless PNG whenever the source permits so labels and fine lines stay sharp. Never upscale a plot: choose `narrow` or `standard` when the native file is small.

## Publication status

Pull requests and pushes are validated automatically. Public deployment is intentionally gated: the manual Pages workflow runs only after repository administrators create the variable `ENABLE_PAGES_DEPLOY=true`. Do not enable it until the group has reviewed the content and supplied its official remote.

## Design provenance

The interface is inspired by NASA’s Horizon Design System—Inter headlines, Public Sans body text, DM Mono labels, carbon surfaces, thin rules, restrained NASA red and circular-arrow actions. It is an independent USTC site and is not affiliated with NASA. Inter and DM Mono files were sourced from the local NASA HDS reference repository; Public Sans is provided by Fontsource. Retain all upstream font and image credits when redistributing the site.

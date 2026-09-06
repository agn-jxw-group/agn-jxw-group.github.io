# USTC Active Universe — website brief

## The one-sentence idea

Build a public, image-led science magazine for the USTC black-hole and X-ray astronomy group—not an online CV or a publication database.

## Recommended name and homepage message

**Site name:** USTC Active Universe

**Hero headline:** How Black Holes Light Up the Universe

**Subheading:** We study how supermassive black holes feed, flicker, and reshape their surroundings—and use the X-ray sky to uncover the most energetic objects in the cosmos.

This keeps “AGN” in the scientific identity and search metadata, but does not require a first-year undergraduate to know the acronym before the site becomes interesting.

Strong alternate headlines:

- Feeding giants. Flickering skies.
- Inside the restless universe.
- Where black holes come alive.

## Research structure

Use four questions that a non-specialist can understand.

### 1. How do supermassive black holes feed?

This is the physics of the central engine: accretion disks, disk winds, hot and warm coronae, the soft X-ray excess, extreme-UV spectral energy distributions, and changing-look accretion.

Starter story candidates:

- **Accretion disks:** Cai & Wang (2023, *Nature Astronomy*) and the relevant Cai et al. (2024) paper.
- **Hot coronae:** the lead papers by Jia-Lai Kang and collaborators, including Kang & Wang (2024) on joint XMM–Newton/NuSTAR measurements.
- **Warm coronae:** the lead papers by Shi-Jiang Chen and collaborators, including the 2025 UV-to-X-ray soft-excess series.

### 2. Why do supermassive black holes flicker?

Optical/UV/X-ray variability, continuum reverberation, stochastic disk fluctuations, variability timescales, changing-look AGN, and exceptionally stable quasars.

Starter story candidates:

- Su et al. (2024), why an AGN's measured inter-band lag can change from one observing campaign to another.
- Su et al. (2025), seasonal versus six-year lags in 94 ZTF AGN.
- Su et al. (2024), a variability-timescale relation extending toward intermediate-mass black holes.

### 3. How do supermassive black holes reshape galaxies?

The life cycle of AGN, obscured and unobscured evolutionary stages, circumnuclear gas and dust, winds and outflows, feedback, and the co-evolution of black holes and their host galaxies. The dusty torus, polar dust, ionization cones, and gas supply are supporting evidence about the environment and evolutionary state, rather than the final story by themselves.

Starter story candidates:

- Wu et al. (2023), ensemble mapping of the torus and ionization cone in luminous quasars.
- Wu et al. (2024), the link between optical variability and near-infrared covering factor.

The Wu et al. papers can introduce how we infer the geometry and feeding environment around an unresolved AGN. Forthcoming group papers can then carry the section into the AGN life cycle and galaxy-scale feedback. For published stories, distinguish evidence for the circumnuclear environment from direct evidence for feedback through outflows, energetics, or changes in the host galaxy.

### 4. What lights up the X-ray sky?

AGN surveys, transients, X-ray binaries, galaxy clusters, the hot circumgalactic medium, catalog construction, and source-detection methods.

Starter story candidates:

- Liu et al. (2021), the eFEDS AGN catalogue and X-ray spectral properties.
- Liu et al. (2021), the simulation-driven eROSITA source-detection strategy.
- Liu et al. (2022), the 9,515-source eROSITA extragalactic CalPV catalogue.

This fourth pillar should stay broader than AGN. It is the natural home for Prof. Teng Liu's survey, cluster, Galactic, and compact-object work without forcing marginal papers into an AGN-only narrative.

## Rule for choosing papers

A paper becomes a website story only if at least one of these is true:

1. A current group member is first author or corresponding author.
2. A student/postdoc in the group led the analysis and a group PI supervised it.
3. A PI had a clearly documented leadership role in a major survey/catalogue product.

Large collaborations in which a group member is only one of many contributors can appear in a complete publication list, but not as a highlighted research story.

Each story should contain:

- one human question;
- one short answer in plain language;
- one carefully selected figure from the paper;
- a caption that explains what the reader should notice;
- a 400–800 word narrative: problem → method → result → why it matters;
- paper, arXiv, data, and code links;
- image/figure credit and reuse status.

## NASA-inspired design language

Copy the system, not NASA's protected identity marks.

- Full-width, high-quality astronomy imagery.
- Large, tightly spaced Inter headlines.
- Public Sans for readable paragraphs.
- DM Mono for dates, labels, coordinates, and technical metadata.
- Mostly black, white, and carbon-gray surfaces.
- One restrained signal-red accent for links and circular arrow buttons.
- Editorial layouts with strong asymmetry and generous whitespace.
- Thin dividers, square/low-radius cards, and simple line icons.
- Photo credits always visible.
- Motion limited to short fades, image zooms, and arrow movement; honor reduced-motion settings.

Do not copy NASA's logo, insignia, “worm,” or make the page appear to be NASA-affiliated.

## Recommended technology, in plain language

**Recommendation: Astro + Markdown + a small amount of CSS.**

Think of Astro as the machine that assembles the website, Markdown as the forms group members fill in, and CSS as the visual rulebook.

The maintainable content model should look like this:

```text
src/content/
  research/      one Markdown file per science story
  people/        one Markdown file per person
  facilities/    one Markdown file per telescope or mission
  activities/    one Markdown file per event/gallery
```

A contributor should normally need to do only three things:

1. copy an example Markdown file;
2. edit the text fields and add images;
3. open a GitHub pull request.

They should not need to edit layout code. The build should reject missing required fields or broken image references before a pull request can be merged.

## Hosting recommendation

Start with **GitHub Pages** under a group-owned GitHub organization.

Why it fits:

- free for a static public site;
- every change is reviewable through a pull request;
- automatic rebuilds after merging;
- simple rollback to an earlier version;
- supports a custom domain later.

Use a group-owned repository, not a student's personal account. A good final address would be a USTC subdomain such as `agn.ustc.edu.cn`; USTC IT can point that domain at the GitHub Pages site. Keep the default `github.io` address as a fallback.

If university policy prevents GitHub Pages or access from mainland China is too unreliable, deploy the same static build to USTC-managed web hosting. The content files and workflow do not have to change.

## Content still needed from the group

- Official English and Chinese group names.
- USTC/group logo usage permission and source files.
- Current and past member roster, preferred names/pronouns, bios, interests, links, and portraits.
- Confirmation of all highlighted-paper leadership roles.
- Original paper figures plus their reuse permissions/credits.
- Official facility images or approved image sources and credits.
- Activity photos with participant consent and captions.
- Whether the first release is English-only or bilingual.
- The preferred contact policy: direct PI emails, a shared group email, or both.

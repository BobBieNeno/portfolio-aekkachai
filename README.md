# UI SENJOR. — CS Portfolio

A modern, minimal portfolio website for a Computer Science graduate.  
Design inspired by the monochrome geometric aesthetic of the reference mockup.

## Tech Stack

- **React 18** + **Vite**
- **Pure CSS** (no UI library) — DM Sans & DM Mono fonts
- Component-based architecture

## Project Structure

```
src/
├── components/
│   ├── Navbar/       — Fixed top nav with scroll detection
│   ├── Hero/         — Full-screen landing with geometric shapes
│   ├── About/        — Bio, stats, tags
│   ├── Projects/     — 6-card project grid
│   ├── Skills/       — Skill bars grouped by category
│   ├── Contact/      — Form + social links
│   └── Footer/       — Logo, links, back-to-top
├── hooks/
│   └── useScrollReveal.js
├── utils/
│   └── helpers.js
├── App.jsx
├── App.css
├── index.css         — CSS variables & base styles
└── main.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Customisation

All design tokens (colors, radii, shadows, fonts) live in `src/index.css` as CSS variables.  
Update the `PROJECTS`, `SKILL_GROUPS` and `SOCIALS` arrays in their respective components.

## Sections

| Section  | ID          | Description                        |
|----------|-------------|------------------------------------|
| Hero     | `#hero`     | Full-viewport landing + shapes     |
| About    | `#about`    | Bio, avatar card, stats            |
| Projects | `#projects` | 6 portfolio project cards          |
| Skills   | `#skills`   | Grouped skill bars                 |
| Contact  | `#contact`  | Contact form + social links        |

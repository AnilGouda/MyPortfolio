# Java Backend Developer Portfolio

A modern, responsive personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion —
designed for a Java / Spring Boot backend developer profile.

## What's inside

- **Hero** — signature element styled as a live API response console (`GET /api/profile → 200 OK`),
  with the tagline typing out inside the JSON body
- **About** — bio, photo, and skills split into **Core/Backend** (Java, Spring Boot, Oracle, MySQL)
  and **Frontend/Supporting** (HTML, CSS, JS DOM, React basics), plus a tools grid
- **Resume** — experience/education timeline, certifications, and resume download
- **Projects** — filterable grid (All / Backend / Full Stack / Database), each card showing a
  one-line architecture note (e.g. "Spring Boot + MySQL, JWT auth") so backend skills are visible
  at a glance
- **Contact** — validated form (EmailJS-ready), copy-to-clipboard email, social links
- Dark mode by default with a light/dark toggle (persisted to localStorage)
- Sticky floating navbar with scroll-spy active-section highlighting
- Scroll-triggered reveal animations throughout, reduced-motion support
- Fully responsive, mobile-first

## 1. Install

```bash
npm install
```

## 2. Add your content

Everything lives in **`src/data/data.js`**:

- `profile` — name, role, tagline, bio, email, resume path, avatar path, `learning` (what you're
  currently picking up)
- `social` — your GitHub / LinkedIn / Instagram URLs
- `coreSkills` — your backend stack + proficiency levels (Java, Spring Boot, Oracle, MySQL)
- `supportingSkills` — your frontend/supporting skills (HTML, CSS, JS, React)
- `toolset` — tools grid (Git, Postman, IntelliJ, etc.)
- `experience` / `education` / `certifications`
- `projects` — include an `architecture` line on each to call out your backend stack

## 3. Add your assets

Drop these into `public/`:

- `public/avatar.jpg` — your profile photo
- `public/resume.pdf` — your resume file

Missing files are handled gracefully — broken images are hidden rather than breaking the layout.

## 4. Enable the contact form (optional)

Sign up at [emailjs.com](https://www.emailjs.com/) (free tier available), create an Email Service
and Template, then open `src/sections/Contact.jsx` and replace `EMAILJS_SERVICE_ID`,
`EMAILJS_TEMPLATE_ID`, and `EMAILJS_PUBLIC_KEY` with your own values. Until then, the form validates
correctly but won't send a real email.

## 5. Run locally

```bash
npm run dev
```

Visit `http://localhost:5173`.

## 6. Build & deploy

```bash
npm run build
```

Outputs a `dist/` folder. Easiest deploy options:

- **Vercel**: `npx vercel`, or connect the repo in the Vercel dashboard
- **Netlify**: drag-and-drop `dist/` at app.netlify.com/drop, or connect the repo
  - Build command: `npm run build`
  - Publish directory: `dist`

## Project structure

```
src/
  components/   → Navbar, Loader, SocialLinks, Reveal (shared UI)
  sections/     → Hero, About, Resume, Projects, Contact, Footer
  data/         → data.js (all your editable content in one place)
  hooks/        → useTheme, useActiveSection
```

## Customizing the design

Colors and fonts live in `tailwind.config.js` under `theme.extend`. Change `teal` and `amber`
to restyle the accent palette; `Space Grotesk` / `Inter` / `IBM Plex Mono` are the three type
roles (display / body / mono) if you want to swap fonts.

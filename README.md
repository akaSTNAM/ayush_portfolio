# Ayush Mandal — Portfolio Website

A dark, dramatic glassmorphism portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Syne (headings) + DM Sans (body) via Google Fonts

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

## Sections
- **Hero** — Name, animated role switcher, CTA buttons
- **About** — Personal details, narrative, stats
- **Skills** — Technical, Tools, Soft skills with progress bars
- **Projects** — Airline Management System card
- **Experience** — Education & Certifications timeline
- **Contact** — Contact form + info card

## Customization
- Update personal info in each component under `/components/`
- Colors defined in `tailwind.config.ts` and `app/globals.css`
- Add your GitHub/LinkedIn links in `Navbar.tsx`, `Hero.tsx`, `Contact.tsx`, `Footer.tsx`

## Deployment
Deploy instantly on [Vercel](https://vercel.com):
```bash
npx vercel
```

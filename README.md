# Jungudo Muhammad Tukur — Personal Portfolio

> **Statistics Student · AI & Data Enthusiast · Software Developer · UI/UX Learner · Technology Innovator**
> Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

---

## Features

- ⚡ Next.js 15+ App Router
- 🎨 Dark-first premium design
- 🌀 Framer Motion animations (respects `prefers-reduced-motion`)
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessible — semantic HTML, ARIA labels, keyboard navigation
- 🔍 SEO-ready — Open Graph, Twitter Card metadata
- 📁 Data-driven architecture — edit content in `src/data/` without touching components
- 📬 Contact form UI (ready to connect to backend)
- 🗂️ Filterable projects grid
- 🖼️ Profile image slot (drop-in ready)
- 📄 CV download button (activate when PDF is ready)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React + React Icons |
| Deployment | Vercel |

---

## Project Structure

```
jungudo-portfolio/
├── public/
│   ├── images/profile/          ← Drop profile photo here
│   └── documents/               ← Drop CV PDF here
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx           ← Metadata, fonts
│   │   ├── page.tsx             ← Main page
│   │   ├── loading.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── BuildingInPublic.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/                    ← Edit content here
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── achievements.ts
│   │   └── social.ts
│   └── lib/
│       └── utils.ts
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/hafeezmt/jungudo-portfolio.git
cd jungudo-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm run start
```

---

## Adding Your Profile Photo

1. Add your photo to `public/images/profile/jungudo-profile.jpg`
2. Open `src/components/Hero.tsx`
3. Set `hasProfileImage = true`

**Recommended:** 800×1000px, JPG/WebP, under 500KB.

---

## Activating the CV Download

1. Add your CV to `public/documents/Jungudo-Muhammad-Tukur-CV.pdf`
2. Open `src/data/profile.ts`
3. Set `cvAvailable: true`

---

## Connecting the Contact Form

The contact form UI is fully built. To activate real email delivery:

**Option 1 — Resend (recommended):**
1. Create an account at [resend.com](https://resend.com)
2. Create `src/app/api/contact/route.ts`
3. Add `RESEND_API_KEY` to `.env.local`
4. Update the form submit handler in `src/components/Contact.tsx`

**Option 2 — Formspree:**
1. Create a form at [formspree.io](https://formspree.io)
2. Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to `.env.local`
3. Update the form action

---

## Adding New Projects

Edit `src/data/projects.ts` and add a new object to the `projects` array:

```ts
{
  id: "my-new-project",
  title: "My Project",
  category: "AI • Web",
  tags: ["AI", "Web"],
  status: "Concept", // "Built" | "Prototype" | "Concept" | "In Development"
  shortDescription: "One sentence summary.",
  description: "Full description.",
  problem: "What problem does it solve?",
  solution: "How does it solve it?",
  technologies: ["Python", "React"],
  featured: false,
}
```

---

## Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Fill in values as needed.

---

## Deployment (Vercel)

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repository directly at [vercel.com](https://vercel.com).

Set environment variables in the Vercel dashboard under **Settings → Environment Variables**.

---

## Author

**Jungudo Muhammad Tukur**
Statistics Student · AI & Data · Software · Innovation
Gombe State, Nigeria

- GitHub: [github.com/hafeezmt](https://github.com/hafeezmt)
- LinkedIn: [linkedin.com/in/jungudo-muh-d-tukur-b76764422](https://www.linkedin.com/in/jungudo-muh-d-tukur-b76764422/)
- Email: Jungudomuhammadtukur@gmail.com

---

© 2026 Jungudo Muhammad Tukur. All rights reserved.

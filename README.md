# Jungudo Muhammad Tukur — Personal Portfolio

> **UI/UX Designer · Product Manager · Tech Entrepreneur · Computer Science & Statistics Student**
> Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

---

## ⚡ Features & Enhancements

- 🍱 **Bento-Grid Architecture**: Modern dark onyx theme (`#070709`) with glowing electric-blue/cyan accents and glassmorphic bento cards.
- ⚡ **Next.js 16 App Router**: Server and client component optimization with static page pre-rendering.
- 🌀 **Framer Motion Micro-Interactions**: Smooth spring physics, cycling titles, animated halo rings, and prefers-reduced-motion support.
- 🔍 **SEO & JSON-LD Structured Data**: Full Person & Organization schema integration for Google search indexing.
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop viewports.
- 📂 **Data-Driven Layer**: Content decoupled from UI components in `src/data/`.
- 🗂️ **Filterable Bento Projects Showcase**: Visual previews for **Tilawa Daily**, **WizzyAI**, **PropaBridge**, and **AgriSense IoT**.
- 📄 **Downloadable CV**: Generated PDF version integrated directly in the Hero section.
- 🔝 **ScrollToTop Navigation**: Quick floating return-to-top button.
- 📬 **Interactive Contact Flow**: Form with instant mailto pre-filling and quick copy-to-clipboard email action.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Motion | Framer Motion |
| Icons | Lucide React + React Icons |
| SEO | JSON-LD Schema + Next Metadata |
| Deployment | Vercel |

---

## 📁 Project Structure

```
jungudo-portfolio/
├── public/
│   ├── documents/
│   │   └── Jungudo-Muhammad-Tukur-CV.pdf   ← Generated CV PDF
│   ├── images/
│   │   ├── profile/                        ← Profile headshot
│   │   └── projects/                       ← Project screenshots (Tilawa Daily, etc.)
├── src/
│   ├── app/
│   │   ├── globals.css                     ← Bento dark tokens & utility classes
│   │   ├── layout.tsx                      ← JSON-LD schema & Metadata
│   │   ├── page.tsx                        ← Main page assembly
│   │   ├── loading.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── Navbar.tsx                      ← Glassmorphic floating pill navigation
│   │   ├── Hero.tsx                        ← Bento Spotlight Hero & cycling title
│   │   ├── About.tsx                       ← Bio, Education (UoPeople & GSU), Achievements
│   │   ├── Skills.tsx                      ← Capabilities bento matrix with category counts
│   │   ├── Projects.tsx                    ← Filterable project showcase with thumbnails
│   │   ├── Experience.tsx                  ← Executive experience cards (PropaBridge, WizzyAI, etc.)
│   │   ├── BuildingInPublic.tsx            ← Active R&D domains & impact chain
│   │   ├── Contact.tsx                     ← Contact form & copy-to-clipboard email action
│   │   ├── ScrollToTop.tsx                 ← Floating return to top button
│   │   ├── FloatingBubbles.tsx             ← Background ambient canvas particles
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── profile.ts                      ← Bio & journey details
│   │   ├── projects.ts                     ← Project details & links
│   │   ├── skills.ts                       ← Capabilities dataset
│   │   ├── experience.ts                   ← Work experience dataset
│   │   ├── education.ts                    ← Degrees & coursework
│   │   ├── achievements.ts                 ← Accelerator & project milestones
│   │   └── social.ts                       ← Contact & social links
│   └── lib/
│       ├── siteConfig.ts                   ← Global site metadata helper
│       └── utils.ts                        ← Tailwind helper
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/hafeezmt/jungudo-portfolio.git

# Navigate into directory
cd jungudo-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 👤 Author

**Jungudo Muhammad Tukur**
- Email: [jungudo.muhammad@gmail.com](mailto:jungudo.muhammad@gmail.com)
- GitHub: [@hafeezmt](https://github.com/hafeezmt)
- LinkedIn: [jungudo-tukur](https://www.linkedin.com/in/jungudo-tukur)
- Twitter/X: [@Jungudotukur](https://x.com/Jungudotukur)

---

© 2026 Jungudo Muhammad Tukur. All rights reserved.

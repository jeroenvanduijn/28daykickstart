# CrossFit Leiden - 28-Day Kickstart Landing Page

A high-converting, bilingual (English/Dutch) landing page for CrossFit Leiden's 28-day fitness kickstart program. Built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- **Bilingual Support**: Full English and Dutch translations with seamless language switching
- **Mobile-First Design**: Responsive design optimized for all devices
- **Conversion-Optimized**: Following proven landing page best practices for fitness businesses
- **Brand-Compliant**: Adheres to CrossFit Leiden's brand guidelines (colors, typography, tone)
- **SEO Ready**: Optimized metadata and semantic HTML
- **Accessible**: WCAG AA compliant with proper focus states and keyboard navigation

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
├── app/
│   ├── [locale]/          # Locale-specific pages
│   │   ├── layout.tsx     # Locale layout with i18n provider
│   │   └── page.tsx       # Main landing page
│   ├── globals.css        # Global styles & brand colors
│   └── layout.tsx         # Root layout
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   └── LanguageSwitcher.tsx
│   └── sections/          # Landing page sections
│       ├── Hero.tsx
│       ├── Benefits.tsx
│       ├── HowItWorks.tsx
│       ├── Testimonials.tsx
│       ├── CTA.tsx
│       ├── FAQ.tsx
│       └── Footer.tsx
├── messages/              # Translation files
│   ├── en.json
│   └── nl.json
├── i18n.ts               # i18n configuration
└── middleware.ts          # Language detection middleware
```

## Landing Page Sections

1. **Hero**: Eye-catching headline with primary CTA
2. **Benefits**: 5 key benefits with icons
3. **How It Works**: 3-step process explanation
4. **Testimonials**: Social proof from real members
5. **CTA**: Booking form for No-Sweat Intro
6. **FAQ**: Common questions and answers
7. **Footer**: Contact info and language switcher

## Brand Colors

- **Primary (Cinnabar)**: `#EF4C37` - Main CTA and highlights
- **Secondary (Jonquil)**: `#F7CB15` - Secondary highlights
- **Accent 1 (Verdigris)**: `#0CBABA` - Dividers and icons
- **Accent 2 (Chinese Violet)**: `#7B6D8D` - Subtle accents
- **Foreground**: `#000000` - Text
- **Background**: `#FFFFFF` - Base

## Customization

### Update Translations

Edit `messages/en.json` and `messages/nl.json` to update copy.

### Modify Brand Colors

Update CSS variables in `app/globals.css`:

```css
:root {
  --cinnabar: #EF4C37;
  --jonquil: #F7CB15;
  /* ... */
}
```

### Integrate Booking System

Replace the placeholder form submission in `components/sections/CTA.tsx` with your actual booking system (Calendly, GymLeadMachine, etc.).

### Add Photos & Videos

To complete your landing page with visual content:

**📸 Quick Start (15 minutes):**
See `QUICK_START_MEDIA.md` for step-by-step instructions to add:
- Hero background image
- Member story video
- Testimonial photos

**📚 Full Documentation:**
See `FOTO_VIDEO_INSTRUCTIES.md` for comprehensive guide including:
- All locations where media is needed
- Multiple implementation options
- Best practices and tips
- Troubleshooting

**Folder Structure:**
```
public/
├── images/
│   ├── hero-background.jpg       # Main hero image
│   └── testimonials/             # Member photos
└── videos/                       # Optional local videos
```

## Deployment

This project can be deployed to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **Any Node.js host**: Use `npm run build && npm start`

## Performance

- Lighthouse Score: 95+
- Mobile-optimized images
- Lazy-loaded components
- Fast initial load with static generation

## License

© 2025 CrossFit Leiden. All rights reserved.

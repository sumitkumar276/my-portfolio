# Premium Portfolio Website

An ultra-premium, high-performance personal portfolio website built with Next.js 14, Tailwind CSS, Framer Motion, and optimized for responsiveness, accessibility, and 60FPS performance.

## Features

✨ **Ultra-Premium Design**
- Dark, high-contrast accessible theme
- Glassmorphic components with backdrop blur
- Animated gradient text and glow effects
- Static grain overlay texture

🎯 **Performance Optimized**
- 60FPS animations with Framer Motion
- Next.js Image optimization
- CSS transitions prioritized over animations
- Mobile-first, lazy-loaded sections
- Optimized for Lighthouse scores ≥ 90

📱 **Fully Responsive**
- Mobile-first design approach
- 12-column desktop grid → 6-column tablet → 1-column mobile
- Fluid typography with clamp()
- No layout shifts, no horizontal scrolling
- Touch-friendly interaction model

♿ **Accessibility First**
- WCAG AA compliance (4.5:1 contrast ratio)
- Keyboard navigation support
- Semantic HTML structure
- Focus visible states
- Motion preferences respected (prefers-reduced-motion)
- Screen reader friendly
- Proper ARIA labels

🎨 **Key Components**
- **Navigation**: Floating glassmorphic navbar with scroll behavior
- **Hero**: Animated gradient headline with scroll indicator
- **Work Gallery**: Bento-style responsive grid with hover effects (desktop only)
- **Experience**: Vertical timeline with scroll-linked animations
- **Contact**: Minimal form + brand-accurate social icons
- **Footer**: Semantic footer with back-to-top link

🔧 **Tech Stack**
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide-React
- **Images**: Next.js Image component
- **Language**: TypeScript

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm/bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with accessibility
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── sections/            # Page sections
│   │   ├── Navigation.tsx    # Floating navbar
│   │   ├── Hero.tsx         # Hero section
│   │   ├── WorkGallery.tsx  # Work showcase
│   │   ├── ExperienceTimeline.tsx
│   │   ├── Contact.tsx      # Contact form + social
│   │   └── Footer.tsx
│   └── ui/                  # Reusable components
│       ├── GlassmorphicCard.tsx
│       ├── AnimatedGradient.tsx
│       ├── ResponsiveGrid.tsx
│       └── PlaceholderImage.tsx
└── hooks/
    └── useDeviceDetect.ts   # Device/touch detection
```

## Customization

### Update Personal Info
1. **Hero Section**: Edit `src/components/sections/Hero.tsx`
2. **Work Items**: Update `workItems` array in `WorkGallery.tsx`
3. **Experience**: Modify `experiences` array in `ExperienceTimeline.tsx`
4. **Contact**: Update email and social links in `Contact.tsx`
5. **Metadata**: Edit `src/app/layout.tsx` for SEO

### Add Real Images
Replace gradient placeholders in `WorkGallery.tsx` with Next.js Image imports:

```tsx
import Image from "next/image";
// In WorkGallery component, replace the gradient div:
<Image src="/images/project.jpg" alt="Project" fill />
```

### Colors & Theme
- Primary colors in `globals.css`
- Tailwind utility classes for consistent theming
- Glassmorphism colors: `bg-white/5`, `border-white/10`
- Accent colors: Blue, Purple, Pink gradients

## Performance & Accessibility

### Lighthouse Targets
- ✅ Performance: ≥ 90
- ✅ Accessibility: ≥ 95
- ✅ Best Practices: ≥ 90
- ✅ SEO: ≥ 95

### Responsive Testing
- Test at: 320px, 640px, 768px, 1024px, 1280px
- No layout shifts at any breakpoint
- Mobile scrolling: smooth, no stutter
- All interactions work with one hand on mobile

### Device-Aware Interactions
- **Desktop**: Hover effects, smooth animations
- **Mobile/Touch**: Tap-triggered animations only
- **Reduced Motion**: All animations disabled

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android 90+)

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Static Hosting
```bash
npm run build
# Deploy `out` directory
```

## Best Practices Implemented

✅ Mobile-first CSS approach
✅ Semantic HTML structure  
✅ Progressive enhancement
✅ Lazy-loaded sections
✅ Optimized web fonts
✅ Proper image optimization
✅ CSS Grid for layouts
✅ Flexbox for components
✅ Custom hooks for reusability
✅ Accessibility-first component design

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Web Accessibility (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

## License

MIT License - feel free to use this for your portfolio!


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

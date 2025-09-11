# Kaue Delazzeri - Portfolio

A modern, multilingual portfolio website built with Next.js 13+, showcasing product management projects, technical articles, and professional experience.

## 🚀 Features

- **Multilingual Support**: English and Portuguese with intelligent fallback system
- **Dark/Light Mode**: Theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Project Showcase**: Detailed case studies with technical documentation
- **Article System**: MDX-based content management for technical articles
- **Performance Optimized**: Next.js App Router with static generation
- **SEO Friendly**: Comprehensive metadata and structured data

## 🛠 Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX for articles and project documentation
- **Internationalization**: Custom i18n system with cookie-based locale storage
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel with custom domain
- **Analytics**: PostHog for user behavior tracking

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── projects/         # Projects section
│   │   ├── page.tsx      # Projects listing
│   │   ├── [slug]/       # Dynamic project pages
│   │   ├── loading.tsx   # Loading UI
│   │   └── not-found.tsx # 404 page
│   ├── contact/          # Contact page
│   └── skills/           # Skills page
├── components/            # React components
│   ├── common/           # Reusable components
│   │   ├── theme-provider.tsx
│   │   ├── theme-switch.tsx
│   │   └── language-switch.tsx
│   ├── features/         # Feature-specific components
│   │   ├── projects-grid.tsx
│   │   └── skill-card.tsx
│   ├── layout/           # Layout components
│   │   └── Header.tsx
│   └── ui/              # UI components
├── content/              # Content management
│   ├── articles/         # Technical articles
│   │   ├── en/          # English articles
│   │   └── pt/          # Portuguese articles
│   └── projects/        # Project documentation
│       ├── en/          # English project content
│       └── pt/          # Portuguese project content
├── data/                 # JSON data files
│   └── projects.json    # Project metadata
├── lib/                 # Utilities and helpers
│   ├── articles.ts      # Article management
│   ├── projects.ts      # Project management
│   ├── project-content.ts # Multilingual content loader
│   ├── types.ts         # TypeScript definitions
│   └── utils.ts         # Common utilities
├── locales/             # Translation files
│   ├── en.json         # English translations
│   └── pt.json         # Portuguese translations
├── config/              # Configuration files
│   ├── metadata.ts     # SEO metadata
│   └── favicons.ts     # Favicon configuration
├── constants/           # App constants
│   └── site.ts         # Site configuration
└── context/            # React contexts
    └── i18n.tsx        # Internationalization context
```

## 📝 Content Management

### Projects

Projects are managed through a combination of JSON metadata and MDX content files:

1. **Metadata**: `src/data/projects.json`
   ```json
   {
     "projects": [
       {
         "slug": "project-slug",
         "title": "Project Title",
         "summary": "Brief description",
         "role": "Your role",
         "duration": "Time period",
         "context": "Project context",
         "challenge": "Main challenge",
         "decisions": ["Decision 1", "Decision 2"],
         "results": ["Result 1", "Result 2"],
         "stack": ["Tech 1", "Tech 2"],
         "image": "/images/projects/project-slug/icon.png",
         "repoLink": "GitHub URL",
         "featured": true
       }
     ]
   }
   ```

2. **Content Files**: `src/content/projects/{locale}/{slug}.md`
   - English: `src/content/projects/en/project-slug.md`
   - Portuguese: `src/content/projects/pt/project-slug.md`

### Articles

Articles are stored as MDX files with frontmatter:

```markdown
---
title: "Article Title"
subtitle: "Article Subtitle"
date: "2024-01-01"
author: "Kaue Delazzeri"
tags: ["tag1", "tag2"]
locale: "en"
translations:
  pt:
    title: "Título em Português"
    subtitle: "Subtítulo em Português"
---

# Article content in MDX format
```

### Images

Images are organized by type and project:

```
public/images/
├── projects/              # Project-related images
│   ├── project-slug/
│   │   ├── icon.png      # Project thumbnail (required)
│   │   └── *.png         # Additional project images
├── articles/             # Article-related images
│   └── article-slug/
│       └── *.png        # Article images
└── profile-photo.jpg     # Profile image
```

#### Image Guidelines

- **Project Icons**: 300x300px PNG or SVG
- **Article Images**: Optimized PNG/JPG
- **File Naming**: Use kebab-case (lowercase with hyphens)
- **Organization**: Group by project/article slug

### Translations

The project uses a custom i18n system with two layers:

1. **Interface Translations**: `src/locales/{locale}.json`
   ```json
   {
     "header": {
       "home": "Home",
       "projects": "Projects"
     }
   }
   ```

2. **Content Translations**: Handled through file structure
   - English content: `src/content/*/en/`
   - Portuguese content: `src/content/*/pt/`
   - Fallback: If content doesn't exist in selected language, falls back to English

#### Adding New Translations

1. **Interface Text**: Update `src/locales/en.json` and `src/locales/pt.json`
2. **Article Content**: Create parallel files in both language folders
3. **Project Content**: Add MDX files for both languages

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kauedelazzeri/Portifolio-ProductManager.git
   cd Portifolio-ProductManager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

## 📦 Deployment

The site is deployed on Vercel with automatic deployments from the main branch.

### Environment Variables

Create `.env.local` for local development:

```bash
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

### Custom Domain

The site is configured to run on `kauedelazzeri.com` with proper redirects and SEO setup.

## 🔧 Configuration

### Site Configuration

Update `src/constants/site.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Your Name",
  description: "Your description",
  domain: "yourdomain.com",
  url: "https://yourdomain.com",
  // ... other settings
}
```

### Theme Configuration

Customize colors and design tokens in `tailwind.config.js`.

## 📊 Analytics

The site uses PostHog for analytics. Configure in `src/components/Analytics.tsx`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- **Email**: contato@kauedelazzeri.com
- **LinkedIn**: [linkedin.com/in/kauedelazzeri](https://linkedin.com/in/kauedelazzeri)
- **GitHub**: [github.com/kauedelazzeri](https://github.com/kauedelazzeri)

---

**Note**: This portfolio showcases real projects and experience. All content is original and reflects actual work and achievements.

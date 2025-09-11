# Project Architecture - Portfolio

## 📁 Organized Structure

This project follows React/Next.js best practices with a clean, scalable architecture:

### 🎯 Main Directories

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects section
│   │   ├── page.tsx      # Projects listing
│   │   ├── [slug]/       # Dynamic project pages
│   │   ├── loading.tsx   # Loading UI
│   │   └── not-found.tsx # 404 page
│   ├── contact/          # Contact page
│   ├── skills/           # Skills page
│   └── globals.css       # Global styles
│
├── components/            # Components organized by function
│   ├── layout/           # Layout components
│   │   └── Header.tsx    # Navigation header
│   ├── features/         # Feature-specific components
│   │   ├── projects-grid.tsx
│   │   └── skill-card.tsx
│   ├── common/           # Reusable components
│   │   ├── theme-provider.tsx
│   │   ├── theme-switch.tsx
│   │   └── language-switch.tsx
│   ├── ui/               # Basic UI components
│   └── index.ts          # Central export file
│
├── content/              # Content management
│   ├── articles/         # Technical articles by language
│   │   ├── en/
│   │   └── pt/
│   └── projects/        # Project documentation by language
│       ├── en/
│       └── pt/
│
├── data/                 # Structured data
│   └── projects.json     # Project metadata database
│
├── lib/                  # Utilities and helpers
│   ├── types.ts          # TypeScript type definitions
│   ├── projects.ts       # Project management functions
│   ├── articles.ts       # Article management functions
│   ├── project-content.ts # Multilingual content loader
│   ├── utils.ts          # General utilities
│   └── index.ts          # Centralized exports
│
├── locales/              # Interface translations
│   ├── en.json           # English translations
│   └── pt.json           # Portuguese translations
│
├── context/              # React contexts
│   └── i18n.tsx          # Internationalization context
│
├── constants/            # Application constants
│   └── site.ts           # Site configuration
│
└── config/               # Configuration files
    ├── metadata.ts       # SEO metadata
    └── favicons.ts       # Icon configuration
```

## 🏗️ Implemented Patterns

### 1. **Clear Separation of Concerns**
- `components/layout/`: Structural components
- `components/features/`: Feature-specific components  
- `components/common/`: Reusable components across the app
- `components/ui/`: Basic interface components

### 2. **Typed Data Management**
- Centralized TypeScript types in `lib/types.ts`
- Domain-specific functions (`projects.ts`, `articles.ts`, `project-content.ts`)
- Compile-time type validation

### 3. **Multilingual Content System**
- File-based content organization by locale
- Intelligent fallback system (English as fallback)
- Separate translation layers for UI and content

### 4. **Centralized Configuration**
- Site constants in `constants/site.ts`
- Organized SEO metadata
- Optimized build configurations

### 5. **Clean Import Structure**
```typescript
// ✅ Well organized
import { Project, Article } from '@/lib/types';
import { ProjectsGrid, Header } from '@/components';
import { SITE_CONFIG } from '@/constants/site';

// ❌ Avoided
import { Project } from '../../../lib/types';
import ProjectsGrid from '../../../components/projects-grid';
```

## 🔄 How to Expand

### Adding New Projects
1. Edit `src/data/projects.json` with project metadata
2. Add project images to `public/images/projects/project-slug/`
3. Create content files: `src/content/projects/en/project-slug.md` and `src/content/projects/pt/project-slug.md`
4. The system will automatically load and route the project

### Adding New Articles
1. Create `.md` file in `src/content/articles/[lang]/article-slug.md`
2. Use frontmatter for metadata
3. Add images to `public/images/articles/article-slug/`
4. Update article management functions if needed

### Adding New Components
1. Determine category: `layout`, `features`, `common`, or `ui`
2. Create component in appropriate folder
3. Export in `components/index.ts`

### Adding New Translations
1. Update interface translations in `src/locales/[locale].json`
2. Create content files in both languages
3. Use translation context in components: `const { t } = useTranslation();`

## 🌐 Internationalization Architecture

### Two-Layer Translation System

1. **Interface Layer**: Button texts, navigation, labels
   - Files: `src/locales/{locale}.json`
   - Usage: `t('header.home')`

2. **Content Layer**: Articles, project descriptions
   - Files: `src/content/*/{locale}/`
   - Intelligent fallback to English if content missing

### Locale Management
- Cookie-based locale storage
- URL-agnostic (single domain for both languages)
- Server-side locale detection
- Client-side locale switching

## 🚀 Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
npm run type-check # TypeScript validation
```

## 📦 Technologies

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Complete type coverage
- **Content**: MDX for articles and documentation
- **Internationalization**: Custom i18n system
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel with custom domain
- **Analytics**: PostHog for user behavior tracking

## 🎯 Benefits of This Architecture

1. **Maintainability**: Organized code, easy to find and modify
2. **Scalability**: Structure ready for growth and new features
3. **Developer Experience**: Clean imports and excellent autocomplete
4. **Performance**: Optimized builds and automatic code splitting
5. **SEO**: Well-structured metadata and semantic HTML
6. **Accessibility**: Semantic components and proper ARIA labels
7. **Internationalization**: Seamless multilingual support
8. **Content Management**: Easy to add and update content

export const SITE_CONFIG = {
  name: "Kaue Delazzeri",
  description: "Product Manager with 4 years of experience in electric mobility, platform architecture, and online payments — focused on growth and data-driven strategy.",
  domain: "kauedelazzeri.com",
  url: "https://kauedelazzeri.com",
  author: "Kaue Delazzeri",
  email: "contato@kauedelazzeri.com",
  social: {
    github: "https://github.com/kauedelazzeri",
    linkedin: "https://linkedin.com/in/kauedelazzeri",
    twitter: "https://twitter.com/kauedelazzeri"
  }
} as const;

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Articles", href: "/#articles" },
  { name: "Contact", href: "/#contact" },
] as const;

export const SUPPORTED_LOCALES = ['en', 'pt'] as const;
export const DEFAULT_LOCALE = 'en' as const;

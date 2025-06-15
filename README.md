# Kauê Delazzeri - Product Manager Portfolio

Welcome! This is my personal portfolio website where I showcase who I am as a **Product Manager**, my **experience** across electric mobility, platform architecture, and digital payments, and the way I approach **data-driven product decisions**.

Here you’ll find a selection of my work, side projects, and the tools and skills I apply in real-world scenarios — all with a clean and minimal design.

🔗 Access it live at: [https://kauedelazzeri.com](https://kauedelazzeri.com)

---

## 🚀 Getting Started (For Developers)

To run the project locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Create a `.env.local` file based on `.env.example` and add your PostHog key:

```bash
cp my-portfolio/.env.example my-portfolio/.env.local
# then edit my-portfolio/.env.local with:
# NEXT_PUBLIC_POSTHOG_KEY=<your-key>
# NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

### PostHog event mapping

| Event name | Trigger | Properties |
|------------|---------|------------|
| `page_loaded` | Any page load | `path`, `language`, `userAgent` |
| `section_view` | Section becomes visible or projects link clicked | `section` |
| `contact_button` | Hero or menu contact button clicked | - |
| `contact_email` | Email link clicked | - |
| `contact_linkedin` | LinkedIn link clicked | - |
| `project_card_click` | Project card link clicked | `slug` |
| `skill_expand` | Skill card expanded | `title` |


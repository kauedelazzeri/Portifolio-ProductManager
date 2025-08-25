import { cookies } from 'next/headers';
import { getAllArticles } from '@/lib/articles';
import { ArticlesGrid } from '@/components/articles-grid';

export default async function ArticlesPage() {
  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'en';
  const articles = await getAllArticles(lang);

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <ArticlesGrid articles={articles} />
    </div>
  );
}

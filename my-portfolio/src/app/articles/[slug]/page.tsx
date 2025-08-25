import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import { MarkdownContent } from '@/components/markdown-content';
import Image from 'next/image';
import pt from '@/locales/pt.json';
import en from '@/locales/en.json';

export async function generateStaticParams() {
  const articles = await getAllArticles('en');
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'en';
  const translations: Record<string, any> = lang === 'pt' ? pt : en;
  const t = (key: string) => {
    const parts = key.split('.');
    let current: any = translations;
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        return key;
      }
    }
    return typeof current === 'string' ? current : key;
  };

  const article = await getArticleBySlug(params.slug, lang);
  if (!article) {
    notFound();
  }

  return (
    <article className="animate-fade-in max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{article.title}</h1>
        <p className="text-lg text-muted-foreground mb-4">{article.subtitle}</p>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>{t('article.date')}: {article.date}</span>
          <span>{t('article.author')}: {article.author}</span>
        </div>
      </header>

      {article.coverImage && (
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
          <Image
            src={`/images/articles/${article.slug}/${article.coverImage}`}
            alt={article.title}
            width={1200}
            height={675}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="prose dark:prose-invert max-w-none">
        <MarkdownContent content={article.content} />
      </div>
    </article>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/types";
import { useTranslation } from "@/context/i18n";

interface ArticlesGridProps {
  articles: Article[];
}

export function ArticlesGrid({ articles }: ArticlesGridProps) {
  const { t } = useTranslation();
  return (
    <>
      <div className="animate-fade-in space-y-8 mb-16">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{t('articlesGrid.title')}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {t('articlesGrid.description')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group block h-full"
          >
            <div className="relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:border-foreground/50 hover:shadow-lg">
              <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                {article.coverImage ? (
                  <Image
                    src={`/images/articles/${article.slug}/${article.coverImage}`}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-muted to-muted/80">
                    <span className="text-sm text-muted-foreground">Article preview</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="mt-2 text-muted-foreground line-clamp-2">
                  {article.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

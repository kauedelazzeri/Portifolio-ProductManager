"use client";
import Link from "next/link";
import { useTranslation } from "@/context/i18n";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="animate-fade-in flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-4xl font-bold mb-4">{t('notFound.title')}</h1>
      <p className="text-muted-foreground mb-8">
        {t('notFound.description')}
      </p>
      <Link
        href="/projects"
        className="inline-flex items-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
      >
        {t('notFound.viewAll')}
      </Link>
    </div>
  );
}

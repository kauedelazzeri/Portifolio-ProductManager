"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/i18n";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-16 pb-8">
      {/* Hero Section */}
      <section className="flex flex-col gap-8 pt-8 md:flex-row md:items-center md:gap-12">
        <div className="relative aspect-square w-48 flex-shrink-0 overflow-hidden rounded-full border-2 border-border md:w-64">
          <Image
            src="/images/profile-photo.jpg"
            alt="Kaue Delazzeri"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold sm:text-5xl">
              {t('home.heroTitle')}
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-muted-foreground">
              {t('home.heroSubtitle')}
            </p>
          </div>

          <ul className="space-y-2 text-muted-foreground">
            {Array.isArray(t('home.heroBullets')) && (t('home.heroBullets') as string[]).map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-foreground">•</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <Link
              href="/projects"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              data-cta="view-projects"
            >
              {t('home.viewProjects')}
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              data-cta="contact-me"
            >
              {t('home.contactMe')}
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section>
        <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{t('home.projects')}</h2>
        <Link 
          href="/projects" 
          className="text-sm text-muted-foreground hover:text-foreground"
          data-cta="view-all-projects"
        >
            {t('home.viewAllProjects')}
        </Link>
        </div>
        
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link 
            href="/projects/movie-genre-prediction" 
            className="group relative overflow-hidden rounded-lg border p-6 transition-colors hover:border-foreground"
            data-project-slug="movie-genre-prediction"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-muted mb-4">
              <Image 
                src="/images/articles/movie-genre-prediction/icon.png" 
                alt="Movie Genre Prediction" 
                fill 
                className="object-cover" 
              />
            </div>
            <h3 className="font-semibold text-lg text-center mt-2">{t('home.movieGenreProject')}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t('home.movieGenreDescription')}</p>
          </Link>

          <Link 
            href="/projects/wind-turbine-fault-prediction" 
            className="group relative overflow-hidden rounded-lg border p-6 transition-colors hover:border-foreground"
            data-project-slug="wind-turbine-fault-prediction"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-muted mb-4">
              <Image 
                src="/images/articles/wind-turbine/icon.png" 
                alt="Wind Turbine Fault Prediction" 
                fill 
                className="object-cover" 
              />
            </div>
            <h3 className="font-semibold text-lg text-center mt-2">{t('home.windTurbineProject')}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t('home.windTurbineDescription')}</p>
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-16">
        <h2 className="mb-8 text-2xl font-semibold">{t('home.technicalSkills')}</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Hard Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Hard Skills</h3>
            <div className="space-y-6">
              <div className="rounded-lg border p-4" data-skill="data-analytics">
                <h4 className="font-medium">{t('home.dataAnalytics')}</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {Array.isArray(t('home.dataAnalyticsList')) && (t('home.dataAnalyticsList') as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border p-4" data-skill="infrastructure">
                <h4 className="font-medium">{t('home.infrastructure')}</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {Array.isArray(t('home.infrastructureList')) && (t('home.infrastructureList') as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border p-4" data-skill="ai-automation">
                <h4 className="font-medium">{t('home.aiAutomation')}</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {Array.isArray(t('home.aiAutomationList')) && (t('home.aiAutomationList') as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border p-4" data-skill="product-tools">
                <h4 className="font-medium">{t('home.productTools')}</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {Array.isArray(t('home.productToolsList')) && (t('home.productToolsList') as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Soft Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Soft Skills</h3>
            <div className="space-y-6">
              <div className="rounded-lg border p-4" data-skill="leadership">
                <h4 className="font-medium">{t('home.leadership')}</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {Array.isArray(t('home.leadershipList')) && (t('home.leadershipList') as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border p-4" data-skill="strategic-thinking">
                <h4 className="font-medium">{t('home.strategicThinking')}</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {Array.isArray(t('home.strategicThinkingList')) && (t('home.strategicThinkingList') as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border p-4" data-skill="agile-execution">
                <h4 className="font-medium">{t('home.agileExecution')}</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {Array.isArray(t('home.agileExecutionList')) && (t('home.agileExecutionList') as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="scroll-mt-16">
        <h2 className="mb-8 text-2xl font-semibold">{t('home.articlesResearch')}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/projects/wind-turbine-fault-prediction" className="group rounded-lg border p-6 transition-colors hover:border-foreground">
            <h3 className="font-semibold">{t('home.thesisResearch')}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t('home.thesisResearchSummary')}</p>
          </Link>

          <div className="group rounded-lg border p-6 transition-colors hover:border-foreground">
            <h3 className="font-semibold">{t('home.technicalArticlesTitle')}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t('home.technicalArticlesDescription')}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16 rounded-lg border bg-card p-8 text-card-foreground">
        <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-semibold">{t('home.letsWork')}</h2>
        <p className="max-w-[600px] text-muted-foreground">
            {t('home.lookingFor')}
        </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:kauedelazzeri@gmail.com"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              data-cta="contact-email"
            >
              kauedelazzeri@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/kauedelazzeri/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              data-cta="contact-linkedin"
            >
              {t('home.connectLinkedIn')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

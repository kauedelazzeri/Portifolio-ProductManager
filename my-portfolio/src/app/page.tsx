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
            {(t('home.heroBullets') as string[]).map((item) => (
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
            >
              {t('home.viewProjects')}
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {t('home.contactMe')}
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section>
        <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{t('home.featured')}</h2>
        <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
            {t('home.viewAll')}
        </Link>
        </div>
        
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link href="/projects/mvp-social-betting" className="group relative overflow-hidden rounded-lg border p-6 transition-colors hover:border-foreground">
            <div className="aspect-video w-full overflow-hidden rounded-md bg-muted mb-4">
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                Project screenshot
              </div>
            </div>
            <h3 className="font-semibold">{t('home.project1Title')}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t('home.project1Desc')}</p>
          </Link>

          <Link href="/projects/moments-app" className="group relative overflow-hidden rounded-lg border p-6 transition-colors hover:border-foreground">
            <div className="aspect-video w-full overflow-hidden rounded-md bg-muted mb-4">
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                Project screenshot
              </div>
            </div>
            <h3 className="font-semibold">{t('home.project2Title')}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t('home.project2Desc')}</p>
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-16">
        <h2 className="mb-8 text-2xl font-semibold">{t('home.technicalExpertise')}</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Hard Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">{t('home.hardSkills')}</h3>
            
            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h4 className="font-medium">{t('home.dataAnalytics')}</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {(t('home.dataAnalyticsList') as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-medium">{t('home.infrastructure')}</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {(t('home.infrastructureList') as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-medium">{t('home.aiAutomation')}</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {(t('home.aiAutomationList') as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-medium">{t('home.productTools')}</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {(t('home.productToolsList') as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">{t('home.softSkills')}</h3>
            
            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h4 className="font-medium">{t('home.leadership')}</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {(t('home.leadershipList') as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-medium">{t('home.strategicThinking')}</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {(t('home.strategicThinkingList') as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-medium">{t('home.agileExecution')}</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {(t('home.agileExecutionList') as string[]).map((item) => (
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
          <div className="group rounded-lg border p-6 transition-colors hover:border-foreground">
            <h3 className="font-semibold">{t('home.thesisResearch')}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t('home.comingSoon')}</p>
          </div>

          <div className="group rounded-lg border p-6 transition-colors hover:border-foreground">
            <h3 className="font-semibold">{t('home.technicalArticles')}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t('home.comingSoon')}</p>
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
            >
              kauedelazzeri@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/kauedelazzeri/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {t('home.connectLinkedIn')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

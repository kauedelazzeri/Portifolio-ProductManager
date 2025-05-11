import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
              Product Manager with expertise in electric mobility and digital platforms
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-muted-foreground">
              Building data-powered platforms for scalable impact.
            </p>
          </div>

          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="text-foreground">•</span>
              4+ years of experience as Product Manager
            </li>
            <li className="flex items-center gap-2">
              <span className="text-foreground">•</span>
              Specialized in electric mobility and digital platforms
            </li>
            <li className="flex items-center gap-2">
              <span className="text-foreground">•</span>
              Focused on growth, data-driven decisions, and strategic planning
            </li>
          </ul>

          <div className="flex gap-4">
            <Link
              href="/projects"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
            View all projects →
          </Link>
        </div>
        
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link href="/projects/mvp-social-betting" className="group relative overflow-hidden rounded-lg border p-6 transition-colors hover:border-foreground">
            <div className="aspect-video w-full overflow-hidden rounded-md bg-muted mb-4">
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                Project screenshot
              </div>
            </div>
            <h3 className="font-semibold">MVP Social Betting Platform</h3>
            <p className="mt-2 text-sm text-muted-foreground">A social betting platform focused on user engagement and retention</p>
          </Link>

          <Link href="/projects/moments-app" className="group relative overflow-hidden rounded-lg border p-6 transition-colors hover:border-foreground">
            <div className="aspect-video w-full overflow-hidden rounded-md bg-muted mb-4">
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                Project screenshot
              </div>
            </div>
            <h3 className="font-semibold">Moments App</h3>
            <p className="mt-2 text-sm text-muted-foreground">Social event discovery and matching platform</p>
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-16">
        <h2 className="mb-8 text-2xl font-semibold">Technical Expertise</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Hard Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">🔧 Hard Skills</h3>
            
            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h4 className="font-medium">📊 Data & Analytics</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>Data Visualization (AWS QuickSight)</li>
                  <li>A/B Testing & Experimentation</li>
                  <li>SQL Optimization & Query Performance</li>
                  <li>Event Tracking Strategy (PostHog, Firebase)</li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-medium">☁️ Infrastructure</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>CI/CD Pipelines (GitHub Actions, Vercel)</li>
                  <li>API Management (REST, WebSockets)</li>
                  <li>Monitoring & Observability (CloudWatch)</li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-medium">🧠 AI & Automation</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>Prompt Engineering</li>
                  <li>Applied Machine Learning (Scikit-learn, TensorFlow, SVM)</li>
                  <li>Automation with Python Scripts</li>
                  <li>LLM-integrated Prototypes</li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-medium">🧩 Product Tooling & Frameworks</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>Roadmap Planning (Jira Advanced Roadmaps, Productboard)</li>
                  <li>OKRs & KPIs Structuring</li>
                  <li>UX Wireframing (Figma, Miro)</li>
                  <li>Discovery Frameworks (Opportunity Tree, Double Diamond)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">💬 Soft Skills</h3>
            
            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h4 className="font-medium">🤝 Leadership & Communication</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>Cross-functional Team Alignment</li>
                  <li>Feedback & Coaching</li>
                  <li>Stakeholder Expectation Management</li>
                  <li>Storytelling with Data</li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-medium">🧭 Strategic Product Thinking</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>Market & User Research</li>
                  <li>Business Model Validation</li>
                  <li>Experimentation Culture Building</li>
                  <li>Trade-off Decision Making</li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-medium">⚙️ Agile & Execution</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>Sprint Planning & Prioritization</li>
                  <li>Release Management</li>
                  <li>Technical Scoping with Devs</li>
                  <li>Conflict Resolution & Unblocking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="scroll-mt-16">
        <h2 className="mb-8 text-2xl font-semibold">Articles & Research</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="group rounded-lg border p-6 transition-colors hover:border-foreground">
            <h3 className="font-semibold">Thesis Research</h3>
            <p className="mt-2 text-sm text-muted-foreground">Coming soon...</p>
          </div>

          <div className="group rounded-lg border p-6 transition-colors hover:border-foreground">
            <h3 className="font-semibold">Technical Articles</h3>
            <p className="mt-2 text-sm text-muted-foreground">Coming soon...</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16 rounded-lg border bg-card p-8 text-card-foreground">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-semibold">Let's Work Together</h2>
          <p className="max-w-[600px] text-muted-foreground">
            Looking for a Product Manager who combines technical expertise with strategic vision?
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
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

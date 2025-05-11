import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <section className="flex flex-col gap-4 pt-8">
        <h1 className="text-3xl font-bold sm:text-5xl">
          Product Manager with expertise in electric mobility and digital platforms
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Building data-powered platforms for scalable impact. 4 years of experience in electric mobility, platform architecture, and online payments — focused on growth and data-driven strategy.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-8 text-2xl font-semibold">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Project placeholders - will be replaced with actual data */}
          <div className="group rounded-lg border p-6 transition-colors hover:border-foreground">
            <h3 className="font-semibold">MVP Social Betting Platform</h3>
            <p className="mt-2 text-sm text-muted-foreground">Coming soon...</p>
          </div>
          <div className="group rounded-lg border p-6 transition-colors hover:border-foreground">
            <h3 className="font-semibold">Moments App</h3>
            <p className="mt-2 text-sm text-muted-foreground">Coming soon...</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-8 text-2xl font-semibold">Technical Expertise</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold">Data & Analytics</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              SQL, PostgreSQL, AWS QuickSight, Firebase, PostHog, Mixpanel, Google Analytics
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold">Infrastructure</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              AWS (Lambda, EC2, API Gateway, DynamoDB), GCP, Microservices, Serverless
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold">Product Management</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Product Discovery, Strategic Planning, Agile/Scrum, Stakeholder Management
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

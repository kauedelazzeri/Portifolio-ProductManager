export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 text-muted-foreground">
          A collection of my work in electric mobility, platform architecture, and digital payments.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Projects will be dynamically loaded from data/cases.json */}
        <article className="group rounded-lg border p-6 transition-colors hover:border-foreground">
          <h2 className="font-semibold">MVP Social Betting Platform</h2>
          <p className="mt-2 text-sm text-muted-foreground">Coming soon...</p>
        </article>

        <article className="group rounded-lg border p-6 transition-colors hover:border-foreground">
          <h2 className="font-semibold">Moments App</h2>
          <p className="mt-2 text-sm text-muted-foreground">Coming soon...</p>
        </article>

        <article className="group rounded-lg border p-6 transition-colors hover:border-foreground">
          <h2 className="font-semibold">EV Charging Station Management</h2>
          <p className="mt-2 text-sm text-muted-foreground">Coming soon...</p>
        </article>
      </div>
    </div>
  );
}

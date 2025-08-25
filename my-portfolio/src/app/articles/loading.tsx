export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="space-y-8 mb-16">
        <div>
          <div className="h-12 w-48 bg-muted animate-pulse rounded-lg mb-4" />
          <div className="h-6 w-full max-w-2xl bg-muted animate-pulse rounded-lg" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border bg-card overflow-hidden">
            <div className="aspect-[16/9] w-full bg-muted animate-pulse" />
            <div className="p-6 space-y-4">
              <div className="h-6 w-3/4 bg-muted animate-pulse rounded-lg" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-muted animate-pulse rounded-lg" />
                <div className="h-4 w-2/3 bg-muted animate-pulse rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

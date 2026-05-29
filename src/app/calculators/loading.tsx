export default function Loading() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10">
        <div className="h-8 w-64 rounded-lg bg-secondary animate-pulse mb-3" />
        <div className="h-4 w-96 rounded bg-secondary animate-pulse" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-5 animate-pulse">
            <div className="h-4 w-3/4 rounded bg-secondary mb-2" />
            <div className="h-3 w-full rounded bg-secondary/60 mb-1" />
            <div className="h-3 w-2/3 rounded bg-secondary/60" />
          </div>
        ))}
      </div>
    </div>
  );
}

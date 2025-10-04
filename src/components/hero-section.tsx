export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Latest Updates
            </span>
          </div>

          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight text-balance mb-6 text-foreground">
            Stay Connected with{" "}
            <span className="text-primary">DCCP Baguio</span>
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Discover the latest achievements, important announcements, and
            upcoming events that make our school community thrive.
          </p>
        </div>
      </div>
    </section>
  );
}

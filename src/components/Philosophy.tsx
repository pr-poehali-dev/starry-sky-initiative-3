export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img
              src="/minimal-scandinavian-workspace-with-natural-light-.jpg"
              alt="Осознанный подход к питанию"
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                «Существует прямая связь между избыточным потреблением сахара и ухудшением самочувствия человека.»
              </p>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-widest text-sage">О проекте</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight text-balance">
              Осознанное отношение к питанию
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                В современном мире потребление сахара значительно возросло. Он содержится не только в сладостях,
                но и во многих повседневных продуктах — часто незаметно для нас.
              </p>
              <p>
                Цель этой работы — изучить влияние сахара на организм человека и проанализировать его воздействие
                на физическое и психологическое состояние. Понимание этих процессов помогает сделать осознанный выбор.
              </p>
            </div>
            <div className="pt-4">
              <a href="#features" className="inline-flex items-center gap-2 text-foreground group">
                <span className="border-b border-foreground pb-0.5">Ключевые факты</span>
                <span className="text-terracotta group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

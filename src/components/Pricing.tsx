import Icon from "@/components/ui/icon";

const stats = [
  {
    percent: "65%",
    label: "употребляют сладкое ежедневно",
    highlighted: false,
  },
  {
    percent: "80%",
    label: "испытывают усталость после еды",
    highlighted: true,
  },
  {
    percent: "75%",
    label: "трудно отказаться от сладкого",
    highlighted: false,
  },
  {
    percent: "45%",
    label: "не знают о скрытых источниках сахара",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-amber mb-4 block">Результаты анкетирования</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4 text-balance">
            22 участника, 16–17 лет
          </h2>
          <p className="text-muted-foreground text-lg">Опрос подтвердил гипотезу исследования.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 rounded-2xl border flex flex-col gap-4 ${
                stat.highlighted ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon name="BarChart2" size={20} className={stat.highlighted ? "text-primary-foreground/70" : "text-sage"} fallback="CircleAlert" />
                <span className={`text-sm uppercase tracking-widest ${stat.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  Участников
                </span>
              </div>
              <span className={`font-serif text-7xl tracking-tight leading-none ${stat.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {stat.percent}
              </span>
              <p className={`text-lg leading-snug ${stat.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

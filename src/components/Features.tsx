import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Zap",
    title: "Энергия и метаболизм",
    description: "После употребления сахара уровень глюкозы в крови повышается. Организм вырабатывает инсулин, который помогает клеткам усваивать глюкозу. При избытке возникает нагрузка на обмен веществ.",
  },
  {
    icon: "Brain",
    title: "Влияние на мозг",
    description: "Сахар влияет на работу мозга через дофаминовую систему. Частое употребление сладкого вызывает привыкание — со временем требуется всё больше для получения удовольствия.",
  },
  {
    icon: "HeartPulse",
    title: "Риски для здоровья",
    description: "Избыток сахара связан с риском ожирения, развитием диабета, ухудшением состояния кожи и быстрой утомляемостью. Важно контролировать его потребление каждый день.",
  },
  {
    icon: "Eye",
    title: "Скрытые источники",
    description: "Сахар содержится не только в сладостях. Он скрыт в соусах, хлебе, йогуртах, соках. 45% опрошенных не знают о скрытых источниках сахара в своём рационе.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Ключевые факты</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Что мы узнали о сахаре
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-sage/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors duration-500">
                <Icon name={feature.icon} size={24} className="text-sage" fallback="CircleAlert" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
